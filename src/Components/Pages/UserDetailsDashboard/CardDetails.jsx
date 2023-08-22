// @ts-nocheck
import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import { useNavigate } from "react-router-dom";
import GetAPI from "../../Apis/GetAPI";
import baseUrl from "../../Apis/BaseUrl";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import PostAPI from "../../Apis/PostApi";
import { error_toaster, success_toaster } from "../../../Toaster";
import Navbar from "../Home/Navbar";

export default function CardDetails() {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const { getData, reFetch } = GetAPI("users/getallcards");
  var bookingId = localStorage.getItem("bookingId");
  var couponId = localStorage.getItem("CouponId");
  const [pmId, setPmId] = useState(null);

  // This Function used to Payment with Existing Card
  const payWithExistingCard = async (pmId, bookingId, couponId) => {
    let existingRes = await PostAPI("users/makepaymentbysavedcard", {
      pmId: pmId,
      bookingId: bookingId,
      CouponId: couponId,
    });

    if (existingRes?.data?.ResponseCode === "1") {
      success_toaster(existingRes?.data?.ResponseMessage);
      navigate("/order_confirmed");
    } else {
      error_toaster(existingRes?.data?.errors);
    }
  };

  // This function used to Delete Card
  const deleteCard = async (pmId) => {
    let deleteRes = await PostAPI("users/deletecard", {
      pmkey: pmId,
    });
    if (deleteRes?.data?.ResponseCode === "1") {
      success_toaster(deleteRes?.data?.ResponseMessage);
      reFetch();
    } else {
      error_toaster(deleteRes?.data?.errors);
    }
  };
  return (
    <>
      <Navbar />
      <DashboardNavbar />
      <section className="bg-[#F4F5FA] min-h-[80vh]">
        <div className="w-[90%] lg:w-[85%] m-auto pt-6 pb-10 md:pt-10 lg:pt-12">
          <div className="flex justify-between items-center">
            <h2 className="text-antrakBlue text-base md:text-lg lg:text-2xl font-ubuntu font-semibold">
              My Saved Cards
            </h2>
            <button
              className="px-3 lg:px-14 py-3 lg:py-4 border border-dashed border-antrakBlue rounded text-center text-base lg:text-xl text-antrakBlue font-ubuntu font-semibold lg:mb-0 hover:bg-antrakBlue hover:text-white duration-300"
              onClick={() => {
                navigate("/add_new_card");
              }}
            >
              <span className="border-[3px] border-antrakBlue rounded-full  px-2 md:px-3 py-1 md:py-[6px] mr-3">
                +
              </span>
              Add New
            </button>
          </div>
          <div className="bg-white rounded-md py-4 md:py-10 mt-6">
            <div className=" rounded w-[90%] md:w-4/5 m-auto">
              {getData?.Response?.map((data, index) => (
                <div
                  className={`bg-[#F4F5FA] rounded relative p-4 md:p-8 mb-6 hover:border-2 hover:border-antrakLogin duration-100 ${
                    selectedCard === index && "border-2 border-antrakLogin"
                  }`}
                  onClick={() => {
                    setSelectedCard(index);
                    setPmId(data?.pmId);
                  }}
                >
                  {selectedCard === index && (
                    <div className="absolute top-0 right-0 bg-antrakBlue w-5 h-5 rounded-full">
                      <TiTick className="absolute top-[1px] right-[1px] text-antrakWhite text-lg" />
                    </div>
                  )}
                  <div className="md:flex gap-8 items-center">
                    <img
                      src={`${baseUrl}/${data?.image}`}
                      alt="mastercard"
                      className="w-[70px] h-[60px]"
                    />
                    <div className="mt-4 md:mt-0">
                      <h2 className="text-base md:text-lg lg:text-xl font-ubuntu font-semibold text-[#5F5C5C]">
                        {data?.pmId}
                      </h2>
                      <p className="text-lg font-ubuntu text-antrakBlue font-semibold my-2 md:my-0">
                        {data?.brand}
                      </p>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer underline text-right text-antrakLogin text-base lg:text-lg font-semibold"
                    onClick={(e) => {
                      deleteCard(data?.pmId);
                    }}
                  >
                    <h2>Delete</h2>
                  </div>
                </div>
              ))}
              <div>
                <div
                  className="flex justify-end"
                  onClick={(e) => {
                    payWithExistingCard(pmId, bookingId, couponId);
                  }}
                >
                  <button className="px-4 py-3 bg-antrakBlue border border-antrakBlue text-white my-5 font-ubuntu font-semibold hover:bg-transparent hover:text-antrakBlue duration-200">
                    Payment with existing Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

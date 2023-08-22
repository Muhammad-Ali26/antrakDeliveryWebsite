// @ts-nocheck
import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import {useNavigate } from "react-router-dom";
import { useState } from "react";
import PostAPI from "../../Apis/PostApi";
import { error_toaster, success_toaster } from "../../../Toaster";
import Navbar from "../Home/Navbar";

export default function AddNewCard() {
  const navigate = useNavigate();
  const [cardDetails, setCardDetails] = useState({
    cardNum: "",
    exp_month: "",
    exp_year: "",
    cvc: "",
  });
  console.log(
    "🚀 ~ file: AddNewCard.jsx:16 ~ AddNewCard ~ cardDetails:",
    cardDetails
  );

  const handleInputEvent = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };
  const addNewCard = async () => {
    let res = await PostAPI("users/addcard", {
      cardNum: cardDetails.cardNum,
      exp_month: cardDetails.exp_month,
      exp_year: cardDetails.exp_year,
      cvc: cardDetails.cvc,
    });
    console.log("🚀 ~ file: AddNewCard.jsx:27 ~ addNewCar ~ res:", res);
    if (res?.data?.ResponseCode === "1") {
      success_toaster(res?.data?.ResponseMessage);
      navigate("/card_details");
    } else {
      error_toaster(res?.data?.errors);
    }
  };

  return (
    <>
      <Navbar />
      <DashboardNavbar />
      <section className="bg-[#F4F5FA] min-h-[79.5vh]">
        <div className="w-[90%] lg:w-[85%] m-auto pt-6 pb-10 md:pt-10  lg:pt-16">
          <div className="bg-white rounded-md px-5 py-10 md:px-0 lg:py-20">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-base md:text-lg lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                Add Card Details
              </h2>

              <div className="mt-6 lg:mt-12">
                <div>
                  <input
                    type="number"
                    name="cardNum"
                    placeholder="Name on Card"
                    className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-white font-semibold"
                    onChange={handleInputEvent}
                    maxLength="20"
                  />
                </div>

                <div className="mt-6">
                  <input
                    type="number"
                    name="exp_month"
                    placeholder="Expiry of Month"
                    maxLength="10"
                    className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-white] font-semibold"
                    onChange={handleInputEvent}
                  />
                </div>

                <div className="mt-6 md:grid grid-cols-2 gap-6 ">
                  <input
                    type="number"
                    name="exp_year"
                    placeholder="Expiry of Year"
                    maxLength="5"
                    className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-white font-semibold mb-6 md:mb-0"
                    onChange={handleInputEvent}
                  />

                  <input
                    type="number"
                    name="cvc"
                    placeholder="CVV"
                    maxLength="20"
                    className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-white font-semibold"
                    onChange={handleInputEvent}
                  />
                </div>
                <div className="mt-10 lg:mt-20" onClick={addNewCard}>
                  <button className="bg-antrakBlue px-10 py-2  md:px-[70px] md:py-3 2xl:px-32 2xl:py-3  border rounded text-center text-base lg:text-2xl text-antrakLogin font-ubuntu font-semibold hover:bg-white hover:text-antrakBlue duration-300 w-full hover:border-antrakBlue">
                    Save
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

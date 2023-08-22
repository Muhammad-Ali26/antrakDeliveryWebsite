// @ts-nocheck
import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import { useNavigate } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import GetAPI from "../../Apis/GetAPI";
import PostAPI from "../../Apis/PostApi";
import { error_toaster, success_toaster } from "../../../Toaster";
import Navbar from "../Home/Navbar";
export default function SavedAddress() {
  const navigate = useNavigate();

  // This Function is used To Get Already Saved Address
  const { getData, reFetch } = GetAPI(
    `address/getbyuserid?id=${localStorage.getItem("UserId")}`
  );

  // This Function is used To Delete Saved Address
  const deleteAddress = async (addressId) => {
    let deleteRes = await PostAPI("address/delete", {
      addressId: addressId,
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
      \
      <Navbar />
      <DashboardNavbar />
      <section className="bg-[#F4F5FA] min-h-[80vh]">
        <div className="w-[90%] lg:w-[85%] m-auto pt-6 pb-10 md:pt-10 lg:pt-12">
          <div className="flex justify-between items-center">
            <h2 className="text-antrakBlue text-base md:text-lg lg:text-2xl font-ubuntu font-semibold">
              Saved Addresses
            </h2>
            <button
              className="px-3 lg:px-14 py-3 lg:py-4 border border-dashed border-antrakBlue rounded text-center text-base lg:text-xl text-antrakBlue font-ubuntu font-semibold lg:mb-0 hover:bg-antrakBlue hover:text-white duration-300"
              onClick={() => {
                navigate("/add_new_address");
              }}
            >
              <span className="border-[3px] border-antrakBlue rounded-full px-2 md:px-3 py-1 md:py-[6px] mr-3">
                +
              </span>
              Add New
            </button>
          </div>
          <div className="bg-white rounded-md py-4 md:py-10 mt-6">
            <div className=" rounded w-[90%] md:w-4/5 m-auto">
              {getData?.Response?.map((data, index) => (
                <>
                  <div className="bg-[#DBEEFF]  p-4 md:p-8 mb-6">
                    <div className="flex gap-4 md:gap-20 items-center">
                      <div className="flex flex-col gap-3">
                        <h2 className="text-sm md:text-lg font-ubuntu font-semibold text-[#5F5C5C]">
                          Address Title
                        </h2>
                        <h2 className="text-sm md:text-lg font-ubuntu font-semibold text-[#5F5C5C]">
                          Address
                        </h2>
                        <h2 className="text-sm md:text-lg font-ubuntu font-semibold text-[#5F5C5C]">
                          ZIP
                        </h2>
                        <h2 className="text-sm md:text-lg font-ubuntu font-semibold text-[#5F5C5C]">
                          Phone
                        </h2>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="text-sm md:text-lg font-ubuntu font-semibold text-black">
                          {data?.title}
                        </p>
                        <p className="text-sm md:text-lg font-ubuntu font-semibold text-black">
                          {data?.exactAddress}
                        </p>
                        <p className="text-sm md:text-lg font-ubuntu font-semibold text-black">
                          {data?.zip}
                        </p>
                        <p className="text-sm md:text-lg font-ubuntu font-semibold text-black">
                          {data?.phoneNum}
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-end justify-end text-xl mt-4 md:mt-0 cursor-pointer hover:text-antrakLogin duration-100"
                      onClick={(e) => {
                        deleteAddress(data?.id);
                      }}
                    >
                      <FiTrash />
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

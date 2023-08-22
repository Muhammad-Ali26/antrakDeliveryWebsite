// @ts-nocheck
import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PostAPI from "../../Apis/PostApi";
import { error_toaster, info_toaster, success_toaster } from "../../../Toaster";

export const PackageDetails = () => {
  const [bookingRes, getBookingRes] = useState("");
  const [coupon, setCoupon] = useState("");
  const [couponRes, setCouponRes] = useState("");
  const navigate = useNavigate();

  var packageDataString = localStorage.getItem("package");
  var packageData = JSON.parse(packageDataString);

  // This Function is for AddBooking API
  const addBooking = async () => {
    var res = await PostAPI("booking/add", {
      package: packageData,
      rName: localStorage.getItem("rName"),
      rEmail: localStorage.getItem("rEmail"),
      rAlPhoneNum: localStorage.getItem("phoneNum"),
      note: localStorage.getItem("note"),
      UserId: localStorage.getItem("UserId"),
      VehiclesTypeId: localStorage.getItem("VehiclesTypeId"),
      load_unload: localStorage.getItem("load_unload"),
      pickupId: localStorage.getItem("pickupId"),
      deliveryId: localStorage.getItem("deliveryId"),
      pickupDate: formattedDate,
    });
    console.log("🚀 ~ file: PackageDetails.jsx:41 ~ addBooking ~ res:", res)
    getBookingRes(res);
  };
  // It is used for call addBooking Function on screen load
  useEffect(() => {
    addBooking();
  }, []);

  // This Function is used to convert Date
  const moment = require("moment");
  var dateString = localStorage.getItem("pickupDate");
  var date = JSON.parse(dateString);
  var time = localStorage.getItem("time");

  const pickupDate = {
    day: date.day,
    month: date.month,
    date: date.date,
  };

  const currentYear = moment().year();
  const monthNumber = moment(pickupDate.month, "MMM").month() + 1;
  const formattedDate = moment(
    `${monthNumber}/${pickupDate.date}/${currentYear} ${time}`,
    "MM/DD/YYYY HH:mm"
  ).format("MM/DD/YYYY HH:mm");

  const updatedDate = moment(formattedDate, "MM/DD/YYYY");
  const updatedFormattedDate = updatedDate.format("MMMM DD, YYYY");

  // This Function Is Used To Delete Package
  const deletePackage = async (BookingId, loadAmount, packageIds) => {
    const deleteRes = await PostAPI("package/delete", {
      bookingId: BookingId,
      packageId: packageIds,
      loadAmount: loadAmount,
    });
    if (deleteRes?.data?.ResponseCode === "1") {
      success_toaster(deleteRes?.data?.ResponseMessage);
      navigate("/")
    } else {
      error_toaster(deleteRes?.data?.errors);
    }
  };

  const handleInputEvent = (e) => {
    setCoupon(e.target.value);
  };

  // This Function is Used To Add Coupon
  const addCoupon = async () => {
    if (coupon === "") {
      info_toaster("Please Enter Promo Code");
    } else {
      const couponRes = await PostAPI("coupons/apply", {
        name: coupon,
        BookingId: bookingRes?.data?.Response?.[0]?.BookingId,
      });
      if (couponRes?.data?.ResponseCode === "1") {
        setCouponRes(couponRes);
        success_toaster(couponRes?.data?.ResponseMessage);
      } else {
        error_toaster(couponRes?.data?.errors);
      }
    }
  };

  // This Function Is used To Navigate To Payment Page
  const proceedToPayment = () => {
    navigate("/payment");
    localStorage.setItem("bookingId", bookingRes?.data?.Response?.[0]?.BookingId)
    localStorage.setItem("CouponId", couponRes?.data?.Response?.[0]?.CouponId)
  };
  return (
    <>
      <Navbar />
      <section className="bg-[#F4F5FA] min-h-[89.5vh]">
        <div className="w-[90%] lg:w-[85%] m-auto pt-6 pb-6 md:pt-10  lg:pt-16  mt-[86px] md:mt-24">
          <div className="lg:grid grid-cols-3 gap-8 space-y-6 lg:space-y-0">
            <div className="bg-white rounded-md p-4 md:py-5 lg:p-8 col-span-2">
              <h2 className="text-base md:text-lg lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                Package Details
              </h2>

              <Accordion
                defaultIndex={[0]}
                allowMultiple
                className="mt-4 lg:mt-6  bg-[#F4F5FA] lg:px-8 py-4 lg:py-10"
              >
                <AccordionItem className="border-none hover:bg-none">
                  <AccordionButton
                    className="md:mb-6"
                    style={{ backgroundColor: "#F4F5FA" }}
                  >
                    <Box as="span" flex="1" textAlign="left" className="">
                      <div className="md:flex items-center justify-between">
                        <div className="md:flex items-center gap-4">
                          <img
                            src="images/Box.webp"
                            alt="box"
                            className="w-[35px] lg-w-[35px] lg:w-[45px] lg:h-[45px]"
                          />
                          <h2 className="mt-4 md:mt-0 text-base md:text-lg text-black font-ubuntu font-semibold">
                            Deliver To
                          </h2>
                          <p className="mt-2 md:mt-0 text-sm md:text-base text-[#666] font-ubuntu font-semibold">
                            {localStorage.getItem("receiverAddress")}
                          </p>
                        </div>
                        <div className="flex items-center justify-between gap-8">
                          <h2 className="mt-2 md:mt-0 text-lg lg:text-2xl text-black font-ubuntu font-semibold">
                            ${packageData[0]?.estWorth}
                          </h2>
                          <FaTrash
                            className="text-antrakLogin mr-8"
                            onClick={(e) => {
                              deletePackage(
                                bookingRes?.data?.Response?.[0]?.BookingId,
                                bookingRes?.data?.Response?.[0]?.loadAmount,
                                bookingRes?.data?.Response?.[0]?.packageIds?.[0]
                                  ?.id?.[0]
                              );
                            }}
                          />
                        </div>
                      </div>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4} className="">
                    <div className="md:grid grid-cols-3 gap-6">
                      {packageData.map((data, index) => (
                        <div className="mb-4 lg:mb-0">
                          <h2 className="text-base text-black font-ubuntu font-semibold mb-4">
                            Package {index + 1} Details
                          </h2>
                          <p className="text-sm text-[#666] font-ubuntu font-semibold mb-2">
                            1x Medium
                          </p>
                          <p className="text-sm text-[#666] font-ubuntu font-semibold mb-2">
                            {data?.length +
                              " x " +
                              data?.width +
                              " x " +
                              data?.height}
                          </p>
                          <p className="text-sm text-[#666] font-ubuntu font-semibold mb-2">
                            {data?.categoryName}
                          </p>
                          <p className="text-sm text-[#666] font-ubuntu font-semibold mb-2">
                            ${data?.estWorth}
                          </p>
                        </div>
                      ))}

                      <div className="mb-4 lg:mb-0">
                        <h2 className="text-base text-black font-ubuntu font-semibold mb-4">
                          Pickup Details
                        </h2>
                        <p className="text-sm text-[#666] font-ubuntu font-semibold mb-2">
                          {localStorage.getItem("pickupAddress")}
                        </p>
                        <p className="text-sm text-[#666] font-ubuntu font-semibold mb-2">
                          {updatedFormattedDate}
                        </p>
                        <p className="text-sm text-[#666] font-ubuntu font-semibold mb-2">
                          {localStorage.getItem("note")}
                        </p>
                      </div>

                      <div>
                        <h2 className="text-base text-black font-ubuntu font-semibold mb-4">
                          Receipent Details
                        </h2>
                        <p className="text-sm text-[#666] font-ubuntu font-semibold mb-2">
                          {localStorage.getItem("rName")}
                        </p>
                        <p className="text-sm text-[#666] font-ubuntu font-semibold mb-2">
                          {localStorage.getItem("phoneNum")}
                        </p>
                        <p className="text-sm text-[#666] font-ubuntu font-semibold mb-2">
                          {localStorage.getItem("receiverAddress")}
                        </p>
                      </div>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-white rounded-md p-7">
              <h2 className="text-base md:text-lg lg:text-3xl text-antrakBlue font-ubuntu font-semibold">
                Order Summary
              </h2>

              <div className="flex justify-between items-center mt-4 md:mt-6 lg:mt-8">
                <h4 className="text-base md:text-lg text-black font-ubuntu font-semibold">
                  Delivery Notes
                </h4>
              </div>

              <div className="mt-4">
                <p className="text-sm text-[#666] font-ubuntu font-semibold mb-2">
                  {localStorage.getItem("note")}
                </p>
              </div>

              <div className="flex justify-between mt-8">
                <h2 className="text-base text-[#666] font-ubuntu font-semibold">
                  Load/offload
                </h2>
                <p className="text-base md:text-lg text-black font-ubuntu font-semibold">
                  ${bookingRes?.data?.Response?.[0]?.loadAmount}
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <h2 className="text-base text-[#666] font-ubuntu font-semibold">
                  Discount
                </h2>
                <p className="text-base md:text-lg text-black font-ubuntu font-semibold">
                  ${couponRes?.data?.Response?.[0]?.discount}
                </p>
              </div>

              <div className="mt-4 md:grid md:grid-cols-3 gap-4 mb-4 md:mb-0">
                <input
                  type="number"
                  name="name"
                  placeholder="Enter promo code..."
                  className="md:col-span-2 px-4 py-2 w-full rounded border border-antrakBlue outline-none text-sm text-[#575656] font-semibold mb-4 md:mb-0"
                  onChange={handleInputEvent}
                />

                <button
                  className="px-4 py-3 bg-[#DBEEFF] text-antrakBlue text-base font-ubuntu font-semibold rounded hover:bg-antrakBlue hover:text-[#DBEEFF] duration-200"
                  onClick={addCoupon}
                >
                  Apply
                </button>
              </div>

              <div className="flex justify-between mt-8">
                <h2 className="text-base lg:text-lg text-antrakBlue font-ubuntu font-semibold">
                  Total Amount
                </h2>
                <p className="text-base lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                  ${bookingRes?.data?.Response?.[0]?.total}
                </p>
              </div>
              <div className="flex justify-between mt-8">
                <h2 className="text-base lg:text-lg text-antrakBlue font-ubuntu font-semibold">
                  Amount After Discount
                </h2>
                <p className="text-base lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                  ${couponRes?.data?.Response?.[0]?.total}
                </p>
              </div>

              <div className="mt-8" onClick={proceedToPayment}>
                <button className="bg-antrakBlue px-10 py-2  md:px-[70px] md:py-3 lg:px-[68px] 2xl:px-[147px] 2xl:py-[14px]  border rounded text-center text-base lg:text-lg text-antrakLogin font-ubuntu font-semibold hover:bg-white hover:text-antrakBlue duration-300 hover:border-antrakBlue">
                  Proceed to payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// @ts-nocheck
import React from "react";
import Navbar from "../Home/Navbar";
import { useState } from "react";
import PostAPI from "../../Apis/PostApi";
import { error_toaster, info_toaster, success_toaster } from "../../../Toaster";
import { useNavigate } from "react-router-dom";

const Payement = () => {
  const navigate = useNavigate();
  const [cardDetails, setCardDetails] = useState({
    cardNum: "",
    exp_month: "",
    exp_year: "",
    cvc: "",
    saveStatus: true,
    bookingId: "",
    CouponId: "",
  });

  const handleInputEvent = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const addPayment = async () => {
    if (cardDetails.cardNum === "") {
      info_toaster("Please Enter Card Number");
    } else if (cardDetails.exp_month === "") {
      info_toaster("Please Enter Card Expiry Month");
    } else if (cardDetails.exp_year === "") {
      info_toaster("Please Enter Card Expiry Year");
    } else {
      let res = await PostAPI("users/makepaymentbynewcard", {
        cardNum: cardDetails.cardNum,
        exp_month: cardDetails.exp_month,
        exp_year: cardDetails.exp_year,
        cvc: cardDetails.cvc,
        saveStatus: true,
        bookingId: localStorage.getItem("bookingId"),
        CouponId: localStorage.getItem("CouponId"),
      });
      console.log("🚀 ~ file: Payment.jsx:42 ~ addPayment ~ res:", res)
      if (res?.data?.ResponseCode === "1") {
        success_toaster(res?.data?.ResponseMessage);
        navigate("/order_confirmed");
      } else {
        error_toaster(res?.data?.ResponseMessage);
      }
    }
  };
  return (
    <>
      <Navbar />
      <section className="bg-[#F4F5FA] min-h-[89.5vh]">
        <div className="w-[90%] lg:w-[85%] m-auto pt-6 pb-6 md:pt-10  lg:pt-16  mt-[86px] md:mt-24">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-base md:text-lg lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
              Add Card Details
            </h2>

            <div className="mt-6 lg:mt-12">
              <div>
                <input
                  type="number"
                  placeholder="Card Number"
                  maxlength="30"
                  name="cardNum"
                  className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-[#F4F5FA] font-semibold"
                  onChange={handleInputEvent}
                />
              </div>

              <div className="mt-6">
                <input
                  type="number"
                  name="exp_month"
                  maxlength="30"
                  placeholder="Expiry Month "
                  className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-[#F4F5FA] font-semibold"
                  onChange={handleInputEvent}
                />
              </div>

              <div className="mt-6 md:grid grid-cols-2 gap-6 ">
                <div>
                  <input
                    type="number"
                    name="exp_year"
                    maxlength="30"
                    placeholder="Expiry Year"
                    className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-[#F4F5FA] font-semibold mb-6 md:mb-0"
                    onChange={handleInputEvent}
                  />
                </div>

                <div>
                  <input
                    type="number"
                    name="cvc"
                    placeholder="CVC"
                    maxlength="30"
                    className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-[#F4F5FA] font-semibold"
                    onChange={handleInputEvent}
                  />
                </div>
              </div>
              <div
                className="flex justify-center mt-10 lg:mt-20"
                onClick={addPayment}
              >
                <button className="bg-antrakBlue px-10 py-2  md:px-[70px] md:py-3 2xl:px-32 2xl:py-3  border rounded text-center text-base lg:text-2xl text-antrakLogin font-ubuntu font-semibold hover:bg-transparent hover:text-antrakBlue duration-300 w-full hover:border-antrakBlue">
                  Pay Amount
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payement;

// @ts-nocheck
import React from "react";
import Navbar from "../Home/Navbar";
import DashboardNavbar from "./DashboardNavbar";
import GetAPI from "../../Apis/GetAPI";
import { useState } from "react";
import PostAPI from "../../Apis/PostApi";
import { error_toaster, info_toaster, success_toaster } from "../../../Toaster";

export default function CancelBooking() {
  const getData = GetAPI("users/cancelreasons");
  const [labelText, setLabelText] = useState("");
  const [note, setNote] = useState("");

  const handleInputEvent = (e) => {
    setLabelText(e.target.nextSibling.textContent);
  };

  const handleInputChange = (e) => {
    setNote(e.target.value);
  };

  const addReason = async () => {
    if (labelText === "") {
      info_toaster("Please Select Any Reason For Cancel Booking");
    } else if (note === "") {
      info_toaster("Please Enter More Details");
    } else {
      let res = await PostAPI("users/booking/cancel", {
        bookingId: localStorage.getItem("bookingId"),
        UserId: localStorage.getItem("UserId"),
        note: note,
        reason: labelText,
      });
      console.log("🚀 ~ file: CancelBooking.jsx:35 ~ addReason ~ res:", res)
      if(res?.data?.ResponseCode === "1"){
        success_toaster(res?.data?.ResponseMessage)
      }
      else{
        error_toaster(res?.data?.ResponseMessage)
      }
    }
  };
  return (
    <>
      <Navbar />
      <DashboardNavbar />
      <section className="bg-[#F4F5FA] min-h-[79.5vh]">
        <div className="w-[90%] lg:w-[85%] m-auto pt-6 pb-10 md:pt-10  lg:pt-16">
          <div className="bg-white rounded-md px-5 py-10 md:px-0 lg:py-20">
            <div className="md:px-10">
              <h2 className="text-base md:text-lg lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                Please Provide a Reason for Cancellation
              </h2>
              {getData?.getData?.Response?.map((data, value) => (
                <div className="mt-6">
                  <div>
                    <input
                      type="radio"
                      name="reason"
                      placeholder="Name on Card"
                      style={{ transform: "scale(1.5)" }}
                      onChange={handleInputEvent}
                    />
                    <label
                      htmlFor="reason"
                      id="reason"
                      className="ml-5 text-antrakBlue text-base font-ubuntu font-semibold"
                    >
                      {data?.reasonText}
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:px-10 mt-6">
              <h2 className="text-base md:text-lg lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                We would apperciate more details
              </h2>
              <div className="mt-1">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <textarea
                    name="note"
                    cols="30"
                    rows="6"
                    placeholder="Add comments here...."
                    className="p-2 mt-4 border text-base font-ubuntu rounded"
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-20 md:px-10" onClick={addReason}>
              <button className="bg-antrakBlue px-10 py-2  md:px-[70px] md:py-3 2xl:px-32 2xl:py-3  border rounded text-center text-base lg:text-2xl text-antrakLogin font-ubuntu font-semibold hover:bg-white hover:text-antrakBlue duration-300  hover:border-antrakBlue">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

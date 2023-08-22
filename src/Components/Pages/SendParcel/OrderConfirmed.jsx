import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Home/Navbar";

export const OrderConfirmed = () => {
  return (
    <>
      <Navbar/>
      <section className="bg-[#F4F5FA] min-h-[89.5vh]">
        <div className="w-[90%] lg:w-[85%] m-auto pt-6 pb-6 md:pt-10  lg:pt-16  mt-[86px] md:mt-24">
          <div className="flex flex-col items-center justify-center">
            <img
              src="images/Box.webp"
              alt="box"
              className="w-[45px] h-[45px] md:w-[75px] md:h-[75px] lg:w-[117px] lg:h-[102px]"
            />
            <h2 className="text-base md:text-lg lg:text-2xl text-antrakBlue font-ubuntu font-semibold mt-4   lg:mt-8">
              Order Confirmed!
            </h2>
            <p className="text-sm lg:text-lg text-[#666] font-ubuntu font-semibold mt-2 max-w-[450px] text-center">
              Your order has been placed. You will soon receive a confirmation
              via email address.
            </p>

            <div className="flex justify-center mt-6 md:mt-10 lg:mt-12">
              <NavLink to="/">
                <button className="bg-antrakBlue px-10 py-2  md:px-[70px] md:py-3 lg:px-28 lg:py-3 2xl:px-[147px] 2xl:py-3  border rounded text-center text-base lg:text-2xl text-antrakLogin font-ubuntu font-semibold hover:bg-transparent hover:text-antrakBlue hover:border-antrakBlue duration-300">
                  Done
                </button>
              </NavLink>
            </div>

            <h2 className="lg:text-xl text-antrakLogin font-ubuntu font-semibold underline mt-4 cursor-pointer">View Order Status</h2>
          </div>
        </div>
      </section>
    </>
  );
};

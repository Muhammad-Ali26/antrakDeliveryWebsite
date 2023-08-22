// @ts-nocheck
import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { info_toaster, success_toaster } from "../../../Toaster";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");


  const verifyOtp = (e) => {
    e.preventDefault()
    if (otp === "") {
      info_toaster("Please Enter Your OTP");
    } else {
      success_toaster("OTP Verified")
      navigate("/reset_password")
      localStorage.setItem("otp", otp)
    }
  };

  return (
    <section>
      <div className="h-screen lg:flex">
        <div className="bg-[#002E63] lg:w-[70%] h-screen lg:flex justify-center">
          <form className="w-[90%] lg:w-[50%] m-auto py-6">
            <div className="flex justify-center">
              <OtpInput
                inputStyle={{ width: "45px", height: "70px" }}
                value={otp}
                onChange={setOtp}
                numInputs={5}
                renderSeparator={
                  <span className="text-4xl text-white md:mx-8">-</span>
                }
                renderInput={(props) => <input {...props} />}
              />
            </div>

            <div className="mt-6 lg:mt-6 2xl:mt-12 text-center text-base md:text-lg lg:text-xl text-antrakWhite font-ubuntu font-semibold">
              Don’t receive an OTP? |
              <NavLink to="/resend_otp">
                <span className="text-antrakLogin"> Resend</span>
              </NavLink>
            </div>
            <div
              className="text-base md:text-lg bg-antrakLogin font-semibold lg:text-xl text-center text-antrakWhite p-3 mt-6 rounded cursor-pointer hover:bg-white hover:text-antrakLogin duration-300"
              onClick={verifyOtp}
            >
              <button className="">Verify OTP</button>
            </div>
          </form>
        </div>

        <div className="hidden lg:w-[30%] mx-4 my-4 lg:my-0 lg:mx-20 lg:flex flex-col justify-center space-y-3 lg:space-y-4">
          <img
            src="images/logo.webp"
            alt="login"
            className="w-[80px] md:w-[100px] lg:w-[160px] cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
          <h2 className="md:text-2xl lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
            Verify OTP
          </h2>
          <p className="md:text-lg lg:text-xl text-antrakBlue font-ubuntu  lg:max-w-[375px]">
            Enter your 6 digits OPT sent to example123@cmail.com{" "}
            <span className="underline">Edit</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// @ts-nocheck
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostAPI from "../../Apis/PostApi";
import { error_toaster, info_toaster, success_toaster } from "../../../Toaster";
import OTPInput from "react-otp-input";

export default function VerifyEmail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState({
    userId: location?.state?.userId,
    OTP: "",
  });
  
  const confirmOtp = async (e) => {
    e.preventDefault();
    if (otp.OTP === "") {
      info_toaster("Please Enter OTP");
    } else {
      let res = await PostAPI("users/vemail", {
        userId: location?.state?.userId,
        OTP: otp.OTP,
      });
      if (res?.data?.ResponseCode === "1") {
        success_toaster(res?.data?.ResponseMessage);
        navigate("/login");
      } else {
        error_toaster(res?.data?.ResponseMessage);
      }
    }
  };

  return (
    <section>
      <div className="h-screen lg:flex">
        <div className="bg-[#002E63] lg:w-[70%] h-screen lg:flex justify-center">
          <form className="w-[90%] lg:w-[50%] m-auto py-6">
            <div className="flex flex-col items-center lg:space-y-4 mb-4 lg:mb-6">
              <OTPInput
                inputStyle={{ width: "45px", height: "70px" }}
                value={otp.OTP}
                onChange={(e) =>
                  setOtp({
                    ...otp,
                    OTP: e,
                  })
                }
                numInputs={5}
                renderSeparator={
                  <span className="text-4xl text-white md:mx-8">-</span>
                }
                renderInput={(props) => <input {...props} />}
              />
            </div>

            <div className="text-base md:text-lg bg-antrakLogin font-semibold lg:text-xl text-center text-antrakWhite p-3 mt-6 rounded cursor-pointer hover:bg-white hover:text-antrakLogin duration-300">
              <button className="" onClick={confirmOtp}>
                Confirm OTP
              </button>
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
            Login with your credentionals
          </h2>
          <p className="md:text-lg lg:text-xl text-antrakBlue font-ubuntu  lg:max-w-[375px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
      </div>
    </section>
  );
}

// @ts-nocheck
import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { error_toaster, info_toaster, success_toaster } from "../../../Toaster";
import PostAPI from "../../Apis/PostApi";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [getEmail, setGetEmail] = useState({
    email: "",
  });
  const handleInputEvent = (e) => {
    setGetEmail({ ...getEmail, [e.target.name]: e.target.value });
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    if (getEmail.email === "") {
      info_toaster("Please Enter Your Email");
    } else {
      let res = await PostAPI("users/femail", {
        email: getEmail.email,
      });

      if (res?.data?.ResponseCode === "1") {
        success_toaster(res?.data?.ResponseMessage);
        navigate("/verify_otp");
        localStorage.setItem("userId", res?.data?.Response?.[0]?.userId)
        localStorage.setItem("forgetRequestId", res?.data?.Response?.[0]?.forgetRequestId)
      } else {
        error_toaster(res?.data?.errors);
      }
    }
  };

  return (
    <section>
      <div className="h-screen lg:flex">
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
            Trouble logging in?
          </h2>
          <p className="md:text-lg lg:text-xl text-antrakBlue font-ubuntu  lg:max-w-[375px]">
            Enter your email below to receive link and receive an OTP
          </p>
        </div>

        <div className="bg-[#002E63] lg:w-[70%] h-screen lg:flex justify-center">
          <form className="w-[90%] lg:w-1/2 m-auto py-6">
            <div className="flex flex-col lg:space-y-4 mb-6">
              <label
                htmlFor="email"
                className="text-base md:text-lg lg:text-xl text-antrakWhite font-ubuntu font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                maxLength="20"
                className="bg-antrakWhite p-3 rounded border-none outline-none"
                onChange={handleInputEvent}
              />
            </div>

            <div
              className="cursor-pointer text-base md:text-lg bg-antrakLogin font-semibold lg:text-xl text-center text-antrakWhite hover:bg-white hover:text-antrakLogin duration-300 p-3 rounded"
              onClick={sendOtp}
            >
              <button className="">Send OTP</button>
            </div>
            <div className="mt-12 text-center text-base md:text-lg lg:text-xl text-antrakWhite font-ubuntu font-semibold">
              Back to
              <NavLink to="/login">
                <span className="text-antrakLogin"> Login </span>
              </NavLink>
              page
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

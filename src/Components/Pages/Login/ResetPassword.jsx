// @ts-nocheck
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { error_toaster, info_toaster, success_toaster } from "../../../Toaster";
import PostAPI from "../../Apis/PostApi";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [resetPassword, setResetPassword] = useState({
    userId: "",
    forgetRequestId: "",
    password: "",
    confirmPassword: "",
    OTP: "",
  });

  const handleInputEvent = (e) => {
    setResetPassword({ ...resetPassword, [e.target.name]: e.target.value });
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    if (resetPassword.password === "") {
      info_toaster("Please Enter Your New Password");
    } else if (resetPassword.confirmPassword === "") {
      info_toaster("Please Enter Password For Confirmation");
    } else {
      const res = await PostAPI("users/femail/verify", {
        userId: localStorage.getItem("userId"),
        forgetRequestId: localStorage.getItem("forgetRequestId"),
        password: resetPassword.password,
        confirmPassword: resetPassword.confirmPassword,
        OTP: localStorage.getItem("otp"),
      });
      console.log(
        "🚀 ~ file: ResetPassword.jsx:37 ~ updatePassword ~ res:",
        res
      );
      if (resetPassword.password !== resetPassword.confirmPassword) {
        error_toaster(
          "Your Confirm Password is not the same as Your New Password"
        );
      } else {
        if (res?.data?.ResponseCode === "1") {
          success_toaster(res?.data?.ResponseMessage);
          navigate("/login");
          localStorage.removeItem("forgetRequestId")
          localStorage.removeItem("otp")
        } else {
          error_toaster(res?.data?.errors);
        }
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
            Reset Password
          </h2>
          <p className="md:text-lg lg:text-xl text-antrakBlue font-ubuntu  lg:max-w-[375px]">
            Set the new password for your account so you can login and access
            all the feaatures
          </p>
        </div>

        <div className="bg-[#002E63] lg:w-[70%] h-screen lg:flex justify-center">
          <form className="w-[90%] lg:w-1/2 m-auto py-6">
            <div className="flex flex-col lg:space-y-4 mb-6">
              <label
                htmlFor="email"
                className="text-base md:text-lg lg:text-xl text-antrakWhite font-ubuntu font-semibold"
              >
                New Password
              </label>
              <input
                type="password"
                name="password"
                maxLength="20"
                className="bg-antrakWhite p-3 rounded border-none outline-none"
                onChange={handleInputEvent}
              />
            </div>
            <div className="flex flex-col lg:space-y-4 mb-10">
              <label
                htmlFor="email"
                className="text-base md:text-lg lg:text-xl text-antrakWhite font-ubuntu font-semibold"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                maxLength="20"
                className="bg-antrakWhite p-3 rounded border-none outline-none"
                onChange={handleInputEvent}
              />
            </div>

            <div
              className="cursor-pointer text-base md:text-lg bg-antrakLogin font-semibold lg:text-xl text-center text-antrakWhite hover:bg-white
             hover:text-antrakLogin duration-300 p-3 rounded"
              onClick={updatePassword}
            >
              <button className="">Update</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

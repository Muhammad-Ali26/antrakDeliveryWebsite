// @ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PutApi from "../../Apis/PutApi";
import { error_toaster, info_toaster, success_toaster } from "../../../Toaster";

export default function UpdatePassword() {
  const navigate = useNavigate();
  const [updatePass, setUpdatePass] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const handleInputEvent = (e) => {
    setUpdatePass({ ...updatePass, [e.target.name]: e.target.value });
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    if (updatePass.oldPassword === "") {
      info_toaster("Please Enter Old Password");
    } else if (updatePass.newPassword === "") {
      info_toaster("Please Enter New Password");
    } else {
      const PassRes = await PutApi("users/updatepassword", {
        oldPassword: updatePass.oldPassword,
        newPassword: updatePass.newPassword,
      });
      if (PassRes?.data?.ResponseCode === "1") {
        success_toaster(PassRes?.data?.ResponseMessage);
        navigate("/settings");
      } else {
        error_toaster(PassRes?.data?.errors);
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
            Update Password
          </h2>
          <p className="md:text-lg lg:text-xl text-antrakBlue font-ubuntu  lg:max-w-[375px]">
            Set the new password for your account so you can login and access
            all the features
          </p>
        </div>

        <div className="bg-[#002E63] lg:w-[70%] h-screen lg:flex justify-center">
          <form className="w-[90%] lg:w-1/2 m-auto py-6">
            <div className="flex flex-col lg:space-y-4 mb-6">
              <label
                htmlFor="email"
                className="text-base md:text-lg lg:text-xl text-antrakWhite font-ubuntu font-semibold"
              >
                Old Password
              </label>
              <input
                type="password"
                name="oldPassword"
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
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
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
              <button className="">Update Password</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

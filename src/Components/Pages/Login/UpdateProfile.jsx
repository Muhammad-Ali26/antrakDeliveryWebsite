// @ts-nocheck
import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import {useNavigate } from "react-router-dom";
import PutApi from "../../Apis/PutApi";
import { error_toaster, info_toaster, success_toaster } from "../../../Toaster";

export default function UpdateProfile() {
  const navigate = useNavigate();
  const [updateInfo, setUpdateInfo] = useState({
    firstName: "",
    lastName: "",
    countryCode: "",
    phoneNum: "",
  });

  const handleInputEvent = (e) => {
    setUpdateInfo({ ...updateInfo, [e.target.name]: e.target.value });
  };
  const updateProfile = async (e) => {
    e.preventDefault();
    if (updateInfo.firstName === "") {
      info_toaster("Please Enter Your First Name");
    } else if (updateInfo.lastName === "") {
      info_toaster("Please Enter Your Last Name");
    } else if (updateInfo.countryCode === "") {
      info_toaster("Please Select Country Code");
    } else if (updateInfo.phoneNum === "") {
      info_toaster("Please Enter Phone Number");
    } else {
      let updateRes = await PutApi("users/updateuser", {
        firstName: updateInfo.firstName,
        lastName: updateInfo.lastName,
        countryCode: "+" + updateInfo.countryCode + "-",
        phoneNum: updateInfo.phoneNum,
      });
      if (updateRes?.data?.ResponseCode === "1") {
        success_toaster(updateRes?.data?.ResponseMessage);
        navigate("/settings");
      } else {
        error_toaster(updateRes?.data?.errors);
      }
    }
  };
  return (
    <section>
      <div className="h-screen lg:flex">
        <div className="bg-[#002E63] lg:w-[70%] h-screen lg:flex justify-center">
          <form className="w-[90%] lg:w-4/5 m-auto py-6">
            <h2 className="text-base md:text-lg lg:text-4xl text-antrakWhite font-ubuntu font-semibold text-center mb-8">
              Update Your Profile
            </h2>
            <div className="lg:grid grid-cols-2 gap-8">
              <div className="flex flex-col lg:space-y-4 mb-4 lg:mb-6">
                <label
                  htmlFor="firstName"
                  className="text-base md:text-lg lg:text-xl text-antrakWhite font-ubuntu font-semibold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  maxLength="20"
                  className="bg-antrakWhite p-3 rounded border-none outline-none"
                  onChange={handleInputEvent}
                />
              </div>

              <div className="flex flex-col lg:space-y-4 mb-4 lg:mb-6">
                <label
                  htmlFor="lastName"
                  className="text-base md:text-lg lg:text-xl text-antrakWhite font-ubuntu font-semibold"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  maxLength="20"
                  className="bg-antrakWhite p-3 rounded border-none outline-none"
                  onChange={handleInputEvent}
                />
              </div>
            </div>

            <div className="lg:grid grid-cols-2 gap-8">
              <div className="flex flex-col lg:space-y-4  mb-4 lg:mb-6">
                <label
                  htmlFor="phone"
                  className="text-base md:text-lg lg:text-xl text-antrakWhite font-ubuntu font-semibold"
                >
                  Country Code
                </label>
                <PhoneInput
                  country={"us"}
                  placeholder="XXX XXX XXXX"
                  inputStyle={{
                    display: "block",
                    width: "100%",
                    paddingTop: "22px",
                    paddingBottom: "22px",
                    background: "#F4F5FA",
                    color: "#888",
                  }}
                  onChange={(e) =>
                    setUpdateInfo({ ...updateInfo, countryCode: e })
                  }
                />
              </div>
              <div className="flex flex-col lg:space-y-4  mb-4 lg:mb-6">
                <label
                  htmlFor="email"
                  className="text-base md:text-lg lg:text-xl text-antrakWhite font-ubuntu font-semibold"
                >
                  Phone
                </label>
                <input
                  type="number"
                  name="phoneNum"
                  maxLength="20"
                  className="bg-antrakWhite p-3 rounded border-none outline-none"
                  onChange={handleInputEvent}
                />
              </div>
            </div>

            <div
              className="text-base md:text-lg bg-antrakLogin font-semibold lg:text-xl text-center text-antrakWhite p-3 mt-6 rounded cursor-pointer hover:bg-white hover:text-antrakLogin duration-300"
              onClick={updateProfile}
            >
              <button className="">Update</button>
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
            Update Your Profile
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

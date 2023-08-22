// @ts-nocheck
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import { error_toaster, info_toaster, success_toaster } from "../../../Toaster";
import PostAPI from "../../Apis/PostApi";

export const Signup = () => {
  const navigate = useNavigate();
  const [registerUser, setUserRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phoneNum: "",
    password: "",
    gkey: "0",
    deviceToken: "2324ghghyyy89892",
  });

  const handleInputEvent = (event) => {
    setUserRegister({
      ...registerUser,
      [event.target.name]: event.target.value,
    });
  };

  const createNewAccount = async (ele) => {
    ele.preventDefault();
    if (registerUser.firstName === "") {
      info_toaster("Please Enter Your First Name");
    } else if (registerUser.lastName === "") {
      info_toaster("Please Enter Your Last Name");
    } else if (registerUser.email === "") {
      info_toaster("Please Enter Your Email");
    } else if (registerUser.countryCode === "") {
      info_toaster("Please Enter Country Code");
    } else if (registerUser.phoneNum === "") {
      info_toaster("Please Enter Your Phone Number");
    } else if (registerUser.password === "") {
      info_toaster("Please Enter Your Password");
    } else {
      let response = await PostAPI("users/register", {
        firstName: registerUser.firstName,
        lastName: registerUser.lastName,
        email: registerUser.email,
        countryCode: registerUser.countryCode,
        phoneNum: registerUser.phoneNum,
        password: registerUser.password,
        gkey: "0",
        deviceToken: "2324ghghyyy89892",
      });

      if (response?.data?.ResponseCode === "1") {
        success_toaster(response?.data?.ResponseMessage);
        navigate("/verify_email", {
          state: {
            userId: response?.data?.Response?.[0]?.UserId,
          },
        });
      } else {
        error_toaster(response?.data?.ResponseMessage);
      }
    }
  };

  return (
    <section>
      <div className="h-screen lg:flex">
        <div className="bg-[#002E63] lg:w-[70%] h-screen lg:flex justify-center">
          <form className="w-[90%] lg:w-4/5 m-auto py-6">
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
                  onChange={handleInputEvent}
                  maxLength="20"
                  className="bg-antrakWhite p-3 rounded border-none outline-none"
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
                  onChange={handleInputEvent}
                  maxLength="20"
                  className="bg-antrakWhite p-3 rounded border-none outline-none"
                />
              </div>
            </div>

            <div className="lg:grid grid-cols-2 gap-8">
              <div className="flex flex-col lg:space-y-4 mb-4 lg:mb-6">
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
                  onChange={handleInputEvent}
                  className="bg-antrakWhite p-3 rounded border-none outline-none"
                />
              </div>

              <div className="flex flex-col lg:space-y-4  mb-4 lg:mb-6">
                <label
                  htmlFor="phone"
                  className="text-base md:text-lg lg:text-xl text-antrakWhite font-ubuntu font-semibold"
                >
                  Country Code
                </label>
                <input
                  type="number"
                  name="countryCode"
                  maxLength="20"
                  onChange={handleInputEvent}
                  className="bg-antrakWhite p-3 rounded border-none outline-none"
                  placeholder="+1"
                />
              </div>
            </div>

            <div className="lg:grid grid-cols-2 gap-8">
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
                  onChange={handleInputEvent}
                  className="bg-antrakWhite p-3 rounded border-none outline-none"
                />
              </div>

              <div className="flex flex-col lg:space-y-4  mb-4 lg:mb-6">
                <label
                  htmlFor="phone"
                  className="text-base md:text-lg lg:text-xl text-antrakWhite font-ubuntu font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  maxLength="20"
                  onChange={handleInputEvent}
                  className="bg-antrakWhite p-3 rounded border-none outline-none"
                  value={registerUser.password}
                />
              </div>
            </div>

            <div
              className="text-base md:text-lg bg-antrakLogin font-semibold lg:text-xl text-center text-antrakWhite p-3 mt-6 rounded cursor-pointer hover:bg-white hover:text-antrakLogin duration-300"
              onClick={createNewAccount}
            >
              <button className="">Creat New Account</button>
            </div>

            {/* <div>
              <button className="w-[100%]  mt-6 lg:mt-10 2xl:mt-12 flex justify-center items-center gap-4 border rounded p-2 lg:text-xl text-antrakWhite font-ubuntu font-semibold hover:bg-white hover:text-antrakBlue duration-300">
                <img
                  src="images/google-logo.webp"
                  alt=""
                  className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
                 
                />
                <span>Continue with Google</span>
              </button>
            </div> */}

            <div className="mt-6 lg:mt-6 2xl:mt-12 text-center text-base md:text-lg lg:text-xl text-antrakWhite font-ubuntu font-semibold">
              Already have an account,
              <NavLink to="/login">
                <span className="text-antrakLogin"> Login </span>
              </NavLink>
              now.
            </div>
          </form>
        </div>

        <div className="hidden lg:w-[30%] mx-4 my-4 lg:my-0 lg:mx-20 lg:flex flex-col justify-center space-y-3 lg:space-y-4">
          <img
            src="images/logo.webp"
            alt="login"
            className="w-[80px] md:w-[100px] lg:w-[160px] cursor-pointer"
            onClick={() =>{navigate("/")}}
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
};

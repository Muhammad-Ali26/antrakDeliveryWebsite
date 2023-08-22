// @ts-nocheck
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { error_toaster, info_toaster, success_toaster } from "../../../Toaster";
import PostAPI from "../../Apis/PostApi";

export const Login = () => {
  const navigate = useNavigate();
  const [getInfo, setGetInfo] = useState({
    email: "",
    password: "",
  });
  const handleInputEvent = (event) => {
    setGetInfo({ ...getInfo, [event.target.name]: event.target.value });
  };

  const login = async (e) => {
    e.preventDefault();
    if (getInfo.email === "") {
      info_toaster("Please Enter Your Email");
    } else if (getInfo.password === "") {
      info_toaster("Please Enter Your Password");
    } else {
      let response = await PostAPI("users/login", {
        email: getInfo.email,
        password: getInfo.password,
        deviceToken: "LoggedIN Token 23696455",
      });
      // console.log("🚀 ~ file: Login.jsx:29 ~ login ~ response:", response)
      if (response?.data?.ResponseCode === "1") {
        success_toaster(response?.data?.ResponseMessage);
        navigate("/");
        localStorage.setItem(
          "accessToken",
          response?.data?.Response?.[0]?.accessToken
        );
        localStorage.setItem("loginStatus", true);
        localStorage.setItem("UserId", response?.data?.Response?.[0]?.UserId);
      } else {
        error_toaster(response?.data?.ResponseMessage);
        error_toaster(response?.data?.errors);
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
            Login with your credentionals
          </h2>
          <p className="md:text-lg lg:text-xl text-antrakBlue font-ubuntu  lg:max-w-[375px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
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

            <div className="flex flex-col lg:space-y-4 mb-4">
              <label
                htmlFor="password"
                className="text-base md:text-lg lg:text-xl text-antrakWhite font-ubuntu font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                maxLength="20"
                className="bg-antrakWhite p-3 rounded border-none outline-none"
                onChange={handleInputEvent}
              />
            </div>
            <div className="mb-8">
              <NavLink to="/forgot_password">
                <h2 className="text-base lg:text-lg text-white text-end underline font-ubuntu font-semibold">
                  Forgot Password?
                </h2>
              </NavLink>
            </div>

            <div
              className="cursor-pointer text-base md:text-lg bg-antrakLogin font-semibold lg:text-xl text-center text-antrakWhite hover:bg-white hover:text-antrakLogin duration-300 p-3 rounded"
              onClick={login}
            >
              <button className="">Login</button>
            </div>
            {/* <div className="mt-8 mb-4 text-center lg:text-xl text-antrakWhite font-ubuntu font-semibold">
              or
            </div> */}
            {/* <div>
              <button className="w-[100%] flex justify-center items-center gap-4 border rounded  p-2 lg:text-xl text-antrakWhite font-ubuntu font-semibold hover:bg-white hover:text-antrakBlue duration-300">
                <img
                  src="images/google-logo.webp"
                  alt=""
                  className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
                />
                <span>Continue with Google</span>
              </button>
            </div> */}

            <div className="mt-12 text-center text-base md:text-lg lg:text-xl text-antrakWhite font-ubuntu font-semibold">
              Dont have an account,
              <NavLink to="/signup">
                <span className="text-antrakLogin"> Sign up </span>
              </NavLink>
              now.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

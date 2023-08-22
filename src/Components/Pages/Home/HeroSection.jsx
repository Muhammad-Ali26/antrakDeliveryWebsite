// @ts-nocheck
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { info_toaster } from "../../../Toaster";

const HeroSection = () => {
  const navigate = useNavigate();
  const statusCheck = localStorage.getItem("loginStatus");
  const handleSendParcel = () => {
    if (statusCheck === "true") {
      navigate("/send_parcel");
    } else {
      info_toaster("You are not login please login first");
    }
  };
  return (
    <>
      <section>
        <div
          className="mt-22 lg:mt-24 h-screen bg-cover bg-center"
          style={{ backgroundImage: "url(images/hero.webp)" }}
        >
          <div className="flex flex-col ml-5 md:10 lg:ml-16 pt-32 gap-5 lg:gap-14">
            <h1 className="text-xl md:text-4xl lg:text-6xl text-antrakLogin font-ubuntu font-bold max-w-[230px] md:max-w-[400px] lg:max-w-2xl leading-tight">
              Delight customers with speed, quality, & reliability
            </h1>
            <p className="text-lg lg:text-2xl text-antrakWhite font-ubuntu font-normal max-w-[250px] lg:max-w-[500px] md:max-w-[400px] leading-normal">
              We’re committed to providing our customers with the best parcel
              sending experience in the market, at unrivalled prices.
            </p>

            <div className="flex gap-2">
              <button
                className="border px-4 py-2 md:px-14 md:py-3 lg:px-14 lg:py-4   rounded-md border-antrakWhite bg-antrakWhite text-antrakBlue text-base md:text-lg lg:text-2xl font-semibold hover:bg-antrakBlue hover:text-antrakWhite duration-200"
                onClick={handleSendParcel}
              >
                Send Parcel
              </button>
              <NavLink to="https://play.google.com/store/apps">
                <button className="border px-2 py-2 md:px-5 md:py-3 lg:px-5 lg:py-4 rounded-md border-antrakLogin text-antrakLogin text-base md:text-lg lg:text-2xl font-semibold hover:bg-antrakLogin hover:text-antrakWhite duration-200">
                  Download the App
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

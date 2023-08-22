// @ts-nocheck
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function RegisterNow() {
  const navigate = useNavigate()
  return (
    <section>
      <div className="w-[90%] md:w-4/5 m-auto py-12 lg:py-24 lg:flex gap-20 space-y-6 lg:space-y-0">
        <div>
          <img
            src="images/register now.webp"
            alt="register now"
            className="w-[500px] lg:w-[665px]"
          />
        </div>

        <div className="space-y-4 lg:space-y-10">
          <h4 className="text-lg md:text-xl lg:text-4xl text-antrakLogin font-ubuntu font-semibold">
            Become a Driver
          </h4>
          <p className="text-base md:text-lg lg:text-xl text-antrakLogin font-ubuntu md:max-w-[670px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit
            sem vel blandit dictum. Curabitur nec turpis purus.
          </p>

          <button className="border px-4 py-[9px] md:px-14 md:py-[13px] lg:px-14 lg:py-4   rounded-md border-antrakWhite bg-antrakBlue text-antrakWhite text-base md:text-lg lg:text-2xl font-semibold hover:bg-antrakWhite hover:text-antrakBlue hover:border-antrakBlue duration-200" onClick={() =>{navigate("/signup")}}>
            Register Now
          </button>

          <h6 className="text-lg md:text-xl lg:text-2xl font-ubuntu text-antrakBlue font-semibold">
            Download driver app
          </h6>
          <div className="flex lg:gap-6  gap-4 ">
            <button className="">
              <NavLink to="https://www.apple.com/app-store">
                <img
                  src="images/btn-app-store.webp"
                  alt=""
                  className="h-[40px] md:w-[187px] md:h-[60px]"
                />
              </NavLink>
            </button>
            <button className="">
              <NavLink to="https://play.google.com/store/apps">
                <img
                  src="images/btn-play-store.webp"
                  alt=""
                  className="h-[40px] md:w-[187px] md:h-[60px]"
                />
              </NavLink>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center bg-bg2 h-[350px] lg:h-[550px] bg-cover bg-center bg-antrakLogin">
        <div className="w-[90%] md:w-4/5 m-auto space-y-12">
          <h4 className="text-xl md:text-2xl lg:text-4xl font-ubuntu text-antrakBlue font-semibold">
            Making life easier for you
          </h4>
          <p className="text-lg md:text-xl lg:text-2xl font-ubuntu text-antrakBlue md:max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit
            sem vel blandit dictum. Curabitur nec turpis purus.
          </p>
          <div>
          <button className="border px-4 py-[9px] md:px-14 md:py-[13px] lg:px-14 lg:py-4   rounded-md border-antrakWhite bg-antrakWhite text-antrakBlue text-base md:text-lg lg:text-2xl font-semibold hover:bg-antrakBlue hover:text-antrakWhite hover:border-antrakBlue duration-200">
          Schedule a Delivery
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}

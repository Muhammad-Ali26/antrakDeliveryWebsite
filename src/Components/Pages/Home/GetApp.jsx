// @ts-nocheck
import React from "react";
import { NavLink } from "react-router-dom";

export default function GetApp() {
  return (
    <section className="pt-10 lg:pt-20 pb-10 md:pb-0 bg-[#002E63]">
      <div className="w-[90%] md:w-4/5 m-auto">
        <h2 className="text-lg md:text-2xl lg:text-4xl font-ubuntu text-white font-semibold mb-4 lg:mb-6">
          Get the app
        </h2>
        <p className="text-lg lg:text-xl font-ubuntu text-white max-w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit
          sem vel blandit dictum. Curabitur nec turpis purus.
        </p>

        <div className="flex lg:grid grid-cols-3 gap-8">
          <div className="lg:flex items-start gap-3">
            <button className="mt-8 lg:mt-16">
              <NavLink to="https://www.apple.com/app-store">
                <img
                  src="images/btn-app-store.webp"
                  alt=""
                  className="h-[50px] lg:h-[70px]"
                />
              </NavLink>
            </button>
            <button className="mt-3 lg:mt-16">
              <NavLink to="https://play.google.com/store/apps">
                <img
                  src="images/btn-play-store.webp"
                  alt=""
                  className="h-[50px] lg:h-[70px]"
                />
              </NavLink>
            </button>
          </div>
          <div className="mt-8">
            <img src="images/QR scanner.webp" alt="" className="w-[50px] lg:w-[95px] mb-6" />
            <p className="text-sm lg:text-2xl text-white font-ubuntu font-normal ">
              Scan QR to Download
            </p>
          </div>
          <div className="hidden md:block">
            <img src="images/image 7.webp" alt="" className="w-[600px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

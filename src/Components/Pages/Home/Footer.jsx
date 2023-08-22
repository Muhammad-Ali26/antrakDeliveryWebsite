// @ts-nocheck
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="bg-bg3 bg-cover bg-center">
      <div className="py-8 px-6 md:py-10 md:px-8 lg:py-20 lg:px-14  bg-antrakLogin bg-opacity-90 lg:flex justify-between md:grid grid-cols-2 gap-x-20 gap-y-10 ">
        <div>
          <img
            src="images/white-logo.webp"
            alt="footer"
            className="w-[90px] lg:w-[122px] mb-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <p className="text-base md:text-lg lg:text-xl text-antrakBlue font-ubuntu max-w-[425px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>

          <p className="text-base md:text-lg lg:text-xl text-antrakBlue font-ubuntu mt-8 md:mt-12 lg:mt-28">
            Terms & Conditions - Privacy Policy
          </p>
        </div>

        <div className="space-y-3 md:space-y-6 lg:space-y-10 mt-4 md:mt-0">
          <h2 className="md:text-xl  lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
            Who we are
          </h2>
          <ul className="space-y-3 md:space-y-6 lg:space-y-10">
            <li className="md:text-lg  lg:text-xl text-antrakBlue font-ubuntu">About Us</li>
            <li className="md:text-lg lg:text-xl text-antrakBlue font-ubuntu">
              Our locations
            </li>
            <li className="md:text-lg  lg:text-xl text-antrakBlue font-ubuntu">Career</li>
            <li className="md:text-lg  lg:text-xl text-antrakBlue font-ubuntu">Tracking</li>
          </ul>
        </div>

        <div className="space-y-3 md:space-y-6 lg:space-y-10 mt-4 md:mt-0">
          <h2 className="md:text-xl  lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
            What we do
          </h2>
          <ul className="space-y-3 md:space-y-6 lg:space-y-10">
            <li className="md:text-lg  lg:text-xl text-antrakBlue font-ubuntu">
              Logistics
            </li>
            <li className="md:text-lg  lg:text-xl text-antrakBlue font-ubuntu">Courier</li>
            <li className="md:text-lg  lg:text-xl text-antrakBlue font-ubuntu">COD</li>
          </ul>
        </div>

        <div className="space-y-3 md:space-y-6 lg:space-y-10 mt-4 md:mt-0">
          <h2 className="md:text-xl  lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
            Reach us at
          </h2>
          <ul className="space-y-3 md:space-y-6 lg:space-y-10">
            <li className="md:text-lg  lg:text-xl text-antrakBlue font-ubuntu">
              Antrak@gmail.com
            </li>
            <li className="md:text-lg  lg:text-xl text-antrakBlue font-ubuntu">
              111-111-222
            </li>
            <li className="md:text-lg  lg:text-xl text-antrakBlue font-ubuntu">
              Head-Office- Mall Road Lahore
            </li>
          </ul>

          <div>
            <ul className="flex gap-5 items-end mt-8 md:mt-12 lg:mt-28">
              <li>
                <NavLink to="https://www.facebook.com/"><img src="images/facebook.webp" alt="" className="w-[35px] lg:w-[48px] lg:h-[48px]" /></NavLink>
              </li>
              <li>
                <NavLink to="https://www.instagram.com/"><img src="images/instagram.webp" alt=""  className="w-[35px] lg:w-[48px] lg:h-[48px]" /></NavLink>
              </li>
              <li>
                <NavLink to="https://twitter.com"><img src="images/twitter.webp" alt=""  className="w-[35px] lg:w-[48px] lg:h-[48px]" /></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-3 bg-antrakBlue">
        <p className="text-sm md:text-base lg:text-lg text-antrakWhite text-center font-ubuntu ">2022 ANTRAK Courier. All Rights Reserved</p>
      </div>
    </footer>
  );
}

// @ts-nocheck
import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import { NavLink } from "react-router-dom";
import Navbar from "../Home/Navbar";
import {RiLockPasswordLine} from "react-icons/ri"
import {CgProfile} from "react-icons/cg"

export default function Settings() {
  return (
    <>
      <Navbar />
      <DashboardNavbar />
      <section className="bg-[#F4F5FA] min-h-[78vh]">
        <div className="w-[90%] lg:w-[85%] m-auto pt-6 pb-10 md:pt-100 lg:pt-16 lg:grid grid-cols-3">
          <div className="bg-white rounded-md">
            <div className="border-b-2 border-gray-500">
              <h2 className="px-8 py-4 text-base lg:text-lg text-black font-ubuntu font-semibold">
                Settings
              </h2>
            </div>

            <div className="px-4 pt-6 pb-14">
              <ul className="my-10 flex flex-col gap-6">
              <li>
                  <NavLink className="flex items-center gap-5 hover:bg-gray-400 duration-200 px-4 py-2" to="/update_profile">
                    <CgProfile className="w-[35px] h-[35px]"/>
                    <span className="text-base text-black font-ubuntu font-semibold">Edit Profile</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex items-center gap-5 hover:bg-gray-400 duration-200 px-4 py-2" to="/update_password">
                    <RiLockPasswordLine className="w-[35px] h-[35px]"/>
                    <span className="text-base text-black font-ubuntu font-semibold">Update Password</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex items-center gap-5 hover:bg-gray-400 duration-200 px-4 py-2" to="/saved_address">
                    <img src="images/saved address.webp" alt="saved address" className="w-[30px] h-[30px]"/>
                    <span className="text-base text-black font-ubuntu font-semibold">Saved Address</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex items-center gap-5 hover:bg-gray-400 duration-200 px-4 py-2" to="/order_history">
                    <img src="images/order history.webp" alt="saved address" className="w-[30px] h-[30px]"/>
                    <span className="text-base text-black font-ubuntu font-semibold">Order History</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex items-center gap-5 hover:bg-gray-400 duration-200 px-4 py-2" to="/card_details">
                    <img src="images/card details.webp" alt="saved address" className="w-[30px] h-[30px]"/>
                    <span className="text-base text-black font-ubuntu font-semibold">Card Details </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex items-center gap-5 hover:bg-gray-400 duration-200 px-4 py-2" to= "/restricted_items">
                    <img src="images/restricted.webp" alt="saved address" className="w-[30px] h-[30px]"/>
                    <span className="text-base text-black font-ubuntu font-semibold">Restricted Items </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

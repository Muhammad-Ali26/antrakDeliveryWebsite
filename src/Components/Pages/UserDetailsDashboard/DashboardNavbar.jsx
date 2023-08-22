import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function DashboardNavbar() {
  const location = useLocation().pathname;
  return (
    <>
      <section className="bg-[#F4F5FA]">
        <nav className="bg-antrakLogin mt-[85px] md:mt-32">
          <div className="md:flex justify-between md:w-[90%]  lg:w-4/5 m-auto">
            <ul className="md:flex gap-8">
              <li
                className={`${
                  location === "/user_details_dashboard"
                    ? "text-white border-b-8 border-white"
                    : "text-[#444] border-none"
                } px-3 pt-[20px] pb-[16px] md:text-base lg:text-lg text-[#444] font-ubuntu font-semibold`}
              >
                <NavLink to="/user_details_dashboard">Dashboard</NavLink>
              </li>
              <li
                className={`${
                  location === "/order_history"
                    ? "text-white border-b-8 border-white"
                    : "text-[#444] border-none"
                }  px-3 pt-[20px] pb-[16px] md:text-base lg:text-lg text-[#444] font-ubuntu font-semibold`}
              >
                <NavLink to="/order_history">History</NavLink>
              </li>
              <li
                className={`${
                  location === "/current_order"
                    ? "text-white border-b-8 border-white"
                    : "text-[#444] border-none"
                }  px-3 pt-[20px] pb-[16px] md:text-base lg:text-lg text-[#444] font-ubuntu font-semibold`}
              >
                <NavLink to="/current_order">Current Orders</NavLink>
              </li>
              <li
                className={`${
                  location === "/settings" || location === "/saved_address" || location === "/card_details" || location === "/restricted_items"|| location === "/add_new_card"
                    ? "text-white border-b-8 border-white"
                    : "text-[#444] border-none"
                }  px-3 pt-[20px] pb-[16px] md:text-base lg:text-lg text-[#444] font-ubuntu font-semibold`}
              >
                <NavLink to="/settings">Settings</NavLink>
              </li>
            </ul>

            <div className="">
              <h2 className="px-3 pt-[20px] pb-[16px] md:text-base lg:text-lg text-[#444] font-ubuntu font-semibold cursor-pointer underline">
                Help & Support?
              </h2>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

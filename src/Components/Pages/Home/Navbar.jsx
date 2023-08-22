// @ts-nocheck
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RiLock2Line } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { info_toaster, success_toaster } from "../../../Toaster";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation().pathname;
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
      <nav className="fixed top-0 left-0 bg-antrakWhite w-full shadow-md shadow-gray-400 z-40">
        <div className="lg:w-[90%] m-auto lg:flex justify-between items-center">
          <div className="flex justify-between items-center">
            <span>
              <NavLink to="/">
                <img
                  src="images/logo.webp"
                  alt="log"
                  className="w-28 md:w-32 p-3"
                />
              </NavLink>
            </span>

            <span
              className="text-3xl mx-4 cursor-pointer lg:hidden block"
              onClick={() => setOpen(!open)}
            >
              <TiThMenu className="text-antrakBlue" />
            </span>
          </div>

          <ul
            className={`lg:flex lg:gap-4  2xl:gap-8 lg:items-center font-ubuntu z-[-1] lg:z-auto lg:static absolute bg-white w-full left-0 lg:w-auto transition-all ease-in ${
              open ? "top-30 opacity-100 bg-antrakWhite" : "top-[-400px]"
            } lg:opacity-100 opacity-0`}
          >
            <li
              className={`${
                location === "/"
                  ? "text-white bg-antrakBlue"
                  : "text-antrakBlue bg-transparent"
              } px-5 pb-3 pt-3 md:px-5 md:py-3 font-bold text-lg md:xl lg:text-xl hover:bg-antrakBlue hover:text-antrakWhite rounded duration-300`}
            >
              <NavLink to="/">Home</NavLink>
            </li>

            <li
              className={`${
                location === "/send_parcel" ||
                location === "/pickup_address" ||
                location === "/recepient_address" ||
                location === "/select_vehicle" ||
                location === "/package_details" ||
                location === "/payment"
                  ? "text-white bg-antrakBlue"
                  : "text-antrakBlue bg-transparent"
              } px-5 pb-3 pt-3 md:px-5 md:py-3 font-bold text-lg md:xl lg:text-xl hover:bg-antrakBlue hover:text-antrakWhite rounded duration-300`}
              onClick={handleSendParcel}
            >
              <button>Send Parcel</button>
            </li>

            <li
              className={`${
                location === ""
                  ? "text-white bg-antrakBlue"
                  : "text-antrakBlue bg-transparent"
              } px-5 pb-3 pt-3 md:px-5 md:py-3 font-bold text-lg md:xl lg:text-xl hover:bg-antrakBlue hover:text-antrakWhite rounded duration-300`}
            >
              <NavLink to="">How it works?</NavLink>
            </li>

            <li
              className={`${
                location === ""
                  ? "text-white bg-antrakBlue"
                  : "text-antrakBlue bg-transparent"
              } px-5 pb-3 pt-3 md:px-5 md:py-3 font-bold text-lg md:xl lg:text-xl hover:bg-antrakBlue hover:text-antrakWhite rounded duration-300`}
            >
              <NavLink to="">Become a Driver</NavLink>
            </li>

            {statusCheck === "true" ? (
              <div className="px-5 py-3 md:p-5 ">
                <Menu>
                  <MenuButton>
                    <button className="p-3 bg-antrakBlue rounded-full">
                      <img
                        src="images/user.webp"
                        alt="user"
                        className="w-[30px]"
                      />
                    </button>
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      className="lg:text-2xl font-ubuntu font-semibold hover:text-antrakLogin"
                      onClick={() => {
                        navigate("/user_details_dashboard");
                      }}
                    >
                      My Account
                    </MenuItem>
                    <MenuDivider />
                    <MenuGroup>
                      <MenuItem className="lg:text-xl text-antrakBlue font-ubuntu font-semibold hover:text-antrakLogin">
                        Terms & Conditions
                      </MenuItem>
                      <MenuItem className="lg:text-xl text-antrakBlue font-ubuntu font-semibold hover:text-antrakLogin">
                        Privacy Policy
                      </MenuItem>
                      <MenuItem
                        className="lg:text-xl text-antrakBlue font-ubuntu font-semibold hover:text-antrakLogin"
                        onClick={() => {
                          localStorage.removeItem("accessToken");
                          localStorage.removeItem("UserId");
                          localStorage.removeItem("package");
                          localStorage.removeItem("rEmail");
                          localStorage.removeItem("time");
                          localStorage.removeItem("load_unload");
                          localStorage.removeItem("VehiclesTypeId");
                          localStorage.removeItem("note");
                          localStorage.removeItem("pickupDate");
                          localStorage.removeItem("pickupId");
                          localStorage.removeItem("deliveryId");
                          localStorage.removeItem("rName");
                          localStorage.removeItem("pickupAddress");
                          localStorage.removeItem("phoneNum");
                          localStorage.removeItem("receiverAddress");
                          localStorage.removeItem("CouponId");
                          localStorage.removeItem("bookingId");
                          localStorage.setItem("loginStatus", false);
                          success_toaster(
                            "You Have Been Logged Out Successfully"
                          );
                          navigate("/");
                        }}
                      >
                        Logout
                      </MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </div>
            ) : (
              <div className="px-5 py-3 md:p-5 ">
                <NavLink to="/login">
                  <button className="px-8 py-2 md:px-10 md:py-2 flex justify-center items-center text-antrakLogin md:text-xl lg:text-xl border border-antrakLogin rounded hover:text-antrakWhite hover:bg-antrakLogin duration-300 font-bold text-lg md:xl 2xl:text-2xl">
                    <RiLock2Line />
                    <span>Login</span>
                  </button>
                </NavLink>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

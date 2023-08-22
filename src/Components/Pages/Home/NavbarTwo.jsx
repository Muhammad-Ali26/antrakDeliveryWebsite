import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import {useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const NavbarTwo = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation().pathname;
  const navigate = useNavigate()
  return (
    <>
      <nav className="fixed top-0 left-0 bg-antrakWhite w-full shadow-md shadow-gray-400 z-10">
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
                location === "/send_parcel" || location === "/order_confirmed"
                  ? "text-white bg-antrakBlue"
                  : "text-antrakBlue bg-transparent"
              } px-5 pb-3 pt-3 md:px-5 md:py-3 font-bold text-lg md:xl lg:text-xl hover:bg-antrakBlue hover:text-antrakWhite rounded duration-300`}
            >
              <NavLink to="/send_parcel">Send Parcel</NavLink>
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
                  <MenuItem className="lg:text-2xl font-ubuntu font-semibold hover:text-antrakLogin" onClick={() =>{navigate('/user_details_dashboard')}}>
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
                    <MenuItem className="lg:text-xl text-antrakBlue font-ubuntu font-semibold hover:text-antrakLogin">
                      Logout
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

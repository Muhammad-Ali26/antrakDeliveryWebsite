// @ts-nocheck
import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import { useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar";
import GetAPI from "../../Apis/GetAPI"

export default function UserDetailsDashboard() {
  const navigate = useNavigate()
  const getData = GetAPI("users/homepage")
  console.log("🚀 ~ file: UserDetailsDashboard.jsx:11 ~ UserDetailsDashboard ~ getData:", getData)
  return (
    <>
      <Navbar />
      <DashboardNavbar />
      <section className="bg-[#F4F5FA] min-h-[78vh]">
        <div className="w-[90%] lg:w-[85%] m-auto pt-6 pb-6 md:pt-8 lg:pt-12 lg:grid grid-cols-4 gap-8">
          <div className="col-span-3">
            <div className="md:grid grid-cols-2 gap-6 space-y-6 md:space-y-0">
              <div className="lg:flex gap-6 px-4 lg:px-8  pt-6 pb-10 lg:pb-20 bg-white rounded shadow-md shadow-gray-400 cursor-pointer" onClick={() =>{navigate("/send_parcel")}}>
                <img
                  src="images/parcel.webp"
                  alt="parcel"
                  className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                />
                <div className="">
                  <h2 className="text-antrakBlue text-lg md:text-xl lg:text-2xl font-ubuntu font-semibold mb-2 mt-2 lg:mt-0">
                    Send Parcel
                  </h2>
                  <p className="text-sm text-[#444] font-ubuntu font-semibold 2xl:max-w-[250px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>

              <div className="lg:flex gap-6 px-4 lg:px-8  pt-6 pb-10 lg:pb-20 bg-white rounded shadow-md shadow-gray-400  cursor-pointer"  onClick={() =>{navigate("/order_tracking")}}>
                <img
                  src="images/tracking.webp"
                  alt="parcel"
                  className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                />
                <div className="">
                  <h2 className="text-antrakBlue text-lg md:text-xl lg:text-2xl font-ubuntu font-semibold mb-2 mt-2 lg:mt-0">
                  Tracking
                  </h2>
                  <p className="text-sm text-[#444] font-ubuntu font-semibold 2xl:max-w-[250px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>

              <div className="lg:flex gap-6 px-4 lg:px-8  pt-6 pb-10 lg:pb-20 bg-white rounded shadow-md shadow-gray-400  cursor-pointer" onClick={() =>{navigate("/order_history")}}>
                <img
                  src="images/clock.webp"
                  alt="parcel"
                  className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                />
                <div className="">
                  <h2 className="text-antrakBlue text-lg md:text-xl lg:text-2xl font-ubuntu font-semibold mb-2 mt-2 lg:mt-0">
                  Order History
                  </h2>
                  <p className="text-sm text-[#444] font-ubuntu font-semibold 2xl:max-w-[250px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>

              <div className="lg:flex gap-6 px-4 lg:px-8  pt-6 pb-10 lg:pb-20 bg-white rounded shadow-md shadow-gray-400 cursor-pointer" onClick={() =>{navigate("/saved_address")}}>
                <img
                  src="images/address.webp"
                  alt="parcel"
                  className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
                />
                <div className="">
                  <h2 className="text-antrakBlue text-lg md:text-xl lg:text-2xl font-ubuntu font-semibold mb-2 mt-2 lg:mt-0 ">
                  Saved Addresses 
                  </h2>
                  <p className="text-sm text-[#444] font-ubuntu font-semibold 2xl:max-w-[250px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 flex flex-col items-center gap-4 p-4 lg:p-8 bg-white rounded shadow-md shadow-gray-400">
            <img
              src="images/user 2.webp"
              alt="user"
              className="w-[50px] h-[50px] lg:w-[112px] lg:h-[112px] bg-[#C4C4C4] rounded-full p-2 lg:p-6"
            />

            <h2 className="text-lg text-antrakBlue font-ubuntu font-semibold text-center">Hi,</h2>
            <h2 className="text-lg text-antrakBlue font-ubuntu font-semibold text-center">{getData?.getData?.Response?.[0]?.name}</h2>
            <p className="text-sm text-[#444] font-ubuntu font-semibold text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// @ts-nocheck
import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import { FaCommentAlt } from "react-icons/fa";
import Navbar from "../Home/Navbar";

export default function OrderTracking() {
  return (
    <>
      <Navbar />
      <DashboardNavbar />
      <section className="bg-[#F4F5FA] min-h-[89.5vh]">
        <div className="w-[90%] lg:w-[85%] m-auto pt-6 pb-10 md:pt-10  lg:pt-16">
          <div className="bg-white rounded-md p-6">
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-20">
                <h2 className="text-base md:text-lg lg:text-2xl text-[#5F5C5C] font-ubuntu font-semibold">
                  Order#12345678
                </h2>

                <div>
                  <h2 className="text-base lg:text-xl text-[#5F5C5C] font-ubuntu font-semibold">
                    Pickup
                  </h2>
                  <p className="text-base lg:text-xl text-antrakBlue font-ubuntu font-semibold mt-2">
                    Street 123, G1 Johar Town Lahore City, Punjab
                  </p>
                </div>
              </div>

              <div className="flex flex-col text-end gap-12">
                <div>
                  <h2 className="text-base md:text-lg lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                    Order Status
                  </h2>
                  <p className="text-base lg:text-lg text-antrakLogin font-ubuntu font-semibold mt-1">
                    Order in progress
                  </p>
                </div>

                <div className="text-end">
                  <h2 className="text-base lg:text-xl text-[#5F5C5C] font-ubuntu font-semibold">
                    Pickup
                  </h2>
                  <p className="text-base lg:text-xl text-antrakBlue font-ubuntu font-semibold mt-2">
                    Street 123, G1 Johar Town Lahore City, Punjab
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-20">
              <div>
                <div className="w-[60px] h-[60px] bg-antrakBlue rounded-full">
                  <img src="images/tick.webp" alt="tick" className="p-4" />
                </div>
                <div className="mt-6">
                  <h2 className="text-base lg:text-lg text-antrakBlue font-ubuntu font-semibold  ">
                    Request Accepted
                  </h2>
                  <p className="text-sm text-[#5F5C5C] font-ubuntu font-semibold mt-1">
                    14 Feb, 2022 09:00 am
                  </p>
                </div>
              </div>

              <div>
                <div className="w-[60px] h-[60px] bg-antrakBlue rounded-full">
                  <img src="images/tick.webp" alt="tick" className="p-4" />
                </div>
                <div className="mt-6">
                  <h2 className="text-base lg:text-lg text-antrakBlue font-ubuntu font-semibold  ">
                    On the way
                  </h2>
                  <p className="text-sm text-[#5F5C5C] font-ubuntu font-semibold mt-1">
                    14 Feb, 2022 09:00 am
                  </p>
                </div>
              </div>
              <div>
                <div className="w-[60px] h-[60px] bg-antrakBlue bg-opacity-50 rounded-full flex items-center justify-center">
                  <div className="w-[20px] h-[20px] bg-antrakBlue rounded-full"></div>
                </div>
                <div className="mt-6">
                  <h2 className="text-base lg:text-lg text-antrakBlue font-ubuntu font-semibold  ">
                    Picked up
                  </h2>
                  <p className="text-sm text-[#5F5C5C] font-ubuntu font-semibold mt-1">
                    14 Feb, 2022 09:00 am
                  </p>
                </div>
              </div>
              <div>
                <div className="w-[60px] h-[60px] border border-antrakBlue rounded-full"></div>
                <div className="mt-6">
                  <h2 className="text-base lg:text-lg text-antrakBlue font-ubuntu font-semibold  ">
                    Out for Delivery
                  </h2>
                  <p className="text-sm text-[#5F5C5C] font-ubuntu font-semibold mt-1">
                    14 Feb, 2022 09:00 am
                  </p>
                </div>
              </div>
              <div>
                <div className="w-[60px] h-[60px] border border-antrakBlue rounded-full"></div>
                <div className="mt-6">
                  <h2 className="text-base lg:text-lg text-antrakBlue font-ubuntu font-semibold  ">
                    Delivered
                  </h2>
                  <p className="text-sm text-[#5F5C5C] font-ubuntu font-semibold mt-1">
                    14 Feb, 2022 09:00 am
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-20 ">
              <div className="flex items-center gap-5">
                <div className="bg-antrakLogin w-[80px] h-[80px] rounded-full "></div>
                <h2 className="text-base md:text-lg lg;text-2xl text-black font-semibold font-ubuntu">
                  Driver Name{" "}
                </h2>
              </div>

              <div>
                <h2 className="text-base md:text-lg lg;text-2xl text-[#5F5C5C] font-semibold font-ubuntu text-right">
                  GHK-165V
                </h2>
                <p className="text-base md:text-lg lg;text-2xl text-black font-semibold font-ubuntu mt-2">
                  Vehical Name
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-20 ">
              <div className="grid grid-cols-2 gap-5">
                <button className="flex items-center gap-5 bg-antrakBlue px-20 rounded text-antrakLogin text-lg font-ubuntu font-semibold hover:bg-antrakLogin hover:text-antrakBlue duration-200">
                  <FaCommentAlt className="" />
                  <span className="">Message</span>
                </button>
                <button className="flex items-center gap-5 bg-antrakBlue px-20 rounded text-antrakLogin text-lg font-ubuntu font-semibold hover:bg-antrakLogin hover:text-antrakBlue duration-200">
                  <FaCommentAlt className="" />
                  <span className="">Call</span>
                </button>
              </div>

              <div>
                <h2 className="text-base md:text-lg lg;text-2xl text-[#5F5C5C] font-semibold font-ubuntu text-right">
                  Estd. Delivey
                </h2>
                <p className="text-base md:text-lg lg;text-2xl text-black font-semibold font-ubuntu mt-2">
                  14 Feb, 2022 09:00 AM
                </p>
              </div>
            </div>
            
            <div className="mt-10">
                <iframe
                  className="h-[400px]"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  title="map"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%&height=400&hl=en&q=%C4%B+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                ></iframe>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

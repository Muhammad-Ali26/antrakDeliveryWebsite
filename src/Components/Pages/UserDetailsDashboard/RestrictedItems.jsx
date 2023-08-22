// @ts-nocheck
import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import GetAPI from "../../Apis/GetAPI";
import baseUrl from "../../Apis/BaseUrl";
import Navbar from "../Home/Navbar";

export default function RestrictedItems() {
  const getData = GetAPI("restricted/getall");
  console.log(
    "🚀 ~ file: RestrictedItems.jsx:8 ~ RestrictedItems ~ getData:",
    getData
  );
  return (
    <>
      <Navbar />
      <DashboardNavbar />

      <section className="bg-[#F4F5FA] min-h-[78vh]">
        <div className="w-[90%] lg:w-[85%] m-auto pt-6 pb-10 md:pt-10  lg:pt-16">
          <div className="bg-white rounded-md px-5 py-10 md:px-0 lg:py-10 lg:px-5">
            <h2 className="text-antrakBlue text-base md:text-lg lg:text-2xl font-ubuntu font-semibold text-center">
              Restricted Items
            </h2>

            <div className="grid grid-cols-4 gap-6 mt-8">
              {getData?.getData?.Response?.[0]?.images?.map((img, index) => (
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={baseUrl + "/" + img}
                    alt="img"
                    className="w-20 h-20 object-contain"
                  />
                  <h2 className="text-lg text-antrakBlue font-ubuntu font-semibold mt-2">
                    {getData?.getData?.Response?.[0]?.titles?.find(
                      (title, key) => key === index
                    )}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

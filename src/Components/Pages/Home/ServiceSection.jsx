import React from "react";
import serviceCard from "./ServiceCard";
import { NavLink, useNavigate } from "react-router-dom";
import { info_toaster } from "../../../Toaster";
export default function ServiceSection() {
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
    <section className="pt-8 md:pt-12 lg:pt-28 lg:pb-16 pb-12 bg-[#F4F5FA]">
      <div className="w-[90%] md:w-4/5  m-auto">
        <h2 className="lg:mb-8 text-lg md:text-2xl lg:text-4xl font-ubuntu text-antrakBlue text-center font-semibold mb-5">
          Making life easier with{" "}
          <span className="text-lg md:text-2xl lg:text-4xl font-ubuntu text-antrakLogin">
            Antrak Delivery Services
          </span>
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-[#888] font-ubuntu text-center font-medium mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>

      <div className="lg:pt-16 lg:grid lg:grid-cols-2 lg:justify-center lg:gap-8 w-[90%] md:w-4/5 m-auto space-y-3 lg:space-y-0">
        {serviceCard.map((data) => (
          <div className="lg:flex items-center bg-white pt-6 px-3 pb-10 lg:pt-8 lg:px-8 lg:pb-20 border gap-6">
            <img
              src={data.img}
              alt="img"
              className="w-[40px] lg:w-[50px] lg:mt-8 text-center"
            />

            <div className="flex flex-col gap-3">
              <h4 className="text-base lg:text-2xl font-ubuntu font-semibold text-antrakBlue mt-4">
                {data.title}
              </h4>
              <p className="text-sm md:text-base lg:text-lg font-ubuntu font-normal lg:max-w-[450px]">
                {data.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[90%] md:w-4/5 m-auto space-x-3 lg:space-x-0 lg:flex lg:justify-center lg:items-center lg:gap-8 mt-10 lg:mt-20">
        <button
          className="border px-4 py-[9px] md:px-14 md:py-[13px] lg:px-14 lg:py-4   rounded-md border-antrakWhite bg-antrakBlue text-antrakWhite text-base md:text-lg lg:text-2xl font-semibold hover:bg-transparent hover:text-antrakBlue hover:border-antrakBlue duration-200"
          onClick={handleSendParcel}
        >
          Send Parcel
        </button>
        <NavLink to="https://play.google.com/store/apps">
          <button className="border px-2 py-2 md:px-5 md:py-3 lg:px-5 lg:py-[15px] rounded-md border-antrakLogin text-antrakLogin text-base md:text-lg lg:text-2xl font-semibold hover:bg-antrakLogin hover:text-antrakWhite duration-200">
            Download the App
          </button>
        </NavLink>
      </div>
    </section>
  );
}

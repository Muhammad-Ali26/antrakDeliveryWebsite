import React from "react";
import cardData from "./CardData";

export default function WhoWeAre() {
  return (
    <section>
      <div
        className="bg-antrakBlue bg-bg1 bg-cover bg-center bg-fixed"
        // style={{ backgroundImage: "url(images/courierServices.webp)" }}
      >
        <div className="flex flex-col items-center py-8 md:py-12 lg:py-20">
          <h2 className="text-xl md:text-2xl lg:text-4xl text-antrakWhite font-ubuntu font-semibold mb-4 md:8 lg:mb-10">
            Who We Are?
          </h2>
          <p className="text-base md:text-lg lg:text-2xl text-antrakWhite font-ubuntu text-center leading-normal max-w-[310px] md:max-w-[600px] lg:max-w-[1170px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <div className="py-10 md:py-12 lg:py-20 bg-antrakLogin bg-opacity-80 text-center">
          <h2 className="text-xl md:text-2xl lg:text-4xl text-antrakBlue font-ubuntu font-semibold">
            Why People Believe in Us?
          </h2>

          <div className="w-[90%] md:w-[70%] lg:w-[90%] m-auto space-y-4 lg:space-y-0  mt-8 md:mt-10 lg:mt-14 lg:grid grid-cols-3 justify-center gap-8">
            {cardData.map((data) => (
              <div className="bg-antrakWhite py-8 px-4 lg:px-6 lg:pt-8 lg:pb-[54px] flex justify-center items-center flex-col">
                <img src={data.img} alt="pic" className="w-[50px] mb-5" />
                <h2 className="text-center text-xl md:text-2xl font-ubuntu text-antrakBlue font-semibold mb-4 lg:mb-8">
                  {data.title}
                </h2>
                <p className="text-center text-base md:text-lg font-normal font-ubuntu leading-normal max-w-[270px] md:max-w-[400px] lg:max-w-[280px]">
                  {data.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

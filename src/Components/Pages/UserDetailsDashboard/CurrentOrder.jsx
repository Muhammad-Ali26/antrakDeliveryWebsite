// @ts-nocheck
import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import Navbar from "../Home/Navbar";
import { useNavigate } from "react-router-dom";
import GetAPI from "../../Apis/GetAPI";
export default function CurrentOrder() {
  const navigate = useNavigate();
  const getData = GetAPI("users/homepage");
  
  return (
    <>
      <Navbar />
      <DashboardNavbar />
      <section className="bg-[#F4F5FA] min-h-[78vh]">
        <div className="w-[90%] lg:w-[85%] m-auto pt-6 pb-10 md:pt-10  lg:pt-16">
          {getData?.getData?.Response?.[0]?.activeBookings.map(
            (data, value) => (
              <div className="bg-white rounded-md">
                <Accordion
                  defaultIndex={[0]}
                  allowMultiple
                  className="mt-4 lg:mt-6 lg:px-8 py-4 lg:py-6"
                >
                  <AccordionItem className="border-none ">
                    <AccordionButton
                      className="md:mb-6"
                      style={{ background: "none" }}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        <div className="md:flex items-center justify-between">
                          <h2 className="text-base md:text-lg text-antrakBlue font-ubuntu font-semibold">
                            Order ID #{data?.orderNum}
                          </h2>
                          <div
                            className="pr-12"
                            onClick={() => {
                              navigate("/cancel_booking");
                            }}
                          >
                            <h2 className="mt-2 md:mt-0 text-base text-[#5F5C5C] font-ubuntu font-semibold underline">
                              Cancel Booking?
                            </h2>
                          </div>
                        </div>

                        <div className="mt-2">
                          <h2 className="text-lg text-antrakLogin font-ubuntu font-semibold">
                            Order Status
                          </h2>

                          <div className="mt-2 md:flex justify-between  pr-12">
                            <h2 className="text-base text-[#5F5C5C] font-ubuntu font-semibold">
                              {data?.bookingStatus}
                            </h2>
                            <div className="bg-[#F4F5FA] p-4 rounded mt-4 md:mt-0">
                              <h2 className="text-sm text-black font-ubuntu font-semibold mb-2">
                                Security Code
                              </h2>
                              <p className="text-sm text-[#5F5C5C] font-ubuntu font-semibold">
                                {data?.securityKey}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-4">
                          <div className="w-[100px] h-[10px] lg:w-[135px] lg:h-[12px] bg-antrakLogin rounded-md"></div>
                          <div className="w-[100px] h-[10px] lg:w-[135px] lg:h-[12px] bg-antrakLogin rounded-md bg-opacity-40"></div>
                          <div className="w-[100px] h-[10px] lg:w-[135px] lg:h-[12px] bg-antrakLogin rounded-md bg-opacity-40"></div>
                          <div className="w-[100px] h-[10px] lg:w-[135px] lg:h-[12px] bg-antrakLogin rounded-md bg-opacity-40"></div>
                          <div className="w-[100px] h-[10px] lg:w-[135px] lg:h-[12px] bg-antrakLogin rounded-md bg-opacity-40"></div>
                        </div>

                        <div className="mt-10">
                          <p className="text-[14px] text-[#5F5C5C] font-ubuntu font-semibold">
                            {data?.note}
                          </p>
                        </div>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel pb={4} className="">
                      <div className="md:grid grid-cols-3 gap-6">
                        {data?.packages?.map((ele, ind) => (
                          <div className="mb-4 lg:mb-0">
                            <h2 className="text-base text-black font-ubuntu font-semibold mb-4">
                              Package Details
                            </h2>
                            <p className="text-sm text-[#5F5C5C] font-ubuntu font-semibold mb-2">
                              1x Medium
                            </p>
                            <p className="text-sm text-[#5F5C5C] font-ubuntu font-semibold mb-2">
                              {ele?.dimensions}
                            </p>
                            <p className="text-sm text-[#5F5C5C] font-ubuntu font-semibold mb-2">
                              {ele?.category}
                            </p>
                            <p className="text-sm text-[#5F5C5C] font-ubuntu font-semibold mb-2">
                              ${ele?.worth}
                            </p>
                          </div>
                        ))}

                        <div className="mb-4 lg:mb-0">
                          <h2 className="text-base text-black font-ubuntu font-semibold mb-4">
                            Pickup Details
                          </h2>
                          <p className="text-sm text-[#5F5C5C] font-ubuntu font-semibold mb-2">
                            {data?.pickupAddress}
                          </p>
                          <p className="text-sm text-[#5F5C5C] font-ubuntu font-semibold mb-2">
                            {data?.pickupTime}
                          </p>
                          <p className="text-sm text-[#5F5C5C] font-ubuntu font-semibold mb-2">
                            {data?.note}
                          </p>
                        </div>

                        <div>
                          <h2 className="text-base text-black font-ubuntu font-semibold mb-4">
                            Receipent Details
                          </h2>
                          <p className="text-sm text-[#5F5C5C] font-ubuntu font-semibold mb-2">
                            {data?.recieverName}
                          </p>
                          <p className="text-sm text-[#5F5C5C] font-ubuntu font-semibold mb-2">
                            {data?.recieverPhoneNum}
                          </p>
                          <p className="text-sm text-[#5F5C5C] font-ubuntu font-semibold mb-2">
                            {data?.dropoffAddress}
                          </p>
                        </div>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}

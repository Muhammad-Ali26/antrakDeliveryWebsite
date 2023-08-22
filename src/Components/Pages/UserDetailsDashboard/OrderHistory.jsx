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
import GetAPI from "../../Apis/GetAPI";

export default function () {
  const getData = GetAPI(`booking/getall/${localStorage.getItem("UserId")}`);
  console.log(getData);
  return (
    <>
      <Navbar />
      <DashboardNavbar />
      <section className="bg-[#F4F5FA] min-h-[89.5vh]">
        <div className="w-[90%] lg:w-[85%] m-auto pt-6 pb-10 md:pt-10  lg:pt-16">
          {getData?.getData?.Response?.map((data, index) => (
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
                        <div className="md:flex items-center gap-4">
                          <h2 className="text-base md:text-lg text-[#5F5C5C] font-ubuntu font-semibold">
                            Order
                            <span className="text-base md:text-lg text-black">
                              #{data?.orderNumber}
                            </span>
                          </h2>
                        </div>
                        <div className="pr-12">
                          <h2 className="mt-2 md:mt-0 text-base text-[#5F5C5C] font-ubuntu font-semibold">
                            {data?.orderDate}
                          </h2>
                        </div>
                      </div>

                      <div className="lg:flex items-center gap-8 mt-6">
                        <h2 className="text-base text-[#5F5C5C]  font-ubuntu font-semibold">
                          Pickup
                        </h2>
                        <p className="text-sm md:text-base text-black font-ubuntu font-semibold">
                          {data?.pickupAddress}
                        </p>
                      </div>

                      <div className="md:flex justify-between items-end mt-6">
                        <div className="lg:flex items-center gap-[22px] ">
                          <h2 className="text-base text-[#5F5C5C]  font-ubuntu font-semibold">
                            Dropoff
                          </h2>
                          <p className="text-sm md:text-base text-black font-ubuntu font-semibold">
                            {data?.deliveryAddress}
                          </p>
                        </div>
                        <div className="flex gap-16 lg:gap-10 md:pr-12 mt-4 md:mt-0">
                          <h2 className="text-base lg:text-lg text-antrakBlue font-ubuntu font-semibold">
                            Total Amount
                          </h2>
                          <p className="text-base lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                            ${data?.amount}
                          </p>
                        </div>
                      </div>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4} className="">
                    <div className="md:grid grid-cols-2">
                      <div className="mb-4 lg:mb-0">
                        <h2 className="md:text-base lg:text-lg text-antrakBlue font-ubuntu font-semibold mb-4">
                          Pickup Details
                        </h2>
                        <div className="flex gap-5  md:gap-10">
                          <div className="flex flex-col gap-3">
                            <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                              Name:
                            </h2>
                            {/* <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                              Email:
                            </h2> */}
                            <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                              Phone No:
                            </h2>
                            <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                              Address:
                            </h2>
                            <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                              Schedule:
                            </h2>
                            {/* <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                              Notes:
                            </h2> */}
                          </div>

                          <div className="flex flex-col gap-3">
                            <p className="text-sm text-black font-ubuntu font-semibold">
                              {data?.senderName}
                            </p>
                            {/* <p className="text-sm text-black font-ubuntu font-semibold">
                              ahsanahmad43@gmail.com
                            </p> */}
                            <p className="text-sm text-black font-ubuntu font-semibold">
                              {data?.senderPhoneNum}
                            </p>
                            <p className="text-sm text-black font-ubuntu font-semibold">
                              {data?.pickupAddress}
                            </p>
                            <p className="text-sm text-black font-ubuntu font-semibold">
                              {data?.orderDate}
                            </p>
                            {/* <p className="text-sm text-black font-ubuntu font-semibold">
                              Glass items, handle with care
                            </p> */}
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 lg:mb-0">
                        <h2 className="md:text-base lg:text-lg text-antrakBlue font-ubuntu font-semibold mb-4">
                          Receiver Details
                        </h2>
                        <div className="flex gap-5 md:gap-10">
                          <div className="flex flex-col gap-3">
                            <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                              Name:
                            </h2>
                            {/* <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                              Email:
                            </h2> */}
                            <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                              Phone No:
                            </h2>
                            <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                              Address:
                            </h2>
                          </div>

                          <div className="flex flex-col gap-3">
                            <p className="text-sm text-black font-ubuntu font-semibold">
                              {data?.receiverName}
                            </p>
                            {/* <p className="text-sm text-black font-ubuntu font-semibold">
                              ahsanahmad43@gmail.com
                            </p> */}
                            <p className="text-sm text-black font-ubuntu font-semibold">
                              {data?.receiverPhoneNum}
                            </p>
                            <p className="text-sm text-black font-ubuntu font-semibold">
                              {data?.deliveryAddress}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="mt-8">
         <h2 className="md:text-base lg:text-lg text-antrakBlue font-ubuntu font-semibold mb-4">
           Package Details
         </h2>
         <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-4 md:space-y-0">
           <div className="bg-[#F4F5FA] rounded p-6">
             <h2 className="text-sm text-black font-ubuntu font-semibold mb-4">
               Package 1
             </h2>
             <div className="flex gap-10">
               <div className="flex flex-col gap-3">
                 <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                   Size
                 </h2>
                 <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                   Dimesions
                 </h2>
                 <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                   Category
                 </h2>
                 <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                   Worth
                 </h2>
               </div>

               <div className="flex flex-col gap-3">
                 <p className="text-sm text-black font-ubuntu font-semibold">
                   1x Medium
                 </p>
                 <p className="text-sm text-black font-ubuntu font-semibold">
                   3 x 3 x 3
                 </p>
                 <p className="text-sm text-black font-ubuntu font-semibold">
                   Documents
                 </p>
                 <p className="text-sm text-black font-ubuntu font-semibold">
                   $500
                 </p>
               </div>
             </div>
           </div>
           <div className="bg-[#F4F5FA] rounded p-6">
             <h2 className="text-sm text-black font-ubuntu font-semibold mb-4">
               Package 1
             </h2>
             <div className="flex gap-10">
               <div className="flex flex-col gap-3">
                 <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                   Size
                 </h2>
                 <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                   Dimesions
                 </h2>
                 <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                   Category
                 </h2>
                 <h2 className="text-sm text-[#5F5C5C]  font-ubuntu font-semibold">
                   Worth
                 </h2>
               </div>

               <div className="flex flex-col gap-3">
                 <p className="text-sm text-black font-ubuntu font-semibold">
                   1x Medium
                 </p>
                 <p className="text-sm text-black font-ubuntu font-semibold">
                   3 x 3 x 3
                 </p>
                 <p className="text-sm text-black font-ubuntu font-semibold">
                   Documents
                 </p>
                 <p className="text-sm text-black font-ubuntu font-semibold">
                   $500
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div> */}

                    <div className="flex justify-between lg:justify-end gap-10 lg:pr-12 mt-6 lg:mt-20">
                      <h2 className="text-base lg:text-lg text-antrakBlue font-ubuntu font-semibold">
                        Total Amount
                      </h2>
                      <p className="text-base lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                        ${data?.amount}
                      </p>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// @ts-nocheck
import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import PostAPI from "../../Apis/PostApi";
import baseUrl from "../../Apis/BaseUrl";
import { TiTick } from "react-icons/ti";
import { info_toaster } from "../../../Toaster";

export const SelectVehicle = () => {
  const navigate = useNavigate();
  const [response, getResponse] = useState("");
  const [selectVehicle, setSelectVehicle] = useState("");
  const [vehicleId, setVehicleId] = useState("");
  const [load, setLoad] = useState(null);
  const [note, setNote] = useState("");

  const [vehicleName, setVehicleName] = useState("");
  const paypal_payment_success = async () => {
    var res = await PostAPI("vehicle/getall/filtered", {
      packages: JSON.parse(localStorage.getItem("package")),
    });
    getResponse(res);
  };
  useEffect(() => {
    paypal_payment_success();
  }, []);

  const handleClick = (index, id, name) => {
    setSelectVehicle(index);
    setVehicleId(id);
    setVehicleName(name);
  };

  const handleInputEvent = (e) => {
    setNote(e.target.value);
  };

  const selectedVehicle = () => {
    if (selectVehicle === "") {
      info_toaster("Please Select Vehicle");
    } else if (load === null) {
      info_toaster("Please Check Load/OffLoad");
    } else {
      navigate("/package_details");
      localStorage.setItem("VehiclesTypeId", vehicleId);
      localStorage.setItem("load_unload", load);
      localStorage.setItem("note", note);
    }
  };
  return (
    <>
      <Navbar />
      <section className="bg-[#F4F5FA] min-h-[89.5vh]">
        <div className="w-[90%] lg:w-4/5 m-auto pt-6 pb-6 md:pt-10 md:pb-10 lg:pt-16 lg:pb-10  mt-[86px] md:mt-[4.5rem]">
          <div>
            <h2 className="text-base md:text-lg lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
              Select Vehicle
            </h2>
            <div className="flex lg:gap-16 md:justify-between lg:justify-normal lg:mt-4">
              {response?.data?.Response?.map((data, index) => (
                <div
                  onClick={() => handleClick(index, data.id, data.name)}
                  className={`relative ${
                    selectVehicle === index &&
                    "px-2 py-2 border-2 border-antrakLogin"
                  }`}
                >
                  <img
                    src={`${baseUrl}/${data?.image}`}
                    alt="bike"
                    className="w-[120px] lg:h-[75px] h-[40px] cursor-pointer"
                  />
                  {selectVehicle === index && (
                    <div className="absolute top-0 right-0 bg-antrakBlue w-5 h-5 rounded-full">
                      <TiTick className="absolute top-[1px] right-[1px] text-antrakWhite text-lg" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 lg:mt-8">
              <h2 className="text-base md:text-lg lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                Add Delivery Notes (optional)
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <textarea
                  name="note"
                  cols="30"
                  rows="6"
                  placeholder="Add comments here...."
                  className="p-2 mt-4 border bg-[#F4F5FA] text-base font-ubuntu rounded"
                  onChange={handleInputEvent}
                ></textarea>
              </div>
            </div>

            <div className="mt-4 lg:mt-8">
              <h2 className="text-base md:text-lg lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                Load/ Offload
              </h2>

              <p className="text-base md:text-lg font-ubuntu text-[#888] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </p>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <input
                type="radio"
                name="load"
                className="block"
                style={{ transform: "scale(1.5)" }}
                onClick={() => {
                  setLoad(true);
                }}
              />
              <label
                htmlFor="load"
                className="text-antrakBlue text-xl font-ubuntu font-semibold"
              >
                Yes
              </label>
              <input
                type="radio"
                name="load"
                className="block"
                style={{ transform: "scale(1.5)" }}
                onClick={() => {
                  setLoad(false);
                }}
              />
              <label
                htmlFor="insurance"
                className="text-antrakBlue text-xl font-ubuntu font-semibold"
              >
                No
              </label>
            </div>

            <div className="flex lg:justify-center gap-4 mt-6 md:mt-8 lg:mt-20">
              <NavLink to="/recepient_address">
                <button className="px-8 py-[7px] md:px-32 md:py-3 border border-antrakBlue rounded text-center text-base lg:text-xl text-antrakBlue font-ubuntu font-semibold hover:bg-antrakBlue hover:text-white duration-300">
                  Back
                </button>
              </NavLink>

              <button
                className="bg-antrakBlue px-4 py-2  md:px-28 md:py-3  border rounded text-center text-base lg:text-xl text-antrakLogin font-ubuntu font-semibold hover:bg-transparent hover:text-antrakBlue duration-300 hover:border-antrakBlue"
                onClick={selectedVehicle}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

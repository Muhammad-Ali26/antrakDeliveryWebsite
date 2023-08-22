// @ts-nocheck
import React, { useState, useRef } from "react";
import Navbar from "../Home/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  GoogleMap,
  useLoadScript,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { PlacesAutocomplete } from "./PlaceComponent";
import PostAPI from "../../Apis/PostApi";
import { error_toaster, info_toaster, success_toaster } from "../../../Toaster";

export const NewPickupAddress = () => {
  const [libraries] = useState(["places"]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCYC3-gTg2XJFIeo9fura6PoNuQzzPeBlc",
    libraries,
  });
  const [selected, setSelected] = useState({ lat: "", lng: "" });

  const [pickAddress, setPickAddress] = useState("");
  const containerStyle = {
    width: "100%",
    height: "325px",
  };
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const navigate = useNavigate();
  const style =
    "bg-transparent block w-full pl-4 pr-8 py-3 border border-black border-opacity-20 rounded font-normal text-sm appearance-none focus:outline-none placeholder:text-opacity-40";

  const [getAddress, setGetAddress] = useState({
    title: "",
    building: "",
    aptNum: "",
    state: "",
    zip: "",
    countryCode: "",
    phoneNum: "",
    city: "",
    lng: "",
    lat: "",
    exactAddress: "",
    UserId: localStorage.getItem("userId"),
  });

  const handleInputChange = (e) => {
    setGetAddress({ ...getAddress, [e.target.name]: e.target.value });
  };
  const addAddress = async (e) => {
    e.preventDefault();
    if (getAddress.title === "") {
      info_toaster("Please Enter Address Title");
    } else if (getAddress.building === "") {
      info_toaster("Please Enter Building Name");
    } else if (getAddress.aptNum === "") {
      info_toaster("Please Enter Apartment Number");
    } else if (getAddress.state === "") {
      info_toaster("Please Enter State");
    } else if (getAddress.zip === "") {
      info_toaster("Please Enter ZipCode");
    } else if (getAddress.countryCode === "") {
      info_toaster("Please Select Country Code");
    } else if (getAddress.phoneNum === "") {
      info_toaster("Please Enter Phone Number");
    } else if (getAddress.city === "") {
      info_toaster("Please Enter City");
    } else {
      let res = await PostAPI("address/add", {
        title: getAddress.title,
        city: getAddress.city,
        building: getAddress.building,
        aptNum: getAddress.aptNum,
        state: getAddress.state,
        zip: getAddress.zip,
        countryCode: `+${getAddress.countryCode}-`,
        phoneNum: getAddress.phoneNum,
        lng: selected.lng,
        lat: selected.lat,
        exactAddress: pickAddress,
        UserId: localStorage.getItem("userId"),
      });

      if (res?.data?.ResponseCode === "1") {
        success_toaster(res?.data?.ResponseMessage);
        navigate("/recepient_address");
      } else {
        error_toaster(res?.data?.errors);
      }
    }
  };
  return (
    <>
      <Navbar />
      <section className="bg-[#F4F5FA]  min-h-[89.5vh]">
        <div className="w-[90%] lg:w-4/5 m-auto pt-6 pb-6 md:pt-10 md:pb-10 lg:pt-16 lg:pb-10  mt-[86px] md:mt-24">
          <div className="lg:grid grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-base md:text-lg lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                Pickup Address
              </h2>
              <p className="text-base md:text-lg font-ubuntu text-[#888] mb-4 lg:mb-0">
                You have no saved addresses.
              </p>

              <form>
                <div className="lg:mt-4 mb-4 lg:mb-0">
                  <input
                    type="text"
                    name="title"
                    maxLength="30"
                    placeholder="Address Title"
                    className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-[#F4F5FA] font-semibold"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="lg:mt-5 md:grid grid-cols-2 gap-6 mb-4 md:mb-0">
                  <input
                    type="text"
                    name="building"
                    maxLength="20"
                    placeholder="Building"
                    className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-[#F4F5FA] font-semibold mb-4 md:mb-0"
                    onChange={handleInputChange}
                  />

                  <input
                    type="text"
                    name="aptNum"
                    maxLength="20"
                    placeholder="Apt"
                    className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-[#F4F5FA] font-semibold"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="md:mt-5 md:grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="state"
                    maxLength="20"
                    placeholder="State"
                    className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-[#F4F5FA] font-semibold mb-4 lg:mb-0"
                    onChange={handleInputChange}
                  />

                  <input
                    type="number"
                    name="zip"
                    maxLength="20"
                    placeholder="Zip Code"
                    className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-[#F4F5FA] font-semibold mb-4 lg:mb-0"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="lg:mt-5 mb-4 lg:mb-0">
                  <PhoneInput
                    country={"us"}
                    placeholder="XXX XXX XXXX"
                    inputStyle={{
                      display: "block",
                      width: "100%",
                      paddingTop: "22px",
                      paddingBottom: "22px",
                      background: "#F4F5FA",
                      color: "#888",
                    }}
                    onChange={(e) => {
                      setGetAddress({ ...getAddress, countryCode: e });
                    }}
                  />
                </div>
                <div className="md:mt-5 md:grid grid-cols-2 gap-6">
                  <input
                    type="number"
                    name="phoneNum"
                    maxLength="20"
                    placeholder="Phone"
                    className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-[#F4F5FA] font-semibold mb-4 lg:mb-0"
                    onChange={handleInputChange}
                  />

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    maxLength="20"
                    className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-[#F4F5FA] font-semibold mb-4 lg:mb-0"
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            </div>
            <div>
              <PlacesAutocomplete
                setSelected={setSelected}
                setPickAddress={setPickAddress}
                style
                
              />
              {isLoaded && (
                <div className="mt-4">
                  <GoogleMap
                    zoom={10}
                    center={
                      pickAddress !== ""
                        ? selected
                        : { lat: 31.5204, lng: 74.3587 }
                    }
                    mapContainerStyle={containerStyle}
                  >
                    {directionsResponse && (
                      <DirectionsRenderer
                        directions={{ lat: 31.5204, lng: 74.3587 }}
                      />
                    )}
                  </GoogleMap>
                </div>
              )}
            </div>
          </div>

          <div className="flex lg:justify-center gap-4 mt-6 md:mt-8 lg:mt-20">
            <NavLink to="/send_parcel">
              <button className="px-8 py-[7px] md:px-28 md:py-3 lg:px-32  border border-antrakBlue rounded text-center text-base lg:text-xl text-antrakBlue font-ubuntu font-semibold hover:bg-antrakBlue hover:text-white duration-300">
                Back
              </button>
            </NavLink>

            <button
              className="bg-antrakBlue px-4 py-2  md:px-16 md:py-3 lg:px-20   border rounded text-center text-base lg:text-xl text-antrakLogin font-ubuntu font-semibold hover:bg-transparent hover:text-antrakBlue duration-300"
              onClick={addAddress}
            >
              Submit & Continue
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

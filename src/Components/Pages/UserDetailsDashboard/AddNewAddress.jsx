// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Home/Navbar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { PlacesAutocomplete } from "../SendParcel/PlaceComponent";
import PostAPI from "../../Apis/PostApi";
import { error_toaster, info_toaster, success_toaster } from "../../../Toaster";
import DashboardNavbar from "./DashboardNavbar";
import { useNavigate } from "react-router-dom";

export default function AddNewAddress() {
  const navigate = useNavigate();
  const [libraries] = useState(["places"]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCYC3-gTg2XJFIeo9fura6PoNuQzzPeBlc",
    libraries,
  });
  const [selected, setSelected] = useState({ lat: "", lng: "" });
  const [show, setShow] = useState(false);
  const [pickAddress, setPickAddress] = useState("");
  const containerStyle = {
    width: "100%",
    height: "325px",
  };

  const mapRef = useRef(null);
  const handleMapLoad = (map) => {
    mapRef.current = map; // Store the map instance in the ref
  };

  const handleMapDrag = () => {
    if (mapRef.current) {
      const center = mapRef.current.getCenter();
      setSelected({ lat: center.lat(), lng: center.lng() });
      setShow(true);
    }
  };

  useEffect(() => {
    if (selected.lat !== "" && selected.lng !== "") {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: selected }, (results, status) => {
        if (status === "OK" && results[0]) {
          setPickAddress(results[0].formatted_address);
        }
      });
    }
  }, [selected]);

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
    UserId: localStorage.getItem("UserId"),
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
    } else if (pickAddress === "") {
      info_toaster("Please Enter Location on Map");
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
        UserId: localStorage.getItem("UserId"),
      });
      console.log("🚀 ~ file: AddNewAddress.jsx:84 ~ addAddress ~ res:", res);
      if (res?.data?.ResponseCode === "1") {
        success_toaster(res?.data?.ResponseMessage);
        navigate("/saved_address");
      } else {
        error_toaster(res?.data?.errors);
      }
    }
  };

  return (
    <>
      <Navbar />
      <DashboardNavbar />
      <section className="bg-[#F4F5FA] min-h-[79.5vh]">
        <div className="w-[90%] lg:w-[85%] m-auto pt-6 pb-10 md:pt-10  lg:pt-16">
          <div className="bg-white rounded-md px-5 py-10 md:px-0 lg:py-10">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-base md:text-lg lg:text-2xl text-antrakBlue font-ubuntu font-semibold mb-6">
                Add New Address
              </h2>

              <div className="lg:grid grid-cols-2 gap-8">
                <form>
                  <div className="lg:mt-4 mb-4 lg:mb-0">
                    <input
                      type="text"
                      name="title"
                      maxLength="30"
                      placeholder="Address Title"
                      className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-transparent font-semibold"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="lg:mt-5 md:grid grid-cols-2 gap-6 mb-4 md:mb-0">
                    <input
                      type="text"
                      name="building"
                      placeholder="Building"
                      maxLength="20"
                      className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-transparent font-semibold mb-4 md:mb-0"
                      onChange={handleInputChange}
                    />

                    <input
                      type="text"
                      name="aptNum"
                      placeholder="Apt"
                      maxLength="20"
                      className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-transparent font-semibold"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="md:mt-5 md:grid grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      maxLength="20"
                      className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-transparent font-semibold mb-4 lg:mb-0"
                      onChange={handleInputChange}
                    />

                    <input
                      type="number"
                      name="zip"
                      placeholder="Zip Code"
                      maxLength="20"
                      className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-transparent font-semibold mb-4 lg:mb-0"
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
                      placeholder="Phone"
                      maxLength="20"
                      className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-transparent font-semibold mb-4 lg:mb-0"
                      onChange={handleInputChange}
                    />

                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      maxLength="20"
                      className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-transparent font-semibold mb-4 lg:mb-0"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <button
                      onClick={addAddress}
                      className="px-4 py-2 bg-antrakBlue border border-antrakBlue text-white my-5 font-ubuntu font-semibold hover:bg-transparent hover:text-antrakBlue duration-200"
                    >
                      Save Address
                    </button>
                  </div>
                </form>

                <div>
                  {show ? (
                    <input
                      type="text"
                      className="bg-white block w-full pl-4 pr-8 py-3 border border-black border-opacity-20 rounded font-normal text-sm appearance-none focus:outline-none placeholder:text-opacity-40 "
                      value={pickAddress}
                      onClick={() => setShow(false)}
                    />
                  ) : (
                    <PlacesAutocomplete
                      setSelected={setSelected}
                      setPickAddress={setPickAddress}
                    />
                  )}
                  {isLoaded && (
                    <div className="mt-4">
                      <GoogleMap
                        zoom={pickAddress === "" ? 10 : 15}
                        center={
                          pickAddress === ""
                            ? { lat: 31.5204, lng: 74.3587 }
                            : selected
                        }
                        mapContainerStyle={containerStyle}
                        draggable={true}
                        onLoad={handleMapLoad} // Store the map instance when it loads
                        onDragEnd={handleMapDrag}
                      >
                        <MarkerF
                          position={
                            pickAddress === ""
                              ? { lat: 31.5204, lng: 74.3587 }
                              : selected
                          }
                          setSelected={setSelected}
                        />
                      </GoogleMap>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

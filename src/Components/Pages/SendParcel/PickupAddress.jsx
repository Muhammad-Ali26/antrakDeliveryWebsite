// @ts-nocheck
import GetAPI from "../../Apis/GetAPI";
import { TiTick } from "react-icons/ti";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Home/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { PlacesAutocomplete } from "./PlaceComponent";
import PostAPI from "../../Apis/PostApi";
import { error_toaster, info_toaster, success_toaster } from "../../../Toaster";

export default function PickupAddress() {
  const { getData, reFetch } = GetAPI(
    `address/getbyuserid?id=${localStorage.getItem("UserId")}`
  );
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addNewAddress, setAddNewAddress] = useState(false);
  const [show, setShow] = useState(false);

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

  const [addressId, setAddressId] = useState("");
  const [addressTitle, setAddressTitle] = useState("");

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
      console.log(res);
      if (res?.data?.ResponseCode === "1") {
        success_toaster(res?.data?.ResponseMessage);
        setAddressId(res?.data?.Response?.[0]?.addressId);
        reFetch();
      } else {
        error_toaster(res?.data?.errors);
      }
    }
  };
  const handlePickupAddress = () => {
    if (selectedAddress === null) {
      info_toaster("Please Select Pickup Address to Continue");
    } else {
      navigate("/recepient_address");
      localStorage.setItem("pickupId", addressId);
      localStorage.setItem("pickupAddress", addressTitle);
    }
  };

  //   This function is used to Get Already Saved Data
  const alreadySavedData = (addressId, addressTitle) => {
    setAddressId(addressId);
    setAddressTitle(addressTitle);
  };

  return (
    <>
      <Navbar />
      <section className="bg-[#F4F5FA]  min-h-[89.5vh]">
        <div className="w-[90%] lg:w-4/5 m-auto pt-6 pb-6 md:pt-10 md:pb-10 lg:pt-16 lg:pb-10  mt-[86px] md:mt-24">
          <h2 className="text-base md:text-lg lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
            Pickup Address
          </h2>
          {getData?.Response?.length === 0 ? (
            <p className="text-base md:text-lg font-ubuntu text-[#888] mb-4 lg:mb-0">
              You have no saved addresses.
            </p>
          ) : (
            ""
          )}

          <div className="md:grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {getData?.Response?.map((value, index) => (
              <div
                className={`bg-[#e4e4e4] rounded px-6 py-4 space-y-2 mb-3 md:mb-0 relative hover:border-2 hover:border-antrakLogin duration-100 ${
                  selectedAddress === index && "border-2 border-antrakLogin"
                }`}
                onClick={(e) => {
                  setSelectedAddress(index);
                  alreadySavedData(value?.id, value?.title);
                }}
              >
                {selectedAddress === index && (
                  <div className="absolute top-0 right-0 bg-antrakBlue w-5 h-5 rounded-full">
                    <TiTick className="absolute top-[1px] right-[1px] text-antrakWhite text-lg" />
                  </div>
                )}
                <h4 className="text-base font-ubuntu font-semibold text-[#666]">
                  {value?.title}
                </h4>
                <p className="font-ubuntu font-semibold text-[#444]">
                  Flat No. {value?.aptNum}
                </p>
                <p className="font-ubuntu font-semibold text-[#444]">
                  {value?.exactAddress}
                </p>
                <p className="font-ubuntu font-semibold text-[#444]">
                  {value?.zip}
                </p>
                <p className="font-ubuntu font-semibold text-[#444]">
                  {value?.phoneNum}
                </p>
              </div>
            ))}
          </div>
          {addNewAddress === true ? (
            ""
          ) : (
            <button
              className="px-1 md:px-16 py-3 md:py-[10px] border border-dashed border-antrakBlue rounded text-center text-sm md:text-lg lg:text-xl text-antrakBlue font-ubuntu font-semibold  hover:bg-antrakBlue hover:text-white duration-300 mt-6"
              onClick={() => {
                setAddNewAddress(true);
              }}
            >
              <span className="border-[3px] border-antrakBlue rounded-full px-3 py-[6px] mr-1 lg:mr-3">
                +
              </span>
              Add New Address
            </button>
          )}

          {addNewAddress === false ? (
            ""
          ) : (
            <div className="lg:grid grid-cols-2 gap-8 mt-20">
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
                      placeholder="Address Title"
                      className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-[#F4F5FA] font-semibold"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="lg:mt-5 md:grid grid-cols-2 gap-6 mb-4 md:mb-0">
                    <input
                      type="text"
                      name="building"
                      maxLength="30"
                      placeholder="Building"
                      className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-[#F4F5FA] font-semibold mb-4 md:mb-0"
                      onChange={handleInputChange}
                    />

                    <input
                      type="text"
                      name="aptNum"
                      placeholder="Apt"
                      maxLength="20"
                      className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-[#F4F5FA] font-semibold"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="md:mt-5 md:grid grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      maxLength="20"
                      className="px-4 py-2 w-full rounded border border-gray-300 outline-none md:text-base  lg:text-lg text-[#666] bg-[#F4F5FA] font-semibold mb-4 lg:mb-0"
                      onChange={handleInputChange}
                    />

                    <input
                      type="number"
                      name="zip"
                      placeholder="Zip Code"
                      maxLength="20"
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
                      placeholder="Phone"
                      maxLength="20"
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
                  <div>
                    <button
                      onClick={addAddress}
                      className="px-4 py-2 bg-antrakBlue border border-antrakBlue text-white my-5 font-ubuntu font-semibold hover:bg-transparent hover:text-antrakBlue duration-200"
                    >
                      Save Address
                    </button>
                  </div>
                </form>
              </div>
              <div>
                {show ? (
                  <input
                    type="text"
                    className="bg-white block w-full pl-4 pr-8 py-3 border border-black border-opacity-20 rounded font-normal text-sm appearance-none focus:outline-none placeholder:text-opacity-40 "
                    value={pickAddress}
                    onClick={()=>setShow(false)}
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
          )}

          <div className="flex lg:justify-center gap-4 mt-6 md:mt-8 lg:mt-20">
            <NavLink to="/send_parcel">
              <button className="px-8 py-[7px] md:px-28 md:py-3 lg:px-32  border border-antrakBlue rounded text-center text-base lg:text-xl text-antrakBlue font-ubuntu font-semibold hover:bg-antrakBlue hover:text-white duration-300">
                Back
              </button>
            </NavLink>

            <button
              className="bg-antrakBlue px-4 py-2  md:px-16 md:py-3 lg:px-20   border rounded text-center text-base lg:text-xl text-antrakLogin font-ubuntu font-semibold hover:bg-transparent hover:text-antrakBlue duration-300 hover:border-antrakBlue"
              onClick={handlePickupAddress}
            >
              Submit & Continue
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

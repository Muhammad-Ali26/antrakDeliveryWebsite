// @ts-nocheck
import React, { useState } from "react";
import Navbar from "../Home/Navbar";
import { useNavigate } from "react-router-dom";
// import { TiTick } from "react-icons/ti";
import GetAPI from "../../Apis/GetAPI";
import baseUrl from "../../Apis/BaseUrl";
import { info_toaster } from "../../../Toaster";

export const SendParcel = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [getDate, setGetDate] = useState("");
  const [formNo, setFormNo] = useState(0);
  const [time, setTime] = useState("");

  const getdata = GetAPI("category/getall");

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const currentDate = new Date();

  const dayElements = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);
    const day = days[date.getDay()];
    const month = date.toLocaleString("default", { month: "long" });
    const dayOfMonth = date.getDate();

    dayElements.push({
      day: day,
      month: month,
      date: dayOfMonth,
    });
  }

  const [formValues, setFormValues] = useState([
    {
      weight: "",
      length: "",
      width: "",
      height: "",
      CategoryId: "",
      categoryName: "",
      unit: "",
      insurance: "",
      estWorth: "",
    },
  ]);
  console.log( formValues)

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      {
        weight: "",
        length: "",
        width: "",
        height: "",
        CategoryId: "",
        categoryName: "",
        unit: "",
        insurance: "",
        estWorth: "",
      },
    ]);
  };
  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleChange = (i, e) => {
    if (e.target.getAttribute("inputName") === "categoryName") {
      let newFormValues = [...formValues];
      newFormValues[i]["CategoryId"] = e.target.value;
      newFormValues[i]["categoryName"] = e.target.getAttribute("nameAttr");
      setFormValues(newFormValues);

      const radioButtons = document.querySelectorAll('input[type="radio"]');
      radioButtons.forEach((radio) => {
        if (radio.id !== `category-${i}`) {
          radio.checked = false;
        }
      });
    } else {
      let newFormValues = [...formValues];
      newFormValues[i][e.target.name] = e.target.value;
      setFormValues(newFormValues);
    }
  };

  const submitPackage = async () => {
    formValues.map(async (data) => {
      if (selectedDate === null) {
        info_toaster("Please Select Date");
      } else if (time === "") {
        info_toaster("Please Select Time");
      } else if (data.CategoryId === "" || data.categoryName === "") {
        info_toaster("Please Select Category");
      } else if (data.weight === "") {
        info_toaster("Please Enter Your Category Weight");
      } else if (data.length === "") {
        info_toaster("Please Enter Your Category Length");
      } else if (data.width === "") {
        info_toaster("Please Enter Your Category Width");
      } else if (data.height === "") {
        info_toaster("Please Enter Your Category Height");
      } else if (data.unit === "") {
        info_toaster("Please Select Category Unit");
      } else if (data.insurance === "") {
        info_toaster("Please Check Insurance");
      } else {
        localStorage.setItem("package", JSON.stringify(formValues));
        localStorage.setItem("pickupDate", JSON.stringify(getDate));
        localStorage.setItem("time", time);
        navigate("/pickup_address");
      }
    });
  };

  return (
    <>
      <Navbar />
      <section className="bg-[#F4F5FA]">
        <div className="lg:w-[85%] w-[90%] m-auto py-6 md:py-8 mt-[86px] md:mt-24">
          {formValues.map((element, index) => (
            <div>
              <h2 className="text-base md:text-xl lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                Select Date & Time
              </h2>
              <div className="grid grid-cols-3 md:grid md:grid-cols-8 lg:grid-cols-9 items-center gap-2 lg:gap-6 mt-4">
                {dayElements.map((dayData, index) => (
                  <div
                    className={`bg-[#C4C4C4] px-4 py-2 rounded text-center text-base md:text-lg text-white font-ubuntu cursor-pointer hover:bg-antrakBlue duration-200 ${
                      selectedDate === index && "bg-antrakBlue"
                    }`}
                    onClick={() => {
                      setSelectedDate(index);
                      setGetDate(dayElements[index]);
                    }}
                  >
                    <ul>
                      <li>
                        <p>{dayData.date}</p>
                        <p>{dayData.month}</p>
                        <p>{dayData.day}</p>
                      </li>
                    </ul>
                  </div>
                ))}
                <div className="col-span-2 md:col-span-1 lg:col-span-2 border rounded border-gray-400">
                  <input
                    type="time"
                    value={time}
                    onChange={handleTimeChange}
                    className="px-4 py-2 w-full rounded lg:text-xl text-black font-ubuntu"
                  />
                </div>
              </div>
              <div className="mt-6 md:mt-10 lg:mt-14">
                <h2 className="text-base md:text-xl lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                  What are you Sending?
                </h2>

                <div className="md:grid md:grid-cols-4 lg:grid-cols-8 items-center gap-4 mt-5 space-y-4 md:space-y-0">
                  {getdata?.getData?.Response?.[0]?.categories?.map(
                    (data, key) => (
                      <div className="relative z-20" >
                        <label
                          htmlFor={`category-${key}`}
                          className={`relative z-20 flex flex-col justify-center items-center bg-[#DBEEFF] px-4 py-6 rounded text-center space-y-3 hover:border-2 hover:border-antrakLogin duration-100 ${
                            selectedCategory === key
                              ? "border-2 border-antrakLogin"
                              : ""
                          }`}
                          onClick={(e) => {
                            handleCategoryClick(key);
                          }}
                          key={index}
                          //
                        >
                          {/* {selectedCategory === key && (
                            <div className="absolute top-0 right-0 bg-antrakBlue w-5 h-5 rounded-full">
                              <TiTick className="absolute top-[1px] right-[1px] text-antrakWhite text-lg" />
                            </div>
                          )} */}
                          <img
                            src={`${baseUrl}/${data?.Image}`}
                            alt="vector"
                            className="w-[60px] h-[50px]"
                          />
                          <h4 className="text-sm text-antrakBlue font-ubuntu font-semibold">
                            {data?.name}
                          </h4>
                        </label>
                        <input
                          value={data.id}
                          nameAttr={data.name}
                          onClick={(e) => handleChange(index, e)}
                          type="checkbox"
                          id={`category-${key}`}
                          inputName="categoryName"
                          checked={
                            formValues[index].CategoryId.toString() ==
                            data.id.toString()
                              ? true
                              : false
                          }
                          className="block absolute right-6 top-4 z-20 cursor-pointer"
                          style={{ transform: "scale(2)" }}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="mt-6 md:mt-10 lg:mt-14 lg:grid grid-cols-2 gap-8">
                <div>
                  <h2 className="text-base md:text-lg lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                    What’s the weight of your Parcel?
                  </h2>

                  <div className="mt-3 lg:mt-5 relative">
                    <input
                      type="number"
                      name="weight"
                      placeholder="0.0"
                      className="px-4 py-2 w-full rounded border border-gray-400 outline-none md:text-base  lg:text-lg text-[#666] bg-[#F4F5FA]"
                      onChange={(e) => handleChange(index, e)}
                    />
                    <span className="absolute top-2 right-4 md:text-base lg:text-lg text-gray-400">
                      lbs
                    </span>
                  </div>
                </div>

                <div className="mt-4 lg:mt-0">
                  <h2 className="text-base md:text-lg lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                    What are the dimensions of Parcel?
                  </h2>

                  <div className="mt-5 lg:grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 relative mb-4 lg:mb-0">
                      <label
                        htmlFor="length"
                        className="md:text-base lg:text-lg text-antrakBlue font-ubuntu font-semibold"
                      >
                        Length
                      </label>
                      <input
                        type="number"
                        name="length"
                        placeholder="0.0"
                        maxLength="10"
                        className="px-3 py-2 w-full rounded border border-gray-400 outline-none lg:text-lg text-[#666] bg-[#F4F5FA]"
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>

                    <div className="flex items-center gap-3 relative mb-4 lg:mb-0">
                      <label
                        htmlFor="length"
                        className="lg:text-lg text-antrakBlue font-ubuntu font-semibold"
                      >
                        Width
                      </label>
                      <input
                        type="number"
                        name="width"
                        placeholder="0.0"
                        maxLength="10"
                        className="px-3 py-2 w-full rounded border border-gray-400 outline-none lg:text-lg text-[#666] bg-[#F4F5FA]"
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>

                    <div className="flex items-center gap-3 relative mb-4 lg:mb-0">
                      <label
                        htmlFor="length"
                        className="lg:text-lg text-antrakBlue font-ubuntu font-semibold"
                      >
                        Height
                      </label>
                      <input
                        type="number"
                        name="height"
                        placeholder="0.0"
                        maxLength="10"
                        className="px-3 py-2 w-full rounded border border-gray-400 outline-none lg:text-lg text-[#666] bg-[#F4F5FA]"
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>

                    <div className="flex items-center gap-3 relative mb-4 lg:mb-0">
                      <label
                        htmlFor="length"
                        className="lg:text-lg text-antrakBlue font-ubuntu font-semibold"
                      >
                        Units
                      </label>
                      <select
                        name="unit"
                        className="px-3 py-2 w-full rounded border border-gray-400 outline-none lg:text-lg text-[#666] bg-[#F4F5FA]"
                        onChange={(e) => handleChange(index, e)}
                      >
                        <option value="mm" className="text-[#666]">
                          mm
                        </option>
                        <option value="cm" className="text-[#666]">
                          cm
                        </option>
                        <option value="m" className="text-[#666]">
                          m
                        </option>
                        <option value="km" className="text-[#666]">
                          km
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-10 lg:mt-14 lg:grid grid-cols-2 gap-8">
                <div>
                  <h2 className="text-base md:text-xl lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                    Estd. Worth of Parcel (Optional)
                  </h2>
                  <p className="mt-3 md:text-base lg:text-lg text-[#666] font-ubuntu max-w-[420px]">
                    Please provide the apporximate worth of package. Rate will
                    be calculated on the basis of worth.
                  </p>
                  <div className="mt-5 relative">
                    <input
                      type="number"
                      name="estWorth"
                      placeholder="0.0"
                      maxLength="10"
                      className="px-4 py-2 w-full rounded border border-gray-400 outline-none lg:text-lg text-[#666] bg-[#F4F5FA]"
                      onChange={(e) => handleChange(index, e)}
                    />
                    <span className="absolute top-2 right-4 lg:text-lg text-gray-400">
                      $
                    </span>
                  </div>
                </div>

                <div className="mt-4 lg:mt-0">
                  <h2 className="text-base md:text-xl lg:text-2xl text-antrakBlue font-ubuntu font-semibold">
                    Insurance
                  </h2>

                  <div className="">
                    <p className="mt-3 md:text-base lg:text-lg text-[#666] font-ubuntu max-w-[400px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor{" "}
                    </p>
                    <div className="mt-5 flex items-center gap-4">
                      <input
                        value={true}
                        onClick={(e) => handleChange(index, e)}
                        type="radio"
                        name="insurance"
                        className="block"
                        style={{ transform: "scale(1.5)" }}
                      />
                      <label
                        htmlFor="insurance"
                        className="text-antrakBlue md:text-xl font-ubuntu font-semibold"
                      >
                        Yes
                      </label>
                      <input
                        value={false}
                        onClick={(e) => handleChange(index, e)}
                        type="radio"
                        name="insurance"
                        className="block"
                        style={{ transform: "scale(1.5)" }}
                      />
                      <label
                        htmlFor="insurance"
                        className="text-antrakBlue md:text-xl font-ubuntu font-semibold"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 lg:mt-20 flex justify-center gap-4">
                {index ? (
                  <>
                    <button
                      onClick={() => removeFormFields(index)}
                      className="px-12 lg:px-16 py-3 lg:py-[10px] border border-dashed border-antrakBlue rounded text-center text-base lg:text-xl text-antrakBlue font-ubuntu font-semibold hover:bg-antrakBlue hover:text-white duration-300"
                    >
                      <span className="border-[3px] border-antrakBlue rounded-full px-3 py-[4px] mr-3">
                        -
                      </span>
                      Remove Package
                    </button>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 items-center">
          <button
            onClick={() => {
              addFormFields();
              setFormNo(formNo + 1);
            }}
            className="px-1 md:px-16 py-3 md:py-[11px] border border-dashed border-antrakBlue rounded text-center text-sm md:text-lg lg:text-xl text-antrakBlue font-ubuntu font-semibold  hover:bg-antrakBlue hover:text-white duration-300"
          >
            <span className="border-[3px] border-antrakBlue rounded-full px-3 py-[6px] mr-1 lg:mr-3">
              +
            </span>
            Add New Package
          </button>
          <button
            className="bg-antrakBlue px-2 py-[12px] md:px-20 md:py-3 md:ml-4 lg:ml-0  border rounded text-center text-sm md:text-lg lg:text-xl text-antrakLogin font-ubuntu font-semibold hover:bg-transparent hover:text-antrakBlue duration-300 hover:border-antrakBlue"
            onClick={submitPackage}
          >
            Submit & Continue
          </button>
        </div>
      </section>
    </>
  );
};

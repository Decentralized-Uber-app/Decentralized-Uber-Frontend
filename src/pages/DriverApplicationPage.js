import React, { useEffect, useState, useRef } from "react";
import SideBar from "../Components/SideBar";
import DriverImg1 from "../assests/images/DriverImg1.svg";
import DriverImg2 from "../assests/images/DriverImg2.svg";
import DriverImg3 from "../assests/images/DriverImg3.svg";
import DriverImg4 from "../assests/images/DriverImg4.svg";
import DriverImg5 from "../assests/images/DriverImg5.svg";
import DriverImg6 from "../assests/images/DriverImg6.svg";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { GoTrashcan } from "react-icons/go";
import { FiEdit } from "react-icons/fi";

const DriverApplicationPage = () => {
  const [driverCount, setDriverCount] = useState(1);
  //useState to render out the drivers for mobile view
  const [tempDriverDetails, setTempDriverDetails] = useState([]);
  let driverDetails = [
    {
      id: "1",
      name: "Sierra Ferguson",
      phoneNo: "+1 256 (729) 3609",
      date: "3000",
      gender: "Female",
      state: "Lagos",
      carType: "Regular",
      licenseId: 3,
      src: DriverImg1,
    },
    {
      id: "2",
      name: "Sierra Ferguson",
      phoneNo: "+1 256 (729) 3609",
      date: "3000",
      gender: "Female",
      state: "Lagos",
      carType: "Regular",
      licenseId: 3,
      src: DriverImg2,
    },
    {
      id: "3",
      name: "Sierra Ferguson",
      phoneNo: "+1 256 (729) 3609",
      date: "3000",
      gender: "Female",
      state: "Lagos",
      carType: "Regular",
      licenseId: 3,
      src: DriverImg3,
    },
    {
      id: "4",
      name: "Sierra Ferguson",
      phoneNo: "+1 256 (729) 3609",
      date: "3000",
      gender: "Female",
      state: "Lagos",
      carType: "Regular",
      licenseId: 3,
      src: DriverImg4,
    },
    {
      id: "5",
      name: "Sierra Ferguson",
      phoneNo: "+1 256 (729) 3609",
      date: "3000",
      gender: "Female",
      state: "Lagos",
      carType: "Regular",
      licenseId: 3,
      src: DriverImg5,
    },
    {
      id: "6",
      name: "Sierra Ferguson",
      phoneNo: "+1 256 (729) 3609",
      date: "3000",
      gender: "Female",
      state: "Lagos",
      carType: "Regular",
      licenseId: 3,
      src: DriverImg6,
    },
    {
      id: "7",
      name: "Sierra Ferguson",
      phoneNo: "+1 256 (729) 3609",
      date: "3000",
      gender: "Female",
      state: "Lagos",
      carType: "Regular",
      licenseId: 3,
      src: DriverImg1,
    },
    {
      id: "8",
      name: "Sierra Ferguson",
      phoneNo: "+1 256 (729) 3609",
      date: "3000",
      gender: "Female",
      state: "Lagos",
      carType: "Regular",
      licenseId: 3,
      src: DriverImg1,
    },
    {
      id: "9",
      name: "Sierra Ferguson",
      phoneNo: "+1 256 (729) 3609",
      date: "3000",
      gender: "Female",
      state: "Lagos",
      carType: "Regular",
      licenseId: 3,
      src: DriverImg1,
    },
    {
      id: "10",
      name: "Sierra Ferguson",
      phoneNo: "+1 256 (729) 3609",
      date: "3000",
      gender: "Female",
      state: "Lagos",
      carType: "Regular",
      licenseId: 3,
      src: DriverImg1,
    },
  ];
  useEffect(() => changeDriver, [driverCount]);

  function checkAllDrivers(e) {
    const checkboxes = [...document.querySelectorAll(".driver-checkbox")];
    if (e.target.attributes.type.ownerElement.checked) {
      checkboxes.map((checkbox) => checkbox.setAttribute("checked", "true"));
    } else {
      checkboxes.map((checkbox) => checkbox.removeAttribute("checked", "true"));
    }
  }

  function changeDriver() {
    console.log(driverCount);
    const newTempDriverDetails = tempDriverDetails;
    if (driverCount > 1 && driverCount < 10) {
      if (newTempDriverDetails.length > 0) newTempDriverDetails.pop();
      driverDetails.map((driverDetail) =>
        parseInt(driverDetail.id) === driverCount
          ? newTempDriverDetails.push(driverDetail)
          : ""
      );
      setTempDriverDetails(newTempDriverDetails);
    }
    if (tempDriverDetails.length === 0)
      tempDriverDetails.push(driverDetails[0]);
    console.log(tempDriverDetails);
  }
  function prevDriver() {
    if (driverCount > 1) setDriverCount(driverCount - 1);
    console.log(driverCount);
    console.log(tempDriverDetails);
  }
  function nextDriver() {
    let newDriverCount = driverCount + 1;
    console.log(newDriverCount, "newDriverCount");
    if (driverCount < 10)
      setTimeout(() => {
        setDriverCount(newDriverCount);
      }, 1000);
  }
  return (
    <div className="bg-gray-200 h-screen">
      <SideBar />
      <div className="bg-gray-200 items-center flex xl:justify-center justify-end h-full">
        <div className="lg:w-10/12 w-full pt-10 sm:w-10/12 xl:w-10/12">
          <header>
            <h1 className="text-2xl">Drivers Application</h1>
          </header>
          <main>
            <table className="lg:text-base md:text-sm  sm:block hidden w-full">
              <th className="w-full lg:text-lg flex">
                <td
                  className="py-3 flex pl-2 justify-start"
                  style={{ width: "4.11%" }}
                >
                  <input
                    className="w-4 transition-all"
                    type="checkbox"
                    onClick={checkAllDrivers}
                  />
                </td>
                <td className="py-3" style={{ width: "6.11%" }}></td>
                <td className="py-3" style={{ width: "17.11%" }}>
                  Name
                </td>
                <td className="py-3" style={{ width: "12.11%" }}>
                  Date
                </td>
                <td className="py-3" style={{ width: "12.11%" }}>
                  Gender
                </td>
                <td className="py-3" style={{ width: "12.11%" }}>
                  State
                </td>
                <td className="py-3" style={{ width: "12.11%" }}>
                  Car Type
                </td>
                <td className="py-3" style={{ width: "12.11%" }}>
                  License ID
                </td>
                <td className="py-3" style={{ width: "11.11%" }}></td>
              </th>
              {driverDetails.map((driverDetail) => (
                <tr className="w-full flex">
                  <td
                    className="py-1 flex pl-2 justify-start"
                    style={{ width: "4.11%" }}
                  >
                    <input
                      className="w-4 navbar-transition driver-checkbox"
                      id={driverDetail.licenseId}
                      type="checkbox"
                    />
                  </td>
                  <td
                    className="py-1 flex justify-center"
                    style={{ width: "6.11%" }}
                  >
                    <img
                      src={driverDetail.src}
                      className="rounded-full"
                      alt="DriverImg"
                    />
                  </td>
                  <td className="items-center" style={{ width: "17.11%" }}>
                    <p>{driverDetail.name}</p>
                    <p className="text-xs text-gray-400">
                      {driverDetail.phoneNo}
                    </p>
                  </td>
                  <td
                    className="items-center py-1 flex justify-center"
                    style={{ width: "12.11%" }}
                  >
                    {driverDetail.date}
                  </td>
                  <td
                    className="items-center py-1 flex justify-center"
                    style={{ width: "12.11%" }}
                  >
                    {driverDetail.gender}
                  </td>
                  <td
                    className="items-center py-1 flex justify-center"
                    style={{ width: "12.11%" }}
                  >
                    {driverDetail.state}
                  </td>
                  <td
                    className="items-center py-1 flex justify-center"
                    style={{ width: "12.11%" }}
                  >
                    {driverDetail.carType}
                  </td>
                  <td
                    className="items-center py-1 flex justify-center"
                    style={{ width: "12.11%" }}
                  >
                    {driverDetail.licenseId}
                  </td>
                  <td className="items-center" style={{ width: "11.11%" }}>
                    <span className="flex application-blue text-lg gap-x-2">
                      <FiEdit className="cursor-pointer" />
                      <GoTrashcan className="cursor-pointer" />
                    </span>
                  </td>
                </tr>
              ))}
            </table>
            <div className="bg-white block sm:hidden py-1">
              {tempDriverDetails.map((tempDriverDetail) => (
                <div>
                  <div className="flex my-0 justify-center h-28">
                    <img
                      src={tempDriverDetail.src}
                      className="rounded-full"
                      alt="DriverImg"
                    />
                  </div>
                  <div className="py-5 px-5">
                    <div>
                      <p className="my-2">Information</p>
                    </div>
                    <table className="border w-full">
                      <tr className="border-b">
                        <td className="py-2.5 pl-2 font-semibold">Name</td>
                        <td className="text-blue-500">
                          {tempDriverDetail.name}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2.5 pl-2 font-semibold">Date</td>
                        <td className="text-blue-500">
                          {tempDriverDetail.date}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2.5 pl-2 font-semibold">Gender</td>
                        <td className="text-blue-500">
                          {tempDriverDetail.gender}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2.5 pl-2 font-semibold">State</td>
                        <td className="text-blue-500">
                          {tempDriverDetail.state}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2.5 pl-2 font-semibold">Car Type</td>
                        <td className="text-blue-500">
                          {tempDriverDetail.carType}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2.5 pl-2 font-semibold">
                          License ID
                        </td>
                        <td className="text-blue-500">
                          {tempDriverDetail.licenseId}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2.5 pl-2 font-semibold">
                          Identification
                        </td>
                        <td className="text-blue-500">123456789</td>
                      </tr>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </main>
          <footer>
            <div className="w-full flex mt-5 justify-end">
              <div className="flex">
                <div className="flex items-center px-4">
                  <p>1-2 of Items</p>
                </div>
                <div className="flex">
                  <div
                    className="px-2 flex items-center cursor-pointer"
                    onClick={prevDriver}
                  >
                    <FaAngleLeft />
                  </div>
                  <div className="flex">
                    <div className="py-2 mx-1 px-4 bg-blue-600 text-white rounded-sm">
                      1
                    </div>
                    <div className="py-2 mx-1 px-4 text-black rounded-sm">
                      2
                    </div>
                  </div>
                  <div
                    className="px-2 flex items-center cursor-pointer"
                    onClick={nextDriver}
                  >
                    <FaAngleRight />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DriverApplicationPage;

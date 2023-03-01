import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import userImg from "../assests/images/userImg.svg";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import RenderChart from "../Components/RenderChart";
import DriverImg2 from "../assests/images/DriverImg2.svg";
import DriverImg1 from "../assests/images/DriverImg1.svg";
import DriverImg3 from "../assests/images/DriverImg3.svg";
import DriverImg4 from "../assests/images/DriverImg4.svg";
import DriverImg5 from "../assests/images/DriverImg5.svg";
import DriverImg6 from "../assests/images/DriverImg6.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import { HiXMark } from "react-icons/hi2";
import FolderOpen from "../assests/images/folderOpen.svg";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drivers = [
    {
      src: DriverImg1,
      name: "Maharrm Hasanli",
      orders: 5,
      income: 20,
    },
    {
      src: DriverImg2,
      name: "Gina Garza",
      orders: 4,
      income: 10,
    },
    {
      src: DriverImg3,
      name: "Brian Reed",
      orders: 3,
      income: 20,
    },
    {
      src: DriverImg4,
      name: "Tammy Spencer",
      orders: 4,
      income: 20,
    },
    {
      src: DriverImg5,
      name: "Joseph Brooks",
      orders: 5,
      income: 20,
    },
    {
      src: DriverImg6,
      name: "Juan Steward",
      orders: 3,
      income: 20,
    },
  ];
  let driverDetails = [
    {
      user: "0x29cABA42cf60819D7B032F4c0aC3351c1F23b994",
      carType: "Regular",
      orderedTime: "04.12.2023 20:30",
      pickUp: "17, Owode Onirin, Lagos",
      destination: "Adeola Odeku, Vi",
      licenseId: 3,
      src: DriverImg1,
    },
    {
      user: "0x29cABA42cf60819D7B032F4c0aC3351c1F23b994",
      carType: "Regular",
      orderedTime: "04.12.2023 20:30",
      pickUp: "17, Owode Onirin, Lagos",
      destination: "Adeola Odeku, Vi",
      licenseId: 3,
      src: DriverImg1,
    },
    {
      user: "0x29cABA42cf60819D7B032F4c0aC3351c1F23b994",
      carType: "Regular",
      orderedTime: "04.12.2023 20:30",
      pickUp: "17, Owode Onirin, Lagos",
      destination: "Adeola Odeku, Vi",
      licenseId: 3,
      src: DriverImg1,
    },
  ];
  function checkAllDrivers(e) {
    const checkboxes = [...document.querySelectorAll(".driver-checkbox")];
    console.log(e.target.attributes.type.ownerElement.checked);
    if (e.target.attributes.type.ownerElement.checked) {
      // document.getElementById
      checkboxes.map((checkbox) => checkbox.setAttribute("checked", "true"));
    } else {
      console.log(2);
      checkboxes.map((checkbox) => checkbox.removeAttribute("checked", "true"));
    }
  }
  function showMenu() {
    setIsOpen(!isOpen);
    if (isOpen !== true) {
      document.documentElement.classList.add("no-body-scroll");
    } else {
      document.documentElement.classList.remove("no-body-scroll");
    }
  }
  return (
    <div className="bg-gray-200 h-screen">
      <SideBar iconCount={"only-home"} />
      <header>
        <div className="flex sm:justify-end justify-between py-3 mx-3 sm:mr-5">
          <div className="sm:hidden text-3xl flex items-center">
            <RxHamburgerMenu className="cursor-pointer" onClick={showMenu} />
          </div>
          <div className="py-1 ">
            <div className=" flex items-center gap-x-3">
              <div className=" w-1/2">
                <div className="border-4 bg-white h-16 rounded-full w-full p-1 border-blue-600">
                  <img
                    src={userImg}
                    className="w-full rounded-full h-full"
                    alt="user"
                  />
                </div>
              </div>
              <p>Admin</p>
            </div>
          </div>
        </div>
        <div
          className="absolute bg-slate-600 bg-opacity-75  w-full navbar-transition h-full z-10 overflow-scroll"
          style={{ top: isOpen ? "0" : "-100%" }}
        >
          <div className="text-gray-100 pt-1">
            <HiXMark
              className="cursor-pointer text-2xl font-bold"
              onClick={showMenu}
            />
          </div>
          <div className="h-full flex-wrap flex justify-center items-center">
            <div className="text-2xl bg-gray-100 p-2 rounded-full">
              <AiFillHome />
            </div>
            <div className="w-full px-6">
              <div>
                <h1 className="font-bold text-lg text-gray-100">Top Drivers</h1>
              </div>
              {drivers.map((driver) => (
                <div className="bg-gray-100 flex justify-evenly py-3 sm:text-base text-xs my-2 rounded-sm">
                  <div className="flex w-2/3">
                    <img src={driver.src} alt="Driver" />
                    <div className="flex items-center mx-2">
                      <h5
                        className="font-bold
                      "
                      >
                        {driver.name}
                      </h5>
                    </div>
                  </div>

                  <div className="w-1/4">
                    <p className=" text-end">
                      Orders :<span className="font-bold">{driver.orders}</span>
                    </p>
                    <p className="">
                      Income :
                      <span className="font-bold">#{driver.income}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <main>
        <div
          className="flex montserrat xl:justify-between lg:justify-center xl:flex-row sm:flex-wrap
        flex-wrap"
        >
          <div className="lg:w-3/5 flex flex-wrap justify-center pl-3 w-full">
            <header className=" w-full pl-3">
              <div className="w-1/4 text-center sm:ml-5 ml-2">
                <h1 className="capitalize text-2xl font-bold">stats</h1>
              </div>
            </header>
            <section className="my-3 lg:ml-5 w-10/12 md:pl-3">
              <div
                className="flex sm:gap-x-2 sm:flex-nowrap 
              flex-wrap sm:pl-4 px-5"
              >
                <div className="dashboard-stats-1 flex justify-around items-center">
                  <div>
                    <img src={FolderOpen} alt="folderOpen" />
                  </div>
                  <p className="text-sm">Total Orders</p>
                  <div>
                    <TfiAngleRight />
                  </div>
                </div>
                <div className="dashboard-stats-2 flex justify-around items-center">
                  <div>
                    <img src={FolderOpen} alt="folderOpen" />
                  </div>
                  <p className="text-sm">Total Earnings</p>
                  <div>
                    <TfiAngleRight />
                  </div>
                </div>
                <div className="dashboard-stats-3 flex justify-around items-center">
                  <div>
                    <img src={FolderOpen} alt="folderOpen" />
                  </div>
                  <p className="text-sm text-start">Profile</p>
                  <div>
                    <TfiAngleRight />
                  </div>
                </div>
              </div>
            </section>
            <main className="w-full flex justify-center pl-6">
              <div className=" md:w-10/12 w-full xl:px-6 md:pl-3 px-0">
                <div className="flex justify-between items-center my-2">
                  <div>
                    <h1
                      className="capitalize sm:text-2xl
                    text-lg tracking-wider"
                    >
                      statistic
                    </h1>
                  </div>
                  <div className="flex justify-between items-center gap-x-3 py-3">
                    <div>
                      <TfiAngleLeft />
                    </div>
                    <div>
                      <p
                        className="capitalize sm:text-xl
                      text-base"
                      >
                        jan 2023
                      </p>
                    </div>
                    <div>
                      <TfiAngleRight />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-3">
                  <div className="w-1/3">
                    <h1
                      className="capitalize sm:text-xl 
                    text-sm font-bold"
                    >
                      performance
                    </h1>
                  </div>
                  <div className="flex justify-between w-1/3">
                    <div>
                      <h5
                        className="sm:text-xl 
                      text-sm"
                      >
                        Orders
                      </h5>
                    </div>
                    <div>
                      <h5
                        className="sm:text-xl 
                      text-sm"
                      >
                        Profit
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="lg:h-64 w-full h-48 bg-blue-300 relative">
                  <RenderChart />
                </div>
              </div>
            </main>
          </div>
          <div className="pr-4 lg:pr-0 md:hidden lg:block w-full lg:w-1/3 sm:px-0 px-5 py-2">
            <header>
              <h1 className="text-xl font-bold">Top Drivers</h1>
            </header>
            <main>
              <div>
                {drivers.map((driver) => (
                  <div className="bg-white flex justify-evenly py-3 sm:text-base text-xs my-2">
                    <div className="flex w-2/3">
                      <img src={driver.src} alt="Driver" />
                      <div className="flex items-center mx-2">
                        <h5
                          className="font-bold
                      "
                        >
                          {driver.name}
                        </h5>
                      </div>
                    </div>

                    <div className="w-1/4">
                      <p className=" text-end">
                        Orders :
                        <span className="font-bold">{driver.orders}</span>
                      </p>
                      <p className="">
                        Income :
                        <span className="font-bold">#{driver.income}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </main>
      <footer className="flex justify-center my-5">
        <div className="lg:w-4/5 xl:w-10/12 lg:ml-3 xl:ml-0 ml-0">
          <table className="lg:text-base md:text-sm lg:block hidden w-full">
            <th className="w-full lg:text-base flex bg-blue-50 bg-opacity-75 my-1">
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
                User
              </td>
              <td className="py-3" style={{ width: "12.11%" }}>
                Car Type
              </td>
              <td className="py-3" style={{ width: "14.89%" }}>
                Ordered Time
              </td>
              <td className="py-3" style={{ width: "14.89%" }}>
                Pickup
              </td>
              <td className="py-3" style={{ width: "14.89%" }}>
                Destination
              </td>
              <td className="py-3" style={{ width: "14.89%" }}>
                Time Spent
              </td>
            </th>
            {driverDetails.map((driverDetail) => (
              <tr className="w-full flex text-sm">
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
                <td
                  className="items-center word-wrap flex-wrap flex "
                  style={{ width: "17.11%" }}
                >
                  {driverDetail.user}
                </td>
                <td
                  className="items-center py-1 flex justify-center"
                  style={{ width: "12.11%" }}
                >
                  {driverDetail.carType}
                </td>
                <td
                  className="items-center py-1 flex justify-center"
                  style={{ width: "14.89%" }}
                >
                  {driverDetail.orderedTime}
                </td>
                <td
                  className="items-center py-1 flex justify-center"
                  style={{ width: "14.89%" }}
                >
                  {driverDetail.pickUp}
                </td>
                <td
                  className="items-center py-1 flex justify-center"
                  style={{ width: "14.89%" }}
                >
                  {driverDetail.destination}
                </td>
                <td
                  className="items-center py-1 flex justify-center"
                  style={{ width: "14.89%" }}
                >
                  {driverDetail.licenseId}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;

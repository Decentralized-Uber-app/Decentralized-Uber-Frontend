import React from "react";
import amico from "../assests/images/amico.svg";
import { TfiAngleDown } from "react-icons/tfi";
import { FaAngleRight } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import DashboardGroup1 from "../assests/images/DashboardGroup1.svg";
import Rectangle_22 from "../assests/images/Rectangle_22.svg";
import Rectangle_24 from "../assests/images/Rectangle_24.svg";
import Rectangle_26 from "../assests/images/Rectangle_26.svg";

const UserSideBar = () => {
  return (
    <div className="absolute right-0 lg:w-1/5 lg:block hidden bg-white border ml-10 h-full top-0">
      <div className="h-14 bg-slate-300"></div>
      <div className="flex h-full pt-5 w-full bg-slate-300">
        <div className="flex h-full flex-wrap">
          <div className="flex">
            <div className="w-1/3 px-3 h-4/5">
              <div className="border-4 rounded-full p-1 border-blue-600">
                <img
                  src={amico}
                  className="w-full rounded-full h-full"
                  alt="amico"
                />
              </div>
            </div>
            <div className="w-full">
              <h4 className="w-full">UiSoup</h4>
              <p className="text-sm text-gray-400">Joined 4 months ago</p>
            </div>
          </div>
          <div className="w-full  flex-wrap items-center h-1/2 flex">
            <div className="w-full h-full pl-2">
              <div className="flex justify-between w-11/12 h-1/3">
                <div className="h-full w-1/3">
                  <img src={Rectangle_22} alt="" />
                </div>
                <div className="lg:w-3/5  mt-4">FAQ</div>
                <div className="border shadow-md rounded-full h-8 flex items-center justify-center mt-4 bg-white w-8 text-sm font-bold">
                  <FaAngleRight />
                </div>
              </div>
              <div className="flex justify-between w-11/12 h-1/3">
                <div className="h-full relative w-1/3">
                  <img src={Rectangle_24} alt="" />
                  <TfiAngleDown className="text-xl relative z-10 -top-12 left-3.5" />
                </div>
                <div className="lg:w-3/5 w-2/5 mt-4">About</div>
                <div className="border shadow-md rounded-full h-8 flex items-center justify-center mt-4 bg-white w-8 text-sm font-bold">
                  <FaAngleRight />
                </div>
              </div>
              <div className="flex justify-between w-11/12 h-1/3">
                <div className="h-full relative w-1/3">
                  <img src={Rectangle_26} alt="" className="z-0" />
                  <BsGear
                    className="text-2xl relative z-10 -top-9 left-4"
                    style={{ color: "#20B9FD" }}
                  />
                </div>
                <div className="lg:w-3/5  mt-4">Settings</div>
                <div className="border shadow-md rounded-full h-8 flex items-center justify-center mt-4 bg-white w-8 text-sm font-bold">
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={DashboardGroup1} alt="Dashbo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSideBar;

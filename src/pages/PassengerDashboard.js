import React from "react";
import SideBar from "../Components/SideBar";
import UserNavBar from "../Components/UserNavBar";
import UserSideBar from "../Components/UserSideBar";
import { TfiAngleDown } from "react-icons/tfi";
import PassengerDashboardSvg from "../assests/images/PassengerDashboard.svg";

const PassengerDashboard = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <UserNavBar />
      <SideBar />
      <UserSideBar />
      <div className="sm:w-9/12 w-full mt-10 flex lg:flex md:hidden px-12 justify-end">
        <div className="h-1/6">
          <button
            type="submit"
            className="bg-green-700 rounded-lg px-7 text-sm py-3  transition-all uppercase text-white h-full w-full"
          >
            fund wallet
          </button>
        </div>
      </div>
      <div className="flex mt-10 justify-center">
        <div className="w-full md:w-10/12">
          <div className="xl:pl-24 lg:pl-10 flex flex-wrap justify-center lg:justify-between  lg:w-10/12 w-full xl:w-8/12">
            <div className="lg:w-full flex w-8/12 lg:justify-between justify-center flex-wrap">
              <div className="dashboard-bg-1 lg:my-0 my-3">
                <div className="text-white flex items-center flex-wrap h-full">
                  <div className="pl-5">
                    <p className="text-xs w-full my-2 capitalize tracking-wider">
                      balance
                    </p>
                    <h1 className="text-3xl w-full my-2">N20000</h1>
                  </div>
                </div>
              </div>
              <div className="dashboard-bg-2">
                <div className="text-white flex items-center flex-wrap h-full">
                  <div className="pl-5">
                    <p className="text-xs w-full my-2 capitalize tracking-wider">
                      balance
                    </p>
                    <h1 className="text-3xl w-full my-2">N20000</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:block flex justify-center flex-wrap mt-11">
              <header className="lg:w-auto sm:w-8/12 w-full sm:px-0 px-1">
                <div className="flex lg:w-auto w-full text-sm">
                  <div className="capitalize flex items-center w-1/3">
                    <h1 className="font-bold">wallet</h1>
                  </div>
                  <div className="capitalize flex items-center w-1/3">
                    transactions
                  </div>
                  <div className="w-1/3 flex justify-end">
                    <button
                      type="submit"
                      className="bg-white rounded-lg flex justify-between px-4 sm:px-7 py-3 transition-all text-black capitalize h-full lg:w-8/12"
                    >
                      duration
                      <TfiAngleDown />
                    </button>
                  </div>
                </div>
              </header>
              <main>
                <div className="flex flex-wrap sm:justify-end lg:pl-0 md:pl-5">
                  <div className="flex flex-wrap  items-center sm:text-base text-xs justify-end sm:w-auto w-1/6">
                    <div>
                      <p className="w-full my-6 sm:my-4 tracking-wider text-gray-500 text-end">
                        100,000
                      </p>
                      <p className="w-full my-6 sm:my-4 tracking-wider text-gray-500 text-end">
                        80,000
                      </p>
                      <p className="w-full my-6 sm:my-4 tracking-wider text-gray-500 text-end">
                        60,000
                      </p>
                      <p className="w-full my-6 sm:my-4 tracking-wider text-gray-500 text-end">
                        40,000
                      </p>
                      <p className="w-full my-6 sm:my-4 tracking-wider text-gray-500 text-end">
                        20,000
                      </p>
                    </div>
                  </div>
                  <div className="border w-10/12 sm:w-10/12 flex justify-end items-end h-60">
                    {/* <svg width="500" height="500">
                    <path
                      d="M 0 0 L50 10 C L300 200 Z"
                      style={{ stroke: "#000", fill: "none" }}
                    ></path>
                  </svg> */}
                    <img src={PassengerDashboardSvg} alt="PassengerDashBoard" />
                  </div>
                  <div className="sm:w-10/12 sm:text-base text-xs w-full pl-16 justify-between pt-1 sm:pt-3 text-gray-400 flex">
                    <div>
                      <p>Jan</p>
                    </div>
                    <div>
                      <p>Feb</p>
                    </div>
                    <div>
                      <p>Mar</p>
                    </div>
                    <div>
                      <p>Apr</p>
                    </div>
                    <div>
                      <p>May</p>
                    </div>
                    <div>
                      <p>Jun</p>
                    </div>
                    <div>
                      <p>Jul</p>
                    </div>
                    <div>
                      <p>Aug</p>
                    </div>
                    <div>
                      <p>Sep</p>
                    </div>
                    <div>
                      <p>Oct</p>
                    </div>
                    <div>
                      <p>Nov</p>
                    </div>
                    <div>
                      <p>Dec</p>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerDashboard;

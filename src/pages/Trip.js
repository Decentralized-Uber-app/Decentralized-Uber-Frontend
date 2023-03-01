import React from "react";
import SideBar from "../Components/SideBar";
import UserNavBar from "../Components/UserNavBar";
import UserSideBar from "../Components/UserSideBar";

import { BsClock } from "react-icons/bs";

import Map from "../Components/Map";

const ArrivedDestination = ({ start, end, status }) => {
  // status is used to determine either user is starting or has ended to know which button to render
  return (
    <div className="bg-gray-200 h-screen">
      <UserNavBar />
      <SideBar iconCount={"all"} />
      <UserSideBar />
      <div className="flex lg:justify-center lg:w-10/12 w-full justify-end  flex-wrap">
        <div className="w-full flex justify-center py-5 text-xl sm:text-2xl">
          <h1>Where would you like to go?</h1>
        </div>
        <Map tripStatus={status} arrived={true} />
      </div>
      <div className="sm:w-10/12 w-full flex justify-center py-3 pl-5 lg:pl-2 flex-wrap">
        <div
          className="lg:w-9/12 w-full flex lg:justify-center
        md:justify-end justify-center gap-y-5 mt-4"
        >
          <div className="">
            <div className="flex">
              <div className="p-2 border rounded-full border-green-500">
                <div className="ellipse-circle-2 green"></div>
              </div>
              <div className="ml-2 sm:text-base text-xs">
                12, Adeola Odeku, Victoria Island, Lagos{" "}
              </div>
            </div>
            <div className=" ml-2.5">
              <div className="location-line bg-gradient-to-t from-red-400 to-green-400"></div>
            </div>
            <div className="flex">
              <div className="p-2 border rounded-full border-red-500">
                <div className="ellipse-circle-2 red-bg"></div>
              </div>
              <div className="ml-2 sm:text-base text-xs">
                15, Ogunlewe, Igbogbo, Ikorodu, Lagos
              </div>
            </div>
          </div>
        </div>
        <div
          className="lg:w-2/5 h-1/6 flex w-1/2 lg:justify-center
        md:justify-end 
        justify-center
        mt-10"
        >
          <div
            style={{ display: status === "start" ? "none" : "block" }}
            className="lg:w-1/3 md:w-1/2 w-3/5"
          >
            <button
              type="submit"
              className="red-bg bg-opacity-30 py-3 hover:bg-opacity-100 
              rounded-3xl shadow-md 
              navbar-transition transition-all text-white h-full w-full"
            >
              End Trip
            </button>
          </div>
          <div
            style={{ display: status === "start" ? "block" : "none" }}
            className="lg:w-1/3 md:w-1/2 w-3/5"
          >
            <button
              type="submit"
              className="bg-green-600 py-3 hover:bg-green-800 
              rounded-3xl shadow-md 
              navbar-transition transition-all text-white h-full w-full"
            >
              Start Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrivedDestination;

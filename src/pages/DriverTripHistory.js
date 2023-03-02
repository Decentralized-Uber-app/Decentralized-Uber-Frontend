import React from "react";
import SideBar from "../Components/SideBar";
import UserNavBar from "../Components/UserNavBar";
import UserSideBar from "../Components/UserSideBar";
import BxTrip from "../assests/images/BxTrip.svg";
import MarkerDistance from "../assests/images/MarkerDistance.svg";
import Timer from "../assests/images/Timer.svg";
import Map from "../Components/Map";
import DriverPassenger from "../assests/images/DriverPassenger.svg";
import DriverPassenger2 from "../assests/images/DriverPassenger2.svg";

const DriverTripHistory = () => {
  return (
    <div className="bg-gray-200 md:h-screen">
      <UserNavBar />
      <SideBar iconCount={"all"} />
      <UserSideBar />
      <div className="flex justify-center">
        <div className="sm:w-10/12 lg:pl-10 w-full lg:block md:flex justify-end flex-wrap">
          <div className="flex justify-between bg-white py-6 px-6 sm:w-10/12 w-full semi-circle sm:gap-x-0 flex-wrap">
            <div className="scale-90">
              <img src={BxTrip} alt="MapLogo" className="" />
              <div className="text-center">237</div>
              <div className="logo-base"></div>
            </div>
            <div className="scale-90">
              <div className="flex justify-center">
                <img src={MarkerDistance} alt="MapLogo" />
              </div>
              <div className="font-bold text-lg text-center">1,291KM</div>
              <div className="logo-base-1  relative top-6"></div>
            </div>
            <div className="scale-90">
              <img src={Timer} alt="MapLogo" />
              <div className="font-semibold text-lg">2:35:45</div>
              <div className="logo-base-2 relative top-7 right-2"></div>
            </div>
          </div>
          <div className="lg:w-auto w-full lg:block md:flex justify-end flex-wrap">
            <div
              className="flex flex-wrap bg-white sm:w-10/12 w-full semi-circle"
              style={{ height: "212.47px" }}
            >
              <Map
                start={{ lat: 6.5, lng: 3.2 }}
                end={{ lat: 6.605874, lng: 3.349149 }}
              />
            </div>
            <div className="semi-circle-base w-full sm:w-10/12 bg-gray-200 flex justify-between">
              <div className="flex ">
                <div className="relative -top-10">
                  <img src={DriverPassenger} alt="PreviousTrip" />
                </div>
                <div className="ml-2">
                  <p className="text-sm text-red-500">Seun Ademidele</p>
                  <p className="text-xs font-semibold">23-OCT-2021</p>
                </div>
              </div>
              <div className="flex justify-end">
                <p className=" w-2/5 text-xs">23.65 KM 45.20 mins N 2,345.65</p>
              </div>
            </div>
          </div>
          <div className="lg:w-auto w-full lg:block md:flex justify-end flex-wrap">
            <div
              className="flex flex-wrap bg-white sm:w-10/12 semi-circle"
              style={{ height: "212.47px" }}
            >
              <Map
                start={{ lat: 6.5, lng: 3.2 }}
                end={{ lat: 6.605874, lng: 3.349149 }}
              />
            </div>
            <div className="semi-circle-base w-full sm:w-10/12 bg-gray-200 flex justify-between">
              <div className="flex ">
                <div className="relative -top-10">
                  <img src={DriverPassenger2} alt="PreviousTrip" />
                </div>
                <div className="ml-2">
                  <p className="text-sm text-red-500">Seun Ademidele</p>
                  <p className="text-xs font-semibold">23-OCT-2021</p>
                </div>
              </div>
              <div className="flex justify-end">
                <p className=" w-2/5 text-xs">23.65 KM 45.20 mins N 2,345.65</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverTripHistory;

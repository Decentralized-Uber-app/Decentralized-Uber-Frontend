import React from "react";
import SideBar from "../Components/SideBar";
import UserNavBar from "../Components/UserNavBar";
import UserSideBar from "../Components/UserSideBar";
import { RiCarFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import RenderChart from "../Components/RenderChart";
import Wallet from "../assests/images/Wallet.svg";

const DriverDashBoardPage = () => {
  const ellipses = [
    "ellipse-1",
    "ellipse-2",
    "ellipse-3",
    "ellipse-4",
    "ellipse-5",
    "ellipse-6",
    "ellipse-7",
    "ellipse-8",
    "ellipse-9",
    "ellipse-10",
    "ellipse-11",
    "ellipse-12",
  ];
  const tripDetails = [
    {
      imgBackground: "white-img-background",
      header: "Distance Covered",
      info: "10km/week",
      imgHeaderClass:
        "head-1 absolute w-full h-24 scale-75 flex justify-center items-center text-2xl text-white -top-8",
      icon: <RiCarFill />,
    },
    {
      imgBackground: "white-img-background",
      header: "Rating",
      info: "Great",
      imgHeaderClass:
        "head-2 absolute w-full h-24 scale-75 flex justify-center items-center text-2xl text-white -top-8",
      icon: <AiFillStar />,
    },
    {
      imgBackground: "white-img-background",
      header: "Trip History",
      info: "5 Trips",
      imgHeaderClass:
        "head-3 absolute w-full h-24 scale-75 flex justify-center items-center text-2xl text-white -top-8",
      icon: <RiCarFill />,
    },
  ];
  return (
    <div className="bg-gray-200 md:h-screen">
      {ellipses.map((ellipse) => (
        <div key={ellipse} className={ellipse}></div>
      ))}
      <UserNavBar />
      <SideBar iconCount={"all"} />
      <UserSideBar />
      <div className="bg-gray-200 h-full">
        <div className="flex h-full flex-wrap sca gap-y-16 lg:w-10/12 md:ml-8 lg:ml-0 pt-4 justify-center">
          <div className="flex md:flex-nowrap flex-wrap justify-between  gap-x-5 lg:w-9/12 md:w-10/12">
            <div className="driver-dashboard-bg flex items-center">
              <RenderChart />
            </div>
            <div className="flex gap-y-4 mt-5 sm:w-auto w-full items-center flex-col">
              <div
                className="driver-dashboard-bg-2
              relative"
              >
                <div className="wallet-bg-2"></div>
              </div>
              <div className="driver-dashboard-bg-1 relative">
                <div className="wallet-bg">
                  <div className="text-gray-100 w-full h-full flex justify-center text-lg items-center">
                    Wallet
                  </div>
                </div>
                <div className="wallet-bg-1 flex justify-center items-center">
                  <div>
                    <img src={Wallet} alt="Wallet" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-9/12 justify-center lg:h-auto flex md:flex-nowrap flex-wrap">
            {tripDetails.map((content) => (
              <div
                className="white-img-background relative xl:w-1/3 w-8/12 md:w-full mx-1 xl:h-60 rounded-lg xl:rounded-none sm:rounded-3xl md:h-40 h-44 lg:h-48 md:mb-0 mb-5"
                key={content.header}
              >
                <div className={content.imgHeaderClass}>{content.icon}</div>
                <div className="absolute top-20 w-full text-center">
                  <h1 className="lg:text-xl md:text-lg blue-text">
                    {content.header}
                  </h1>
                  <p className="text-xs text-gray-400">{content.info}</p>
                </div>
                <div className="absolute xl:flex justify-center h-2 rounded-full w-full top-44 hidden">
                  <div className="h-full rounded-full bg-gray-400 w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashBoardPage;

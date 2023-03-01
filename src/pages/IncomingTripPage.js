import React from "react";
import SideBar from "../Components/SideBar";
import UserNavBar from "../Components/UserNavBar";
import UserSideBar from "../Components/UserSideBar";
import Ellipse54 from "../assests/images/Ellipse_54.svg";
import amico from "../assests/images/amico.svg";

const IncomingTripPage = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <UserNavBar />
      <SideBar />
      <UserSideBar />
      <div className="bg-gray-300 h-full">
        <div className="flex flex-wrap justify-center h-full">
          <header>
            <h1 className="red">Incoming Trip Request</h1>
          </header>
          <main className="h-2/3 w-full">
            <div className="h-full flex flex-wrap justify-center">
              <div className="outer-circle my-5 flex justify-center items-center w-full">
                <div className="relative">
                  <img src={Ellipse54} className="" alt="Background" />
                  <div className="absolute top-1/4 left-1/4 right-1/4">
                    <img src={amico} alt="amico" />
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer>
            <div className="flex">
              <div className="mt-0">
                <div className="my-4 ellipse-ride rounded-full mr-2"></div>
                <div className="my-6 ellipse-ride-2 rounded-full mr-2"></div>
              </div>
              <div>
                <p className="my-3 text-sm">
                  12, Adeola Okerira , Victoria Island , Lagos
                </p>
                <p className="my-3 text-sm">
                  15, Adeola Oke-ira , Victoria Island , Lagos
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <div className="mt-0 mx-5">
                <button className="green text-white rounded-full shadow-md px-9 sm:text-base text-sm sm:px-12 py-2">
                  Accept
                </button>
              </div>
              <div className="mt-0 mx-5">
                <button className="red-bg text-white rounded-full shadow-md px-9 sm:text-base text-sm sm:px-12 py-2">
                  Reject
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default IncomingTripPage;

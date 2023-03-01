import React from "react";
import SideBar from "../Components/SideBar";
import UserNavBar from "../Components/UserNavBar";
import UserSideBar from "../Components/UserSideBar";

const UserDepositPage = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <UserNavBar />
      <SideBar />
      <UserSideBar />
      <div className="bg-gray-200 h-full">
        <div className="sm:w-9/12 w-full mt-10 flex lg:flex md:hidden px-12 justify-end">
          <div className="h-1/6">
            <button
              type="submit"
              className="green rounded-lg bg-opacity-30 px-7 py-3 hover:bg-opacity-100 transition-all uppercase text-white h-full w-full"
            >
              fund wallet
            </button>
          </div>
        </div>
        <div className="md:w-11/12 lg:w-3/4 w-full sm:flex sm:justify-center mt-10 sm:pl-15">
          <div className="sm:w-10/12 w-full sm:pl-24 flex">
            <div className="bg-white border pt-8 py-10 rounded-md lg:px-1 xl:px-10 w-full h-full">
              <header>
                <h1 className="text-black text-center text-2xl">Deposit</h1>
              </header>
              <div className="flex justify-center">
                <form className="w-9/12 ">
                  <div className="flex sm:justify-between lg:flex-row flex-col">
                    <div className="flex flex-col">
                      <label className="text-gray-300 text-sm capitalize my-3 text-center w-full">
                        currency
                      </label>
                      <input
                        className="outline-none pl-5 border lg:w-36 xl:w-40 py-2 rounded-md border-green-700"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-300 text-sm capitalize my-3 text-center w-full">
                        amount
                      </label>
                      <input
                        className="outline-none pl-5 border lg:w-52 xl:w-64 py-2 rounded-md border-green-700"
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mt-10">
                      <div>Amount</div>
                      <div>15 USDC</div>
                    </div>
                    <div className="flex justify-between mt-10">
                      <div>Rate</div>
                      <div>15 USDC</div>
                    </div>
                    <div className="flex justify-between mt-10">
                      <div>Total Deposit</div>
                      <div>15 USDC</div>
                    </div>
                  </div>
                  <div className="w-full mt-10 flex justify-center">
                    <button
                      type="submit"
                      className="bg-green-600 rounded-md py-3.5 hover:bg-opacity-100 transition-all text-white h-full w-2/3"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-300 pt-10 hidden md:flex lg:hidden px-12 justify-center pb-2">
          <div className="h-1/6">
            <button
              type="submit"
              className="green rounded-lg bg-opacity-30 px-7 py-3 hover:bg-opacity-100 transition-all uppercase text-white h-full w-full"
            >
              fund wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDepositPage;

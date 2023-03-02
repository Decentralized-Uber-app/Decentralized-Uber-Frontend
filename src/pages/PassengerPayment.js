import React from "react";
import userImg from "../assests/images/userImg.svg";
import locationClip from "../assests/images/locationClip.svg";
import { CgPhone } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import carImg from "../assests/images/carImg.svg";
import { TiLocation } from "react-icons/ti";

const PassengerPayment = () => {
  return (
    <div>
      <div className="sm:px-24 pt-28 px-1 mb-12">
        <div className="flex justify-between">
          <div className="flex gap-x-3">
            <div className="rounded-full user-img">
              <img
                src={userImg}
                className="w-full rounded-full h-full"
                alt="amico"
              />
            </div>
            <div className="flex flex-wrap">
              <div className="w-full">
                <h1 className="uppercase font-bold text-lg ">peter</h1>
              </div>
              <div className="w-full flex gap-x-3">
                <div className="pt-1">
                  <img src={locationClip} alt="location" />
                </div>
                <p className="text-gray-400">3 mins</p>
              </div>
              <div className="w-full flex gap-x-3">
                <AiFillStar className="text-yellow-400 mt-1" />
                <p className="text-gray-400">4.5</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-400 sm:text-base text-xs text-center">
              Maserati 5 - NS3451
            </p>
            <div>
              <img src={carImg} alt="car" />
            </div>
            <div className="flex gap-x-3">
              <CgPhone className="text-2xl" />
              <h2 className="text-green-500">Contact</h2>
            </div>
          </div>
        </div>
      </div>
      <hr className="border" />
      <div className="my-4 sm:pl-24 pl-10">
        <header>
          <h1 className="uppercase font-bold text-xl">trip</h1>
        </header>
        <main>
          <div className="my-7">
            <div className="flex">
              <TiLocation className="text-blue-500 text-2xl" />
              <p className="text-xl mx-10">Adeola Odeku, VI</p>
            </div>
            <div className="text-xl pl-2 mb-2">
              <p>.</p>
              <p>.</p>
              <p>.</p>
            </div>
            <div className="flex">
              <TiLocation className="text-2xl" />
              <p className=" mx-10 text-xl">Ogunlewe, Ikorodu</p>
            </div>
          </div>
        </main>
      </div>
      <hr className="border w-full" />
      <footer className="sm:pl-24 pl-0 pb-5">
        <div className="my-5 pl-10">
          <h1 className="uppercase text-xl font-bold">payment</h1>
        </div>
        <div className="my-5 pl-10">
          <h1 className="text-green-500 text-xl font-bold uppercase">n,4500</h1>
        </div>
        <div className="w-full h-1/6 flex justify-center mt-10">
          <button
            type="submit"
            className="green bg-opacity-30 py-3 hover:bg-opacity-100 transition-all text-white h-full lg:w-52 w-1/2 md:w-64
            hover:bg-green-600"
          >
            UPLOAD
          </button>
        </div>
      </footer>
    </div>
  );
};

export default PassengerPayment;

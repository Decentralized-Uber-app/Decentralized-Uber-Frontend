import React from "react";
import { BsBell } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { RiCarFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";

const SideBar = ({ iconCount }) => {
  document.documentElement.style.backgroundColor = "rgb(229 231 235)";
  return (
    <div className="absolute left-0 md:block hidden ml-3 h-full top-0">
      <div className="text-3xl header w-1/2">
        <span className="text-5xl mb-6">U</span>
        <span className="mb-5">ride</span>
      </div>
      <div className="bg-gradient-to-b from-green-700 to-green-600 flex justify-center relative flex-wrap h-full rounded-full">
        <div>
          <div className="border w-full border-white rounded-lg px-2 py-2 mt-3">
            <BsBell className="text-2xl text-white" />
          </div>
          <hr className="my-2 border " />
          <div className="w-full grid place-items-center">
            <div className="p-2 text-2xl text-white scale-110 navbar-transition cursor-pointer bg-transparent hover:bg-green-600 px-2.5 my-3 rounded-xl">
              <AiFillHome />
            </div>
            <div
              style={{
                display: iconCount === "home-car" || "all" ? "block" : "none",
              }}
              className="p-2 text-2xl text-white scale-110 navbar-transition cursor-pointer bg-transparent hover:bg-green-600 px-2.5 my-3 rounded-xl"
            >
              <RiCarFill />
            </div>
            <div
              style={{
                display: iconCount !== "all" ? "none" : "block",
              }}
              className="p-2 text-2xl text-white scale-110 navbar-transition cursor-pointer bg-transparent hover:bg-green-600 px-2.5 my-3 rounded-xl"
            >
              <AiFillStar />
            </div>
            <div
              style={{
                display: iconCount !== "all" ? "none" : "block",
              }}
              className="p-2 text-2xl text-white scale-110 navbar-transition cursor-pointer bg-transparent hover:bg-green-600 px-2.5 my-3 rounded-xl"
            >
              <IoDocumentTextOutline />
            </div>
          </div>
          <div className="absolute bottom-10 text-white text-2xl ml-2 hover:scale-110 cursor-pointer navbar-transition">
            <BsQuestionCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

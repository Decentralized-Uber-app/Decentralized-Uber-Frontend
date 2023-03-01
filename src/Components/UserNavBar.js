import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsBell } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { RiCarFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiXMark } from "react-icons/hi2";

const UserNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    if (isOpen !== true) {
      document.documentElement.classList.add("no-body-scroll");
    } else {
      document.documentElement.classList.remove("no-body-scroll");
    }
  };
  const sideBar = [
    {
      icon: <BsBell />,
    },
    {
      icon: <AiFillHome />,
    },
    {
      icon: <RiCarFill />,
    },
    {
      icon: <AiFillStar />,
    },
    {
      icon: <IoDocumentTextOutline />,
    },
    {
      icon: <BsQuestionCircle />,
    },
  ];
  return (
    <div className="m-auto pt-4 pl-0 md:pl-14 lg:pl-0 lg:w-3/5 xl:w-3/4 md:w-11/12">
      <div className="bg-transparent md:block hidden">
        <div className="px-10 xl:px-0  lg:pl-0 flex items-end justify-between">
          <div className="w-1/2">
            <input
              className="outline-none border text-sm pl-3 xl:w-80 py-3.5 shadow-md md:w-full lg:w-full rounded-full"
              placeholder="Search Activities, messages"
            />
          </div>
          <div className="xl:w-1/4 xl:pr-5 md:w-1/2 w-1/2 xl:block flex justify-end lg:w-3/5 h-full">
            <div className="flex flex-wrap">
              <input
                className="sliding-check md:w-3/4 xl:w-16 lg:w-3/4 my-0 h-6"
                type="checkbox"
              />
              <span id="user-status" className="my-0 w-full px-1 py-0">
                Online
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={toggle}
        className="md:hidden flex justify-end px-2 text-2xl font-bold"
      >
        <RxHamburgerMenu
          className="navbar-transition"
          style={{ display: !isOpen ? "block" : "none" }}
        />
        <HiXMark
          className="navbar-transition text-2xl text-white z-20"
          style={{ display: isOpen ? "block" : "none" }}
        />
      </div>
      <div
        style={{ width: isOpen ? "100%" : "0%" }}
        className="bg-gradient-to-b from-green-700 z-10 to-green-600 bg-opacity-10 overflow-hidden navbar-transition py-5 absolute right-0 top-0 h-full w-full"
      >
        {sideBar.map((content) => (
          <div
            key={content.icon}
            className="flex items-center my-5 justify-center text-2xl"
          >
            <div className="flex w-1/5">
              <span
                className="navbar-items-transition border text-white scale-110 navbar-transition cursor-pointer bg-transparent hover:bg-green-600 px-2.5 p-2 rounded-xl"
                style={{ opacity: isOpen ? "100%" : "30%" }}
              >
                {content.icon}
              </span>
            </div>
          </div>
        ))}
        <div className="w-full px-2 pl-3 my-5">
          <input
            className="outline-none border text-sm pl-3 w-full py-3.5 shadow-md md:w-full lg:w-9/12 rounded-full"
            placeholder="Search Activities, messages"
          />
        </div>
        <div className="flex my-3 justify-center">
          <div className="flex w-1/2">
            <input
              className="sliding-check w-1/2 border-green-500 shadow-md my-0 h-6"
              type="checkbox"
            />
            <span id="user-status" className="my-0 ml-2 w-full px-1 py-0">
              Online
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavBar;

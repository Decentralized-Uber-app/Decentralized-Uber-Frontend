import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCarAlt } from "react-icons/fa";
import { SiRider } from "react-icons/si";
import { RiAdminFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const sideBar = [
    {
      text: "Driver",
      icon: <FaCarAlt />,
    },
    {
      text: "Rider",
      icon: <SiRider />,
    },
    {
      text: "Admin",
      icon: <RiAdminFill />,
    },
  ];
  return (
    <div className="bg-transparent py-10 w-full">
      <div className="xl:px-48 h-full lg:px-24 px-5 flex md:items-end items-center justify-between">
        <div className="text-3xl header w-1/2">
          <span className="text-5xl">U</span>ride
        </div>
        <div className="xl:w-1/5 md:block hidden lg:pr-0 w-1/2 pr-5 lg:w-1/3 h-full">
          <ul className="w-full justify-between flex">
            <li className="underline-hover">Driver</li>
            <li className="underline-hover">Rider</li>
            <li className="underline-hover">Admin</li>
          </ul>
        </div>
        <div onClick={toggle} className="block bg-slate-200 md:hidden text-4xl">
          <RxHamburgerMenu />
        </div>
        <div
          style={{ width: isOpen ? "100%" : "0%" }}
          className="bg-slate-200 overflow-hidden navbar-transition py-5 absolute right-0 top-24 w-full"
        >
          {sideBar.map((content) => (
            <div
              key={content.text}
              className="flex items-center my-5 justify-center text-2xl"
            >
              <div className="justify-between flex w-1/3">
                <span
                  className="navbar-items-transition"
                  style={{ opacity: isOpen ? "100%" : "30%" }}
                >
                  {content.icon}
                </span>
                <span
                  className="navbar-items-transition"
                  style={{ opacity: isOpen ? "100%" : "30%" }}
                >
                  {content.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

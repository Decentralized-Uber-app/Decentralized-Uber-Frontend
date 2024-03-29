import React, { useState } from "react";
import DriverUploadModal from "./DriverUploadModal";

const LoginNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.documentElement.classList.add("no-body-scroll");
    } else {
      document.documentElement.classList.remove("no-body-scroll");
    }
  };
  return (
    <div>
      <DriverUploadModal isOpen={isOpen} toggleModal={toggleModal} />
      <div className="bg-transparent py-10 w-full">
        <div className="xl:px-44 lg:px-24 md:px-10 px-3 flex items-end justify-between">
          <div className="text-3xl header w-1/2">
            <span className="text-5xl">U</span>ride
          </div>
          <div className="xl:w-1/5 xl:pr-5 w-1/2 xl:block flex justify-end lg:w-1/3 h-full">
            <button
              onClick={toggleModal}
              className="text-white login-navbar-btn px-4 py-3 text-sm md:px-5 md:py-4 md:text-lg rounded-xl"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginNavBar;

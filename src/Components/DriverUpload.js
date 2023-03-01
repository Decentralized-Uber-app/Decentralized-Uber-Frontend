import React from "react";
import LoginNavBar from "./LoginNavBar";
import DriverUploadImg from "../assests/images/DriverUploadImg.svg";
import heroEllipseGroup from "../assests/images/banner-img.svg";
import heroEllipseGroup2 from "../assests/images/heroImg2.svg";

const DriverUpload = () => {
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
  return (
    <div className="h-screen z-0">
      {ellipses.map((ellipse) => (
        <div key={ellipse} className={ellipse}></div>
      ))}
      <LoginNavBar />
      <div className="flex h-4/6 justify-center">
        <img src={DriverUploadImg} alt="upload" />
      </div>
      <aside className="w-full flex justify-between pl-5">
        <div>
          <img src={heroEllipseGroup} alt="ellipse" />
        </div>
        <div className="relative right-2  sm:right-0">
          <img src={heroEllipseGroup2} alt="ellipse" />
        </div>
      </aside>
    </div>
  );
};

export default DriverUpload;

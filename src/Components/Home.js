import React from "react";
import Navbar from "./Navbar";
import heroImage from "../assests/images/pana.svg";
import heroEllipseGroup from "../assests/images/banner-img.svg";
import heroEllipseGroup2 from "../assests/images/heroImg2.svg";

const Home = () => {
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
    <div className="flex flex-wrap h-screen">
      {ellipses.map((ellipse) => (
        <div key={ellipse} className={ellipse}></div>
      ))}
      <Navbar className="w-full" />
      <section className="w-full xl:px-48 lg:px-24 justify-center lg:justify-between flex-wrap-reverse lg:flex-nowrap flex">
        <div className="grid place-items-center">
          <div className="px-0">
            <h2 className="xl:text-6xl md:text-5xl lg:text-4xl text-2xl leading-tight hero-header my-5 lg:w-9/12">
              Always the ride you want
            </h2>
            <p className="mb-5 hero-text text-xl xl:text-2xl">
              The best way to wherever you’re going
            </p>
            <button className="home-btn text-white tracking-wide px-10 mt-10 rounded-xl py-4">
              Explore
            </button>
          </div>
        </div>
        <div className="py-0">
          <img src={heroImage} alt="BannerImage" />
        </div>
      </section>
      <aside className="w-full flex justify-between pl-5">
        <div>
          <img src={heroEllipseGroup} alt="ellipse" />
        </div>
        <div>
          <img src={heroEllipseGroup2} alt="ellipse" />
        </div>
      </aside>
    </div>
  );
};

export default Home;

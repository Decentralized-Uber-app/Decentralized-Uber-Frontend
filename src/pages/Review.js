import React from "react";
import SideBar from "../Components/SideBar";
import amico from "../assests/images/amico.svg";
import ReviewersImg from "../assests/images/ReviewersImg.svg";

const Review = () => {
  const reviewers = ["Reviewer A", "Reviewer B", "Reviewer C"];
  return (
    <div className="bg-gray-200 w-full py-5 h-screen">
      <SideBar iconCount={"home-car"} />
      <div className="h-full w-full">
        <div className="w-full flex justify-end pr-10">
          <div className="flex">
            <div className="w-44 px-3 h-full">
              <div className="border-4 bg-white h-20 rounded-full p-1 border-blue-600">
                <img
                  src={amico}
                  className="w-full rounded-full h-full"
                  alt="amico"
                />
              </div>
            </div>
            <div className="w-full flex items-center">
              <h4 className="w-full">Admin</h4>
            </div>
          </div>
        </div>
        <div className="flex pt-10 justify-center">
          <div className="w-full sm:w-10/12 flex sm:justify-between items-center lg:flex-row flex-col">
            <div className="flex lg:my-0 my-5 lg:ml-10 items-end">
              <h1 className="text-lg sm:text-2xl">Reviewers list</h1>
            </div>
            <div className="flex">
              <div className="w-full h-full">
                <button
                  type="submit"
                  className="bg-transparent border border-blue-500 px-12 rounded-md shadow text-sm bg-opacity-30 py-3 hover:bg-opacity-100 transition-all text-blue-500 h-full w-full sm:w-full
                  hover:bg-blue-500
                  hover:text-white navbar-transition"
                >
                  Add Reviewer
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-10 justify-center">
          <div className="w-10/12 sm:pl-10 lg:flex-row flex-col items-center lg:justify-between flex">
            {reviewers.map((reviewer) => (
              <div className="rounded-md shadow shadow-blue-500 lg:block flex-wrap flex justify-center lg:w-auto w-10/12 md:w-2/5 py-12 mb-3 lg:py-12 lg:px-14 bg-white">
                <img src={ReviewersImg} alt="Reviewers" />
                <p className="lg:w-auto mt-3 text-center w-full ">{reviewer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import userImg from "../assests/images/userImg.svg";
import ReviewEllipse from "../assests/images/ReviewEllipse.svg";
import { BsFillChatLeftTextFill } from "react-icons/bs";

const PassengerReview = () => {
  const [inputStatus, setInputStatus] = useState(true);
  function focusInput() {
    setInputStatus(!inputStatus);
    if (inputStatus) {
      setTimeout(() => {
        document.getElementById("text-area").focus();
      }, 100);
    }
  }
  return (
    <div>
      <div className="sm:px-24 pt-28  px-7 mb-12">
        <div className="flex justify-between">
          <div className="flex">
            <div className="mx-1">
              <img src={ReviewEllipse} alt="ReviewEllipse" />
            </div>
            <div className="flex items-center">
              <span className="ellipse-circle rounded-full"></span>
              <span className="ellipse-circle rounded-full"></span>
              <span className="ellipse-circle rounded-full"></span>
              <span className="ellipse-circle rounded-full"></span>
              <p className="ml-0.5">9374</p>
            </div>
          </div>
          <div className="">
            <p className="font-light text-xl">N4,500</p>
          </div>
        </div>
      </div>
      <div className="my-4  flex justify-center py-5">
        <div className="flex flex-wrap justify-center">
          <div className="rounded-full user-img">
            <img
              src={userImg}
              className="w-full rounded-full h-full"
              alt="amico"
            />
          </div>
          <div className="w-full text-center font-semibold my-2">
            How was your trip?
          </div>
          <div className="flex gap-x-4">
            <AiFillStar className="text-yellow-400 text-3xl mt-1" />
            <AiFillStar className="text-yellow-400 text-3xl mt-1" />
            <AiFillStar className="text-yellow-400 text-3xl mt-1" />
            <AiFillStar className="text-yellow-400 text-3xl mt-1" />
            <AiFillStar className="text-yellow-400 text-3xl mt-1" />
          </div>
        </div>
      </div>
      <div className="pt-24">
        <div className="flex justify-center">
          <div className=" w-10/12 flex justify-between">
            <div className="text-2xl">
              <BsFillChatLeftTextFill
                className="cursor-pointer"
                onClick={focusInput}
              />
            </div>
            <div className="w-10/12">
              <textarea
                className="w-full border-transparent outline-0"
                placeholder="Add a comment"
                id="text-area"
                disabled={inputStatus}
              ></textarea>
            </div>
          </div>
        </div>
        <hr className="border w-full" />
      </div>
      <div>
        <div className="w-full h-1/6 flex justify-center mt-10">
          <button
            type="submit"
            className="green bg-opacity-30 py-3 hover:bg-opacity-100 transition-all text-white h-full lg:w-52 w-1/2 md:w-64 hover:bg-green-600"
          >
            DONE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassengerReview;

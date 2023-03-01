import React from "react";
import ReviewerFormImg from "../assests/images/ReviewerFormImg.svg";
import Rectangle111 from "../assests/images/Rectangle111.svg";
import Camera from "../assests/images/Camera.svg";

// Use the prop addOrEdit to toggle buttons to display either the upload or edit reviewer button
const AddReviewer = ({ addOrEdit }) => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full flex justify-center flex-wrap">
        <div className="w-full flex justify-center">
          <div className="review-form-bg pt-5 bg-gray-900 flex justify-center relative">
            <img src={ReviewerFormImg} alt="ReviewerFormImg" />
            <div className="review-camera-bg absolute flex justify-center items-center top-20 left-20 rounded-full cursor-pointer">
              <img src={Camera} alt="camera" />
            </div>
          </div>
        </div>
        <div className="w-10/12">
          <form>
            <div className="flex flex-wrap">
              <label className="w-full">First Name:</label>
              <input
                type="text"
                className="py-3 w-full border outline-none pl-5 my-3 rounded-sm"
              />
            </div>
            <div className="flex flex-wrap">
              <label className="w-full">State:</label>
              <input
                type="text"
                className="py-3 w-full border outline-none pl-5 my-3 rounded-sm"
              />
            </div>
            <div className="flex flex-wrap">
              <label className="w-full">Date</label>
              <div className="w-full md:flex-nowrap flex-wrap flex md:border outline-none my-3 rounded-sm">
                <input
                  type="text"
                  className="py-1 w-full outline-none md:pl-36 pl-5 md:border-0 border my-3 rounded-sm"
                  placeholder="Start Date"
                />
                <div className="hidden md:flex items-center">~</div>
                <input
                  type="text"
                  className="py-1 w-full outline-none md:pl-36 pl-5 md:border-0 border my-3 rounded-sm"
                  placeholder="End Date"
                />
              </div>
            </div>
            <div className="flex mt-5 justify-center">
              <div
                className="w-2/5 h-1/6"
                style={{ display: addOrEdit === "add" ? "block" : "none" }}
              >
                <button
                  type="submit"
                  className="green bg-opacity-30 py-3 hover:bg-opacity-100 transition-all text-white h-full w-full"
                >
                  UPLOAD
                </button>
              </div>
              <div
                className="w-2/5 h-1/6"
                style={{ display: addOrEdit === "edit" ? "block" : "none" }}
              >
                <button
                  type="submit"
                  className="green bg-opacity-30 py-3 hover:bg-opacity-100 transition-all text-white h-full w-full"
                >
                  Edit Reviewer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviewer;

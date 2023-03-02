import React from "react";
import ApplicaitonSuccess from "../assests/images/ApplicaitonSuccess.svg";
import ApplicationDeclined from "../assests/images/ApplicationDeclined.svg";

const ApplicationStatus = ({ status }) => {
  // Set status to true to show successful
  // Set to false to show otherwise
  return (
    <div className="h-screen flex items-center justify-center flex-wrap">
      <div
        style={{ display: status ? "block" : "none" }}
        className="w-10/12 h-1/4"
      >
        <img
          src={ApplicaitonSuccess}
          alt="Application Success"
          className="h-full w-full"
        />
        <div className="my-2">
          <h1 className="font-bold text-xl text-center">
            Application Successful
          </h1>
        </div>
      </div>
      <div
        style={{ display: !status ? "block" : "none" }}
        className="w-10/12 h-1/4"
      >
        <img
          src={ApplicationDeclined}
          alt="Application Success"
          className="h-full w-full"
        />
        <div className="my-2">
          <h1 className="font-bold text-xl text-center">
            Application Declined
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus;

import React from "react";
import LoginNavBar from "./LoginNavBar";
import LoginImg from "../assests/images/LoginImg.svg";

const Login = () => {
  const loginEllipses = [
    "rounded-full login-ellipse-1",
    "rounded-full login-ellipse-2",
    "rounded-full login-ellipse-3",
    "rounded-full login-ellipse-4",
    "rounded-full login-ellipse-5",
    "rounded-full login-ellipse-6",
    "rounded-full login-ellipse-7",
    "rounded-full login-ellipse-8",
    "rounded-full login-ellipse-9",
    "rounded-full login-ellipse-10",
  ];
  return (
    <div className="h-screen">
      <div className="lg:h-auto w-full h-full">
        <LoginNavBar />
        {loginEllipses.map((loginEllipse) => (
          <div className={loginEllipse}></div>
        ))}
        <div className="xl:px-60 lg:px-11 lg:flex-nowrap justify-center flex h-full xl:justify-between my-24">
          <div className="lg:block w-1/2 hidden">
            <img src={LoginImg} alt="user login" />
          </div>
          <div className="lg:w-1/2 md:px-0 px-5 w-full md:w-2/3 lg:h-auto h-full">
            <div className="h-full lg:pt-20 pt-10 w-full shadow-md border md:w-11/12">
              <div className="h-1/6 flex items-center justify-center">
                <h1 className="login-header text-center text-6xl">Login</h1>
              </div>
              <form className="justify-center items-center h-4/5 flex-wrap flex">
                <input className="login outline-none w-10/12 h-1/5 px-7 rounded-xl" />
                <button
                  type="submit"
                  className="login-btn w-9/12 md:h-1/5 h-1/6 text-xl text-white rounded-lg"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

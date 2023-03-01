import React from "react";
import ReactDom from "react-dom";
import { HiOutlineXMark } from "react-icons/hi2";
import { RiUploadCloud2Line } from "react-icons/ri";
import UploadIcon from "../assests/images/UploadIcon.svg";

const DriverUploadModal = ({ isOpen, toggleModal }) => {
  // Drag and drop functionality implemented the file is stored in the the input element with the id file-input also clicking the browse button will allow the user to select a file to store in the input element

  // You need to create a function to handle the post request to the server to post the file when upload is clicked
  if (!isOpen) return null;
  function clearInput(e) {
    e.currentTarget.parentElement.previousElementSibling.lastElementChild.value =
      "";
  }
  function readFile(e) {
    var files;
    if (e.target.files) {
      files = e.target.files;
    } else {
      files = e.dataTransfer.files;
    }
    if (files.length == 0) {
      alert("What you dropped is not a file.");
      return;
    }
    var file = files[0];
    document.getElementById("file").textContent = `${file.name}| ${file.type}`;
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("file-input").value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  function getTheFile(e) {
    e.preventDefault();
    e.currentTarget.classList.remove("blue-bg");
    readFile(e);
  }
  function dragOver(e) {
    e.currentTarget.classList.add("blue-bg");
    e.currentTarget.style.color = "white";
    e.stopPropagation();
    e.preventDefault();
  }
  function dragLeave(e) {
    e.currentTarget.classList.remove("blue-bg");
  }
  return ReactDom.createPortal(
    <div className="bg-gray-600 grid place-items-center bg-opacity-75 border shadow-md h-full z-0 w-full absolute top-0 left-0">
      <div className="lg:w-2/5 md:w-1/2 bg-white z-50">
        <div className="pt-10 h-full pb-8 px-10">
          <div
            className="flex flex-wrap items-center rounded-sm green w-full h-1/3"
            onDragOver={dragOver}
            onDragLeave={dragLeave}
            onDrop={getTheFile}
          >
            <div className="w-full flex justify-center py-2">
              <img src={UploadIcon} alt="UploadIcon" />
            </div>
            <div className="text-white mb-4 flex-wrap flex justify-center">
              <div className="w-full my-2 text-center">
                <div className="w-full flex justify-center">
                  <p className="mx-2">Drag & drop files or</p>
                  <form className="">
                    <label className="custom-file-upload" id="file">
                      <input type="file" id="file-input" />
                      Browse
                    </label>
                  </form>
                </div>
              </div>
              <p className="text-sm font-thin w-full text-center">
                Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
              </p>
            </div>
          </div>
          <form className="my-10 h-3/5">
            <div className="border my-7 flex shadow-md h-1/6 rounded-md">
              <div className="w-9/12 flex border-b-4 border-black">
                <label className="ml-3 text-sm flex items-center">Name</label>
                <input className="w-10/12 outline-none py-3 pl-3" type="text" />
              </div>
              <div className=" items-center mr-1 w-1/4 flex justify-end">
                <div className="rounded-full bg-gray-500" onClick={clearInput}>
                  <HiOutlineXMark className="text-lg input-bg text-white rounded-full" />
                </div>
              </div>
            </div>
            <div className="border my-7 flex shadow-md h-1/6 rounded-md">
              <div className="w-10/12 flex border-b-4 border-black">
                <label className="ml-3 text-sm flex items-center">Gender</label>
                <input className="w-10/12 outline-none py-3 pl-3" type="text" />
              </div>
              <div className="flex items-center mr-1 w-1/6 justify-end">
                <div className="rounded-full bg-gray-500" onClick={clearInput}>
                  <HiOutlineXMark className="text-lg input-bg text-white rounded-full" />
                </div>
              </div>
            </div>
            <div className="border my-7 flex shadow-md h-1/6 rounded-md">
              <div className="w-11/12 flex border-b-4 border-black">
                <label className="ml-3 text-sm flex items-center">
                  License ID
                </label>
                <input className="w-4/5 outline-none py-3 pl-3" type="text" />
              </div>
              <div className="flex items-center mr-1 w-1/12 justify-end">
                <div className="rounded-full bg-gray-500" onClick={clearInput}>
                  <HiOutlineXMark className="text-lg input-bg text-white rounded-full" />
                </div>
              </div>
            </div>
            <div className="w-full h-1/6">
              <button
                type="submit"
                className="green bg-opacity-30 py-3 hover:bg-opacity-100 transition-all text-white h-full w-full"
                onClick={toggleModal}
              >
                UPLOAD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default DriverUploadModal;

import React from "react";
import close from "../../assets/close.png";

const InterviewModal = ({ handleInterviewModal }) => {
  return (
    <div>
      <div className="bg-overlay h-[100vh]  w-[100%] top-0 left-0 fixed z-50 flex items-center md:justify-end justify-center ">
        <div className="bg-white  mx-auto rounded-lg  w-[45%]  px-8 py-10">
          <div className="flex justify-between">
            <h3 className="text-[26px] font-semibold">Interview invite</h3>
            <button onClick={handleInterviewModal}>
              <img src={close} className="w-7" alt="" />
            </button>
          </div>
          <div>
            <div className=" grid grid-cols-2 gap-4 my-4">
              <div>
                <label >Full name</label>
                <input type="text" 
                name="" 
                id="" 
                className="border border-adminBorder w-[100%]  rounded-md outline-none px-3 py-2 mt-2"/>
              </div>
              <div>
                <label>Email</label>
                <input type="text" 
                name="" 
                id="" 
                className="border border-adminBorder w-[100%]  rounded-md outline-none px-3 py-2 mt-2"/>
              </div>
              <div>
                <label>Date</label>
                <input 
                type="datetime" 
                name="" 
                id="" 
                className="border border-adminBorder w-[100%]  rounded-md outline-none px-3 py-2 mt-2"/>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-btnGreen py-2 px-10 rounded-lg text-white mt-4">Invite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewModal;

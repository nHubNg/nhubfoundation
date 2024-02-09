import React, { useState, useRef, useEffect } from "react";
import AcceptModal from "../modals/AcceptModal";

const Dropdown = ({ handleAcceptModal, handleDeclineModal, handleRescheduleModal, pend }) => {
  const [open, setOpen] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleAcceptClick = () => {
    handleAcceptModal(pend._id); 
    setOpen(false);
    setShowAcceptModal(true);
  };

  const handleRescheduleClick = () => {
    handleRescheduleModal(pend._id);
    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="bg-white w-10 h-9 mx-auto shadow-lg flex justify-center items-center " onClick={() => setOpen(!open)}>
        <img src="https://res.cloudinary.com/nhubnacademy/image/upload/v1691057066/nHubFoundation/Vector_vvlzet.svg" alt="" />
      </div>
      {open && (
        <div className="bg-white w-28 mx-auto shadow-lg flex flex-col justify-center px-3 p-2 gap-y-2 rounded-md absolute top-12 right-0 z-40">
          <p onClick={handleAcceptClick} className="text-green-500 cursor-pointer">Accept</p>
          {pend.interview_location === 'Virtual' && <a href={pend.interviewLink} target='_blank' rel='noreferrer' className="text-btnMaroon cursor-pointer">Join virtual</a>}
          <p onClick={handleRescheduleClick} className="cursor-pointer text-blue">Reschedule</p>
          <p onClick={() => { handleDeclineModal(pend._id); setOpen(false); }} className="text-btnRed cursor-pointer">Decline</p>
        </div>
      )}
      {showAcceptModal && <AcceptModal isOpen={showAcceptModal} onClose={() => setShowAcceptModal(false)} />}
    </div>
  );
};

export default Dropdown;

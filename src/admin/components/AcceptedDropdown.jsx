import { useEffect, useState, useRef } from "react";

const AcceptedDropdown = ({ handleDeclineModal, handleStartModal }) => {
  const [open, setOpen] = useState(false);
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

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="relative">
      <div className="bg-white w-10 h-9 mx-auto shadow-lg flex justify-center items-center " onClick={toggle}>
        <img src="https://res.cloudinary.com/nhubnacademy/image/upload/v1691057066/nHubFoundation/Vector_vvlzet.svg" alt="" />
      </div>
      {open && (
        <div className="bg-white w-28 mx-auto shadow-lg flex flex-col justify-center px-3 p-2 gap-y-2 rounded-md absolute top-12 right-0 z-40" ref={dropdownRef}>
          <p onClick={() => { handleDeclineModal(); toggle(); }} className="text-btnMaroon cursor-pointer">Decline</p>
          <p onClick={() => { handleStartModal(); toggle(); }} className="text-btnGreen cursor-pointer">Mark As Start</p>
        </div>
      )}
    </div>
  );
};

export default AcceptedDropdown;

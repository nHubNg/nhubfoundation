import { useEffect, useRef, useState } from "react";

const StartedDropdown = ({ handleEndModal }) => {
  const [open, setOpen] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const closeDropdown = () => {
    setOpen(false);
  };

  const handleConfirmModal = () => {
    console.log("Opening confirm modal..."); // Debugging click-behavior
    setShowConfirmModal(true);
  };
  const confirmEndAction = () => {
    handleEndModal();
    setShowConfirmModal(false);
  };

  const cancelEndAction = () => {
    setShowConfirmModal(false);
  };

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

  return (
    <>
      <div className="relative">
        <div
          ref={dropdownRef}
          className="bg-white w-10 h-9 mx-auto shadow-lg flex justify-center items-center cursor-pointer"
          onClick={toggleDropdown}
        >
          <img
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1691057066/nHubFoundation/Vector_vvlzet.svg"
            alt=""
          />
        </div>
        {open && (
          <div className="bg-white w-28 mx-auto shadow-lg flex flex-col justify-center px-3 p-2 gap-y-2 rounded-md absolute top-12 right-0 z-40">
            <p
              onClick={() => {
                console.log("Dropdown option clicked"); // Debugging
                setShowConfirmModal(true)
              }}
              className="text-btnRed cursor-pointer"
            >
              Mark As End
            </p>
          </div>
        )}
      </div>

      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm">
            <h3 className="text-lg font-semibold text-gray-700">
              Are you sure?
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              This action cannot be undone.
            </p>
            <div className="flex justify-end mt-4 gap-4">
              <button
                onClick={cancelEndAction}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmEndAction}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default StartedDropdown;

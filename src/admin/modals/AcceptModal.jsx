// AcceptModal.jsx
import React, { useState, useContext } from "react";
import { ActiveContext } from "../../contexts/ActiveContext";
import { acceptRequest, editRequest } from "../../helpers/admin";

const AcceptModal = ({ isOpen, onClose }) => {
  const { detail } = useContext(ActiveContext);
  const [loading, setLoading] = useState(false);

  const acceptApp = async () => {
    setLoading(true);
    try {
      const res = await acceptRequest(detail);
      if (res?.status === 200 || res?.status === 201) {
        setLoading(false)
        console.log(res)
        const resp = await editRequest(detail, { "isApproved": "approved" });
        if (resp?.status === 200 || resp?.status === 201) {
          window.location.href='/admin/applications/approved'
        }
      } else {
        console.log(res);
        setLoading(false)
      }
    } catch (error) {
      console.error("Error accepting application:", error);
    } finally {
      setLoading(false);
      onClose();
    }
  };

  return (
    <div className={`modal ${isOpen ? 'show' : 'hide'}`}>
      <div className="bg-overlay h-[100vh]  w-[100%] top-0 left-0 fixed z-50 flex items-center md:justify-end justify-center ">
        <div className="bg-white  mx-auto rounded-lg h-[35%]  w-[75%] md:w-[30%] flex flex-col gap-y-10 justify-center  text-center text-[20px] font-medium">
          Are you sure you want to accept this application?
          <div className="flex justify-center text-white gap-5">
            <button className="bg-btnGreen py-2 px-10 rounded-lg" onClick={acceptApp}>
              {loading ? 'Accepting' : 'Yes'}
            </button>
            <button onClick={onClose} className="bg-btnRed py-2 px-10 rounded-lg">No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptModal;

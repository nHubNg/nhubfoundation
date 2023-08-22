import React from "react";
import AdminHeader from "../layouts/AdminHeader";
import AppHeader from "../layouts/AppHeader";
import Dropdown from "./Dropdown";
import DeleteModal from "../modals/DeleteModal";
import { useState } from "react";
import DeclineModal from "../modals/DeclineModal";
import AdminNav from "../layouts/AdminNav";

const Approved = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [declineModal, setDeclineModal] = useState(false);

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal);
    console.log("yesss");
  };

  const handleDeclineModal = () => {
    setDeclineModal(!declineModal);
  }
  return (
    <>
      {deleteModal ? (
        <DeleteModal handleDeleteModal={handleDeleteModal} />
      ) : (
        ""
      )}
      {
        declineModal ? (
       <DeclineModal handleDeclineModal={handleDeclineModal}/> 
        ) 
        :
        ""
      }
      <AdminNav heading="Approved Applications"/>
      <div>
        <div className="hidden md:block">
          <AdminHeader
            heading="Approved Applications"
            text="All approved applications"
          />
        </div>
        <AppHeader total={3} />
        <div className="mt-8  md:hidden flex flex-col gap-y-5">
          <div className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-md py-4 px-5 rounded-lg">
            <div>
              <h5>Abdulmalik Ishaya</h5>
              <p>elmaleeq112@gmail.com</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/nhubnacademy/image/upload/v1692608267/nHubFoundation/ep_arrow-up_ykqgk7.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-lg py-4 px-5 rounded-lg">
            <div>
              <h5>Abdulmalik Ishaya</h5>
              <p>elmaleeq112@gmail.com</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/nhubnacademy/image/upload/v1692608267/nHubFoundation/ep_arrow-up_ykqgk7.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-lg py-4 px-5 rounded-lg">
            <div>
              <h5>Abdulmalik Ishaya</h5>
              <p>elmaleeq112@gmail.com</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/nhubnacademy/image/upload/v1692608267/nHubFoundation/ep_arrow-up_ykqgk7.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <table class="table-auto mx-auto mt-10 w-[90%] overflow-auto ">
            <thead>
              <tr>
                <th className="py-3 text-left font">Details</th>
                <th className="py-3 text-center">Email</th>
                <th className="py-3 text-center">Phone</th>
                <th className="py-3 text-center">Start</th>
                <th className="py-3 text-center">End</th>
                <th className="py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">
                  <button className="flex items-center gap-1 rounded-lg bg-adminGray py-2 px-7">
                    <img
                      src="https://res.cloudinary.com/nhubnacademy/image/upload/v1690808993/nHubFoundation/bx_detail_bh1gnk.png"
                      alt=""
                    />
                    Abdulmalik
                  </button>
                </td>
                <td className="py-3 text-center text-orange">
                  elmaleeq112@gmail.com
                </td>
                <td className="py-3 text-center">0706419131</td>
                <td className="py-3 text-center">2023-10-09</td>
                <td className="py-3 text-center">2023-01-05</td>
                <td>
                  <Dropdown handleDeleteModal={handleDeleteModal} handleDeclineModal={handleDeclineModal}/>
                </td>
              </tr>
              <tr>
                <td className="py-2">
                  <button className="flex items-center gap-1 rounded-lg bg-adminGray py-2 px-7">
                    <img
                      src="https://res.cloudinary.com/nhubnacademy/image/upload/v1690808993/nHubFoundation/bx_detail_bh1gnk.png"
                      alt=""
                    />
                    Abdulmalik
                  </button>
                </td>
                <td className="py-3 text-center text-orange">
                  elmaleeq112@gmail.com
                </td>
                <td className="py-3 text-center">0706419131</td>
                <td className="py-3 text-center">2023-10-09</td>
                <td className="py-3 text-center">2023-01-05</td>
                <td>
                  <Dropdown handleDeleteModal={handleDeleteModal} />
                </td>
              </tr>
              <tr>
                <td className="py-2">
                  <button className="flex items-center gap-1 rounded-lg bg-adminGray py-2 px-7">
                    <img
                      src="https://res.cloudinary.com/nhubnacademy/image/upload/v1690808993/nHubFoundation/bx_detail_bh1gnk.png"
                      alt=""
                    />
                    Abdulmalik
                  </button>
                </td>
                <td className="py-3 text-center text-orange">
                  elmaleeq112@gmail.com
                </td>
                <td className="py-3 text-center">0706419131</td>
                <td className="py-3 text-center">2023-10-09</td>
                <td className="py-3 text-center">2023-01-05</td>
                <td>
                  <Dropdown handleDeleteModal={handleDeleteModal} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Approved;

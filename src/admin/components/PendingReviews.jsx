import AdminHeader from "../layouts/AdminHeader";
import AppHeader from "../layouts/AppHeader";
import Dropdown from "./Dropdown";
import { useState } from "react";
import DeleteModal from "../modals/DeleteModal";
import DeclineModal from "../modals/DeclineModal";
import AdminNav from "../layouts/AdminNav";
import Details from "./Details";

const PendingReviews = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [declineModal, setDeclineModal] = useState(false);
  const [details, setDetails] = useState(false);

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal);
    console.log("yesss");
  };

  const handleDeclineModal = () => {
    setDeclineModal(!declineModal);
  };
 const handleDetails = () => {
  setDetails(!details)
 }
  return (
    <>
      {deleteModal ? <DeleteModal handleDeleteModal={handleDeleteModal} /> : ""}
      {declineModal ? (
        <DeclineModal handleDeclineModal={handleDeclineModal} />
      ) : (
        ""
      )}
      {details ? <Details/> : ""}
      <div className=" ">
        <AdminNav heading="Internship Applications" />
        <div className="hidden md:block">
          <AdminHeader
            heading="Internship Applications"
            text="Pending reviews"
          />
        </div>
        <AppHeader total={3} />
        <div className="mt-8  md:hidden flex flex-col gap-y-5">
          <div className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-md shadow-adminShadow py-4 px-5 rounded-lg">
            <div>
              <h5>Abdulmalik Ishaya</h5>
              <p>elmaleeq112@gmail.com</p>
            </div>
            <div onClick={handleDetails}>
              <img
                src="https://res.cloudinary.com/nhubnacademy/image/upload/v1692608267/nHubFoundation/ep_arrow-up_ykqgk7.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-md  shadow-adminShadow py-4 px-5 rounded-lg">
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
          <div className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-md  shadow-adminShadow py-4 px-5 rounded-lg">
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
        <div className="overflow-x-auto hidden md:block">
          <table className="table-auto mx-auto mt-10 w-[90%] overflow-auto ">
            <thead>
              <tr>
                <th className="py-3 text-left">Details</th>
                <th className="py-3 text-center">Email</th>
                <th className="py-3 text-center">Interview</th>
                <th className="py-3 text-center hidden md:block">Start</th>
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
                <td className="py-3 text-center">Physical</td>
                <td className="py-3 text-center">2023-10-09</td>
                <td className="py-3 text-center">2023-01-05</td>
                <td>
                  <Dropdown
                    handleDeleteModal={handleDeleteModal}
                    handleDeclineModal={handleDeclineModal}
                  />
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
                <td className="py-3 text-center">Physical</td>
                <td className="py-3 text-center">2023-10-09</td>
                <td className="py-3 text-center">2023-01-05</td>
                <td>
                  <Dropdown
                    handleDeleteModal={handleDeleteModal}
                    handleDeclineModal={handleDeclineModal}
                  />
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
                <td className="py-3 text-center">Physical</td>
                <td className="py-3 text-center">2023-10-09</td>
                <td className="py-3 text-center">2023-01-05</td>
                <td>
                  <Dropdown
                    handleDeleteModal={handleDeleteModal}
                    handleDeclineModal={handleDeclineModal}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PendingReviews;

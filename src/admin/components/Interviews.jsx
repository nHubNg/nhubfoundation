import AdminHeader from "../layouts/AdminHeader";
import AppHeader from "../layouts/AppHeader";
// import InterviewDropdown from "./InterviewDropdown";
import { useState } from "react";
// import InterviewModal from "../modals/InterviewModal";
import DeclineModal from "../modals/DeclineModal";
import AdminNav from "../layouts/AdminNav";
import Dropdown from "./Dropdown";
import Details from "./Details";
import AcceptModal from "../modals/AcceptModal";


const Interviews = () => {
  // const [interviewModal, setInterviewModal] = useState(false);
  // const [declineModal, setDeclineModal] = useState(false);

  
  // const handleInterviewModal = () => {
  //   setInterviewModal(!interviewModal)
  // }
  // const handleDeclineModal = () => {
  //   setDeclineModal(!declineModal);
  // }

  const [acceptModal, setAcceptModal] = useState(false);
  const [declineModal, setDeclineModal] = useState(false);
  const [details, setDetails] = useState(false);

  const handleAcceptModal = () => {
    setAcceptModal(!acceptModal);
  };

  const handleDeclineModal = () => {
    setDeclineModal(!declineModal);
  };
  const handleDetails = () => {
    setDetails(!details)
  }
  return (
    <>
    {/* {
      interviewModal ? (
     <InterviewModal handleInterviewModal={handleInterviewModal}/> 
      ) 
      :
      ""
    }
    {
        declineModal ? (
       <DeclineModal handleDeclineModal={handleDeclineModal}/> 
        ) 
        :
        ""
      } */}
      {acceptModal ? <AcceptModal handleAcceptModal={handleAcceptModal} /> : ""}
      {declineModal ? (
        <DeclineModal handleDeclineModal={handleDeclineModal} />
      ) : (
        ""
      )}
      {details ? <Details handleDetails={handleDetails} /> : ""}
      <AdminNav heading="Interviews"/>
    <div>
      <div className="hidden md:block">
        <AdminHeader heading="Interviews" text="Pending  interviews" />
      </div>
      <AppHeader total={3}/>
      <div className="mt-8  md:hidden flex flex-col gap-y-5">
          <div className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-md  shadow-adminShadow py-4 px-5 rounded-lg">
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
            <div onClick={handleDetails}>
              <img
                src="https://res.cloudinary.com/nhubnacademy/image/upload/v1692608267/nHubFoundation/ep_arrow-up_ykqgk7.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      <div className="hidden md:block">
        <table className="table-auto mx-auto mt-10 w-[90%] overflow-auto ">
          <thead>
            <tr>
              <th className="py-3 text-left">Details</th>
              <th className="py-3 text-center">Email</th>
              <th className="py-3 text-center">Start Date</th>
              <th className="py-3 text-center">Interview Date</th>
              <th className="py-3 text-center">Location</th>
              <th className="py-3 text-center">Time</th>
              <th className="py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">
                <button className="flex items-center gap-1 rounded-lg bg-adminGray py-2 px-7"  onClick={handleDetails}>
                  <img
                    src="https://res.cloudinary.com/nhubnacademy/image/upload/v1690808993/nHubFoundation/bx_detail_bh1gnk.png"
                    alt=""
                  />
                  Abdulmalik
                </button>
              </td>
              <td className="py-3 text-center text-orange">elmaleeq112@gmail.com</td>
              <td className="py-3 text-center">2023-01-30</td>
              <td className="py-3 text-center">2023-10-09</td>
              <td className="py-3 text-center">Physical</td>
              <td className="py-3 text-center">11:30</td>
              <td> 
              {/* <InterviewDropdown handleInterviewModal={handleInterviewModal} handleDeclineModal={handleDeclineModal}/> */}
              <Dropdown
                    handleAcceptModal={handleAcceptModal}
                    handleDeclineModal={handleDeclineModal}
                  />
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <button className="flex items-center gap-1 rounded-lg bg-adminGray py-2 px-7"  onClick={handleDetails}>
                  <img
                    src="https://res.cloudinary.com/nhubnacademy/image/upload/v1690808993/nHubFoundation/bx_detail_bh1gnk.png"
                    alt=""
                  />
                  Abdulmalik
                </button>
              </td>
              <td className="py-3 text-center text-orange">elmaleeq112@gmail.com</td>
              <td className="py-3 text-center">2023-01-30</td>
              <td className="py-3 text-center">2023-10-09</td>
              <td className="py-3 text-center">Physical</td>
              <td className="py-3 text-center">11:30</td>
              <td> 
              {/* <InterviewDropdown handleInterviewModal={handleInterviewModal} handleDeclineModal={handleDeclineModal}/> */}
              <Dropdown
                    handleAcceptModal={handleAcceptModal}
                    handleDeclineModal={handleDeclineModal}
                  />
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <button className="flex items-center gap-1 rounded-lg bg-adminGray py-2 px-7"  onClick={handleDetails}>
                  <img
                    src="https://res.cloudinary.com/nhubnacademy/image/upload/v1690808993/nHubFoundation/bx_detail_bh1gnk.png"
                    alt=""
                  />
                  Abdulmalik
                </button>
              </td>
              <td className="py-3 text-center text-orange">elmaleeq112@gmail.com</td>
              <td className="py-3 text-center">2023-01-30</td>
              <td className="py-3 text-center">2023-10-09</td>
              <td className="py-3 text-center">Physical</td>
              <td className="py-3 text-center">11:30</td>
              <td> 
              {/* <InterviewDropdown handleInterviewModal={handleInterviewModal} handleDeclineModal={handleDeclineModal}/> */}
              <Dropdown
                    handleAcceptModal={handleAcceptModal}
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

export default Interviews;

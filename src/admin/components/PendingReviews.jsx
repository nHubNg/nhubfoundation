import AdminHeader from "../layouts/AdminHeader";
import AppHeader from "../layouts/AppHeader";
// import Dropdown from "./Dropdown";
import { useEffect, useState, useCallback } from "react";
// import AcceptModal from "../modals/AcceptModal";
import DeclineModal from "../modals/DeclineModal";
import AdminNav from "../layouts/AdminNav";
import Details from "./Details";
import InterviewModal from "../modals/InterviewModal";
import InterviewDropdown from "./InterviewDropdown";
import { getAllIntern } from "../../helpers/admin";



const PendingReviews = () => {
  //   const [acceptModal, setAcceptModal] = useState(false);
  //   const [declineModal, setDeclineModal] = useState(false);
  const [details, setDetails] = useState(false);
  const [allPending, setAllPending] = useState([])

  const getAll = useCallback(async () => {
    const res = await getAllIntern('isCalledForInterview', 'pending')
    if (res?.status === 200 || res?.status === 201) {
      return setAllPending(res.data.data)
    } else {
      console.log(res)
    }
  }, [setAllPending]);

  useEffect(() => {
    getAll()
  }, [getAll])

  //   const handleAcceptModal = () => {
  //     setAcceptModal(!acceptModal);
  //   };

  //   const handleDeclineModal = () => {
  //     setDeclineModal(!declineModal);
  //   };
  const handleDetails = () => {
    setDetails(!details)
  }

  const [interviewModal, setInterviewModal] = useState(false);
  const [declineModal, setDeclineModal] = useState(false);


  const handleInterviewModal = () => {
    setInterviewModal(!interviewModal)
  }
  const handleDeclineModal = () => {
    setDeclineModal(!declineModal);
  }
  return (
    <>
      {/* {acceptModal ? <AcceptModal handleAcceptModal={handleAcceptModal} /> : ""}
      {declineModal ? (
        <DeclineModal handleDeclineModal={handleDeclineModal} />
      ) : (
        ""
      )} */}
      {details ? <Details handleDetails={handleDetails} /> : ""}
      {
        interviewModal ? (
          <InterviewModal handleInterviewModal={handleInterviewModal} />
        )
          :
          ""
      }
      {
        declineModal ? (
          <DeclineModal handleDeclineModal={handleDeclineModal} />
        )
          :
          ""
      }
      <div className=" ">
        <AdminNav heading="Internship Applications" />
        <div className="hidden md:block">
          <AdminHeader
            heading="New Applicants"
            text="New reviews"
          />
        </div>
        <AppHeader total={allPending.length} />
        <div className="mt-8  md:hidden flex flex-col gap-y-5">
          {allPending.length > 1 ? allPending.map((pend, i) => {
            return (
              <div key={i} className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-md shadow-adminShadow py-4 px-5 rounded-lg">
                <div>
                  <h5>{pend.first_name} {pend.last_name}</h5>
                  <p>{pend.email}</p>
                </div>
                <div onClick={handleDetails}>
                  <img
                    src="https://res.cloudinary.com/nhubnacademy/image/upload/v1692608267/nHubFoundation/ep_arrow-up_ykqgk7.svg"
                    alt=""
                  />
                </div>
              </div>
                )
          }) : <div className="flex justify-center md:hidden">
            <div className=" mt-10 py-2 w-[90%] flex justify-center px-4 rounded-sm">
              <p>No Pending Applications</p>
            </div>
          </div>}
          {/* <div className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-md  shadow-adminShadow py-4 px-5 rounded-lg">
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
            </div> */}
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
              {allPending.length > 1 ? allPending.map((pend, i) => {
                return (
                  <tr key={i}>
                    <td className="py-2">
                      <button className="flex items-center gap-1 rounded-lg bg-adminGray py-2 px-7" onClick={handleDetails}>
                        <img
                          src="https://res.cloudinary.com/nhubnacademy/image/upload/v1690808993/nHubFoundation/bx_detail_bh1gnk.png"
                          alt=""
                        />
                        {pend.first_name} {pend.last_name}
                      </button>
                    </td>
                    <td className="py-3 text-center text-orange">
                      {pend.email}
                    </td>
                    <td className="py-3 text-center">{pend.interview_location}</td>
                    <td className="py-3 text-center">{pend.start_date}</td>
                    <td className="py-3 text-center">{pend.end_date}</td>
                    <td>
                      {/* <Dropdown
                    handleAcceptModal={handleAcceptModal}
                    handleDeclineModal={handleDeclineModal}
                  /> */}
                      <InterviewDropdown handleInterviewModal={handleInterviewModal} handleDeclineModal={handleDeclineModal} />
                    </td>
                  </tr>
                )
              }) : <div className='mt-16 w-full'>
                  <div className="hidden md:block lg:flex justify-center items-center">
                    <div className="flex justify-center items-center py-5 w-[100%] mx-auto md:mt-[-40px] bg-white shadow-lg rounded-md gap-10">
                      <div className=" py-2 w-[100%] flex justify-between px-4 rounded-md">
                        <p>No Pending Application</p>
                          </div>
                    </div>
                  </div>
              </div>}

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PendingReviews;

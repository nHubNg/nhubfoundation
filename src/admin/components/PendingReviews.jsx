import AdminHeader from "../layouts/AdminHeader";
import AppHeader from "../layouts/AppHeader";
// import Dropdown from "./Dropdown";
import { useEffect, useState, useCallback, useContext } from "react";
// import AcceptModal from "../modals/AcceptModal";
import DeclineModal from "../modals/DeclineModal";
import AdminNav from "../layouts/AdminNav";
import Details from "./Details";
import InterviewModal from "../modals/InterviewModal";
import InterviewDropdown from "./InterviewDropdown";
import { getAllIntern } from "../../helpers/admin";
import { ActiveContext } from "../../contexts/ActiveContext";



const PendingReviews = () => {
  //   const [acceptModal, setAcceptModal] = useState(false);
  //   const [declineModal, setDeclineModal] = useState(false);
  const { setDetail } = useContext(ActiveContext)
  const [details, setDetails] = useState(false);
  const [allPending, setAllPending] = useState([])
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open)
  }

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
  const handleDetails = (item) => {
    setDetail(item)
    setDetails(!details)
  }

  const [interviewModal, setInterviewModal] = useState(false);
  const [declineModal, setDeclineModal] = useState(false);


  const handleInterviewModal = (item) => {
    setDetail(item)
    setOpen(!open)
    setInterviewModal(!interviewModal)
  }
  const handleDeclineModal = (item) => {
    setDetail(item)
    setOpen(!open)
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
      {details ? <div>
        <Details handleDetails={handleDetails} />
      </div> : ""}
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
        <div className="mt-8  md:hidden flex flex-col gap-y-5 pb-20">
          {allPending.length > 0 ? allPending.map((pend, i) => {
            return (
              <div key={i} className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-md shadow-adminShadow py-4 px-5 rounded-lg">
                <div>
                  <h5>{pend.first_name} {pend.last_name}</h5>
                  <p>{pend.email}</p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                  <div onClick={() => handleDetails(pend)} className='cursor-pointer'>
                    <img
                      src="https://res.cloudinary.com/nhubnacademy/image/upload/v1692608267/nHubFoundation/ep_arrow-up_ykqgk7.svg"
                      alt=""
                    />
                  </div>
                  <InterviewDropdown handleInterviewModal={() => handleInterviewModal(pend)} handleDeclineModal={() => handleDeclineModal(pend._id)} toggle={toggle} open={open} />
                </div>
              </div>
            )
          }) : <div className="flex justify-center md:hidden">
            <div className=" mt-10 py-2 w-[90%] flex justify-center px-4 rounded-sm">
              <p>No Pending Applications</p>
            </div>
          </div>}

        </div>
        <div className="overflow-x-auto hidden md:block pb-20">
          <table className="table-auto mx-auto mt-10 w-[90%] overflow-auto ">
            <thead>
              <tr>
                <th className="py-3 text-left">Details</th>
                <th className="py-3 text-center">Email</th>
                <th className="py-3 text-center">Interview</th>
                <th className="py-3 text-center">Duration(M)</th>
                <th className="py-3 text-center hidden md:block">Start</th>
                <th className="py-3 text-center">End</th>
                <th className="py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allPending.length > 0 ? allPending.map((pend, i) => {
                return (
                  <tr key={i}>
                    <td className="py-2">
                      <button className="flex items-center gap-1 rounded-lg bg-adminGray py-2 px-7" onClick={() => handleDetails(pend)}>
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
                    <td className="py-3 text-center">{pend.months}</td>
                    <td className="py-3 text-center">{pend.start_date}</td>
                    <td className="py-3 text-center">{pend.end_date}</td>
                    <td>
                      {/* <Dropdown
                    handleAcceptModal={handleAcceptModal}
                    handleDeclineModal={handleDeclineModal}
                  /> */}
                  
                      <InterviewDropdown handleInterviewModal={() => handleInterviewModal(pend)} handleDeclineModal={() => handleDeclineModal(pend._id)} toggle={toggle} open={open} />
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

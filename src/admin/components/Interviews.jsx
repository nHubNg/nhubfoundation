import AdminHeader from "../layouts/AdminHeader";
import AppHeader from "../layouts/AppHeader";
// import InterviewDropdown from "./InterviewDropdown";
import { useEffect, useState, useCallback, useContext } from "react";
// import InterviewModal from "../modals/InterviewModal";
import DeclineModal from "../modals/DeclineModal";
import AdminNav from "../layouts/AdminNav";
import Dropdown from "./Dropdown";
import Details from "./Details";
import AcceptModal from "../modals/AcceptModal";
import { getAllIntern } from "../../helpers/admin";
import { ActiveContext } from "../../contexts/ActiveContext";


const Interviews = () => {
  // const [interviewModal, setInterviewModal] = useState(false);
  // const [declineModal, setDeclineModal] = useState(false);


  // const handleInterviewModal = () => {
  //   setInterviewModal(!interviewModal)
  // }
  // const handleDeclineModal = () => {
  //   setDeclineModal(!declineModal);
  // }
  const { setDetail } = useContext(ActiveContext)

  const [allInterview, setAllInterview] = useState([])

  const getAll = useCallback(async () => {
    const res = await getAllIntern('isCalledForInterview', 'called')
    if (res?.status === 200 || res?.status === 201) {
      return setAllInterview(res.data.data)
    } else {
      console.log(res)
    }
  }, [setAllInterview]);

  useEffect(() => {
    getAll()
  }, [getAll])

  const [acceptModal, setAcceptModal] = useState(false);
  const [declineModal, setDeclineModal] = useState(false);
  const [details, setDetails] = useState(false);

  const handleAcceptModal = (item) => {
    setDetail(item)
    setAcceptModal(!acceptModal);
  };

  const handleDeclineModal = (item) => {
    setDetail(item)
    setDeclineModal(!declineModal);
  };

  const handleDetails = (item) => {
    setDetail(item)
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
      <AdminNav heading="Interviews" />
      <div>
        <div className="hidden md:block">
          <AdminHeader heading="Interviews" text="Pending  interviews" />
        </div>
        <AppHeader total={allInterview.length} />
        <div className="mt-8  md:hidden flex flex-col gap-y-5 pb-20">
          {allInterview.length > 0 ? allInterview.map((pend, i) => {
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
                  <Dropdown
                    handleAcceptModal={() => handleAcceptModal(pend._id)}
                    handleDeclineModal={() => handleDeclineModal(pend._id)}
                  />
                </div>
              </div>
            )
          }) : <div className="flex justify-center md:hidden">
            <div className=" mt-10 py-2 w-[90%] flex justify-center px-4 rounded-sm">
              <p>No Pending Interview</p>
            </div>
          </div>}
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
              {allInterview.length > 0 ? allInterview.map((pend, i) => {
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
                    <td className="py-3 text-center text-orange">{pend.email}</td>
                    <td className="py-3 text-center">{pend.start_date}</td>
                    <td className="py-3 text-center">{pend.end_date}</td>
                    <td className="py-3 text-center">{pend.interview_location}</td>
                    <td className="py-3 text-center">{pend.interview_time}</td>
                    <td>
                      {/* <InterviewDropdown handleInterviewModal={handleInterviewModal} handleDeclineModal={handleDeclineModal}/> */}
                      <Dropdown
                        handleAcceptModal={() => handleAcceptModal(pend._id)}
                        handleDeclineModal={() => handleDeclineModal(pend._id)}
                      />
                    </td>
                  </tr>
                )
              }) : <div className='mt-16 w-full'>
                <div className="hidden md:block lg:flex justify-center items-center">
                  <div className="flex justify-center items-center py-5 w-[100%] mx-auto md:mt-[-40px] bg-white shadow-lg rounded-md gap-10">
                    <div className=" py-2 w-[100%] flex justify-between px-4 rounded-md">
                      <p>No Pending Interview</p>
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

export default Interviews;

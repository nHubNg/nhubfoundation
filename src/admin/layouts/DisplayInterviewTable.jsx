import AdminHeader from "./AdminHeader";
import AppHeader from "./AppHeader";
import Dropdown from "../components/Dropdown";
import { useEffect, useState, useCallback, useContext } from "react";
import AcceptModal from "../modals/AcceptModal";ResheduleModal
import ResheduleModal from "../modals/ResheduleModal";
import DeclineModal from "../modals/DeclineModal";
import AdminNav from "./AdminNav";
import Details from "../components/Details";
import InterviewModal from "../modals/InterviewModal";
import InterviewDropdown from "../components/InterviewDropdown";
import { ActiveContext } from "../../contexts/ActiveContext";
import SyncLoader from "react-spinners/SyncLoader";
import { format } from 'date-fns';
import { obscureEmail } from '../../customMethods'


const DisplayInterviewTable = ({data, fieldNames, handleNameSearch}) => {
    const [acceptModal, setAcceptModal] = useState(false);
    // const [declineModal, setDeclineModal] = useState(false);
  const { setDetail } = useContext(ActiveContext)
  const [details, setDetails] = useState(false);
  const [open, setOpen] = useState(false);
  const [fetch, setFetch] = useState(false)


  const toggle = () => {
    setOpen(!open)
  }


    const handleAcceptModal = () => {
      setAcceptModal(!acceptModal);
    };

    // const handleDeclineModal = () => {
    //   setDeclineModal(!declineModal);
    // };
  const handleDetails = (item) => {
    setDetail(item)
    setDetails(!details)
  }

  const [interviewModal, setInterviewModal] = useState(false);
  const [declineModal, setDeclineModal] = useState(false);
  const [rescheduleModal, setRescheduleModal] = useState(false);


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

  const handleRescheduleModal = (item) => {
    setDetail(item)
    setOpen(!open)
    setRescheduleModal(!rescheduleModal)
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
      {rescheduleModal ? <ResheduleModal handleResheduleModal={handleRescheduleModal} /> : ""}
      {declineModal ? (
        <DeclineModal handleDeclineModal={handleDeclineModal} />
      ) : (
        ""
      )}
      {details ? <Details handleDetails={handleDetails} /> : ""}
    {/* Mobile view */}
    <AppHeader total={data?.length} handleNameSearch={handleNameSearch}/>
<div className="mt-8  md:hidden flex flex-col gap-y-5 pb-20">
  {data?.length > 0 ? data?.map((pend, i) => {
    return (
      <div key={i} className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-md shadow-adminShadow py-4 px-5 rounded-lg">
        <div>
          <h5>{pend.first_name} {pend.last_name}</h5>
          <p>{obscureEmail(pend.email)}</p>
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
{/* Mobile view ends */}

{/* Desktop view */}
    <div className="overflow-x-auto hidden md:block pb-20">
    <table className="table-auto mx-auto mt-10 w-[95%] overflow-auto text-sm">
      <thead>
        <tr>
          {fieldNames.map((field, i) => {
            return (
              <th className="py-3 text-left">{field}</th>
              )
          })}       
        </tr>
      </thead>
      <tbody>
          {data?.length > 0 ? data?.map((pend, i) => {
            
            return (
              
                  <tr key={i}>
                    <td className="py-2 px-4">
                      <button className="flex items-center gap-1 rounded-lg bg-adminGray py-2 px-7 w-full mr-2" onClick={() => handleDetails(pend)}>
                        <img
                          src="https://res.cloudinary.com/nhubnacademy/image/upload/v1690808993/nHubFoundation/bx_detail_bh1gnk.png"
                          alt=""
                        />
                        {pend.first_name} {pend.last_name}
                      </button>
                    </td>
                    <td className="py-3 text-orange">
                      {obscureEmail(pend.email.toLowerCase())}
                    </td>
                    <td className="py-3">{format(pend.start_date, 'MMMM do, yyyy')}</td>
                    <td className="py-3">{format(pend.end_date, 'MMMM do, yyyy')}</td>
                    <td className="py-3">{pend.interview_location}</td>
                    <td className="py-3">{format(pend.interviewDate, 'MMMM do, yyyy')}</td>
                    <td className="py-3">{pend.interviewTime}</td>
                  <td className='cursor-pointer'>
                  <Dropdown pend={pend}
                        handleAcceptModal={() => handleAcceptModal(pend._id)}
                        handleDeclineModal={() => handleDeclineModal(pend._id)}
                        handleRescheduleModal={() => handleRescheduleModal(pend._id)}
                      />

                    </td>
                  </tr>
                )
            
           
              }) : 
              <td></td>//Empty row
              }
            </tbody>
          </table>
            {/* Spinner Area */}
        {data?.length > 0 ? '':
              <div className='mt-16 w-full'>
              <div className="hidden md:block lg:flex justify-center items-center">
                <div className="flex justify-center items-center py-5 w-[100%] mx-auto md:mt-[-40px] bg-white rounded-md gap-10">
                  <div className=" py-2 w-[100%] flex justify-center px-4 rounded-md">
                        <SyncLoader color="#f26024" />
                  </div>
                </div>
              </div>
            </div>
              }
        {/* Spinner Area Ends */}
         
        </div>
    </>
  );
};

export default DisplayInterviewTable;

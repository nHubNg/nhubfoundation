import { useContext, useState } from "react";
import close from "../../assets/close.png";
import { ActiveContext } from "../../contexts/ActiveContext";
import { editRequest } from "../../helpers/admin";

const InterviewModal = ({ handleInterviewModal, setFetch }) => {
  const {detail} = useContext(ActiveContext)
  const [date, setDate] = useState('')
  const [virtual, setVirtual] = useState('')

  const extractDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString({ hour12: true });

    return { dateString, timeString };
  };

  const handleInvite = async () => {
    const dateTime = extractDateTime(date);
    const payload = detail.interview_location === 'Virtual' ? {
      "interviewDate": date,
      "interviewTime": dateTime.timeString,
      "isCalledForInterview": "called",
      "interviewLink": virtual
    } : {
      "interviewDate": date,
      "interviewTime": dateTime.timeString,
      "isCalledForInterview": "called",
    }
    const res = await editRequest(detail._id, payload)
    if (res?.status === 200 || res?.status === 201){
      // window.location.reload(false);
      setFetch(true)
      handleInterviewModal()
      console.log('called')
      return
    } else {
      console.log(res)
    }
  }
  return (
    <div>
      <div className="bg-overlay h-[100vh]  w-[100%] top-0 left-0 fixed z-50 flex items-center md:justify-end justify-center ">
        <div className="bg-white  mx-auto rounded-lg w-[98%] lg:w-[55%]  px-8 py-10">
          <div className="flex justify-between">
            <h3 className="text-[20px] font-semibold">Interview invite</h3>
            <button onClick={handleInterviewModal}>
              <img src={close} className="w-7" alt="" />
            </button>
          </div>
          <div>
            <div className=" grid grid-cols-2 gap-4 my-4 text-[14px]">
              <div>
                <label >Full name</label>
                <input type="text" 
                name="" 
                  value={`${detail.first_name} ${detail.last_name}`}
                  readOnly
                className="border border-adminBorder w-[100%]  rounded-md outline-none px-3 py-2 mt-2"/>
              </div>
              <div>
                <label>Email</label>
                <input type="text" 
                name="" 
                value={detail.email}
                readOnly
                className="border border-adminBorder w-[100%]  rounded-md outline-none px-3 py-2 mt-2"/>
              </div>
              <div>
                <label>Date</label>
                <input 
                  type="datetime-local" 
                name="" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                className="border border-adminBorder w-[100%]  rounded-md outline-none px-3 py-2 mt-2"/>
              </div>
              {detail.interview_location === 'Virtual' && <div>
                <label>Virtual Interview Link</label>
                <input
                  type="text"
                  name=""
                  value={virtual}
                  onChange={(e) => setVirtual(e.target.value)}
                  className="border border-adminBorder w-[100%]  rounded-md outline-none px-3 py-2 mt-2" />
              </div>}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-btnGreen py-2 px-10 rounded-lg text-white mt-4" onClick={handleInvite}>Invite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewModal;

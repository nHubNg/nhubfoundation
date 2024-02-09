import { useState } from "react"



const Dropdown = ({ handleAcceptModal, handleDeclineModal, handleRescheduleModal, pend }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open)
  }


  return (
    <>

      <div className="relative">

        <div className="bg-white w-10 h-9 mx-auto shadow-lg flex justify-center items-center " onClick={toggle}><img src="https://res.cloudinary.com/nhubnacademy/image/upload/v1691057066/nHubFoundation/Vector_vvlzet.svg" alt="" /></div>
        {open && <div className="bg-white w-28 h-20 mx-auto shadow-lg flex flex-col justify-center px-3 py-2 gap-y-2 rounded-md absolute top-12 z-40 ">
          <p onClick={() => { handleAcceptModal(), toggle() }} className="text-green-500 cursor-pointer">Accept</p>
          {pend.interview_location === 'Virtual' && <a href={pend.interviewLink} target='_blank' rel='noreferrer' className="text-btnMaroon cursor-pointer">Join virtual</a>}
          <p onClick={() => { handleRescheduleModal(), toggle() }} className="cursor-pointer text-blue">Reschedule</p>
          <p onClick={() => { handleDeclineModal(), toggle() }} className="text-btnRed cursor-pointer">Decline</p>
        </div>}
      </div>
    </>
  )
}

export default Dropdown

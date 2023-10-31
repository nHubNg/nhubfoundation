import { useState } from "react"


const InterviewDropdown = ({handleInterviewModal,  handleDeclineModal}) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="relative">
      <div className="bg-white w-10 h-9 mx-auto shadow-lg flex justify-center items-center hover:shadow-xl cursor-pointer" onClick={toggle}><img src="https://res.cloudinary.com/nhubnacademy/image/upload/v1691057066/nHubFoundation/Vector_vvlzet.svg" alt="" /></div>
      {open && <div className="bg-white w-28 h-20 mx-auto shadow-lg flex flex-col justify-center px-3 py-2 gap-y-2 rounded-md absolute top-12 z-40 ">
        <p  onClick={() => {handleInterviewModal(), toggle()}} className="text-btnGreen cursor-pointer">Invite</p>
         {/* {locaction === "virtual" && <p>Join virtual interview</p> } */}
        <p onClick={() => { handleDeclineModal(), toggle() }} className="text-btnRed cursor-pointer">Decline</p>
      </div>}
    </div>
  )
}

export default InterviewDropdown
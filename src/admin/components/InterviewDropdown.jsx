import { useState } from "react"


const InterviewDropdown = ({handleInterviewModal,  handleDeclineModal}) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="relative">
      <div className="bg-white w-8 h-9 mx-auto flex justify-center items-center hover:shadow-xl cursor-pointer" onClick={toggle}><img src="https://res.cloudinary.com/nhubnacademy/image/upload/v1691057066/nHubFoundation/Vector_vvlzet.svg" alt="" /></div>
      {open && <div className="bg-white w-28 h-20 mx-auto shadow-lg flex flex-col justify-center px-3 py-2 gap-y-2 rounded-md absolute z-40 ">
        <p  onClick={() => {handleInterviewModal(), toggle()}} className="cursor-pointer text-black">Invite</p>
         {/* {locaction === "virtual" && <p>Join virtual interview</p> } */}
        <p onClick={() => { handleDeclineModal(), toggle() }} className="cursor-pointer text-black">Decline</p>
      </div>}
    </div>
  )
}

export default InterviewDropdown
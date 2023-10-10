
const DeclineModal = ({handleDeclineModal}) => {
  return (
    <div>
    <div className="bg-overlay h-[100vh]  w-[100%] top-0 left-0 fixed z-50 flex items-center md:justify-end justify-center ">
      <div className="bg-white  mx-auto rounded-lg h-[35%]   w-[75%] md:w-[30%] flex flex-col gap-y-10 justify-center  text-center text-[20px] font-medium">
      Are you sure you want to decline this application?
      <div className="flex justify-center text-white gap-5">
        <button className="bg-btnGreen py-2 px-10 rounded-lg">Yes</button>
        <button  onClick={handleDeclineModal} className="bg-btnRed py-2 px-10 rounded-lg">No</button>
      </div>
      </div>
    </div>
  </div>
  )
}

export default DeclineModal

const Details = ({ handleDetails }) => {
  return (
    <div>
      <div className="bg-overlay h-[100vh]  w-[100%] top-0 left-0 fixed z-50 flex items-center md:justify-end justify-center ">
        <div className="bg-white  mx-auto rounded-lg h-[35%]   w-[75%] md:w-[30%] flex flex-col gap-y-10 justify-center  text-center text-[20px] font-medium">
          Details
          <div className="flex justify-center text-white gap-5">
            
            <button onClick={handleDetails} className="bg-btnRed py-2 px-10 rounded-lg">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details

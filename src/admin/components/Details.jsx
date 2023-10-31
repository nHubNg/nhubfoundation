import { useContext } from "react"
import { ActiveContext } from "../../contexts/ActiveContext"

const Details = ({ handleDetails }) => {
  const {detail} = useContext(ActiveContext)
  return (
    <div>
      <div className="bg-overlay h-[100vh] w-[100%] top-0 left-0 fixed z-50 flex items-center md:justify-end justify-center ">
        <div className="bg-white  mx-auto rounded-lg py-10 w-[98%] md:w-[60%] flex flex-col gap-y-10 justify-center  text-center text-[18px] px-10 font-bold">
          <h1 className='text-[20px]'> {detail.first_name} {detail.last_name}</h1>
          <h1>Details</h1>
          <div className="flex justify-between items-center">
            <p className="text-[16px] text-black font-bolder">School: <span className='font-[400] text-gray text-[15px]'>{detail.institution}</span></p>
            <p className="text-[16px] text-black font-bolder">Course: <span className='font-[400] text-gray text-[15px]'>{detail.course_of_study}</span></p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-[16px] text-black font-bolder">Dept: <span className='font-[400] text-gray text-[15px]'>{detail.department}</span></p>
            <p className="text-[16px] text-black font-bolder">Reg No: <span className='font-[400] text-gray text-[15px]'>{detail.reg_number}</span></p>
            <p className="text-[16px] text-black font-bolder">Duration: <span className='font-[400] text-gray text-[15px]'>{detail.internship_duration} months</span></p>
            <p className="text-[16px] text-black font-bolder">Actual Duration: <span className='font-[400] text-gray text-[15px]'>{detail.months} months</span></p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-[16px] text-black font-bolder">Gender: <span className='font-[400] text-gray text-[15px]'>{detail.gender}</span></p>
            <p className="text-[16px] text-black font-bolder">Track: <span className='font-[400] text-gray text-[15px]'>{detail.track}</span></p>
            <p className="text-[16px] text-black font-bolder">Location: <span className='font-[400] text-gray text-[15px]'>{detail.interview_location}</span></p>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-[16px] text-black font-bolder">Cover Letter:</p>
              <a href={detail.cover_letter} target="_blank" rel='noreferrer' className='border-[1px] border-black rounded-[5px] px-3 py-1 text-[14px]'>View</a>
            </div>
            <div>
              <p className="text-[16px] text-black font-bolder">IT Letter:</p>
              <a href={detail.it_letter} target="_blank" rel='noreferrer' className='border-[1px] border-black rounded-[5px] px-3 py-1 text-[14px]'>View</a>
            </div>
          </div>
          <div className="flex justify-center text-white gap-5">
            <button onClick={handleDetails} className="bg-btnRed py-2 px-10 rounded-lg">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details

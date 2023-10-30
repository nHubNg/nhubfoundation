import { useCallback, useEffect, useState } from "react";
import AdminHeader from "../layouts/AdminHeader";
import AdminNav from "../layouts/AdminNav";
import { getAnalytics } from "../../helpers/admin";

const Overview = () => {
  const [analytics, setAnalytics] = useState([])
  const getCount = useCallback(async () => {
    const res = await getAnalytics()
    if (res?.status === 200 || res?.status === 201) {
      return setAnalytics(res.data.data)
    } else {
      console.log(res)
    }
  }, [setAnalytics])

  useEffect(() => {
    getCount()
  }, [getCount])

  return (
    <div className='pb-10'>
      <div>
        <AdminNav heading="Dashboard"/>
      </div>
      <div className="hidden md:block">
        <AdminHeader heading="Dashboard" text="Admin profile" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center py-14 w-[85%] md:w-[80%] mx-auto md:mt-[-70px] bg-white shadow-lg rounded-md gap-10">
        <img
          src="https://res.cloudinary.com/nhubnacademy/image/upload/v1690717429/nHubFoundation/Frame_4_ftvfwy.png"
          alt=""
          className=" w-[80px] md:w-[90px]"
        />
        <div className="flex flex-col gap-y-5 w-full md:w-[50%]">
          <div className="w-full">
            <h5 className="px-3">Full name</h5>
            <p className="border border-adminBorder w-[95%] md:w-[100%] mx-auto  rounded-md outline-none px-3 py-2 mt-2">Bashir Shiedu</p>
            {/* <input
              type="text"
              name=""
              id=""
              className="border border-adminBorder w-[100%]  rounded-md outline-none px-3 py-2 mt-2"
            /> */}
          </div>
          <div>
            <h5 className="px-3">Email address</h5>
            <p className="border border-adminBorder w-[95%] md:w-[100%] mx-auto  rounded-md outline-none px-3 py-2 mt-2">intern.admin@gmail.com</p>
            {/* <input
              type="text"
              name=""
              id=""
              className="border border-adminBorder w-[100%]  rounded-md outline-none px-3 py-2 mt-2"
            /> */}
          </div>
        </div>
      </div>
      <div>
        <div className=" mx-auto flex flex-col gap-6 mt-10 px-6 text-center">
          <div className="flex justify-center gap-4 md:gap-6 ">
            <div className="flex flex-col justify-center items-center bg-adminBlue text-white  w-[50%] md:w-[250px] py-9 md:py-12 rounded-md">
              <h5 >Total Screenings</h5>
              <p className="text-orange">{analytics.totalPendingScreenings}</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-adminBlue text-white py-9 md:py-12  w-[50%] md:w-[250px] rounded-md">
              <h5>Total Interviews</h5>
              <p className="text-orange">{analytics.isCalledForInterview}</p>
            </div>
          </div>
          <div className="flex justify-center  gap-4 md:gap-6">
            <div className="flex flex-col justify-center items-center bg-adminBlue text-white   w-[50%] md:w-[250px] py-9 md:py-12 rounded-md">
              <h5>Accepted Count</h5>
              <p className="text-orange">{analytics.isAccepted}</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-adminBlue text-white  w-[50%] md:w-[250px] py-9 md:py-12 rounded-md">
              <h5>Declined Count</h5>
              <p className="text-orange">{analytics.isDeclined}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

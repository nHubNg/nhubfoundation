import React, { useState, useEffect, useCallback, useContext } from "react";
import AdminHeader from "../layouts/AdminHeader";
import AdminNav from "../layouts/AdminNav";
import { getAllIntern } from "../../helpers/admin";
import { ActiveContext } from "../../contexts/ActiveContext";
import DisplayInterviewTable from "../layouts/DisplayInterviewTable";
import AppHeader from "../layouts/AppHeader";
import Dropdown from "./Dropdown";

const Interviews = () => {
  const { setDetail } = useContext(ActiveContext);
  const [acceptModal, handleAcceptModal] = useState(false);
  const [declineModal, handleDeclineModal] = useState(false);
  const [filteredData, setFilteredData] = useState([])
  const [allInterview, setAllInterview] = useState(() => {
    const cachedData = localStorage.getItem("cachedInterviewData");
    return cachedData ? JSON.parse(cachedData) : [];
  });



  const getAll = useCallback(async () => {
    try {
      const res = await getAllIntern("isCalledForInterview", "called");
      if (res?.status === 200 || res?.status === 201) {
        const data = res.data.data;
        setAllInterview(data);
        setFilteredData(data);
        // Cache the fetched data in local storage
        localStorage.setItem("cachedInterviewData", JSON.stringify(data));
      } else {
        console.log(res);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const handleNameSearch = (elem) => {
    const searchString = elem.target.value
    const filteredResults = allInterview.filter(
      (item) =>
        item.first_name.toLowerCase().includes(searchString.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchString.toLowerCase()) ||
        item.email.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredData(filteredResults);
  }


  useEffect(() => {
    getAll();
  }, [getAll]);

  const TableFieldNames = [
    "Details",
    "Email",
    "Start Date",
    "End Date",
    "Mode",
    "Date",
    "Time",
    "Actions",
  ]
  const handleDetails = (item) => {
    setDetail(item)
    setDetails(!details)
  }
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchQuery(searchTerm);
    if (searchTerm === "") {
      getAll();
    } else {
      const filteredInterviews = allInterview.filter((user) =>
        `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchTerm)
      );
      setAllInterview(filteredInterviews);
    }
  };

  

  return (
    <>
      <AdminNav heading="Interviews" />
      <div>
        <div className="hidden md:block">
          <AdminHeader heading="Interviews" text="Pending  interviews" />
        </div>
<AppHeader total={allInterview.length} handleNameSearch={handleNameSearch} />

       
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
                  <Dropdown pend={pend}
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
          <table className="table-auto mx-auto mt-10 w-[95%] overflow-auto ">
            <thead>
              <tr>
                <th className="py-3 text-left">Details</th>
                <th className="py-3 text-center">Email</th>
                <th className="py-3 text-center">Start Date</th>
                <th className="py-3 text-center">End Date</th>
                <th className="py-3 text-center">Location</th>
                <th className="py-3 text-center">Interview</th>
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
                    <td className="py-3 text-center">{pend.interviewDate.slice(0, -6)}</td>
                    <td className="py-3 text-center">{pend.interviewTime}</td>
                    <td className='cursor-pointer'>
                      
                      <Dropdown pend={pend}
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
        {filteredData.length === 0 ? 
        <DisplayInterviewTable handleNameSearch={handleNameSearch}
          data={allInterview}
          fieldNames={TableFieldNames} 
        />
        : 
        <DisplayInterviewTable data={filteredData} fieldNames={TableFieldNames} handleNameSearch={handleNameSearch} />
      }
        
      </div>
    </>
  );
};

export default Interviews;

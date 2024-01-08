import React, { useState, useEffect, useCallback, useContext } from "react";
import AdminHeader from "../layouts/AdminHeader";
import AdminNav from "../layouts/AdminNav";
import { getAllIntern } from "../../helpers/admin";
import { ActiveContext } from "../../contexts/ActiveContext";
import DisplayInterviewTable from "../layouts/DisplayInterviewTable";

const Interviews = () => {
  const { setDetail } = useContext(ActiveContext);
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

  return (
    <>
      <AdminNav heading="Interviews" />
      <div>
        <div className="hidden md:block">
          <AdminHeader heading="Interviews" text="Pending interviews" />
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

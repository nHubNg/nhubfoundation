import React, { useState, useEffect, useCallback, useContext } from "react";
import AdminHeader from "../layouts/AdminHeader";
import AdminNav from "../layouts/AdminNav";
import { getAllIntern } from "../../helpers/admin";
import { ActiveContext } from "../../contexts/ActiveContext";
import DisplayInterviewTable from "../layouts/DisplayInterviewTable";
import AppHeader from "../layouts/AppHeader";
import Dropdown from "./Dropdown";
import AcceptModal from "../modals/AcceptModal";
import RescheduleModal from "../modals/ResheduleModal";

const Interviews = () => {
  const { setDetail } = useContext(ActiveContext);
  const [acceptModal, setAcceptModal] = useState(false);
  const [declineModal, setDeclineModal] = useState(false);
  const [rescheduleModal, setRescheduleModal] = useState(false); // State variable for reschedule modal
  const [filteredData, setFilteredData] = useState([]);
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
        localStorage.setItem("cachedInterviewData", JSON.stringify(data));
      } else {
        console.log(res);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    getAll();
  }, [getAll]);

  const handleNameSearch = (elem) => {
    const searchString = elem.target.value;
    const filteredResults = allInterview.filter(
      (item) =>
        item.first_name.toLowerCase().includes(searchString.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchString.toLowerCase()) ||
        item.email.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const handleAcceptModal = (detailId) => {
    setDetail(detailId);
    setAcceptModal(true);
  };

  const handleDeclineModal = (detailId) => {
    setDetail(detailId);
    setDeclineModal(true);
  };

  const handleRescheduleModal = (detailId) => {
    setDetail(detailId);
    setRescheduleModal(true);
  };

  const closeRescheduleModal = () => {
    setRescheduleModal(false);
  };

  const TableFieldNames = [
    "Details",
    "Email",
    "Start Date",
    "End Date",
    "Mode",
    "Date",
    "Time",
    "Actions",
  ];

  const handleDetails = (item) => {
    setDetail(item);
  };

  return (
    <>
      <AdminNav heading="Interviews" />
      <div>
        <AdminHeader heading="Interviews" text="Pending interviews" />


        {filteredData.length === 0 ? (
          <DisplayInterviewTable
            handleNameSearch={handleNameSearch}
            data={allInterview}
            fieldNames={TableFieldNames}
          />
        ) : (
          <DisplayInterviewTable data={filteredData} fieldNames={TableFieldNames} handleNameSearch={handleNameSearch} />
        )}

        {rescheduleModal && <RescheduleModal isOpen={rescheduleModal} onClose={() => closeRescheduleModal()} />}
        {acceptModal && <AcceptModal isOpen={acceptModal} onClose={() => setAcceptModal(false)} />}
      </div>
    </>
  );
};

export default Interviews;

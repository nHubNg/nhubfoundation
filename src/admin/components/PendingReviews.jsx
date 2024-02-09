import React, { useState, useEffect, useCallback, useContext } from 'react';
import AdminHeader from '../layouts/AdminHeader';
import AdminNav from '../layouts/AdminNav';
import { getAllIntern } from '../../helpers/admin';
import { ActiveContext } from '../../contexts/ActiveContext';
import DisplayTable from '../layouts/DisplayTable';

const PendingReviews = () => {
  const { setDetail } = useContext(ActiveContext);
  const [filteredData, setFilteredData] = useState([])
  const [allPending, setAllPending] = useState(() => {
    const cachedData = localStorage.getItem('cachedPendingData');
    return cachedData ? JSON.parse(cachedData) : [];
  });
  const [fetch, setFetch] = useState(false);

  const getAll = useCallback(async () => {
    try {
      const res = await getAllIntern('isCalledForInterview', 'pending');
      if (res?.status === 200 || res?.status === 201) {
        const data = res.data.data;
        setAllPending(data);
        setFilteredData(data);
        // Cache fetched data in local storage
        localStorage.setItem('cachedPendingData', JSON.stringify(data));
      } else {
        console.log(res);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  const handleNameSearch = (elem) => {
    const searchString = elem.target.value
    const filteredResults = allPending.filter(
      (item) =>
        item.first_name.toLowerCase().includes(searchString.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchString.toLowerCase()) ||
        item.email.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredData(filteredResults);
    console.log(filteredData)
  }


  useEffect(() => {
    getAll();
  }, [getAll, fetch]);

  const TableFieldNames = ['Details', 'Email', 'Interview Mode', 'Duration (M)', 'Start Date', 'End Date', 'Action'];

  return (
    <>
      <div className=" ">
        <AdminNav heading="Internship Applications" />
        <div className="hidden md:block">
          <AdminHeader heading="New Applicants" text="New reviews" />
        </div>
        {filteredData.length === 0 ? 
        <DisplayTable data={allPending} fieldNames={TableFieldNames} handleNameSearch={handleNameSearch} />
        :
        <DisplayTable data={filteredData} fieldNames={TableFieldNames} handleNameSearch={handleNameSearch} />
      }
      </div>
    </>
  );
};

export default PendingReviews;

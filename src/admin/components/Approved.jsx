import AdminHeader from "../layouts/AdminHeader";
import AppHeader from "../layouts/AppHeader";
import AcceptedDropdown from "./AcceptedDropdown";
import StartModal from "../modals/StartModal";
import { useEffect, useState, useCallback, useContext } from "react";
import DeclineModal from "../modals/DeclineModal";
import Details from "./Details";
import AdminNav from "../layouts/AdminNav";
import { getAllIntern } from "../../helpers/admin";
import { ActiveContext } from "../../contexts/ActiveContext";
import { SyncLoader } from "react-spinners";
import { obscureEmail } from "../../customMethods";
import { format } from "date-fns";


const Approved = () => {
  const { setDetail } = useContext(ActiveContext)

  const [startModal, setStartModal] = useState(false);
  const [declineModal, setDeclineModal] = useState(false);
 
  const [details, setDetails] = useState(false);
  const [fetch, setFetch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true); 
  const [allApproved, setAllApproved] = useState(() => {
    const storedData = localStorage.getItem("startedUsers");
    return storedData ? JSON.parse(storedData) : [];
  });
  const getAll = useCallback(async () => {
    const res = await getAllIntern('isApproved', 'approved');
    if (res?.status === 200 || res?.status === 201) {
      const approvedData = res.data.data;
      
      const startedUsers = approvedData.filter(user => user.isStarted === false && user.isFinished === false);
      console.log(startedUsers)
      localStorage.setItem('startedUsers', JSON.stringify(startedUsers))
      setAllApproved(startedUsers);
      setLoading(false); 
    } else {
      setLoading(false); 
    }
  }, [setAllApproved]);


  useEffect(() => {
    getAll()
  }, [getAll, fetch])

  const handleDetails = (item) => {
    setDetail(item)
    setDetails(!details)
  }

  const handleStartModal = (item) => {
    setDetail(item)
    setStartModal(!startModal);
  };

  const handleDeclineModal = (item) => {
    setDetail(item)
    setDeclineModal(!declineModal);
  }

  const handleNameSearch = (elem) => {
    const searchString = elem.target.value
    const filteredResults = allApproved.filter(
      (item) =>
        item.first_name.toLowerCase().includes(searchString.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchString.toLowerCase()) ||
        item.email.toLowerCase().includes(searchString.toLowerCase())
    );
    setAllApproved(filteredResults);
  }
  
  return (
    <>
      {details ? <Details handleDetails={handleDetails} /> : ""}
      {startModal ? (
        <StartModal setFetch={setFetch} handleStartModal={handleStartModal} />
      ) : (
        ""
      )}
      {
        declineModal ? (
          <DeclineModal setFetch={setFetch} handleDeclineModal={handleDeclineModal} />
        )
          :
          ""
      }
      <AdminNav heading="Approved Applications" />
      <div>
        <div className="hidden md:block">
          <AdminHeader
            heading="Approved Applications"
            text="All approved applications"
          />
        </div>
        <AppHeader total={allApproved.length} handleNameSearch={handleNameSearch} />

        {loading ? ( 
          <div className="flex justify-center items-center py-5 w-full">
            <SyncLoader color="#f26024" />
          </div>
        ) : allApproved.length > 0 ? (
          <div className="mt-8  md:hidden flex flex-col gap-y-5 pb-20">
            {allApproved.map((pend, i) => (
              <div key={i} className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-md shadow-adminShadow py-4 px-5 rounded-lg">
                <div>
                  <h5>{pend.first_name} {pend.last_name}</h5>
                  <p>{pend.email}</p>
                </div>
                <div>
                  <div className='flex justify-center items-center gap-3'>
                    <div onClick={() => handleDetails(pend)} className='cursor-pointer'>
                      <img
                        src="https://res.cloudinary.com/nhubnacademy/image/upload/v1692608267/nHubFoundation/ep_arrow-up_ykqgk7.svg"
                        alt=""
                      />
                    </div>
                    <AcceptedDropdown handleStartModal={() => handleStartModal(pend._id)} handleDeclineModal={() => handleDeclineModal(pend._id)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : ( 
          <div className="hidden md:block lg:flex justify-center items-center py-5 w-full mx-auto">
            <p>No Approved Application</p>
          </div>
        )}

        {/* Desktop view */}
        <div className="hidden md:block ">
          <table className="table-auto text-sm mx-auto mt-10 w-[95%] overflow-auto ">
            <thead>
              <tr>
                <th className="py-3 text-left font">Details</th>
                <th className="py-3 text-left">Email</th>
                <th className="py-3 text-left">Phone</th>
                <th className="py-3 text-left">Start</th>
                <th className="py-3 text-left">End</th>
                <th className="py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allApproved.map((pend, i) => (
                <tr key={i}>
                  <td className="py-2">
                    <button className="flex items-center gap-1 rounded-lg bg-adminGray py-2 px-7" onClick={() => handleDetails(pend)} >
                      <img
                        src="https://res.cloudinary.com/nhubnacademy/image/upload/v1690808993/nHubFoundation/bx_detail_bh1gnk.png"
                        alt=""
                      />
                      {pend.first_name} {pend.last_name}
                    </button>
                  </td>
                  <td className="py-3 text-left text-orange">
                  {obscureEmail(pend.email.toLowerCase())}

                  </td>
                  <td className="py-3 text-left">{pend.phone}</td>
                  <td className="py-3 text-left">{format(pend.start_date, 'MMMM do, yyyy')}</td>
                  <td className="py-3 text-left">{format(pend.end_date, 'MMMM do, yyyy')}</td>
                  <td className="cursor-pointer">
                    <AcceptedDropdown handleStartModal={() => handleStartModal(pend._id)} handleDeclineModal={() => handleDeclineModal(pend._id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </>
  );
};

export default Approved;

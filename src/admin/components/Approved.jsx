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


const Approved = () => {
  const { setDetail } = useContext(ActiveContext)

  const [startModal, setStartModal] = useState(false);
  const [declineModal, setDeclineModal] = useState(false);
  const [allApproved, setAllApproved] = useState([])
  const [details, setDetails] = useState(false);
  const [fetch, setFetch] = useState(false)


  const getAll = useCallback(async () => {
    const res = await getAllIntern('isApproved', 'approved')
    if (res?.status === 200 || res?.status === 201) {
      return setAllApproved(res.data.data)
    } else {
      console.log(res)
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
        <AppHeader total={allApproved.length} />
        <div className="mt-8  md:hidden flex flex-col gap-y-5 pb-20">
          {allApproved.length > 0 ? allApproved.map((pend, i) => {
            return (
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
            )
          }) : <div className="flex justify-center md:hidden">
            <div className=" mt-10 py-2 w-[90%] flex justify-center px-4 rounded-sm">
              <p>No Approved Applications</p>
            </div>
          </div>}

        </div>
        <div className="hidden md:block">
          <table className="table-auto mx-auto mt-10 w-[95%] overflow-auto ">
            <thead>
              <tr>
                <th className="py-3 text-left font">Details</th>
                <th className="py-3 text-center">Email</th>
                <th className="py-3 text-center">Phone</th>
                <th className="py-3 text-center">Start</th>
                <th className="py-3 text-center">End</th>
                <th className="py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allApproved.length > 0 ? allApproved.map((pend, i) => {
                return (
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
                    <td className="py-3 text-center text-orange">
                      {pend.email}
                    </td>
                    <td className="py-3 text-center">{pend.phone}</td>
                    <td className="py-3 text-center">{pend.start_date}</td>
                    <td className="py-3 text-center">{pend.end_date}</td>
                    <td className="cursor-pointer">
                      <AcceptedDropdown handleStartModal={() => handleStartModal(pend._id)} handleDeclineModal={() => handleDeclineModal(pend._id)} />
                    </td>
                  </tr>
                )
              }) : <div className='mt-16 w-full'>
                <div className="hidden md:block lg:flex justify-center items-center">
                  <div className="flex justify-center items-center py-5 w-[100%] mx-auto md:mt-[-40px] bg-white shadow-lg rounded-md gap-10">
                    <div className=" py-2 w-[100%] flex justify-between px-4 rounded-md">
                      <p>No Approved Application</p>
                    </div>
                  </div>
                </div>
              </div>}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Approved;

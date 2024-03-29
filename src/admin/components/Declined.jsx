import { useEffect, useState, useCallback, useContext } from "react";
import AdminHeader from "../layouts/AdminHeader";
import AppHeader from "../layouts/AppHeader";
// import DeclineDropdown from "./DeclineDropdown";
import DeleteModal from "../modals/StartModal";
import DeclineModal from "../modals/DeclineModal";
import Details from "./Details";
import AdminNav from "../layouts/AdminNav";
import { getAllIntern } from "../../helpers/admin";
import { ActiveContext } from "../../contexts/ActiveContext";
import { obscureEmail } from "../../customMethods";
import { format } from "date-fns";


const Declined = () => {
  const { setDetail } = useContext(ActiveContext)
  const [deleteModal, setDeleteModal] = useState(false);
  const [declineModal, setDeclineModal] = useState(false);
  const [allDeclined, setAllDeclined] = useState( () =>{
    const NotApproved = localStorage.getItem('NotApproved')
    return NotApproved ? JSON.parse(NotApproved): []
})
  const [details, setDetails] = useState(false);
  const [fetch, setFetch] = useState(false)



  const getAll = useCallback(async () => {
    const res = await getAllIntern('isApproved', 'declined')
    if (res?.status === 200 || res?.status === 201) {
      localStorage.setItem('NotApproved', JSON.stringify(res.data.data))
      return setAllDeclined(res.data.data)
    } else {
      console.log(res)
    }
  }, [setAllDeclined]);

  useEffect(() => {
    getAll()
  }, [getAll, fetch])

  const handleDetails = (item) => {
    setDetail(item)
    setDetails(!details)
  }

  const handleDeleteModal = (item) => {
    setDetail(item)
    setDeleteModal(!deleteModal);
  };
  const handleDeclineModal = (item) => {
    setDetail(item)
    setDeclineModal(!declineModal);
  }

  const handleNameSearch = (elem) => {
    const searchString = elem.target.value
    const filteredResults = allDeclined.filter(
      (item) =>
        item.first_name.toLowerCase().includes(searchString.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchString.toLowerCase()) ||
        item.email.toLowerCase().includes(searchString.toLowerCase())
    );
    setAllDeclined(filteredResults);
  }
  return (
    <>
      {details ? <Details handleDetails={handleDetails} /> : ""}
      {deleteModal ? (
        <DeleteModal handleDeleteModal={handleDeleteModal} />
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
      <AdminNav heading="Declined Applications" />
      <div>
        <div className="hidden md:block">
          <AdminHeader
            heading="Declined Applications"
            text="All declined applications"
          />
        </div>
        <AppHeader total={allDeclined.length} handleNameSearch={handleNameSearch}/>
        <div className="mt-8  md:hidden flex flex-col gap-y-5 pb-20">
          {allDeclined.length > 0 ? allDeclined.map((pend, i) => {
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
                  {/* <DeclineDropdown handleDeleteModal={() => handleDeleteModal(pend._id)} /> */}
                </div>
              </div>
            )
          }) : <div className="flex justify-center md:hidden">
            <div className=" mt-10 py-2 w-[90%] flex justify-center px-4 rounded-sm">
              <p>No Declined Applications</p>
            </div>
          </div>}
        </div>
        <div className="hidden md:block text-sm">
          <table className="table-auto mx-auto mt-10 w-[90%] overflow-auto ">
            <thead>
              <tr>
                <th className="py-3 text-left">Details</th>
                <th className="py-3 text-left">Email</th>
                <th className="py-3 text-left">Phone</th>
                <th className="py-3 text-left">Start</th>
                <th className="py-3 text-left">End</th>
                {/* <th className="py-3 text-center">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {allDeclined.length > 0 ? allDeclined.map((pend, i) => {
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
                    <td className="py-3 text-left text-orange">
                      {obscureEmail(pend.email).toLowerCase()}
                    </td>
                    <td className="py-3 text-left">{pend.phone}</td>
                    <td className="py-3 text-left">{format(pend.start_date, 'MMMM do, yyyy')}</td>
                    <td className="py-3 text-left">{format(pend.end_date, 'MMMM do, yyyy')}</td>
                    {/* <td className='cursor-pointer'>
                      <DeclineDropdown handleDeleteModal={() => handleDeleteModal(pend._id)} />
                    </td> */}
                  </tr>
                )
              }) : <div className='mt-16 w-full'>
                <div className="hidden md:block lg:flex justify-center items-center">
                  <div className="flex justify-center items-center py-5 w-[100%] mx-auto md:mt-[-40px] bg-white shadow-lg rounded-md gap-10">
                    <div className=" py-2 w-[100%] flex justify-between px-4 rounded-md">
                      <p>No Declined Application</p>
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

export default Declined;

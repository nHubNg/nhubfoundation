import AdminHeader from "../layouts/AdminHeader";
import AppHeader from "../layouts/AppHeader";
import StartDropdown from "./StartDropdown";
import EndModal from "../modals/EndModal";
import { useEffect, useState, useCallback, useContext } from "react";
import Details from "./Details";
import AdminNav from "../layouts/AdminNav";
import { getAllIntern } from "../../helpers/admin";
import { ActiveContext } from "../../contexts/ActiveContext";
import { SyncLoader } from "react-spinners";
import { format } from "date-fns";
import { obscureEmail } from "../../customMethods";

const Start = () => {
  const { setDetail } = useContext(ActiveContext);

  const [endModal, setEndModal] = useState(false);
  const [allStarted, setAllStarted] = useState(() => {
    const isStart = localStorage.getItem("isStarted");
    return isStart ? JSON.parse(isStart) : [];
  });
  const [details, setDetails] = useState(false);
  const [fetch, setFetch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getAll = useCallback(async () => {
    setLoading(true);
    const res = await getAllIntern("isStarted", true);
    setLoading(false);
    if (res?.status === 200 || res?.status === 201) {
      setLoading(false);
      localStorage.setItem("isStarted", JSON.stringify(res.data.data));
      return setAllStarted(res.data.data);
    } else {
      console.log(res);

      setLoading(false);
    }
  }, [setAllStarted]);

  useEffect(() => {
    getAll();
  }, [getAll, fetch]);

  const handleDetails = (item) => {
    setDetail(item);
    setDetails(!details);
  };

  const handleEndModal = (item) => {
    console.log("End Modal Triggered for Item:", item);
    setDetail(item);
    setEndModal(!endModal);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchQuery(searchTerm);
    if (searchTerm === "") {
      getAll();
    } else {
      const filterStarted = setAllStarted.filter((user) => {
        `${user.first_name} ${user.last_name}}`;
      });
    }
  };
  const handleNameSearch = (elem) => {
    const searchString = elem.target.value;
    const filteredResults = allStarted.filter(
      (item) =>
        item.first_name.toLowerCase().includes(searchString.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchString.toLowerCase()) ||
        item.email.toLowerCase().includes(searchString.toLowerCase())
    );
    setAllStarted(filteredResults);
  };

  return (
    <>
      {details ? <Details handleDetails={handleDetails} /> : ""}
      {endModal ? (
        <EndModal setFetch={setFetch} handleEndModal={handleEndModal} />
      ) : (
        ""
      )}

      <AdminNav heading="Started Applications" />
      <div>
        <div className="hidden md:block">
          <AdminHeader
            heading="Started Applications"
            text="All started applications"
          />
        </div>
        <AppHeader
          total={allStarted.length}
          handleNameSearch={handleNameSearch}
        />
        <div className="mt-8  md:hidden flex flex-col gap-y-5 pb-20">
          {loading ? (
            <div className="flex justify-center items-center py-5 w-full">
              <SyncLoader color="#f26024" />
            </div>
          ) : allStarted.length > 0 ? (
            <>
              {allStarted.map((pend, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-md shadow-adminShadow py-4 px-5 rounded-lg"
                >
                  <div>
                    <h5>
                      {pend.first_name} {pend.last_name}
                    </h5>
                    <p>{pend.email}</p>
                  </div>
                  <div>
                    <div className="flex justify-center items-center gap-3">
                      <div
                        onClick={() => handleDetails(pend)}
                        className="cursor-pointer"
                      >
                        <img
                          src="https://res.cloudinary.com/nhubnacademy/image/upload/v1692608267/nHubFoundation/ep_arrow-up_ykqgk7.svg"
                          alt=""
                        />
                      </div>
                      <StartDropdown
                        handleEndModal={() => handleEndModal(pend._id)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="flex justify-center md:hidden">
              <div className=" mt-10 py-2 w-[90%] flex justify-center px-4 rounded-sm">
                <p>No Started Applications</p>
              </div>
            </div>
          )}
        </div>
        <div className="hidden md:block text-sm">
          <table className="table-auto mx-auto mt-10 w-[95%] overflow-auto ">
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
              {allStarted.length > 0 ? (
                allStarted.map((pend, i) => {
                  return (
                    <tr key={i}>
                      <td className="py-2">
                        <button
                          className="flex items-center gap-1 rounded-lg bg-adminGray py-2 px-7"
                          onClick={() => handleDetails(pend)}
                        >
                          <img
                            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1690808993/nHubFoundation/bx_detail_bh1gnk.png"
                            alt=""
                          />
                          {/* {pend.first_name} {pend.last_name} */}
                          <p>
                            {pend.first_name} {pend.last_name}
                          </p>
                        </button>
                      </td>
                      <td className="py-3 text-left text-orange">
                        {obscureEmail(pend.email.toLowerCase())}
                      </td>
                      <td className="py-3 text-left">{pend.phone}</td>
                      <td className="py-3 text-left">
                        {format(pend.start_date, "MMMM do, yyyy")}
                      </td>
                      <td className="py-3 text-left">
                        {format(pend.end_date, "MMMM do, yyyy")}
                      </td>
                      <td className="cursor-pointer">
                        <StartDropdown
                          handleEndModal={() => handleEndModal(pend._id)}
                        />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div className="mt-16 w-full">
                  <div className="hidden md:block lg:flex justify-center items-center">
                    <div className="flex justify-center items-center py-5 w-[100%] mx-auto md:mt-[-40px] bg-white shadow-lg rounded-md gap-10">
                      <div className=" py-2 w-[100%] flex justify-between px-4 rounded-md">
                        <p>No Started Application</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Start;

import { useState, useEffect, useContext } from "react";
import PersonalDetails from "./components/PersonalDetails";
import School from "./components/School";
import FileUpload from "./components/FileUpload";
import { InstructModal } from "./components/InstructModal";
import { FormContext } from "../../contexts/FormContext";
import { SubmitInternship } from "../../helpers/internship";
import Modal from "../../components/Success";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
const Internship = () => {
  const { formData, setFormData } = useContext(FormContext);
  const [page, setPage] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [errMsg, setErrMsg] = useState(null);
  const [success, setSuccess] = useState(false);

  const formTitles = [
    "Personal Details",
    "School and Experience",
    "File Upload",
  ];

  const pageDisplay = () => {
    if (page === 0) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <School formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <FileUpload formData={formData} setFormData={setFormData} />;
    }
  };

  const pageNumber = () => {
    if (page === 0) {
      return (
        <div className="text-center bg-orange rounded-[50%] text-white w-14 mx-[40%]  md:mx-[47%] p-[12px]">
          <h1>1</h1>
        </div>
      );
    } else if (page === 1) {
      return (
        <div className="text-center bg-orange rounded-[50%] text-white w-14 mx-[40%]  md:mx-[47%] p-[12px]">
          <h1>2</h1>
        </div>
      );
    } else {
      return (
        <div className="text-center bg-orange rounded-[50%] text-white w-14 mx-[40%]  md:mx-[47%] p-[12px]">
          <h1>3</h1>
        </div>
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // console.log(formData);
    if (page === formTitles.length - 1) {
      if (
        formData.firstname === "" ||
        formData.lastname === "" ||
        formData.email === "" ||
        formData.phone === "" ||
        formData.interview === "" ||
        formData.gender === "" ||
        formData.school === "" ||
        formData.department === "" ||
        formData.course === "" ||
        formData.startDate === "" ||
        formData.endDate === "" ||
        formData.experience === "" ||
        formData.track === "" ||
        formData.duration === "" ||
        formData.cover.length === 0 ||
        formData.it.length === 0 ||
        formData.regNo === ""
      ) {
        return setError(
          "Please ensure all fields are filled in before submission."
        );
      } else {
        setError("");
        setLoading("Loading...");
        const res = await SubmitInternship(
          formData.email,
          formData.phone,
          formData.firstname,
          formData.lastname,
          formData.school,
          formData.department,
          formData.course,
          formData.regNo,
          formData.startDate,
          formData.endDate,
          formData.experience,
          formData.track,
          formData.gender,
          formData.interview,
          formData.duration,
          formData.it,
          formData.cover
        );
        setLoading("");
        if (res.status === 200 || res.status === 201) {
          setLoading("");
          alert(res.data.message);
          setSuccess(true);
        } else {
          console.log("error");
          setLoading("");
          setErrMsg(res.data.message);
        }
      }
    } else {
      setPage((currPage) => currPage + 1);
    }
  };

  const canProceed = () => {
    if (page === 0) {
      return (
        formData.firstname !== "" &&
        formData.lastname !== "" &&
        formData.email !== "" &&
        formData.phone !== "" &&
        formData.interview !== "" &&
        formData.gender !== ""
      );
    } else if (page === 1) {
      return (
        formData.school !== "" &&
        formData.department !== "" &&
        formData.course !== "" &&
        formData.startDate !== "" &&
        formData.endDate !== "" &&
        formData.experience !== "" &&
        formData.track !== "" &&
        formData.duration !== ""
      );
    } else if (page === 2) {
      return (
        formData.cover.length > 0 &&
        formData.it.length > 0 &&
        formData.regNo !== ""
      );
    }
  };

  const handleNextClick = () => {
    if (canProceed()) {
      setPage((currPage) => currPage + 1);
      setError("");
    } else {
      setError("Please ensure all fields are filled in before proceeding.");
    }
  };

  return (
    <>
      <ScrollToTopOnMount />
      <div className="md:flex justify-between overflow-x-hidden mb-10 w-full p-4 gap-10 px-12">
        <div className="pt-10 md:w-[40%]">
          <InstructModal />
        </div>
        <div className=" md:w-[60%]">
          <div className="pt-10 text-center  font-semibold pb-8 ">
            <h1 className="text-black text-2xl">Internship Application</h1>
            <p className="text-black capitalize">All fields are Required</p>
          </div>
          <div className="border border-orange rounded-[10px] flex flex-col justify-center items-center">
            <div className="overflow-scroll px-10  mt-2 ">
              <div className="overflow-hidden">
                <p className="mb-0 text-center">{pageNumber()}</p>
                <div className="mb-4">
                  <h1 className="flex justify-center mt-6 items-center text-xl text-black">
                    {formTitles[page]}
                  </h1>
                </div>
                <div className="mt-2">{pageDisplay()}</div>
                <p className="text-orange text-center">{loading}</p>
                <p className="text-btnRed text-center">{error}</p>
                <p className="text-btnRed text-center">{errMsg}</p>

                <div className="flex justify-between items-center my-4 ">
                  {page === 0 ? (
                    ""
                  ) : (
                    <button
                      className="py-2 px-6 md:px-9 bg-orange text-white rounded-md"
                      disabled={page === 0}
                      onClick={() => {
                        setPage((currPage) => currPage - 1);
                      }}
                    >
                      Prev
                    </button>
                  )}
                  <button
                    className="  py-2 px-6 mt-2 md:mt-0 md:px-9 bg-orange text-white rounded-md"
                    // disabled={!canProceed}
                    onClick={handleNextClick}
                  >
                    {page === formTitles.length - 1 ? "Apply" : " Next"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {success && <Modal />}
    </>
  );
};

export default Internship;

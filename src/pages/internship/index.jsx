import { useState, useEffect, useContext } from "react";
import PersonalDetails from "./components/PersonalDetails";
import School from "./components/School";
import FileUpload from "./components/FileUpload";
import { InstructModal } from "./components/InstructModal";
import { FormContext } from "../../contexts/FormContext";
import { SubmitInternship } from "../../helpers/internship";


function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
const Internship = () => {
  const { formData, setFormData } = useContext(FormContext);
  const [page, setPage] = useState(0);
  const [error, setError] = useState('')
  const [errMsg, setErrMsg] = useState(null)

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
      return (<div className="text-center bg-orange rounded-[50%] text-white w-14 mx-[40%]  md:mx-[47%] p-[12px]">
        <h1>1</h1>
      </div>);
    } else if (page === 1) {
      return (<div className="text-center bg-orange rounded-[50%] text-white w-14 mx-[40%]  md:mx-[47%] p-[12px]">
        <h1>2</h1>
      </div>);
    } else {
      return (<div className="text-center bg-orange rounded-[50%] text-white w-14 mx-[40%]  md:mx-[47%] p-[12px]">
        <h1>3</h1>
      </div>);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    // console.log(formData);
    if (page === formTitles.length - 1) {
      if (formData.firstname === '' || formData.lastname === '' || formData.email === '' || formData.phone === '' || formData.interview === '' || formData.gender === '' || formData.school === '' || formData.department === '' || formData.course === '' || formData.startDate === '' || formData.endDate === '' || formData.experience === '' || formData.track === '' || formData.duration === '' || formData.cover.length === 0 || formData.it.length === 0 || formData.regNo === '') {
        return setError('Please ensure all fields are filled in before submission.')
      } else {
        setError('')
        const res = await SubmitInternship(formData.email, formData.phone, formData.firstname, formData.lastname, formData.school, formData.department, formData.course, formData.regNo, formData.startDate, formData.endDate, formData.experience, formData.track, formData.gender, formData.interview, formData.duration, formData.it, formData.cover)
        console.log(res)
        if (res.status === 200 || res.status === 201) {
          alert(res.data.message)
        } else {
          setErrMsg(res.data.errors)
        }
      }
    } else {
      setPage((currPage) => currPage + 1);
    }
  };


  return (
    <>

      <ScrollToTopOnMount />
      <div className="md:flex justify-between overflow-x-hidden mb-10 w-full p-4">
        <div className="pt-10  md:w-[500px]">
          <InstructModal />
        </div>
        <div className="">
          <div className="pt-10 text-center  font-semibold pb-8 ">
            <h1 className="text-black text-2xl">Internship Application</h1>
            <p className="text-black capitalize">All fields are Required</p>

          </div>
          <div className=" md:w-[80%] md:ml-32 border border-orange rounded-[10px] flex flex-col justify-center items-center">
            <div className="md:w-[105%] overflow-hidden px-10 md:h-[105vh] mt-2 ">

              <div className="overflow-hidden">

                <p className="mb-0 text-center">{pageNumber()}</p>
                <div className="mb-4">
                  <h1 className="flex justify-center mt-6 items-center text-xl text-black">
                    {formTitles[page]}
                  </h1>
                </div>
                <div className="mt-2">
                  {pageDisplay()}
                </div>

                <p className="text-btnRed text-center">{error}</p>
                <p className="text-btnRed text-center">{errMsg}</p>

                <div className="flex  justify-between items-center my-4 ">
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
                    onClick={handleSubmit}
                  >
                    {page === formTitles.length - 1 ? "Apply" : " Next"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Internship;

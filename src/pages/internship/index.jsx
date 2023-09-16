import { useState,useEffect } from "react";
import PersonalDetails from "./components/PersonalDetails";
import School from "./components/School";
import FileUpload from "./components/FileUpload";


function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
const Internship = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interview: "",
    gender: "",
    school: "",
    department: "",
    course: "",
    startDate: "",
    endDate: "",
    experience: "",
    track: "",
    duration: "",
    cover:"",
    it:"",
  });
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
    } else {
      return <FileUpload formData={formData} setFormData={setFormData}/>;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
    <ScrollToTopOnMount/>
    <div className="my-container">
    <div className="pt-10 pb-8 ">
    <p className="text-orange">nHub Internship Application</p>
    <div className="w-[90%] md:[55%] h-[2px] bg-orange"></div>
  </div>
    <div className=" flex flex-col justify-center items-center">
        <div className="md:w-[60%] ">
          <div>
            <h1 className="flex justify-center items-center text-orange">
              {formTitles[page]}
            </h1>
            <div >{pageDisplay()}</div>
          </div>
          <div className="flex justify-between items-center my-4 ">
            {page === 0 ? (
              ""
            ) : (
              <button
                className="py-2 px-9 bg-orange text-white rounded-md"
                disabled={page === 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </button>
            )}
            {/* <button onClick={handleSubmit} className="py-2 px-9 bg-orange text-white rounded-md">Submit</button> */}
            <button
              className="py-2 px-9 bg-orange text-white rounded-md"
              onClick={(e) => {
                if (page === formTitles.length - 1) {
                  e.preventDefault();
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === formTitles.length - 1 ? "Apply" : " Next"}
            </button>
          </div>
        </div>
    </div>
    </div>
    </>
  );
};

export default Internship;

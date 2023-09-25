import { useState,useEffect } from "react";
import PersonalDetails from "./components/PersonalDetails";
import School from "./components/School";
import FileUpload from "./components/FileUpload";
import { InstructModal } from "./components/InstructModal";




//Swiper on PageNumber
import {Swiper, SwiperSlide} from "swiper/react";


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

  const pageNumber =()=>{
    if (page === 0) {
      return (<div className="text-center bg-orange rounded-[50%] text-white w-10 mx-[47%] p-[5px]">
            <h1>1</h1>
            </div>);
    } else if (page === 1) {
      return (<div className="text-center bg-orange rounded-[50%] text-white w-10 mx-[47%] p-[5px]">
      <h1>2</h1>
    </div>);
    } else {
      return (<div className="text-center bg-orange rounded-[50%] text-white w-10 mx-[47%] p-[5px]">
      <h1>3</h1>
    </div>);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };




  return (
    <>

    <ScrollToTopOnMount/>
    <div className="md:flex justify-between w-full p-4">
      <div className="pt-10 w-[50%]">
        <InstructModal/>
      </div>
        <div className="">
          <div className="pt-10 text-center  font-semibold pb-8 ">
          <h1 className="text-black text-2xl">Internship Application</h1>
          <p className="text-black capitalize">All fields are Required</p>
          
         </div>
          <div className=" md:w-[80%] md:ml-32 border border-orange rounded-[10px] flex flex-col justify-center items-center">
            <div className="md:w-[80%] h-[100vh] mt-2 ">
              <Swiper>
                <SwiperSlide>
                {pageNumber()}
                </SwiperSlide>
              </Swiper>
              <div>
                <h1 className="flex justify-center items-center text-xl text-black">
                  {formTitles[page]}
                </h1>
                <div className="mt-10" >{pageDisplay()}</div>
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
      
    </div>
    </>
  );
};

export default Internship;

import { useState, useEffect, useContext, useRef } from "react";
import PersonalDetails from "./components/PersonalDetails";
import School from "./components/School";
import FileUpload from "./components/FileUpload";
import { InstructModal } from "./components/InstructModal";
import { FormContext } from "../../contexts/FormContext";
import { SubmitInternship } from "../../helpers/internship";
import Modal from "../../components/Success";
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';
import SyncLoader from "react-spinners/SyncLoader";
import 'react-toastify/dist/ReactToastify.css';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return null;
}
const Internship = () => {
  const ref = useRef(null) //Ref for network loading bar
  const { formData, setFormData } = useContext(FormContext);
  const [page, setPage] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [errMsg, setErrMsg] = useState(null);
  const [success, setSuccess] = useState(false);
  const [formSubmissionProgress, setFormSubmissionProgress] = useState(false)
  const [termsModalShow, setTermsModalShow] = useState(false)


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
        <div className="flex align-center justify-center w-[20%] flex-col">
        <div className="absolute flex justify-center">   
        <div className="text-center bg-orange rounded-[100%] text-white w-14 mx-[40%]  md:mx-[47%] p-[12px]">
          <h1>1</h1>
        </div>
        <div className="text-center bg-white rounded-[50%] text-black border w-14 mx-[40%]  md:mx-[47%] p-[12px]">
        <h1>2</h1>
      </div>
      <div className="text-center bg-white rounded-[50%] text-black border w-14 mx-[40%]  md:mx-[47%] p-[12px]">
        <h1>3</h1>
      </div>
      </div>

      <div className="absolute flex justify-center w-[100%] border h-[20px]"> 
      <hr width={'100%'}/>
      </div>
      
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

  const handleTermsShow = (e) => {
    e.preventDefault();
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
       
        return splashNotify("Please ensure all fields are filled in before submission.", "ERROR")
      } else {
        setTermsModalShow(true)
      }
    }}

  const handleSubmit = async () => {
    
    setError("");
    // console.log(formData);
    if (page === formTitles.length - 1) {
      
        ref.current.continuousStart();
        setTermsModalShow(false)
        setFormSubmissionProgress(true)
        
        // setError("");
        // setLoading("Loading...");
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
         
          setSuccess(true);
          ref.current.complete();
          setFormSubmissionProgress(false)
          splashNotify(capitalizeFirstLetter(res.data.message), "SUCCESS")
        } else {
          console.log("error");
          setLoading("");
          splashNotify(capitalizeFirstLetter(res.data.message), "ERROR")
          setErrMsg(res.data.message);
          ref.current.complete();
        }
      }
     else {
      setPage((currPage) => currPage + 1);
      splashNotify("Saved Successfully!", "SUCCESS")
      ref.current.complete();
    };
  }

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
        formData.duration !== "" &&
        formData.regNo !== ""
      );
    } else if (page === 2) {
      return (
        formData.cover.name !== "" &&
        formData.it.name !== ""
      );
    }
  };

  const handleNextClick = (e) => {
    e.preventDefault()
    if (canProceed()) {
      ref.current.continuousStart();
      if (page === 2 && formData.cover.name !== "" &&
        formData.it.name !== "") {
          ref.current.complete();
        handleTermsShow(e)
      } else {
        ref.current.complete();
      setPage((currPage) => currPage + 1);
      // splashNotify("Saved Successfully", "SUCCESS")
      // setError("");
      
      }
    } else {
      splashNotify("Please ensure all fields are filled in before submission.", "ERROR")
      // setError("Please ensure all fields are filled in before proceeding.");
    }
  };

  const splashNotify = (msg, type) => {
    const splashConfig = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    }

    switch (type.toUpperCase()) {
        case 'ERROR':
            toast.error(capitalizeFirstLetter(msg), splashConfig);
            break;
        case 'SUCCESS':
            toast.success(capitalizeFirstLetter(msg), splashConfig);
            break;
        case 'WARNING':
            toast.warn(capitalizeFirstLetter(msg), splashConfig);
            break;
        case 'INFO':
            toast.info(capitalizeFirstLetter(msg), splashConfig);
            break;
        default:
            toast(capitalizeFirstLetter(msg), splashConfig);
            break;
    }

}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const handleCloseTermsModal = () => {
  setTermsModalShow(false)
}

  return (
    <>
     <LoadingBar color='#f11946' ref={ref} />
        <ToastContainer />
        {
          formSubmissionProgress === true 
          ? <div className="fixed bg-overlay top-0 w-screen h-screen flex flex-col justify-center items-center">
            <div className="bg-white p-6 flex justify-center flex-col items-center rounded-[10px]">
            <p className="font-bold p-8">Uploading, Please wait...</p>
          <SyncLoader color="#f26024" /> 
          </div>
          </div>
          : <></>
        }

{
          termsModalShow === true 
          ? <div className="fixed bg-overlay top-0 w-screen h-screen flex flex-col justify-center items-center">
            <div className="bg-white p-6 flex justify-start flex-col items-center rounded-[10px] w-2/4 h-[500px]">
            <button onClick={handleCloseTermsModal} className="absolute mt-0 p-4 bg-overlay rounded-[100vh] h-[60px] w-[60px]">X</button>
            <h3 className="font-bold p-8">Terms and Condition</h3>
            <p className="flex-auto overflow-y-auto text-blue">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptates aliquam dignissimos numquam omnis! Vero, praesentium. Recusandae voluptate, necessitatibus quidem, est corrupti velit minima rem nisi officia eos cupiditate ratione?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ab, magnam, atque impedit nam tempore natus modi laboriosam, est ex architecto doloremque sint nisi alias a ipsam consequuntur fugit quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatibus perspiciatis sequi eius quibusdam quidem quisquam dolore minima dolorem, obcaecati, voluptatum est mollitia voluptate explicabo beatae nostrum adipisci eaque ipsum.
            Veniam, quaerat numquam. Omnis architecto quia, qui dolores officia commodi quod at ipsa eligendi eum reiciendis culpa magnam possimus numquam laborum earum velit assumenda adipisci quisquam voluptatum ullam totam! Est.
            Maxime adipisci mollitia vitae debitis laborum, cum minima sed placeat aut, sequi, in cumque doloribus libero deleniti necessitatibus minus sint dolorum beatae delectus aspernatur eum voluptatum tenetur fuga. Nam, eligendi!
            Suscipit consectetur fugit consequuntur exercitationem. Id illum ex esse, doloribus nam veniam eius iusto, error explicabo eaque optio dolorem! Aliquid similique fugit dolor delectus! Sit, eaque? Quae commodi aut repellendus!
            Quae fugit quasi delectus distinctio odio? Expedita, est dolores. Corrupti, molestias officia consectetur sit, praesentium ratione eligendi sint incidunt laudantium, amet ab iusto ducimus dolorum beatae sed quos assumenda reprehenderit!</p>
            <div className="py-2">
                <button onClick={handleSubmit()} className="bg-orange rounded-[10px] px-8 py-4 text-white">Complete Application</button>
            </div>
          </div>
          </div>
          : <></>
        }
        
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
                <div className="mb-0 flex justify-center align-center">{pageNumber()}</div>
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

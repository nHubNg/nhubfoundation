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
import FormStepper from "./components/FormStepper";

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
        <FormStepper totalSteps={3} currentStep={0}/>
      );
    } else if (page === 1) {
      return (
        <FormStepper totalSteps={3} currentStep={1}/>
      );
    } else {
      return (
        <FormStepper totalSteps={3} currentStep={2}/>
      );
    }
  };

  const canViewTerms = () => {
    function isValidFile(obj) {
      return obj.size === undefined 
      ? false
      : true
    }

  //   isEmpty(formData.cover) === false && isEmpty(formData.it) === false ?
  //    stat = true
  //   : stat = false 
  //  return stat
  return isValidFile(formData.cover) === true && isValidFile(formData.it) === true
    }

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

  const handleNextClick = async (e) => {
  e.preventDefault();

  if (canProceed()) {
    ref.current.continuousStart();

    if (page === 2 && formData.cover.name !== "" && formData.it.name !== "") {
      console.log(canViewTerms())

      canViewTerms() === true
      ?
      setTermsModalShow(true) // Show the terms modal here
      : splashNotify("Upload all required files first.", "ERROR")
      ref.current.complete();
    } else {
      ref.current.complete();
      setPage((currPage) => currPage + 1);
    }
  } else {
    splashNotify("Please ensure all fields are filled in before submission.", "ERROR");
  }
};

const handleAcceptTerms = async () => {
  // Trigger final form submission here
  await handleSubmit();
  setTermsModalShow(false); // Close the terms modal upon acceptance
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
  splashNotify('Not Submitted! Terms not accepted! Please try again!', 'ERROR')
}

return (
  <>
    <LoadingBar color='#f11946' ref={ref} />
    <ToastContainer />
    {
      formSubmissionProgress === true ? (
        <div className="fixed bg-overlay top-0 w-screen h-screen flex flex-col justify-center items-center">
          <div className="bg-white p-6 flex justify-center flex-col items-center rounded-[10px]">
            <p className="font-bold p-8">Submitting Application, Please wait...</p>
            <SyncLoader color="#f26024" /> 
          </div>
        </div>
      ) : (
        <></>
      )
    }

    {
      termsModalShow === true ? (
        <div className="fixed z-[11] bg-overlay top-0 w-screen h-screen flex flex-col justify-center items-center">
          <div className="bg-white p-6 flex justify-start flex-col items-center rounded-[10px] w-2/4 h-[500px]">
            <div className="flex w-[100%] justify-center">
            <h3 className="font-bold p-8 uppercase">Terms and Conditions</h3>
            </div>
            <p className="flex-auto overflow-y-auto text-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magnam recusandae earum voluptatem eligendi quia natus sapiente aliquid quasi, minus, animi quae at voluptas rerum sed dolor dolore, nostrum itaque.
            Numquam voluptate ea hic est officia? Quae facilis, veniam corporis exercitationem debitis aut iusto placeat tenetur eaque. In vitae repudiandae quidem incidunt dolorem, eaque dolor, numquam amet at nobis illo!
            Laboriosam natus quia provident vitae id, facere, debitis adipisci harum accusantium possimus asperiores tempora. Rerum in harum rem consequuntur molestias ea adipisci nobis asperiores, fugit inventore architecto ut optio? Cupiditate!
            Nam error blanditiis possimus delectus repudiandae iusto voluptate sapiente consequuntur, commodi corporis eligendi sunt quibusdam. Molestiae debitis dolores ab, ex voluptatibus necessitatibus provident vel! Autem obcaecati fugiat unde. Fugit, sunt.
            Enim, cupiditate natus similique asperiores iusto deleniti quam maiores vitae dolore dolor esse, velit consequatur doloremque amet officia. Cum vitae quae unde, explicabo repudiandae commodi! Sequi incidunt aut et delectus.
            Consequuntur, obcaecati vel quibusdam nostrum eius magnam quos totam minus praesentium, quidem eveniet aperiam ducimus eaque vero, maiores repudiandae eligendi itaque culpa deleniti recusandae nemo et incidunt. Reiciendis, tenetur repellendus.
            Cupiditate ducimus sapiente fugiat id? Dolorum quasi pariatur commodi! Nesciunt consequatur suscipit eveniet dicta illum tenetur? Distinctio, totam fugiat aut obcaecati ducimus voluptatum minima harum saepe, repellendus dolorem amet officiis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam ducimus hic non reprehenderit laborum aspernatur nostrum eveniet illum odio! Quis voluptate nam suscipit saepe excepturi dicta, consectetur nulla voluptas mollitia.
            Consequuntur ratione dolorum sequi similique corrupti facilis nisi architecto totam sunt vero porro tempore cum illo quisquam ipsam laboriosam, ex recusandae. Saepe quaerat, explicabo incidunt excepturi aliquid necessitatibus rem praesentium?
            Temporibus illum fugit doloribus saepe, natus quibusdam ea iusto! Dolores repellat facilis fugit error, officiis vel nam saepe eos. Sequi a beatae tempore temporibus explicabo, doloribus itaque blanditiis voluptates libero.
            Vitae laborum earum officia unde, voluptas voluptate sint vero, cum at maiores hic animi corporis deleniti culpa quos dolores temporibus, ex tempore aliquam laboriosam impedit soluta ut. Earum, a odio.</p>
            <div className="py-2 items-center justify-center w-[100%] flex gap-10">
              <button onClick={handleAcceptTerms} className="bg-orange rounded-[10px] px-8 py-4 text-white">Accept</button> <button onClick={handleCloseTermsModal} className="mt-0 p-4 bg-overlay rounded-[10px]">Reject</button>
            
            </div>
          </div>
        </div>
      ) : (
        <></>
      )
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
          <div className="overflow-auto px-10  mt-2 ">
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
                  {page === formTitles.length - 1 ? "Finish" : " Next"}
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

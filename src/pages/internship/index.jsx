import { useState,useEffect,useRef, useContext} from "react";
import PersonalDetails from "./components/PersonalDetails";
import School from "./components/School";
import FileUpload from "./components/FileUpload";
import { InstructModal } from "./components/InstructModal";
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";





//Swiper on PageNumber
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {EffectCoverflow,Pagination,Navigation,Scrollbar,A11y} from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Context } from "../../App";


function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
const Internship = ({canProceed}) => {
  const swiper = useSwiper();
  const swiperRef = useRef(null); 
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useContext(Context);

  const formTitles = [
    "Personal Details",
    "School and Experience",
    "File Upload",
  ];

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  // Function to go to the previous slide
  const goToPreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }}

    const handleSlideChange = () => {
      setPage((currPage) => currPage+1);
}

  const pageDisplay = () => {
    if (page === 0) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <School formData={formData} setFormData={setFormData} />;
    }else if (page === 2) {
      return <FileUpload formData={formData} setFormData={setFormData}/>;
    }
  };

  const pageNumber =()=>{
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

 
 
const slide1 = <div className="swiper-slide-content">{ page === 0 && pageDisplay()}</div>;
const slide2 = <div className="swiper-slide-content">{ page === 1 && pageDisplay()}</div>;
const slide3 = <div className="swiper-slide-content">{ page === 2 && pageDisplay()}</div>;
  
  return ( 
    <>

    <ScrollToTopOnMount/>
    <div className="md:flex justify-between overflow-x-hidden mb-10 w-full p-4">
      <div className="pt-10  md:w-[500px]">
        <InstructModal/>
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
                  disabled={!canProceed}
                  onClick={(e) => {
                    if (page === formTitles.length - 1) {
                      e.preventDefault();
                      console.log(formData);
                    } else {
                      setPage( (currPage) => currPage + 1 );
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
      
    </div>
     </>
  );
};

export default Internship;

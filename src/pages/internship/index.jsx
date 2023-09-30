import { useState,useEffect,useRef } from "react";
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


function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
const Internship = () => {
  const swiper = useSwiper();
  const swiperRef = useRef(null); 
  const [page, setPage] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
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
          {/* <Swiper
                rewind={true}
                spaceBetween={20}
                slidesPerView={'auto'}
                loop={true}
                onSlideChange={ (swiper) => handleSlideChange(swiper) }
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                 
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  clickable: true,
                }}

                modules={[EffectCoverflow, Pagination,Navigation]}
                className="mySwiper w-[500px] relative">
                <div className="swiper_controler absolute flex flex-col justify-center top-2">
               
                <p className="mb-2 w-[500px] text-center">{pageNumber()}</p>
                <div className="hidden">

                  <div className="swiper-button-prev slider-arrow">
                      <FiChevronLeft />
                  </div>
                  <div className="swiper-button-next slider-arrow">
                      <FiChevronRight />
                  </div>
                </div>
                  <div className="swiper-pagination mb-5 w-[500px]"></div>
                  <div className="">
                    <h1 className="flex justify-center mt-6 items-center text-xl text-black">
                      {formTitles[page]}
                    </h1>
                  </div>
              </div>
              <div className=" mt-16">

                <SwiperSlide className="mt-32">                 
                  <div className="">{slide1}</div>
                </SwiperSlide>
                <SwiperSlide className="mt-32">
                  <div className="">{slide2}</div>
                </SwiperSlide>
                <SwiperSlide className="mt-32">
                  <div className="">{slide3}</div>
                </SwiperSlide>
              </div>
                </Swiper> */}
                
                <p className="mb-0 text-center">{pageNumber()}</p>
                <div className="mb-4">
                    <h1 className="flex justify-center mt-6 items-center text-xl text-black">
                      {formTitles[page]}
                    </h1>
                </div>
                <div className="mt-2">
                  {pageDisplay()}
                </div>
  
              <div className="md:flex  justify-between items-center my-4 ">
                {page === 0 ? (
                  ""
                ) : (
                  <button
                    className="py-2 px-24 md:px-9 bg-orange text-white rounded-md"
                    disabled={page === 0}
                    onClick={() => {
                      // goToPreviousSlide
                      setPage((currPage) => currPage - 1);
                    }}
                  >
                    Prev
                  </button>
                )}
                <button
                  className="  py-2 px-24 mt-2 md:mt-0 md:px-9 bg-orange text-white rounded-md"
                  onClick={(e) => {
                    // goToNextSlide
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
              {/* <div className="">
                <button className="swiper-button-next">Next</button>
                <button className="swiper-button-prev">Prev</button>
              </div> */}
              {/* <div className="swiper-pagination"></div> */}
                {/* <div className="mt-10" >{pageDisplay()}</div> */}
              </div>
            </div>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default Internship;

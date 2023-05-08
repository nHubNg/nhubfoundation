import { useSwiper } from "swiper/react";
const SwiperNav = () => {
  const swiper = useSwiper();
  return (
    <div className="max-w-[70%] flex justify-between mx-auto mt-4  sm:mt-6">
      <button onClick={() => swiper.slidePrev()}>
        <img
          src={
            "https://res.cloudinary.com/nhubnacademy/image/upload/v1682870536/Vector_7_qcir0d.png"
          }
          alt=""
          className="mr-24 sm:h-5 "
        />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <img
          src={
            "https://res.cloudinary.com/nhubnacademy/image/upload/v1682870549/Vector_8_lk6ib4.png"
          }
          alt=""
          className="ml-24 sm:h-5"
        />
      </button>
    </div>
  );
};

export default SwiperNav;

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNav from "../../components/SwiperNav";
import "swiper/css";

const Gallery = () => {
  return (
    <section className="text-center text-ash text-[1rem] max-w-[90%] mx-auto py-10">
      <div className="my-8 flex flex-col gap-8">
        <div>
          <h2 className="font-bold text-[1.5rem] ">
            Moments Captured around the Hub
          </h2>
          <p>Keeping the moments fresh</p>
        </div>
        <div>
          <Swiper
            spaceBetween={5}
            slidesPerView={3}
            direction={"horizontal"}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            <SwiperSlide>
              <img
                src={
                  "https://res.cloudinary.com/nhubnacademy/image/upload/v1682870705/Frame_1198_p0ngax.png"
                }
                alt=""
                className="h-32 w-32 "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={
                  "https://res.cloudinary.com/nhubnacademy/image/upload/v1682870755/Frame_1199_1_uyxv5t.png"
                }
                alt=""
                className="h-32 w-32 "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={
                  "https://res.cloudinary.com/nhubnacademy/image/upload/v1682870931/Frame_1200_4_ygcusb.png"
                }
                alt=""
                className="h-32 w-28"
              />
            </SwiperSlide>

            <SwiperNav />
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col gap-8 my-8">
        <div>
          <h2 className="font-bold text-[1.5rem]">
            Take a look at Our workspace
          </h2>
          <p>Keeping the keep moment memorable</p>
        </div>
        <div>
          <Swiper
            spaceBetween={5}
            slidesPerView={3}
            direction={"horizontal"}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            <SwiperSlide>
              <img
                src={
                  "https://res.cloudinary.com/nhubnacademy/image/upload/v1682870962/Frame_1198_3_nd8ink.png"
                }
                alt=""
                className="h-32 w-32 "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={
                  "https://res.cloudinary.com/nhubnacademy/image/upload/v1682870963/Frame_1199_4_ve48dl.png"
                }
                alt=""
                className="h-32 w-32 "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={
                  "https://res.cloudinary.com/nhubnacademy/image/upload/v1682870844/Frame_1200_2_t5ow5m.png"
                }
                alt=""
                className="h-32 w-28"
              />
            </SwiperSlide>
            <SwiperNav />
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col gap-8 my-8">
        <div>
          <h2 className="font-bold text-[1.5rem]">Activities in pictures</h2>
          <p>Keeping the keep moments memorable</p>
        </div>
        <div>
          <Swiper
            spaceBetween={5}
            slidesPerView={3}
            direction={"horizontal"}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            <SwiperSlide>
              <img
                src={
                  "https://res.cloudinary.com/nhubnacademy/image/upload/v1682870847/Frame_1198_2_emgict.png"
                }
                alt=""
                className="h-32 w-32 "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={
                  "https://res.cloudinary.com/nhubnacademy/image/upload/v1682870860/Frame_1199_3_fxneje.png"
                }
                alt=""
                className="h-32 w-32 "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={
                  "https://res.cloudinary.com/nhubnacademy/image/upload/v1682870860/Frame_1200_3_n0ubmm.png"
                }
                alt=""
                className="h-32 w-28"
              />
            </SwiperSlide>
            <SwiperNav />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

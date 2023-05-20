import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      className="relative  bg-[url('https://res.cloudinary.com/nhubnacademy/image/upload/v1682899954/nHubFoundation/IMG_0633_q4nfub.jpg')]
 bg-cover md:bg-top    bg-no-repeat h-[50vh] md:h-[60vh] lg:h-[80vh]  "
    >
      <div className="absolute inset-0 w-full h-[50vh] md:h-[60vh] lg:h-[80vh] bg-headerOverlay ">
        <div className="absolute left-0 w-full h-full flex  items-center justify-center text-center   flex-col  text-white z-30">
          <h1 className="text-[26px] md:text-[32px] lg:text-[38px] md:w-[20ch] text-center font-[600]">
            Let&apos;s Create Something Great Together
          </h1>
          <p className="text-center text-[16px] md:text-[18px] w-[95%] mx-auto mt-3 py-3 md:py-1 md:w-[65ch]">
            nHub Foundation is born from the deep desire to create an equal
            opportunity for growth and development regardless of
            gender,ethnic,religious background,through several impact-driven
            initiatives.
          </p>
          <div className="w-40  mx-auto py-3 px-4 bg-orange rounded-md md:mt-5 hover:bg-purple transition-all duration-300 hover:scale-110 cursor-pointer">
            <Link
              to="/about"
              className=" text-base flex justify-center items-center gap-2"
            >
              <img
                src="https://res.cloudinary.com/nhubnacademy/image/upload/v1682899396/nHubFoundation/Vector_1_gjwxef.png"
                alt=""
              />
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

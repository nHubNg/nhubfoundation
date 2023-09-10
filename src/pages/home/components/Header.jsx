import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      className="relative  bg-[url('https://res.cloudinary.com/nhubnacademy/image/upload/v1682899954/nHubFoundation/IMG_0633_q4nfub.jpg')]
 bg-cover md:bg-top   bg-no-repeat h-[50vh] md:h-[60vh] lg:h-[80vh]  "
    >
      <div className="absolute inset-0 w-full h-[50vh] md:h-[60vh] lg:h-[80vh] bg-headerOverlay ">
        <div className="absolute left-0 w-full h-full flex  items-center justify-center text-center   flex-col  text-white z-30">
          <h1 className="text-[22px] md:text-[32px] lg:text-[36px] md:px-[5rem] lg:px-[13rem] text-center font-[500]">
            Highly driven by a desire to see Africa and Africans placed on the{" "}
            <span className="font-semibold">global</span> spotlight of{" "}
            <span className="font-semibold"> emerging technologies.</span>
          </h1>
          {/* <p className="text-center text-[16px] md:text-[18px] w-[95%] mx-auto mt-3 py-3 md:py-1 md:w-[65ch]">
            nHub Foundation is born from the deep desire to create an equal
            opportunity for growth and development regardless of
            gender,ethnic,religious background,through several impact-driven
            initiatives.
          </p> */}
          <div className="w-40 sm:mt-8  mx-auto py-3 px-4 bg-orange rounded-md md:mt-5 hover:bg-purple transition-all duration-300 hover:scale-110 cursor-pointer">
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

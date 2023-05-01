const Header = () => {
  return (
    <div
      className="relative  bg-[url('https://res.cloudinary.com/nhubnacademy/image/upload/v1682899954/nHubFoundation/IMG_0633_q4nfub.jpg')]
w-full bg-cover  bg-no-repeat h-[40vh] my-auto bg-[center_top_3rem]"
    >
      <div className="absolute inset-0 w-full h-[50vh]  bg-overlay "></div>
      <div className="absolute top-0 flex justify-center text-center pt-6  flex-col  text-white z-30">
        <h1 className="text-[26px] text-center font-[600]">
          Let's Create Something Great Together
        </h1>
        <p className="text-center text-[16px] w-[95%] mx-auto mt-3 py-3">
          nHub Foundation is born from the deep desire to create an equal
          opportunity for growth and development regardless of
          gender,ethnic,religious background,through several impact-driven
          initiatives.
        </p>
        <div className="w-40  mx-auto py-3 px-4 bg-orange rounded-md ">
          <a
            href="/"
            className=" text-base flex justify-center items-center gap-2 "
          >
            <img
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1682899396/nHubFoundation/Vector_1_gjwxef.png"
              alt=""
            />
            About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

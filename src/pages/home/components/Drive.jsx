const Drive = () => {
  return (
    <div>
      <div className="my-container my-12 grid md:grid-cols-2 gap-4 justify-items-center md:my-20">
        <div className="md:place-self-center lg:px-[3rem]">
          <div className="bg-lightOrange flex justify-center items-center w-20 py-1 mx-auto md:mx-0  rounded-sm">
            <p className="text-orange text-[13px]">About Us</p>
          </div>
          <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-ash text-center md:text-left">
            Our Drive
          </h3>
          <p className="text-textAsh text-[15px] md:text-[16px] text-center md:text-left  pt-2">
            nHub Foundation is born from the deep desire to create an equal
            opportunity for growth and development regardless of gender, ethnic,
            religious background, through several impact-driven initiatives.
          </p>
          {/* <p className="hidden md:block text-textAsh text-[16px] text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            doloribus id labore nesciunt quaerat eos enim facere. Facilis
            maiores veniam libero rerum asperiores. Excepturi nam dolorem aut
            nobis voluptatibus atque.
          </p> */}
        </div>
        <div className="hidden md:block ">
          <img
            className="h-[25rem] border-[10px] border-orange"
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1683589032/nHubFoundation/pexels-fauxels-3184657_1_1_zdzjca.png"
            alt=""
          />
        </div>
      </div>
      <div className="my-container hidden lg:flex md:justify-center gap-12 my-6">
        <div className="relative group h-full">
          <img
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1683622320/nHubFoundation/effects1_uebo39.png"
            alt=""
          />
          <div className="absolute bottom-0 left-0 w-full h-full flex text-center  items-center bg-overlay">
            <div className="py-2 ">
              <h3 className="text-[34px] text-white font-[700] lg:mt-36 lg:group-hover:text-[25px] lg:group-hover:translate-y-[-40px] transition-transform  lg:duration-500">
                Innovation
              </h3>
              <p className="text-white text-center p-7 text-[15px] opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-[-60px] transition-all ">
                We nurture young enterprising talents to discover and grow their
                creative prowess into proffering viable solutions to evolving
                challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1683622321/nHubFoundation/effects2_iecxh0.png"
            alt=""
          />
          <div className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-center bg-overlay">
            <div className="py-2">
              <h3 className="text-[34px] text-white font-[700]  lg:mt-36 lg:group-hover:text-[25px] lg:group-hover:translate-y-[-40px] transition-transform  lg:duration-500">
                Community
              </h3>
              <p className="text-white text-center p-7 text-[15px] opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-[-60px] transition-all ">
                Be part of Africa&apos;s fastest growing tech community leveraging on
                emerging technologies and data governance.
              </p>
            </div>
          </div>
        </div>
        <div className="relative group ">
          <img
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1683622332/nHubFoundation/effects3_v859j5.png"
            alt=""
          />
          <div className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-center bg-overlay ">
            <div className="py-2">
              <h3 className="text-[34px] text-white font-[700] lg:mt-36 lg:group-hover:text-[25px] lg:group-hover:translate-y-[-40px] transition-transform  lg:duration-500 ">
                Growth
              </h3>
              <p className="text-white text-center p-7 text-[15px] opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-[-60px] transition-all ">
                Equipping Africa&apos;s growing economy for sustainability through
                several impact-driven initiatives
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drive;

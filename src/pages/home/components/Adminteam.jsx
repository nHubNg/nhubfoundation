import { Link } from "react-router-dom";
const Adminteam = () => {
  return (
    <div className="my-container ">
      <div className="my-4 lg:my-24">
        <h3 className="text-[28px] md:text-[32px] lg:text-[36px] text-ash font-[600] text-center">
          Meet Our Team
        </h3>
        <p className="text-[15px] text-textAsh text-center my-2">
          We work with the best leaders in the field to make nHub a better
          place.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 lg:mt-24 lg:mb-12">
        <div className=" w-[300px] relative">
          <img
            className="block max-w-[100%]"
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1682954565/nHubFoundation/eric-nanle_1_l5boss.png"
            alt=""
          />
          <div
            className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-end lg:bg-cardOverlay  bg-overlay
         md:opacity-0 md:hover:opacity-100 transition-all duration-500 ease-in-out "
          >
            <div className="py-2">
              <h3 className="text-[26px] text-white font-[400] leading-8">
                Mr Eric Nanle
              </h3>
              <h4 className="text-[16px] text-white">Executive Director</h4>
              <div className=" pt-2 pb-4 flex gap-4 justify-center items-center">
                <a href="">
                  <img
                    className=""
                    src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684829325/nHubFoundation/Vector_gexs4r.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684829324/nHubFoundation/Subtract_bbde0x.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684829361/nHubFoundation/Vector_yqkhkv.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] relative">
          <img
            className="block max-w-[100%]"
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1682900757/nHubFoundation/bash_efr3k8.jpg"
            alt=""
          />
          <div
            className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-end lg:bg-cardOverlay  bg-overlay
         md:opacity-0 md:hover:opacity-100 transition-all duration-500 ease-in-out  "
          >
            <div className="py-2">
              <h3 className="text-[26px] text-white font-[400] leading-8">
                Bashir Shaidu
              </h3>
              <h4 className="text-[16px] text-white">COO</h4>
              <div className="pt-2 pb-4 flex gap-4 justify-center items-center">
                <a href="">
                  <img
                    className=""
                    src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684829325/nHubFoundation/Vector_gexs4r.png"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/bashirsheidu/"
                  target="_blank"
                >
                  <img
                    src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684829324/nHubFoundation/Subtract_bbde0x.png"
                    alt=""
                  />
                </a>
                <a href="https://twitter.com/ImpactBash" target="_blank">
                  <img
                    src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684829361/nHubFoundation/Vector_yqkhkv.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] relative">
          <img
            className="block max-w-[100%]"
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1682954527/nHubFoundation/image_6_lg5pyy.png"
            alt=""
          />
          <div
            className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-end  lg:bg-cardOverlay  bg-overlay 
        md:opacity-0 md:hover:opacity-100 transition-all duration-500 ease-in-out "
          >
            <div className="py-2">
              <h3 className="text-[26px] text-white font-[400] leading-8">
                Nathan Pankyes
              </h3>
              <h4 className="text-[16px] text-white">Legal</h4>
              <div className="pt-2 pb-4 flex gap-4 justify-center items-center">
                <a href="">
                  <img
                    className=""
                    src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684829325/nHubFoundation/Vector_gexs4r.png"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/pankyes-nathan-h-5b2b03123/"
                  target="_blank"
                >
                  <img
                    src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684829324/nHubFoundation/Subtract_bbde0x.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684829361/nHubFoundation/Vector_yqkhkv.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-max  mx-auto mt-5 mb-7 px-4 py-3 bg-orange text-white text-[15px] rounded-md
       hover:bg-purple transition-all duration-300 hover:scale-110"
      >
        <Link to="/about" className="block" href="/">
          See all Our Team Members
        </Link>
      </div>
    </div>
  );
};

export default Adminteam;

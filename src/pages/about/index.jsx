import { Link } from "react-router-dom";
import { useEffect } from "react";
import staff from "./Admin.json";
import lead from "./DigitalLead.json";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
const About = () => {
  return (
    <div>
      <ScrollToTopOnMount/>
      <div className="relative">
        <div className="bg-[url('https://res.cloudinary.com/nhubnacademy/image/upload/v1685008539/nHubFoundation/image_51_wabdzz.png')] py-[5rem] md:h-[50vh]  lg:h-[80vh] bg-cover bg-[center_top_-2rem] md:bg-[top_bottom] bg-no-repeat"></div>
        <div className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-center bg-headerOverlay  ">
          <h2 className=" text-[30px] md:text-[45px] text-white font-[600] ">
            About Us
          </h2>
        </div>
      </div>
      <div className="my-container text-center my-6 ">
        <p className="text-[16px] text-textAsh md:text-[20px] leading-5 md:leading-6 md:my-16 md:w-[60%] md:mx-auto">
          nHub Foundation is a non-governmental and not-for-profit organization
          that works to enhance policy advocacy, gender inclusiveness,
          Technology for all, infrastructure/capacity building as regards
          Employability and Entrepreneurship, innovation and every aspect of
          social impact.
        </p>
      </div>

      <div className="my-container md:grid md:grid-cols-2 gap-4 justify-items-center md:my-20">
        <div className="md:place-self-center lg:px-[4rem]">
          <div className="bg-lightOrange flex justify-center items-center w-20 py-1  rounded-sm">
            <p className="text-orange text-[13px] font-medium">About Us</p>
          </div>
          <h3 className="text-[28px] md:text-[35px]  font-semibold text-ash py-1">
            Our Vision
          </h3>
          <p className="text-textAsh text-[16px] pb-4">
            We have a vision of being the leading aggregator of sustainable
            ecosystems in Africa. We intend to empower a minimum of 5,000 youth
            within the next 3 years
          </p>
        </div>
        <div className="hidden md:block">
          <img
            className="h-[25rem] border-[10px] border-orange"
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1683659606/nHubFoundation/pexels-fauxels-3184657_1_1_1_u6ll8n.png"
            alt=""
          />
        </div>
      </div>

      <div className="my-container">
        <div className="text-center my-2">
          <h3 className="text-[25px] md:text-[35px] md:my-4 font-semibold text-ash leading-8">
            Our Key Principles
          </h3>
          <p className="text-textAsh">We are guided by our key principles</p>
        </div>
        <div className="md:grid md:grid-cols-2 gap-4 justify-items-center md:my-20">
          <div className="hidden md:block">
            <img
              className="h-[25rem]"
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1683662426/nHubFoundation/Image_su7hqx.png"
              alt=""
            />
          </div>
          <div className="md:place-self-center ">
            <ul
              className=" text-[15px] px-5 mb-6 
              list-image-[url('https://res.cloudinary.com/nhubnacademy/image/upload/v1683034207/Vector_ptvzrq.png')]"
            >
              <li className="py-1 md:py-3">
                Building on existing plans/programmes/strategies
              </li>
              <li className=" py-1 md:py-3">
                Enhancing communal/individual commitment and leadership
              </li>
              <li className=" py-1 md:py-3">
                Adherence to sustainable development principles
              </li>
              <li className=" py-1 md:py-3">
                Participation and meaningful involvement of all stakeholders
              </li>
              <li className=" py-1 md:py-3">
                Gender equality and inclusiveness
              </li>
              <li className=" py-1 md:py-3">Transparency and accountability</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="my-container">
          <div className="my-4">
            <h3 className="text-[28px] md:text-[35px] md:mt-40  text-ash font-[600] text-center">
              Meet Our Team
            </h3>
            <p className="text-[15px] text-textAsh text-center my-2">
              We work with the best leaders in the field to make nHub a better
              place.
            </p>
          </div>
          <div className="my-5 text-center">
            <h3 className="text-[26px] md:text-[30px] text-ash font-[600]">
              Administrative Team
            </h3>
          </div>
          <div className=" flex flex-col items-center sm:grid sm:grid-cols-2 md:flex  md:flex-row md:flex-wrap md:justify-center md:my-10 gap-6">
            {staff.map((admin) => {
              return (
                <div key={admin.id} className=" w-[300px] h-[300px] relative">
                  <img
                    className="block max-w-[100%] object-cover"
                    src={admin.image}
                    alt=""
                  />
                  <div
                    className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-end bg-overlay lg:bg-cardOverlay 
                  md:opacity-0 md:hover:opacity-100 transition-all duration-500 ease-in-out "
                  >
                    <div className="flex flex-col">
                      <div className="">
                        <h3 className="text-[26px] text-white font-[400] leading-8">
                          {admin.name}
                        </h3>
                        <h4 className="text-[16px] text-white">{admin.post}</h4>
                      </div>
                      <div className=" pt-2 pb-4 flex gap-4 justify-center items-center">
                        <a href={admin.facebook} target="_blank">
                          <img
                            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684829325/nHubFoundation/Vector_gexs4r.png"
                            alt=""
                          />
                        </a>
                        <a href={admin.linkedIn} target="_blank">
                          <img
                            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684829324/nHubFoundation/Subtract_bbde0x.png"
                            alt=""
                          />
                        </a>
                        <a href={admin.twitter} target="_blank">
                          <img
                            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684829361/nHubFoundation/Vector_yqkhkv.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" md:my-44">
            <div className="mt-5 mb-8 text-center">
              <h3 className="text-[26px] md:text-[30px] text-ash font-[600]">
                Digital Learning Lead
              </h3>
            </div>
            <div className="flex flex-col items-center sm:grid sm:grid-cols-2 md:flex  md:flex-row md:flex-wrap md:justify-center md:my-10 gap-6 mb-6">
              {lead.map((admin) => {
                return (
                  <div key={admin.id} className=" w-[300px] relative ">
                    <img
                      className="block max-w-[100%] object-cover"
                      src={admin.image}
                      alt=""
                    />
                    <div
                      className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-end bg-overlay lg:bg-cardOverlay 
                    md:opacity-0 md:hover:opacity-100 transition-all duration-500 ease-in-out "
                    >
                      <div className="flex flex-col">
                        <div className="">
                          <h3 className="text-[26px] text-white font-[400] leading-8">
                            {admin.name}
                          </h3>
                          <h4 className="text-[16px] text-white">
                            {admin.post}
                          </h4>
                        </div>
                        <div className=" pt-2 pb-4 flex gap-4 justify-center items-center">
                          <a href={admin.facebook} target="_blank">
                            <img
                              className=""
                              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684829325/nHubFoundation/Vector_gexs4r.png"
                              alt=""
                            />
                          </a>
                          <a href={admin.linkedIn} target="_blank">
                            <img
                              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684829324/nHubFoundation/Subtract_bbde0x.png"
                              alt=""
                            />
                          </a>
                          <a href={admin.twitter} target="_blank">
                            <img
                              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684829361/nHubFoundation/Vector_yqkhkv.png"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-24">
            <h2 className="text-center text-[26px] md:text-[30px] text-ash font-[600] mb-6">
              Gallery Sneak peak
            </h2>
            <div className="flex justify-center  items-center">
              <div className="w-[30%] h-full">
                <img
                  src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684351306/nHubFoundation/Frame_1198_etemgp.png"
                  alt=""
                />
              </div>
              <div className="w-[30%]">
                <img
                  src="https://res.cloudinary.com/nhubnacademy/image/upload/v1684351307/nHubFoundation/Frame_1199_tupcwd.png"
                  alt=""
                />
              </div>
              <div className="w-[30%] ">
                <img
                  src="https://res.cloudinary.com/nhubnacademy/image/upload/v1685008662/nHubFoundation/Frame_1200_zb5cls.png"
                  alt=""
                />
              </div>
            </div>
            <div className="bg-orange w-40 text-center py-3 rounded-md my-16 mx-auto cursor-pointer  hover:bg-purple transition-all duration-300 hover:scale-110">
              <Link to="/gallery" className="font-[500] text-white">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

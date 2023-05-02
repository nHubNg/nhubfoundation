import staff from "./Admin.json";
import lead from "./DigitalLead.json";
const About = () => {
  return (
    <div>
      <div className="relative">
        <div className="bg-[url('https://res.cloudinary.com/nhubnacademy/image/upload/v1682870755/Frame_1199_1_uyxv5t.png')] py-[5rem] bg-cover bg-[center_top_-2rem] bg-no-repeat"></div>
        <div className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-center bg-headerOverlay  ">
          <h2 className="text-[28px] text-white font-[600] ">About Us</h2>
        </div>
      </div>
      <div className="my-container text-center my-6">
        <p className="text-[16px]  leading-5">
          nHub Foundation is a non-governmental and not-for-profit organization
          that works to enhance policy advocacy, gender inclusiveness,
          Technology for all, infrastructure/capacity building as regards
          Employability and Entrepreneurship, innovation and every aspect of
          social impact.
        </p>
      </div>

      <div className="my-container">
        <div className="bg-lightOrange flex justify-center items-center w-20 py-1  rounded-sm">
          <p className="text-orange text-[13px] font-medium">About Us</p>
        </div>
        <h3 className="text-[28px] font-semibold text-ash py-1">Our Vision</h3>
        <p className="text-textAsh text-[16px] pb-4">
          We have a vision of being the leading aggregator of sustainable
          ecosystems in Africa. We intend to empower a minimum of 5,000 youth
          within the next 3 years
        </p>
      </div>

      <div className="my-container">
        <div className="text-center my-2">
          <h3 className="text-[25px] font-semibold text-ash leading-8">
            Our Key Principles
          </h3>
          <p className="text-textAsh">We are guided by our key principles</p>
        </div>
        <ul
          className=" text-[15px] px-5 mb-6
          list-image-[url('https://res.cloudinary.com/nhubnacademy/image/upload/v1683034207/Vector_ptvzrq.png')]"
        >
          <li className="py-1">
            Building on existing plans/programmes/strategies
          </li>
          <li className=" py-1">
            Enhancing communal/individual commitment and leadership
          </li>
          <li className=" py-1">
            Adherence to sustainable development principles
          </li>
          <li className=" py-1">
            Participation and meaningful involvement of all stakeholders
          </li>
          <li className=" py-1">Gender equality and inclusiveness</li>
          <li className=" py-1">Transparency and accountability</li>
        </ul>
      </div>
      <div>
        <div className="my-container">
          <div className="my-4">
            <h3 className="text-[28px] text-ash font-[600] text-center">
              Meet Our Team
            </h3>
            <p className="text-[15px] text-textAsh text-center my-2">
              We work with the best leaders in the field to make nHub a better
              place.
            </p>
          </div>
          <div className="my-5 text-center">
            <h3 className="text-[26px] text-ash font-[600]">
              Administrative Team
            </h3>
          </div>
          <div className="flex flex-col items-center gap-8">
            {staff.map((admin) => {
              return (
                <div key={admin.id} className=" w-[300px] relative">
                  <img
                    className="block max-w-[100%] object-cover"
                    src={admin.image}
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-end bg-overlay  ">
                    <div className="py-2">
                      <h3 className="text-[30px] text-white font-[400] leading-8">
                        {admin.name}
                      </h3>
                      <h4 className="text-[16px] text-white">{admin.post}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 mb-8 text-center">
            <h3 className="text-[26px] text-ash font-[600]">
              Digital Learning Lead
            </h3>
          </div>
          <div className="flex flex-col items-center gap-8 mb-20">
            {lead.map((admin) => {
              return (
                <div key={admin.id} className=" w-[300px] relative ">
                  <img
                    className="block max-w-[100%] object-cover"
                    src={admin.image}
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-end bg-overlay  ">
                    <div className="py-1">
                      <h3 className="text-[30px] text-white font-[400] leading-8">
                        {admin.name}
                      </h3>
                      <h4 className="text-[16px] text-white">{admin.post}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import Blogs from "./Blogs";

const cards = [
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1682899396/nHubFoundation/Vector_r0qjwc.png",
    title: "Placeher",
    text: "A training program designed to encourage, train and empower for women in the Tech ecosystem.",
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1682899395/nHubFoundation/Vector_2_clxffu.png",
    title: "nAmbassador",
    text: "Training youths in tertiary institutions in Software programming, employability and entrepreneurship skills.",
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1682899396/nHubFoundation/Vector_3_mivzcn.png",
    title: "#Kids",
    text: "#Kids is a program aimed at training kids in primary and secondary schools on Software Development, Digital skills and Entrepreneurship.",
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1682900356/nHubFoundation/Vector_crwk8p.png",
    title: "Rural Strengthening",
    text: "RURAL STRENGTHENING is aimed at empowering rural communities with digital, technical and entrepreneurship skills that will enable them grow and sustain their businesses",
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1682899396/nHubFoundation/Vector_4_nlsfpx.png",
    title: "Emerge!",
    text: "At emerge, we explore emerging technologies on the global front, relating their relevance to the activities of the everyday man.",
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1682899396/nHubFoundation/Vector_5_hcdajf.png",
    title: "Trainings",
    text: "We have various curriculum with matching professionals, aimed to equip our students with practical skills in the emerging technology.",
  },
];
const Main = () => {
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
          <p className="hidden md:block text-textAsh text-[16px] text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            doloribus id labore nesciunt quaerat eos enim facere. Facilis
            maiores veniam libero rerum asperiores. Excepturi nam dolorem aut
            nobis voluptatibus atque.
          </p>
        </div>
        <div className="hidden md:block ">
          <img
            className="h-[25rem] border-[1px] border-orange"
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1683589032/nHubFoundation/pexels-fauxels-3184657_1_1_zdzjca.png"
            alt=""
          />
        </div>
      </div>
      <div className="my-container hidden lg:flex md:justify-center gap-12 my-6">
        <div className="relative group">
          <img
            src="https://res.cloudinary.com/nhubnacademy/image/upload/v1683622320/nHubFoundation/effects1_uebo39.png"
            alt=""
          />
          <div className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-center bg-overlay">
            <div className="py-2">
              <h3 className="text-[34px] text-white font-[700] lg:group-hover:text-[30px]">
                Innovation
              </h3>
              <p className="text-white text-center p-7 text-[15px] hidden lg:group-hover:flex lg:transition-all lg:duration-500 lg:ease">
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
              <h3 className="text-[34px] text-white font-[700]  lg:group-hover:text-[30px]">
                Community
              </h3>
              <p className="text-white text-center p-7 text-[15px] hidden lg:group-hover:flex lg:transition-all lg:duration-500 lg:ease">
                Be part of Africa's fastest growing tech community leveraging on
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
              <h3 className="text-[34px] text-white font-[700] lg:group-hover:text-[30px] ">
                Growth
              </h3>
              <p
                className="text-white text-center p-7 text-[15px] hidden
               lg:group-hover:flex lg:transition-all lg:duration-500 lg:ease"
              >
                Equipping Africa's growing economy for sustainability through
                several impact-driven initiatives
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-container my-12  lg:my-28">
        <h2 className="text-ash text-[26px] md:text-[30px] lg:text-[32px] text-center font-semibold mt-8">
          Our Programs and Activities
        </h2>
        <p className="text-[15px] md:text-[16px] text-center text-textAsh lg:mt-2">
          Our mission is backed up by impact-driven activities
        </p>
      </div>
      <div className="my-container ">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-6 justify-items-center">
          {cards.map((card) => {
            return (
              <div
                className="flex flex-col justify-center items-center shadow-lg w-[300px] h-[300px] group lg:transition-all lg:duration-700 lg:ease"
                key={card.image}
              >
                <img src={card.image} alt="" className="w-[45px]" />
                <h3 className="font-medium text-[24px] text-ash">
                  {card.title}
                </h3>
                <p className="text-[14px] text-center  text-textAsh w-[30ch] lg:hidden lg:group-hover:flex">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-container mt-20 mb-10  ">
        <div className="hidden md:block my-10">
          <h2 className="text-[30px] lg:text-[35px] text-center font-semibold text-ash">
            Our Training Programs
          </h2>
          <p className="text-center text-textAsh lg:mt-2">
            We offer deliver the best in all our training courses
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
          <div className="border-[1px] border-lightgray px-3 py-7 my-5 rounded-lg">
            <h3 className="text-ash text-center text-[24px] font-semibold">
              Internship
            </h3>
            <div className="text-[15px] w-[90%] mx-auto text-center my-4">
              <p>
                We offer internship opportunities for undergraduates seeking the
                learn while working real-world projects.
              </p>
              <p>
                We give undergraduates the chance to serve for 4, 6 months, and
                one year depending on their school Calendar.
              </p>
              <p>They get the chance to learn in the following fields:</p>
            </div>
            <ul
              className="text-[15px] px-5
          list-image-[url('https://res.cloudinary.com/nhubnacademy/image/upload/v1683034207/Vector_ptvzrq.png')]"
            >
              <li className="  py-3 ">Frontend Web Development</li>
              <li className="  py-3">Backend web development</li>
              <li className="  py-3">Product (UI/UX) Design</li>
              <li className=" py-3">Data Analysis</li>
              <li className="py-3">Embedded systems and IoT</li>
              <li className=" py-3">Mobile App Development</li>
            </ul>
            <div className="w-[200px] bg-orange mx-auto text-center py-3 rounded-md mt-3">
              <a className=" text-white font-[500]" href="">
                Apply for Internship
              </a>
            </div>
          </div>
          <div className="bg-orange text-white px-3 py-7 my-5 rounded-lg">
            <h3 className="text-center text-[24px] font-semibold">Placeher</h3>
            <div className="text-[15px] w-[90%] mx-auto text-center my-4">
              <p>
                The placeher program is women exclusive program aimed at
                encouraging more women to join the tech ecosystem.
              </p>
              <p>
                We give them the chance to learn not just tech but even
                entrepreneurship and more.
              </p>
              <p>
                They get the chance to develop in a career in the following
                fields:
              </p>
            </div>
            <ul
              className="text-white text-[15px] px-5
            list-image-[url('https://res.cloudinary.com/nhubnacademy/image/upload/v1683034207/Vector_1_malazg.png')]"
            >
              <li className="py-3">Frontend Web Development</li>
              <li className=" py-3">Backend web development</li>
              <li className=" py-3">Product (UI/UX) Design</li>
              <li className=" py-3">Data Analysis</li>
              <li className=" py-3">Embedded systems and IoT</li>
              <li className=" py-3">Mobile App Development</li>
              <li className="  py-3">Entrepreneurship</li>
            </ul>
            <div className="w-[200px] bg-white mx-auto text-center py-3 rounded-md mt-3">
              <a className=" text-orange font-[500]" href="">
                Apply for Placeher
              </a>
            </div>
          </div>
          <div className="border-[1px] border-lightgray px-3 py-7 my-5 rounded-lg">
            <h3 className="text-ash text-center text-[24px] font-semibold">
              UpSkill!
            </h3>
            <div className="text-[15px] w-[90%] mx-auto text-center my-4">
              <p>
                We have in place a comprehensive plan to equip you with
                practical skills and help you gain proficiency in various areas
                of ICT.
              </p>
              <p>
                Whether you are completely new to the world of ICT, or need to
                add an extra skill to your profile, we have tailor-made training
                services for all categories of learners.
              </p>
            </div>
            <ul
              className="text-[15px] px-5
           list-image-[url('https://res.cloudinary.com/dzmpjgmes/image/upload/v1682248499/Vector_6_ud8wkv.png')]"
            >
              <li className=" py-3">Website design</li>
              <li className=" py-3">Mobile App development</li>
              <li className=" py-3">Robotics</li>
              <li className=" py-3">Augmented & Virtual Reality</li>
              <li className=" py-3">Data Science and AI</li>
              <li className=" py-3">Graphics Design</li>
              <li className=" py-3">3D Animation</li>
            </ul>
            <div className="w-[200px] bg-orange mx-auto text-center py-3 rounded-md mt-3">
              <a className=" text-white font-[500]" href="">
                See More.......
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex  justify-center items-center mb-12">
        <button className="bg-orange text-white px-2 py-4 rounded-md ">
          View all Our Training Courses
        </button>
      </div>
      <div className=" bg-orange  py-7 lg:py-12">
        <div className="w-[95%] mx-auto flex justify-between items-center  text-center my-container">
          <p className="flex flex-col text-[16px] md:text-[23px] lg:text-[26px] text-white font-[600]">
            1500+
            <span className="text-[8px]  font-[500]">Students Trained</span>
          </p>
          <p className="flex flex-col text-[16px] md:text-[23px] lg:text-[26px] text-white  font-[600]">
            1500+<span className="text-[8px] font-[500]">Happy Customers</span>
          </p>
          <p className="hidden md:flex flex-col text-[16px] md:text-[23px] lg:text-[26px] text-white  font-[600]">
            15+
            <span className="text-[8px] font-[500]">Running Projects</span>
          </p>
          <p className="flex flex-col text-[16px] md:text-[23px] lg:text-[26px] text-white  font-[600]">
            1500+
            <span className="text-[8px] font-[500]">Completed Projects</span>
          </p>
          <p className="flex flex-col text-[16px] md:text-[23px] lg:text-[26px] text-white  font-[600]">
            7+<span className="text-[8px] font-[500]">Years of Experience</span>
          </p>
        </div>
      </div>
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
              className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-end bg-overlay 
             lg:opacity-0 lg:hover:opacity-100 transition-all duration-500 ease-in-out "
            >
              <div className="py-2">
                <h3 className="text-[32px] text-white font-[400] leading-8">
                  Mr Eric Nanle
                </h3>
                <h4 className="text-[16px] text-white">Executive Director</h4>
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
              className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-end bg-overlay
             lg:opacity-0 lg:hover:opacity-100 transition-all duration-500 ease-in-out  "
            >
              <div className="py-2">
                <h3 className="text-[32px] text-white font-[400] leading-8">
                  Bashir Shaidu
                </h3>
                <h4 className="text-[16px] text-white">COO</h4>
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
              className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-end bg-overlay 
            lg:opacity-0 lg:hover:opacity-100 transition-all duration-500 ease-in-out "
            >
              <div className="py-2">
                <h3 className="text-[32px] text-white font-[400] leading-8">
                  Nathan Pankyes
                </h3>
                <h4 className="text-[16px] text-white">Legal</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="w-max  mx-auto mt-5 mb-7 px-4 py-3 bg-orange text-white text-[15px] rounded-md">
          <a className="block" href="/">
            See all Our Team Members
          </a>
        </div>
      </div>
      <Blogs />
    </div>
  );
};

export default Main;

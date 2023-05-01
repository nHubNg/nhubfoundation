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
      <div className="my-container my-24">
        <div className="bg-lightOrange flex justify-center items-center w-20 py-1 mx-auto rounded-sm">
          <p className="text-orange text-[13px]">About Us</p>
        </div>
        <h3 className="text-[24px] font-semibold text-ash text-center">
          Our Drive
        </h3>
        <p className="text-textAsh text-[15px] text-center  pt-2">
          nHub Foundation is born from the deep desire to create an equal
          opportunity for growth and development regardless of gender, ethnic,
          religious background, through several impact-driven initiatives.
        </p>
        <h2 className="text-ash text-[28px] text-center font-semibold mt-8 leading-[30px]">
          Our programs and Activities
        </h2>
        <p className="text-[15px] text-center text-textAsh">
          Our mission is backed up by impact-driven activities
        </p>
      </div>
      <div className="my-container">
        <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-y-10 mt-6">
          {cards.map((card) => {
            return (
              <div className="flex flex-col justify-center items-center shadow-lg h-[300px] w-[300px]">
                <img src={card.image} alt="" className="w-[45px]" />
                <h3 className="font-medium text-[24px] text-ash">
                  {card.title}
                </h3>
                <p className="text-[14px] text-center  text-textAsh w-[30ch] ">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-container mt-20 mb-10">
        <div className="border-[1px] border-lightgray px-4 py-7 my-5 rounded-lg">
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
        list-image-[url('https://res.cloudinary.com/dzmpjgmes/image/upload/v1682248499/Vector_6_ud8wkv.png')]"
          >
            <li className="  py-3 ">Frontend Web Development</li>
            <li className="  py-3">Backend web development</li>
            <li className="  py-3">Product (UI/UX) Design</li>
            <li className=" py-3">Data Analysis</li>
            <li className="py-3">Embedded systems and IoT</li>
            <li className=" py-3">Mobile App Development</li>
          </ul>
        </div>

        <div className="bg-orange text-white px-4 py-7 my-5 rounded-lg">
          <h3 className="text-center text-[24px] font-semibold">Placeher</h3>
          <div className="text-[15px] w-[90%] mx-auto text-center my-4">
            <p>
              The placeher program is women exclusive program aimed at
              encouraging more women to join the tech ecosystem.
            </p>
            <p>
              We give them the chance to learn not just tech but even
              entreprenuership and more.
            </p>
            <p>
              They get the chance to develop in a career in the followng fields:
            </p>
          </div>
          <ul
            className="text-white text-[15px] px-5 
          list-image-[url('https://res.cloudinary.com/dzmpjgmes/image/upload/v1682249584/Vector_7_jq0ftk.png')]"
          >
            <li className="py-3">Frontend Web Development</li>
            <li className=" py-3">Backend web development</li>
            <li className=" py-3">Product (UI/UX) Design</li>
            <li className=" py-3">Data Analysis</li>
            <li className=" py-3">Embedded systems and IoT</li>
            <li className=" py-3">Mobile App Development</li>
            <li className="  py-3">Entrepreneurship</li>
          </ul>
        </div>

        <div className="border-[1px] border-lightgray px-4 py-7 my-5 rounded-lg">
          <h3 className="text-ash text-center text-[24px] font-semibold">
            UpSkill!
          </h3>
          <p>
            We have in place a comprehensive plan to equip you with practical
            skills and help you gain proficiency in various areas of ICT.
            Whether you are completely new to the world of ICT, or need to add
            an extra skill to your profile, we have tailor-made training
            services for all categories of learners.
          </p>
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
        </div>
      </div>
      <div className=" bg-orange  py-7">
        <div className="w-[95%] mx-auto flex justify-between items-center text-center">
          <p className="flex flex-col text-[16px]  text-white font-[600]">
            1500+
            <span className="text-[8px]  font-[500]">Students Trained</span>
          </p>
          <p className="flex flex-col text-[16px]  text-white  font-[600]">
            1500+<span className="text-[8px] font-[500]">Happy Customers</span>
          </p>
          <p className="flex flex-col text-[16px]  text-white  font-[600]">
            1500+
            <span className="text-[8px] font-[500]">Completed Projects</span>
          </p>
          <p className="flex flex-col text-[16px]  text-white  font-[600]">
            7+<span className="text-[8px] font-[500]">Years of Experience</span>
          </p>
        </div>
      </div>
      <div className="my-container ">
        <div className="my-4">
          <h3 className="text-[28px] text-ash font-[600] text-center">
            Meet Our Team
          </h3>
          <p className="text-[15px] text-textAsh text-center my-2">
            We work with the best leaders in the field to make nHub a better
            place.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className=" w-[300px]">
            <img
              className="block max-w-[100%]"
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1682901086/nHubFoundation/eric-nanle_1_dagyyk.png"
              alt=""
            />
          </div>
          <div className="w-[300px]">
            <img
              className="block max-w-[100%]"
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1682900757/nHubFoundation/bash_efr3k8.jpg"
              alt=""
            />
          </div>
          <div className="w-[300px]">
            <img
              className="block max-w-[100%]"
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1682901155/nHubFoundation/image_6_ss04er.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-max  mx-auto mt-5 mb-7 px-4 py-3 bg-orange text-white text-[15px] rounded-md">
          <a className="block" href="/">
            See all Our Team Members
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;

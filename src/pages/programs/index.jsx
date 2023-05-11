import { Link } from "react-router-dom";

const programs = [
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1683724696/nHubFoundation/pexels-photo-3768894_ho59qg.webp",
    text: "PlaceHer",
    content:
      "According to a survey into the involvement of women in the Nigerian Tech Space, it was discovered that women make up roughly a fifth of the total number of people working in the Information and Communication Technology (ICT) sector.PlaceHer was born out of the need to improve on this number, to train and equip ladies with emerging technological skills regardless of upbringing or educational background, so that they can participate in the shaping of the national digital economy and become self reliant.",
    id: 1,
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1682870755/Frame_1199_1_uyxv5t.png",
    text: "nAmbassador",
    content:
      "The nAmbassador is an institutional training programme designed to create a presence for nHub Foundation and to equip undergraduates in Nigerian tertiary institutions with technological skills.The training is generally opened to two (2) outstanding and committed individuals in each school regardless of their course of study. These individuals (nAmbassadors), usually one male and a female, are then tasked with equipping other students within that institution.",
    id: 2,
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1683074342/nHubFoundation/IMG_3086_vkrbfg.jpg",
    text: "#Kidz",
    content:
      "The mission here is to “catch them young”. This program is targeted at kids within the age range of six (6) and sixteen (16) years, with the aim of exposing them to different emerging technologies, having them learn and ultimately choose the path that best suit them. The major role HashTagKidz play in the upbringing of young children is that it prepares them for the future of work which is based on technology, and gives them a fair fighting chance against their counterparts all over the world.",
    id: 3,
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1683724975/nHubFoundation/image_2_p8yewy.jpg",
    text: "Rural/Urban Strengthening",
    content:
      "The Rural and Urban Strengthening program is directed at helping entrepreneurs in both rural and urban settings to upscale their businesses to a level at which there is sustainable development, as well as being able to add value to the economy of the nation at large. With Urban Strengthening, entrepreneurs are giving the opportunity to learn how to take advantage of the digital economy and grow their businesses to levels before thought of. In the same vein, the Rural Strengthening program is directed at entrepreneurs in rural communities, equipping them with digital, economic and financial literacy skills to help them increase productivity in their businesses.",
    id: 4,
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1683075944/nHubFoundation/1f150b84-775b-4772-aace-11de277fc360_otjvks.jpg",
    text: "Emerge!",
    content:
      "The last three industrial revolutions happened in a period of over 200 years; yet Nigeria as a nation missed out on most of the opportunities that all three of these revolutions brought. These changes in how things are done gave rise to the super-powered nations we have today, who adapted quickly to the revolutions.Having lost opportunites in the past, EMERGE is an opportunity for the Nigerian youth to leverage on the leading emerging technologies today. Key areas of focus at Emerge include Augmented & Virtual Reality (AVR), Artificial Intelligence (AI), Robotics, Data Science, Cloud Computing, etc.",
    id: 5,
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1683076210/nHubFoundation/meet_mhto1c.jpg",
    text: "Student Internship",
    content:
      "The in-house internship training program is specifically targeted at students within the mandatory Industrial Training phase of their undergraduate career. In this program, we create for our interns, a robust and practical-intensive training package to complement the theoretical knowledge acquired from the classrooms. The program enforces a project based practical approach of learning, making sure every intern is equipped to solve a real life problem during his/her period of industrial attachment.",
    id: 6,
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1683724104/nHubFoundation/pexels-fauxels-3184328_2_bjovd1.jpg",
    text: "UpSkill!",
    content:
      "We have in place a comprehensive plan to equip you with practical skills and help you gain proficiency in various areas of ICT. Whether you are completely new to the world of ICT, or need to add an extra skill to your profile, we have tailor-made training services for all categories of learners.Our training programs cover, but are not limited to Website design and development (in various languages and stacks), Mobile App development, Robotics, Augmented & Virtual Reality, Data Science and AI, Graphics Design and 3D Animation.",
    id: 7,
  },
];

const Programs = () => {
  return (
    <div>
      <div className="relative">
        <div className="bg-[url('https://res.cloudinary.com/nhubnacademy/image/upload/v1683076121/nHubFoundation/IMG_0721_lchbvf.jpg')] py-[5.5rem] md:py-[15rem] md:mb-14 bg-no-repeat bg-cover bg-[top_bottom_12rem]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-center bg-headerOverlay  ">
          <h2 className="text-[28px] text-white font-[600] ">Our Program</h2>
        </div>
      </div>
      <div className="flex flex-col gap-7 mt-5">
        {programs.map((program) => {
          return (
            <>
              <div className="hidden md:block">
                <h3 className="text-center text-[25px] text-ash font-semibold">
                  {program.text}
                </h3>
              </div>
              <div
                key={program.id}
                className="relative md:w-[60%] lg:w-[45%] md:mx-auto "
              >
                <img
                  className="h-[11rem] md:h-[18rem]  w-[100%] object-cover"
                  src={program.image}
                  alt=""
                />

                <div className="absolute bottom-0 w-full   h-full flex text-center justify-center items-center bg-overlay">
                  <h3 className="text-[23px] text-white font-[600]">
                    {program.text}
                  </h3>
                </div>

                <div
                  className="absolute bottom-0 w-full   h-full flex text-center justify-center items-center
                 bg-orange opacity-0 lg:hover:opacity-100 lg:opacity-0 transition-all duration-500 ease-in-out"
                >
                  <p className="text-[12px] text-white text-center p-9">
                    {program.content}
                  </p>
                </div>
              </div>
            </>
          );
        })}
        <div className="bg-orange mx-auto px-2 py-3 rounded-md mb-16">
          <Link to="/courses" className="font-[500] text-white">
            View all our Training Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Programs;

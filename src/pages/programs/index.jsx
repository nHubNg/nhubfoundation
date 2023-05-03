const programs = [
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1683073877/nHubFoundation/Property_1_Default_drlpb8.png",
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1682870755/Frame_1199_1_uyxv5t.png",
    text: "nAmbassador",
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1683074342/nHubFoundation/IMG_3086_vkrbfg.jpg",
    text: "#Kidz",
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1683075779/nHubFoundation/Rural_ah4srv.png",
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1683075944/nHubFoundation/1f150b84-775b-4772-aace-11de277fc360_otjvks.jpg",
    text: "Rural/Urban Strengthening",
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1683076210/nHubFoundation/meet_mhto1c.jpg",
    text: "Student Internship",
  },
  {
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1683076402/nHubFoundation/Property_1_Default_1_x0pyxk.png",
  },
];

const Programs = () => {
  return (
    <div>
      <div className="relative">
        <div className="bg-[url('https://res.cloudinary.com/nhubnacademy/image/upload/v1683076121/nHubFoundation/IMG_0721_lchbvf.jpg')] py-[5.5rem] bg-no-repeat bg-cover bg-[top_bottom_12rem]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-center bg-headerOverlay  ">
          <h2 className="text-[28px] text-white font-[600] ">Our Program</h2>
        </div>
      </div>
      <div className="flex flex-col gap-7 mt-5">
        {programs.map((program) => {
          return (
            <div className="relative">
              <img
                className="block h-[11rem] w-full object-cover"
                src={program.image}
                alt=""
              />
              <div className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-center bg-overlay">
                <h3 className="text-[23px] text-white font-[600]">
                  {program.text}
                </h3>
              </div>
            </div>
          );
        })}
        <div className="bg-orange mx-auto px-2 py-3 rounded-md mb-16">
          <a className="font-[500] text-white" href="">
            View all our Training Courses
          </a>
        </div>
      </div>
    </div>
  );
};

export default Programs;

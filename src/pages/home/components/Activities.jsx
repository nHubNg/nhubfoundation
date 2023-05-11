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
const Activities = () => {
  return (
    <div className="my-container ">
      <div className=" my-12  lg:my-28">
        <h2 className="text-ash text-[26px] md:text-[30px] lg:text-[32px] text-center font-semibold mt-8">
          Our Programs and Activities
        </h2>
        <p className="text-[15px] md:text-[16px] text-center text-textAsh lg:mt-2">
          Our mission is backed up by impact-driven activities
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-6 justify-items-center">
        {cards.map((card) => {
          return (
            <div
              className="flex flex-col justify-center items-center shadow-lg w-[300px] h-[300px] group lg:transition-all lg:duration-700 lg:ease"
              key={card.image}
            >
              <img src={card.image} alt="" className="w-[45px]" />
              <h3 className="font-medium text-[24px] text-ash">{card.title}</h3>
              <p className="text-[14px] text-center  text-textAsh w-[30ch] lg:hidden lg:group-hover:flex">
                {card.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;

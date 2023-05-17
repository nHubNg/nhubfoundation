const cards = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1682899396/nHubFoundation/Vector_r0qjwc.png",
    title: "Placeher",
    text: "A training program designed to encourage, train and empower for women in the Tech ecosystem.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1682899395/nHubFoundation/Vector_2_clxffu.png",
    title: "nAmbassador",
    text: "Training youths in tertiary institutions in Software programming, employability and entrepreneurship skills.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1682899396/nHubFoundation/Vector_3_mivzcn.png",
    title: "#Kids",
    text: "#Kids is a program aimed at training kids in primary and secondary schools on Software Development, Digital skills and Entrepreneurship.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1682900356/nHubFoundation/Vector_crwk8p.png",
    title: "Rural Strengthening",
    text: "RURAL STRENGTHENING is aimed at empowering rural communities with digital, technical and entrepreneurship skills that will enable them grow and sustain their businesses",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/nhubnacademy/image/upload/v1682899396/nHubFoundation/Vector_4_nlsfpx.png",
    title: "Emerge!",
    text: "At emerge, we explore emerging technologies on the global front, relating their relevance to the activities of the everyday man.",
  },
  {
    id: 6,
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

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-10 justify-items-center">
        {cards.map((card) => {
          return (
            <div
              className="flex flex-col justify-center items-center shadow-lg w-[300px] h-[300px] group "
              key={card.id}
            >
              <img
                src={card.image}
                alt=""
                className="w-[45px] lg:group-hover:translate-y-[-50px] duration-700"
              />
              <h3 className="font-medium text-[24px] text-ash lg:group-hover:translate-y-[-40px] lg:mt-4 transition-all duration-500">
                {card.title}
              </h3>
              <p className="text-[14px]  text-center text-textAsh w-[30ch]  lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-[-40px] transition-all duration-500 ">
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

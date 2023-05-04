import Article from "./Article";

const Courses = () => {
  return (
    <section className=" pb-20">
      <div className="h-[9rem] bg-courses bg-no-repeat bg-cover bg-center"></div>
      <section className="max-w-[90%] mx-auto ">
        <Article
          img={
            "https://res.cloudinary.com/nhubnacademy/image/upload/v1683145688/pexels-fauxels-3184657_1_1_unbv0e.png"
          }
          title={"Forntend and Backend Development"}
          content={
            "More and more businesses are registering their online presences daily in order to create online service delivery channels to their customers and clients.At nHub Foundation, we offer training packeges for both frontend and backend website development. You can decide to pick any of these or go full-stack"
          }
        />
        <Article
          img={
            "https://res.cloudinary.com/nhubnacademy/image/upload/v1683145689/pexels-fauxels-3184657_1_1_1_nkjmj9.png"
          }
          title={"Embedded Systems & Robotics"}
          content={
            "The use of embedded systems and robots is gaining more grounds in home, office and industry activities. From security to automation, as well as education, everyone is taking advantage of the technology that makes them time-efficient.We seek to equip you with fundamental and advanced knowledge on these subjects, so that you too can build solutions that meet the needs of these kind."
          }
        />
        <Article
          img={
            "https://res.cloudinary.com/nhubnacademy/image/upload/v1683145688/pexels-fauxels-3184657_1_1_2_ttydav.png"
          }
          title={"Product (UI/UX) Design"}
          content={
            "This course introduces the principles and practices of designing visually appealing and user-friendly digital interfaces. It covers UI and UX design, including topics such as layout, typography, color theory, user research, prototyping, and usability testing. Students will gain practical skills in UI/UX design and learn to create effective designs for various devices and platforms."
          }
        />
      </section>
    </section>
  );
};

export default Courses;

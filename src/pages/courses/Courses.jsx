import { useEffect } from "react";
import Article from "./Article";

const Courses = () => {
  const styles = {
    flexReverse: "flex flex-row-reverse",
    flex: "flex",
  };

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }
  return (
    <section className=" pb-20 sm:pb-28">
      <ScrollToTopOnMount/>
      <div className="relative">
        <div className="h-40  bg-no-repeat bg-cover bg-center sm:mb-16 bg-courses sm:h-[50vh]  md:h-[60vh] lg:h-[80vh] "></div>
        <div className="absolute bottom-0 left-0 w-full h-full flex text-center justify-center items-center bg-headerOverlay  ">
            <h2 className=" text-[30px] md:text-[45px] text-white font-[600] ">
             Courses
            </h2>
          </div>
      </div>
      <section className="my-container">
        <Article
          img={
            "https://res.cloudinary.com/nhubnacademy/image/upload/v1683145688/pexels-fauxels-3184657_1_1_unbv0e.png"
          }
          title={"Frontend and Backend Development"}
          content={
            "More and more businesses are registering their online presences daily in order to create online service delivery channels to their customers and clients.At nHub Foundation, we offer training packeges for both frontend and backend website development. You can decide to pick any of these or go full-stack"
          }
          styles={styles.flexReverse}
        />
        <Article
          img={
            "https://res.cloudinary.com/nhubnacademy/image/upload/v1683145689/pexels-fauxels-3184657_1_1_1_nkjmj9.png"
          }
          title={"Embedded Systems & Robotics"}
          content={
            "The use of embedded systems and robots is gaining more grounds in home, office and industry activities. From security to automation, as well as education, everyone is taking advantage of the technology that makes them time-efficient.We seek to equip you with fundamental and advanced knowledge on these subjects, so that you too can build solutions that meet the needs of these kind."
          }
          styles={styles.flex}
        />
        <Article
          img={
            "https://res.cloudinary.com/nhubnacademy/image/upload/v1683145688/pexels-fauxels-3184657_1_1_2_ttydav.png"
          }
          title={"Product (UI/UX) Design"}
          content={
            "This course introduces the principles and practices of designing visually appealing and user-friendly digital interfaces. It covers UI and UX design, including topics such as layout, typography, color theory, user research, prototyping, and usability testing. Students will gain practical skills in UI/UX design and learn to create effective designs for various devices and platforms."
          }
          styles={styles.flexReverse}
        />
      </section>
    </section>
  );
};

export default Courses;

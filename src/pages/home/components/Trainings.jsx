import { Link } from "react-router-dom";
const Trainings = () => {
  return (
    <div>
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
        <Link to="/courses">
          <button className="bg-orange text-white px-2 py-4 rounded-md ">
            View all Our Training Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Trainings;

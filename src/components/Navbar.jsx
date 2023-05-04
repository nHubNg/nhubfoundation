import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  !nav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="  bg-white">
      <div className="my-container flex items-center  h-14">
        <div onClick={handleNav}>
          <img
            src={
              "https://res.cloudinary.com/nhubnacademy/image/upload/v1682899502/nHubFoundation/Vector_9_hsbdsn.png"
            }
            alt=""
          />
        </div>

        <div className="mx-auto">
          <Link to="/">
            <img
              src={
                "https://res.cloudinary.com/nhubnacademy/image/upload/v1682899395/nHubFoundation/image_1_w7fcrk.png"
              }
              alt=""
            />
          </Link>
        </div>
        <div
          className={
            !nav
              ? "fixed  z-[1000] bg-white top-14 left-0 w-[40%] flex flex-col transition-all duration-500 ease-in-out"
              : "fixed left-[-100%]"
          }
        >
          <ul className="p-4 ">
            <div onClick={handleNav} className="flex justify-end">
              <img
                src="https://res.cloudinary.com/nhubnacademy/image/upload/v1682899396/nHubFoundation/Vector_8_p2ivyo.png"
                alt=""
              />
            </div>
            <li className="py-2">
              <Link className="hover:text-orange text-textAsh" to="/">
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link className="hover:text-orange text-textAsh" to="/about">
                About
              </Link>
            </li>
            <li className="py-2">
              <Link className="hover:text-orange text-textAsh" to="/programs">
                Programs
              </Link>
            </li>
            <li className="py-2">
              <Link className="hover:text-orange text-textAsh" to="/blogs">
                Blog{" "}
              </Link>
            </li>
            <li className="py-2">
              <Link className="hover:text-orange text-textAsh" to="/internship">
                Internship
              </Link>
            </li>
            <li className="py-2">
              <Link className="hover:text-orange text-textAsh" to="/contact">
                Contact us
              </Link>
            </li>
            <div className="bg-orange py-2 text-white text-center rounded-md">
              <Link to="/donate">Donate</Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Navbar = ({ handleDonate, handleDesktopDonate, handleNav, nav }) => {
  return (
    <nav className="  bg-white ">
      <div className="my-container flex items-center md:justify-between   h-14">
        <div onClick={handleNav} className="lg:hidden">
          <img
            src={
              "https://res.cloudinary.com/nhubnacademy/image/upload/v1682899502/nHubFoundation/Vector_9_hsbdsn.png"
            }
            alt=""
          />
        </div>

        <div className="mx-auto lg:mx-0">
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
            nav
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
              <Link
                onClick={handleNav}
                className="hover:text-orange text-textAsh"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/about"
                onClick={handleNav}
                className="hover:text-orange text-textAsh"
              >
                About
              </Link>
            </li>
            <li className="py-2">
              <Link
                onClick={handleNav}
                className="hover:text-orange text-textAsh"
                to="/programs"
              >
                Programs
              </Link>
            </li>
            <li className="py-2">
              <Link
                onClick={handleNav}
                className="hover:text-orange text-textAsh"
                to="/blogs"
              >
                Blog{" "}
              </Link>
            </li>
            <li className="py-2">
              <Link
                onClick={handleNav}
                className="hover:text-orange text-textAsh"
                to={{ pathname: "https://nhubinternship.onrender.com" }}
                target="_blank"
              >
                Internship
              </Link>
            </li>
            <li className="py-2">
              <Link
                onClick={handleNav}
                className="hover:text-orange text-textAsh"
                to="/contact"
              >
                Contact us
              </Link>
            </li>
            <div>
              <button
                onClick={handleDonate}
                className="bg-orange py-2 px-5 text-white text-center rounded-md"
              >
                Donate
              </button>
            </div>
          </ul>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex text-textAsh  items-center justify-between gap-10 text-[]">
            <li className=" hover:text-orange ">
              <Link to="/">Home</Link>
            </li>
            <li className=" hover:text-orange ">
              <Link to="/about">About</Link>
            </li>
            <li className=" hover:text-orange ">
              <Link to="/programs">Programs</Link>
            </li>
            <li className=" hover:text-orange ">
              <Link to="/blogs"> Blog</Link>
            </li>
            <li className=" hover:text-orange ">
              <a href="nhubinternship.onrender.com">Internship</a>
            </li>
            <li className=" hover:text-orange ">
              <Link to="/contact"> Contact us</Link>
            </li>
            <button
              className="bg-orange px-4 py-2  text-white rounded-md"
              onClick={handleDesktopDonate}
            >
              Donate
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

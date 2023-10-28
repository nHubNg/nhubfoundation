import { NavLink, Link } from "react-router-dom";
import hamburger from "../assets/hamburger.png"
import logo from "../assets/logo.png"
import close from "../assets/close.png"
import { useState } from "react";

const Navbar = ({ handleDonate, handleDesktopDonate, handleNav, nav }) => {
  const [isActive, setIsActive] = useState(false)
  const active = "text-orange border-b-2 pb-1 border-orange";
  const showAvatar = () => {
    setIsActive(!isActive)
  }
  return (
    <nav className="  bg-white">
      <div className="my-container flex items-center md:justify-between   h-14">
        <div onClick={handleNav} className="lg:hidden">
          <img
            // src={
            //   "https://res.cloudinary.com/nhubnacademy/image/upload/v1682899502/nHubFoundation/Vector_9_hsbdsn.png"
            // }
            src={hamburger}
            alt=""
          />
        </div>

        <div className="mx-auto lg:mx-0">
          <Link to="/">
            <img
              // src={
              //   "https://res.cloudinary.com/nhubnacademy/image/upload/v1682899395/nHubFoundation/image_1_w7fcrk.png"
              // }
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div
          className={
            nav
              ? "fixed  z-[1000] bg-white top-14 left-0 w-[50%] flex flex-col transition-all duration-500 ease-in-out"
              : "fixed left-[-100%]"
          }
        >
          <ul className="p-4 ">
            <div onClick={handleNav} className="flex justify-end">
              <img
                // src="https://res.cloudinary.com/nhubnacademy/image/upload/v1682899396/nHubFoundation/Vector_8_p2ivyo.png"
                src={close}
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
                to="/internship"
              >
                Internship
              </Link>
              {/* <a
                onClick={handleNav}
                className="hover:text-orange text-textAsh"
                href="https://nhubinternship.onrender.com"
                target="_blank"
                rel='noreferrer'
              >
                Internship
              </a> */}
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
            <li className='relative'>
              <div className='h-8 w-8 rounded-full bg-orange cursor-pointer' onClick={showAvatar}></div>
              {isActive && <div className='absolute z-40 bg-white px-5 py-2 rounded-[5px] shadow-lg'>
                <button><Link to={'/admin/login'} onClick={showAvatar}>Login</Link></button>
              </div>}
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex  ">
          <ul className="flex text-textAsh  items-center justify-between gap-10 text-[] ">
            <li className=" hover:text-orange ">
              <NavLink
                className={({ isActive }) => (isActive ? active : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className=" hover:text-orange ">
              <NavLink
                className={({ isActive }) => (isActive ? active : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className=" hover:text-orange ">
              <NavLink
                className={({ isActive }) => (isActive ? active : "")}
                to="/programs"
              >
                Programs
              </NavLink>
            </li>
            <li className=" hover:text-orange ">
              <NavLink
                className={({ isActive }) => (isActive ? active : "")}
                to="/blogs"
              >
                {" "}
                Blog
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                className={({ isActive }) => (isActive ? active : "")}
                to="/internship"
              >
                {" "}
                Internship
              </NavLink>
              {/* <a
                className="hover:text-orange"
                href="https://nhubinternship.onrender.com"
                target="_blank"
                rel='noreferrer'
              >
                Internship
              </a> */}
            </li>
            <li className=" hover:text-orange ">
              <NavLink
                className={({ isActive }) => (isActive ? active : "")}
                to="/contact"
              >
                {" "}
                Contact us
              </NavLink>
            </li>
            <button
              className="bg-orange px-4 py-2  text-white rounded-md cursor-pointer hover:bg-purple  hover:text-white transition-all duration-1000 "
              onClick={handleDesktopDonate}
            >
              Donate
            </button>

            <li className='relative'>
              <div className='h-8 w-8 rounded-full bg-orange cursor-pointer' onClick={showAvatar}></div>
              {isActive && <div className='absolute z-40 bg-white px-5 py-2 rounded-[5px] shadow-lg'>
                <button><Link to={'/admin/login'} onClick={showAvatar}>Login</Link></button>
              </div>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

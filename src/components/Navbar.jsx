import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(true);

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
          <a href="">
            <img
              src={
                "https://res.cloudinary.com/nhubnacademy/image/upload/v1682899395/nHubFoundation/image_1_w7fcrk.png"
              }
              alt=""
            />
          </a>
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
              <a className="hover:text-orange text-textAsh" href="">
                Home
              </a>
            </li>
            <li className="py-2">
              <a className="hover:text-orange text-textAsh" href="">
                About
              </a>
            </li>
            <li className="py-2">
              <a className="hover:text-orange text-textAsh" href="">
                Programs
              </a>
            </li>
            <li className="py-2">
              <a className="hover:text-orange text-textAsh" href="">
                Blog{" "}
              </a>
            </li>
            <li className="py-2">
              <a className="hover:text-orange text-textAsh" href="">
                Internship
              </a>
            </li>
            <li className="py-2">
              <a className="hover:text-orange text-textAsh" href="">
                Contact us
              </a>
            </li>
            <div className="bg-orange py-2 text-white text-center rounded-md">
              <a href="">Donate</a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

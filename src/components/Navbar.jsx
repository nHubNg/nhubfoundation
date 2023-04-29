import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="sticky top-0 bg-white">
      <div className="my-container flex items-center  h-14">
        <div onClick={handleNav}>
          <img
            src={
              "https://res.cloudinary.com/dzmpjgmes/image/upload/v1682086623/Vector_nnhxnh.png"
            }
            alt=""
          />
        </div>

        <div className="mx-auto">
          <a href="">
            <img
              src={
                "https://res.cloudinary.com/dzmpjgmes/image/upload/v1682087049/image_1_lstcmq.png"
              }
              alt=""
            />
          </a>
        </div>
        <div
          className={
            !nav
              ? "fixed bg-white top-14 left-0 w-[40%] flex flex-col transition-all duration-500 ease-in-out"
              : "fixed left-[-100%]"
          }
        >
          <ul className="p-4 ">
            <div onClick={handleNav} className="flex justify-end">
              <img
                src="https://res.cloudinary.com/dzmpjgmes/image/upload/v1682773868/Vector_8_ga3jvr.png"
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

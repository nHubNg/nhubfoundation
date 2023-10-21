import { SideNavData } from "./SideNavData";
import SubMenu from "./SubMenu";
import { useState } from "react";
import AdminModal from "../modals/LogoutModal";
import hamburger from "../../assets/hamburger.svg"
import { Link } from "react-router-dom";

const SideNav = ({open, handleOpen}) => {
  const [modal, setModal] = useState(false);
  // const [open, setOpen] = useState(true);

  // const handleOpen = () => {
  //   setOpen(!open)
  // }

  const handleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  return (
    <>
      {modal ? <AdminModal handleModal={handleModal} /> : ""}
      <div className=" md:transition-all md:duration-500 md:ease-in-out ">
        <div className={`flex flex-col justify-center  pt-2 ${open ? "md:px-1" : "md:px-10"} lg:px-4 gap-y-3  md:transition-all md:duration-500 md:ease-in-out `}>
          <Link to={'/'}>
            <h1
              className={`${open ? "text-center" : "text-left"
                } text-xl text-white pt-6`}
            >
              NHUB{" "}
              <span className={`${!open && "hidden text-left"}`}>FOUNDATION</span>
            </h1>
            </Link>
          {SideNavData.map((parent, index) => {
            return <SubMenu parent={parent} key={index} open={open} />;
          })}
          <div
            className=" hover:bg-transparent rounded-md px-3  flex items-center hover:rounded-xl"
            onClick={handleModal}
          >
            <button className="flex items-center gap-1 py-2  ">
              <img
                src="https://res.cloudinary.com/nhubnacademy/image/upload/v1691063227/nHubFoundation/ant-design_logout-outlined_mcabry.svg"
                alt=""
                className="hidden md:block"
              />
              <p
                className={` md:text-white ${
                  open ? "block" : "hidden"
                } w-full  `}
              >
                Logout
              </p>
            </button>
          </div>
          <button onClick={handleOpen} className="absolute top-4 right-[-15px]">
            <img src={hamburger} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SideNav;

import React from "react";
import mobilemenu from "../../assets/hambergermenu.svg";
import { SideNavData } from "./SideNavData";
import SubMenu from "./SubMenu";
import AdminModal from "../modals/LogoutModal";
import { useState } from "react";

const AdminNav = ({ heading }) => {
  const [modal, setModal] = useState(false);
  const [toggle, setToggle] = useState(false);


  const handleModal = () => {
    setModal(!modal);
    !modal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  };
  const handleToggle = () => {
    SideNavData.map((nav) => {
      if (nav.subMenu > 1) {
        setToggle(false);
      } else {
        setToggle(!toggle);
      }
    });
  };
  return (
    <>
      {modal ? <AdminModal handleModal={handleModal} /> : ""}
      <div className="header py-4 px-8 flex justify-center items-center md:hidden z-40">
        <div onClick={handleToggle}>
          <img src={mobilemenu} alt="" />
        </div>
        <h1 className="mx-auto text-white">{heading}</h1>
        <div
          className={toggle ? "bg-overlay w-[100vw] h-full fixed top-0" : ""}
        >
          <div
            className={
              toggle
                ? "fixed left-0 top-0  bg-white min-h-full w-[70%] py-20 rounded-r-xl"
                : "fixed top-0 left-[-100%]  "
            }
          >
            {SideNavData.map((parent, index) => {
              return (
                <SubMenu
                  parent={parent}
                  key={index}
                  open={open}
                  toggle={toggle}
                  setToggle={setToggle}
                  handleToggle={handleToggle}
                />
              );
            })}
            <div
              className=" hover:bg-transparent rounded-md px-3  flex items-center hover:rounded-xl"
              onClick={handleModal}
            >
              <button className="flex items-center gap-1 py-2  ">
                <img
                  src="https://res.cloudinary.com/nhubnacademy/image/upload/v1692622593/nHubFoundation/ant-design_logout-outlined_nz28zz.png"
                  alt=""
                  className=" md:hidden"
                />
                <img
                  src="https://res.cloudinary.com/nhubnacademy/image/upload/v1691063227/nHubFoundation/ant-design_logout-outlined_mcabry.svg"
                  className="hidden md:block"
                  alt=""
                />
                <p
                  className={`${
                    open ? "block" : "hidden"
                  } w-full text-adminBlue md:text-white`}
                >
                  Logout
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNav;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideNavData } from "./SideNavData";
import SubMenu from "./SubMenu";
import AdminModal from "../modals/LogoutModal";
import { Link } from "react-router-dom";

const SideNav = ({ open, handleOpen }) => {
  const [modal, setModal] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  const location = useLocation(); // Get the current location

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  const toggleSubMenu = (id) => {
    setSubMenuOpen((prev) => (prev === id ? null : id));
    console.log("Toggled submenu for ID:", id);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const openedKey = "opened";

    if (currentPath === "/admin/applications/pending/") {
      // Check if 'opened' is in localStorage
      if (!localStorage.getItem(openedKey)) {
        console.log("Opened not found, refreshing page...");
        localStorage.setItem(openedKey, "true");
        window.location.reload(); // Refresh the page
      }
    }

    // Cleanup function to remove 'opened' from localStorage on tab close
    const handleTabClose = () => {
      localStorage.removeItem(openedKey);
    };
    window.addEventListener("beforeunload", handleTabClose);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleTabClose);
    };
  }, [location.pathname]);

  return (
    <>
      {modal && <AdminModal handleModal={handleModal} />}
      <div className="md:transition-all md:duration-500 md:ease-in-out">
        <div
          className={`flex flex-col justify-center pt-2 ${
            open ? "md:px-1" : "md:px-10"
          } lg:px-4 gap-y-3 md:transition-all md:duration-500 md:ease-in-out`}
        >
          <Link to={"/"}>
            <h1
              className={`${
                open ? "text-center" : "text-left"
              } text-xl text-white pt-6`}
            >
              nHUB{" "}
              <span className={`${!open && "hidden text-left"}`}>
                FOUNDATION
              </span>
            </h1>
          </Link>
          {SideNavData.map((parent) => (
            <SubMenu
              parent={parent}
              key={parent.id}
              open={open}
              toggle={subMenuOpen === parent.id}
              setToggle={() => toggleSubMenu(parent.id)}
            />
          ))}
          <div
            className="hover:bg-transparent rounded-md px-3 flex items-center hover:rounded-xl"
            onClick={handleModal}
          >
            <button className="flex items-center gap-1 py-2">
              <img
                src="https://res.cloudinary.com/nhubnacademy/image/upload/v1691063227/nHubFoundation/ant-design_logout-outlined_mcabry.svg"
                alt="Logout Icon"
                className="hidden md:block"
              />
              <p
                className={`md:text-white ${open ? "block" : "hidden"} w-full`}
              >
                Logout
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;

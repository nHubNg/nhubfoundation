import { Outlet } from "react-router-dom";
import SideNav from "./layouts/SideNav";
// import hamburger from "../assets/hamburger.svg"
import { useState } from "react";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <>
    <div className="grid grid-cols-12 ">
      <div className={` ${open ? "md:col-span-3": "md:col-span-2"}  ${open ? "lg:col-span-2" : "lg:col-span-1"}  bg-orange min-h-[100vh] hidden md:block relative`  }>
        <div className="sticky top-1">
          <SideNav open={open} setOpen={setOpen}  handleOpen={handleOpen}/>
          {/* <div className="sticky top-2">
          <button onClick={handleOpen} className="absolute bottom-[-100px] right-[-15px] ">
              <img src={hamburger} alt="" />
            </button>
        </div> */}
        </div>
        
      </div>
      <div className={`  col-span-12 ${open ? "md:col-span-9" : "md:col-span-10"}  ${open ? "lg:col-span-10" : "lg:col-span-11"}   overflow-y-auto min-w-full`}>
      {/* <div className={open ? "col-span-12 sm:col-span-12 md:col-span-10  overflow-y-auto min-w-full" : "col-span-11  overflow-y-auto min-w-full"}> */}
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Dashboard;

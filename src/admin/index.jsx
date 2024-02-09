import { Outlet, useNavigate } from "react-router-dom";
import SideNav from "./layouts/SideNav";
// import hamburger from "../assets/hamburger.svg"
import { useContext, useEffect, useState } from "react";
import { ActiveContext } from "../contexts/ActiveContext";

const Dashboard = () => {
  const {activeState} = useContext(ActiveContext)
  const [open, setOpen] = useState(true);
  const navigate = useNavigate()


  const handleOpen = () => {
    setOpen(prevState => !prevState); 
  };
  
 

  return (
    <>
    <div className="grid grid-cols-12 h-[100vh]">
      <div className={` ${open ? "md:col-span-3": "md:col-span-2"}  ${open ? "lg:col-span-2" : "lg:col-span-1"} transition-all duration-500 ease-in-out bg-orange min-h-[100vh] hidden md:block relative`  }>
        <div className="sticky top-1">
          <SideNav open={open} setOpen={setOpen}  handleOpen={handleOpen}/>
         
        </div>
        
      </div>
      <div className={`  col-span-12 ${open ? "md:col-span-9" : "md:col-span-10"}  ${open ? "lg:col-span-10" : "lg:col-span-11"}   overflow-y-auto min-w-full`}>
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Dashboard;

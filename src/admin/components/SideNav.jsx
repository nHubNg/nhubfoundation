import { Link } from "react-router-dom";
import { SideNavData } from "./SideNavData";
import SubMenu from "./SubMenu";



const SideNav = () => {
 
  return (
    <div className="fixed  flex flex-col justify-center py-5 px-6 gap-y-7">
      <h1 className="text-center text-xl text-white">NHUB FOUNDATION</h1>
         {
            SideNavData.map((parent, index) => {
                return <SubMenu parent={parent} key={index} />
            })
         }
    </div>
  );
};

export default SideNav;

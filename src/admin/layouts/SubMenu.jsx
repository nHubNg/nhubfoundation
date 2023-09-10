import { useState} from "react";
import { Link} from "react-router-dom";
import { SideNavData } from "./SideNavData";

const SubMenu = ({ parent, open, toggle, setToggle}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (item) => {
    setIsMenuOpen(!isMenuOpen);
    if(item?.subMenu){
      setToggle(true)
    } else{
      setToggle(!toggle)
    }
  };
   
  
  
  return (
    <div className="">
      <Link to={parent.path}  >
        <div onClick={SubMenu ? (() => toggleMenu(parent)) : "" } className="hover:bg-transparent rounded-md px-3 py-2 hover:rounded-xl">
          <div className={`flex items-center gap-1 `}>
            <img src={parent.mobileIcon} alt=""  className="md:hidden"/>
            <img src={parent.icon} alt="" className={`hidden md:block ${open ? "w-4" : "w-6"} ${open ? "h-4" : "h-6"} `}/>
            <p className={`${open ? "block" : "hidden"}  text-adminBlue  md:text-white font-normal `}>{parent.tittle}</p>
            <div className="md:hidden">
              <img src={parent.sideArrow}  className={`${isMenuOpen && "rotate-90 "} transition-all duration-300 h-5`} alt="" />
            </div>
          </div>
        </div>
      </Link>

      { isMenuOpen &&
        parent.subMenu?.map((item, index) => {
          return (
            <Link to={item.path} key={index} onClick={toggleMenu}>
              <div className="flex items-center gap-1 py-2 mt-2 hover:bg-transparent rounded-md px-3  hover:rounded-xl transition">
                <img src={item.mobileIcon} alt=""  className="md:hidden"/>
                <img src={item.icon} alt="" className={` hidden md:block ${open ? "w-4" : "w-6"} ${open ? "h-4" : "h-6"} `}/>
                <p className={` ${open ? "block" : "hidden"} text-adminBlue md:text-white md:ztext-[15px]`}>{item.tittle}</p>
              </div>
            </Link>
          );
        })}
    </div>
   
  );
};

export default SubMenu;

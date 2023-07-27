import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const SubMenu = ({ parent}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
  };

  
  return (
    <div className="">
      <Link to={parent.path}  >
        <div onClick={SubMenu ? toggleMenu : ""}>
          <div className="flex items-center gap-1">
            <img src={parent.icon} alt="" className="w-4 h-4"/>
            <p className="text-center text-white">{parent.tittle}</p>
          </div>
        </div>
      </Link>

      { isMenuOpen &&
        parent.subMenu?.map((item, index) => {
          return (
            <Link to={item.path} key={index} className="">
              <div className="flex items-center gap-1 py-2 mt-3">
                <img src={item.icon} alt="" className="w-4 h-4"/>
                <p className="text-white">{item.tittle}</p>
              </div>
            </Link>
          );
        })}
      
    </div>
   
  );
};

export default SubMenu;

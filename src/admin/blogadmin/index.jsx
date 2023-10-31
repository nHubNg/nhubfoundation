import { Outlet } from "react-router-dom";
import { SideNavData } from "../layouts/SideNavData";
import { NavLink } from "react-router-dom";


const AdminBlogs = () => {
    const navLinkStyle = ( {isActive} ) => {
        return {
            backgroundColor: isActive ? 'rgba(255, 255, 255, 0.15)' : '',
            borderRadius: isActive ? '12px' : '',
        };
    };
    
    return (
        <div className=''>
            {
                SideNavData.map((parent, i) => (
                    <div key={i} className='flex justify-around items-center w-full  md:bg-orange px-2 pl-10'>
                        {parent.title == "Blogs" && parent.subMenu?.map((item, index) => {
                            return (
                                <div key={index} className='flex justify-between items-center w-full pb-2'>
                                    <NavLink to={item.path} style={navLinkStyle} className="flex items-center gap-1 py-2 mt-2 hover:bg-transparent rounded-md px-3  hover:rounded-xl transition">
                                        <img src={item.mobileIcon} alt="" className="md:hidden" />
                                        <img src={item.icon} alt="" className={` hidden md:block  `} />
                                        <p className={` text-adminBlue md:text-white md:text-[15px] hidden lg:block`}>{item.title}</p>
                                    </NavLink>
                                </div>
                            );
                        })}
                    </div>)
                )
            }

            <div className={``}>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminBlogs;

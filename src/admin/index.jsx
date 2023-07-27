import { Outlet } from "react-router-dom"
import SideNav from "./components/SideNav"





const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
    <div className="bg-orange col-span-2 min-h-[100vh] ">
     <SideNav/>  
    </div>
    <div className="col-span-10 overflow-y-auto w-full">
    <Outlet/>
    </div>
    </div>
  )
}

export default Dashboard

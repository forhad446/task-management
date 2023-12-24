import { MdDashboard, MdAssignmentAdd, MdTask } from "react-icons/md";
import { FaHome, FaTasks } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import logo from "./../../../assets/img/logo dark.png"
import { Link, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Dashboard = () => {
    const { user, logOut } = useAuth();

    const sidebarItemsClass = "flex items-center justify-start w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100";

    const sidebarItems = <>
        <Link to="/" className={sidebarItemsClass} href="#">
            <span className="text-left">
                <FaHome size={20} />
            </span>
            <span className="mx-4 text-sm font-normal">
                Home
            </span>
        </Link>
        <Link to="/dashboard" className={sidebarItemsClass} href="#">
            <span className="text-left">
                <MdDashboard size={20} />
            </span>
            <span className="mx-4 text-sm font-normal">
                Dashboard
            </span>
        </Link>
        <Link to="/dashboard" className={sidebarItemsClass} href="#">
            <span className="text-left">
                <MdAssignmentAdd size={20} />
            </span>
            <span className="mx-4 text-sm font-normal">
                Assign Task
            </span>
        </Link>
        <Link to="allTask" className={sidebarItemsClass} >
            <span className="text-left">
                <MdTask size={20} />
            </span>
            <span className="mx-4 text-sm font-normal">
                All Task
            </span>
        </Link>
        <Link to="/dashboard" className={sidebarItemsClass} href="#">
            <span className="text-left">
                <FaTasks size={20} />
            </span>
            <span className="mx-4 text-sm font-normal">
                To-doList
            </span>
        </Link>
        <Link onClick={() => logOut()} to="/dashboard" className={sidebarItemsClass} href="#">
            <span className="text-left">
                <CiLogin size={20} />
            </span>
            <span className="mx-4 text-sm font-normal">
                Logout
            </span>
        </Link>
    </>
    return (
        <div className="flex justify-start gap-3">
            <div className="bg-red-500 h-screen my-4 ml-4 shadow-lg lg:block w-36 md:w-52 lg:w-80">
                <div className="h-full bg-sky-500 rounded-2xl dark:bg-gray-700">
                    <div className="flex items-center justify-center pt-6">
                        <a href="#" className="relative block">
                            <img alt="profile" src={logo} className="mx-auto object-cover rounded-full h-20 w-20 " />
                        </a>
                    </div>
                    <nav className="mt-6">
                        <div>
                            {sidebarItems}
                        </div>
                    </nav>
                </div>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;
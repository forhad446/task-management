import { useState } from 'react';
import logo from './../../../assets/img/logo dark.png'
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const navItems = <>
        <li>
            <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
    </>

    const handleMenuItems = () => {
        setHidden(!hidden)
    }
    return (
        <>
            <nav className="bg-transparent border-gray-200 fixed w-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Task Management</span>
                    </a>
                    <div className="flex md:order-2">
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <IoSearch size={24} />
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div>
                        <button onClick={handleMenuItems} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {
                                hidden ? <IoClose size={40} /> : <IoMenu size={40} />
                            }
                        </button>
                    </div>
                    <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <ul className="hidden md:flex flex-row p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse  md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {navItems}
                        </ul>
                        {
                            hidden && <>
                            <div className="relative mt-8 md:hidden">
                            <div className="relative block">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <IoSearch size={24} />
                                    <span className="sr-only">Search icon</span>
                                </div>
                                <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                            </div>
                        </div>
                            <ul className="flex md:hidden flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                {navItems}
                            </ul>
                            </>
                        }

                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;
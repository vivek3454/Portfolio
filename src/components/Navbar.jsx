import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa6";

const Navbar = () => {
    const { pathname } = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpenClose = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="flex justify-between items-center max-w-7xl mx-auto p-4 sticky top-0 bg-[#1b1a1a] z-10">
            <div className="text-3xl font-extrabold flex-grow">
                <Link to={"/"}>
                    Port<span className="text-red-500">folio</span>
                </Link>
            </div>
            <div onClick={handleMenuOpenClose} className="lg:hidden inline">
                {isMenuOpen?
                <ImCross size={20} className="mr-1" />:
                <MdMenu size={29} />
            }
            </div>
            <div className={`${isMenuOpen ? "flex" : "hidden"} transition-all duration-200 max-lg:bg-[#1b1a1a] max-sm:w-full max-lg:shadow-md max-lg:shadow-black/50 absolute max-lg:py-4 lg:static top-[68px] max-lg:text-white right-0 transform lg:flex flex-col lg:flex-row lg:translate-x-0 flex-grow justify-between items-center`}>
                <ul className="flex gap-4 lg:gap-14  lg:border lg:bg-[#2b2929] border-gray-700 py-4 px-10 flex-col lg:flex-row rounded-none lg:rounded-full">
                    <Link
                        className={`hover:text-red-500 ${pathname === "/" ? "text-red-500" : "text-white"} transition-colors duration-200`}
                        to={"/"}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        className={`hover:text-red-500 ${pathname === "/about" ? "text-red-500" : "text-white"} transition-colors duration-200`}
                        to={"/about"}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        className={`hover:text-red-500 ${pathname === "/skills" ? "text-red-500" : "text-white"} transition-colors duration-200`}
                        to={"/skills"}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Skills
                    </Link>
                    <Link
                        className={`hover:text-red-500 ${pathname === "/projects" ? "text-red-500" : "text-white"} transition-colors duration-200`}
                        to={"/projects"}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        className={`hover:text-red-500 ${pathname === "/contact" ? "text-red-500" : "text-white"} transition-colors duration-200`}
                        to={"/contact"}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </ul>
                <div className="flex items-center gap-7 text-xl">
                    <a
                        href="https://www.linkedin.com/in/vivek-parde-13956022b/"
                        className="hover:text-red-500 transition-colors duration-200"
                        target="_blank" rel="noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://github.com/vivek3454"
                        className="hover:text-red-500 transition-colors duration-200"
                        target="_blank" rel="noreferrer"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
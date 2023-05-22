import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full bg-white">
      <div className=" w-full relative flex flex-col lg:flex-row lg:justify-between px-12 shadow-lg py-6 flex-wrap flex-start lg:items-center">
        <img
          className="w-36 lg:w-auto"
          src="https://contenterra.com/images/logo.png"
        ></img>
        <ul className=" hidden lg:block lg:flex lg:items-center">
          <li className="px-6 py-3 font-normal text-lg hover:bg-[#E22A29] hover:text-white transition-colors duration-300 ease-in-out">
            SERVICES
          </li>
          <li className="px-6 py-3 font-normal text-lg hover:bg-[#E22A29] hover:text-white transition-colors duration-300 ease-in-out">
            WORK
          </li>
          <li className="px-6 py-3 font-normal text-lg hover:bg-[#E22A29] hover:text-white transition-colors duration-300 ease-in-out">
            ABOUT
          </li>
          <li className="px-6 py-3 font-normal text-lg hover:bg-[#E22A29] hover:text-white transition-colors duration-300 ease-in-out">
            CAREERS
          </li>
        </ul>
        <div className=" lg:hidden absolute  top-[32px] right-[45px] ">
          {!isMenuOpen ? (
            <AiOutlineMenu
              size={"1.5rem"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></AiOutlineMenu>
          ) : (
            <AiOutlineClose
              size={"1.5rem"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></AiOutlineClose>
          )}
        </div>
        {isMenuOpen && (
          <ul className="flex flex-col ">
            <li className="px-6 py-3 font-normal text-lg hover:bg-[#E22A29] hover:text-white transition-colors duration-300 ease-in-out">
              SERVICES
            </li>
            <li className="px-6 py-3 font-normal text-lg hover:bg-[#E22A29] hover:text-white transition-colors duration-300 ease-in-out">
              WORK
            </li>
            <li className="px-6 py-3 font-normal text-lg hover:bg-[#E22A29] hover:text-white transition-colors duration-300 ease-in-out">
              ABOUT
            </li>
            <li className="px-6 py-3 font-normal text-lg hover:bg-[#E22A29] hover:text-white transition-colors duration-300 ease-in-out">
              CAREERS
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;

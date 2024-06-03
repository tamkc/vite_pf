import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineHome,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        className="fixed top-4 right-4 z-[99] md:hidden"
        onClick={handleNav}
      />

      {nav ? (
        <div
          id="menu"
          className="fixed w-full h-screen bg-white/80 flex flex-col justify-center items-center z-20"
        >
          <a
            href="#main"
            className="w-[70%] overflow-hidden flex justify-center items-center rounded-full shadow-gray-400 bg-gray-100 p-4 m-2 hover:scale-110 ease-in duration-200 cursor-pointer shadow-lg"
            onClick={handleNav}
          >
            <AiOutlineHome size={25} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#work"
            className="w-[70%] overflow-hidden flex justify-center items-center rounded-full shadow-gray-400 bg-gray-100 p-4 m-2 hover:scale-110 ease-in duration-200 cursor-pointer shadow-lg"
            onClick={handleNav}
          >
            <GrProjects size={25} />
            <span className="pl-4">Work</span>
          </a>
          <a
            href="#projects"
            className="w-[70%] overflow-hidden flex justify-center items-center rounded-full shadow-gray-400 bg-gray-100 p-4 m-2 hover:scale-110 ease-in duration-200 cursor-pointer shadow-lg"
            onClick={handleNav}
          >
            <AiOutlineProject size={25} />
            <span className="pl-4">Project</span>
          </a>
          <a
            href="#work"
            className="w-[70%] overflow-hidden flex justify-center items-center rounded-full shadow-gray-400 bg-gray-100 p-4 m-2 hover:scale-110 ease-in duration-200 cursor-pointer shadow-lg"
            onClick={handleNav}
          >
            <BsPerson size={25} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            href="#contact"
            className="w-[70%] overflow-hidden flex justify-center items-center rounded-full shadow-gray-400 bg-gray-100 p-4 m-2 hover:scale-110 ease-in duration-200 cursor-pointer shadow-lg"
            onClick={handleNav}
          >
            <AiOutlineMail size={25} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-gray-400 bg-gray-100 p-4 m-2 hover:scale-110 ease-in duration-200 cursor-pointer shadow-md"
          >
            <AiOutlineHome size={25} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-gray-400 bg-gray-100 p-4 m-2 hover:scale-110 ease-in duration-200 cursor-pointer shadow-md"
          >
            <GrProjects size={25} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-gray-400 bg-gray-100 p-4 m-2 hover:scale-110 ease-in duration-200 cursor-pointer shadow-md"
          >
            <AiOutlineProject size={25} />
          </a>
          <a
            href="#main"
            className="rounded-full shadow-gray-400 bg-gray-100 p-4 m-2 hover:scale-110 ease-in duration-200 cursor-pointer shadow-md"
          >
            <BsPerson size={25} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-gray-400 bg-gray-100 p-4 m-2 hover:scale-110 ease-in duration-200 cursor-pointer shadow-md"
          >
            <AiOutlineMail size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

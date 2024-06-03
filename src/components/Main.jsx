import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left transform scale-x-[-1]"
        src="https://images.unsplash.com/photo-1620015092538-e33c665fc181?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A scenic view of Hong Kong"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="flex flex-col justify-center items-center h-full font-bold">
          <h1 className="sm:text-5xl text-3xl font-bold text-gray-800">
            {" "}
            I'm Peter Tam
          </h1>
          <h2 className="flex justify-center items-center text-2xl pt-4">
            I'm a
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1500,
                "Full-Stack Developer",
                1500,
                "Tech Innovator",
                1500,
                "Problem Solver",
                1500,
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[320px] w-full">
            <FaTwitter
              className="cursor-pointer transform transition duration-200 hover:scale-125 hover:text-[#1DA1F2]"
              size={20}
            />
            <a
              href="https://linkedin.com/in/kam-chuen-tam-24a8241b7"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition duration-200 hover:scale-125 hover:text-[#0077b5]"
            >
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://github.com/tamkc"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition duration-200 hover:scale-125 hover:text-[#333]"
            >
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://instagram.com/chuentam_99/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition duration-200 hover:scale-125 hover:text-[#E1306C]"
            >
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import ProjectItem from "./ProjectItem";
import odooPayroll from "../assets/odoo_payroll_image.webp";
import reactPayroll from "../assets/payroll_system_image.webp";
import ClickBook from "../assets/ClickBook_image.webp";
import object_rec from "../assets/object_recognition_image.webp";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 py-16 p-4">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center text-lg py-4 text-gray-700">
        Welcome to my project portfolio! Below are some of the key projects that
        I have worked on, showcasing my skills in full-stack development,
        machine learning, and system integrations. While these four projects
        represent a diverse range of my expertise, they are just a selection
        from my broader body of work.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProjectItem
          img={odooPayroll}
          title="Payroll Backend"
          stack="Python, Odoo"
        />
        <ProjectItem
          img={reactPayroll}
          title="HR & Payroll Frontend"
          stack="React, Next.js, Node.js"
        />
        <ProjectItem
          img={ClickBook}
          title="Booking System Integration"
          stack="PHP, IoT, JavaScript, jQuery"
        />
        <ProjectItem
          img={object_rec}
          title="Object Recognition"
          stack="Python, YoloV5, Pytorch, TensorFlow"
        />
      </div>
    </div>
  );
};

export default Projects;

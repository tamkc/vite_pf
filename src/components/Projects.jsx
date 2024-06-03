import React from "react";
import ProjectItem from "./ProjectItem";
import odooPayroll from "../assets/odoo_payroll.png";
import reactPayroll from "../assets/payroll_system.png";
import property4Img from "../assets/react.svg";
import object_rec from "../assets/object_rec.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 py-16 p-4">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Project</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, aperiam
        iusto! Nam doloremque inventore esse perferendis ducimus beatae nobis at
        alias tempora cupiditate officiis, iste blanditiis voluptates animi
        consequatur quis?
      </p>

      <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12">
        <ProjectItem
          img={odooPayroll}
          title="Payroll Backend"
          stack="Python, Odoo"
        />
        <ProjectItem
          img={reactPayroll}
          title="Hr & Payroll Frontend"
          stack="React, NextJs, NodeJs"
        />
        <ProjectItem img={object_rec} title="Booking System Integration" stack={"PHP, IOT, Javascript, JQuery"} />
        <ProjectItem
          img={object_rec}
          title="Object Recognition"
          stack="Python, YoloV5, Pytorch, Tensorflow"
        />
      </div>
    </div>
  );
};

export default Projects;

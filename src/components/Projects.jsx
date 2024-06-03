import React from "react";
import ProjectItem from "./Projectitem";
import odooPayroll from "../assets/odoo_payroll.png";
import reactPayroll from "../assets/payroll_system.png";
import object_rec from "../assets/object_rec.png";
import property4Img from "../assets/react.svg";

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
        <ProjectItem img={object_rec} title="Project 3" />
        <ProjectItem img={property4Img} title="Project 4" />
      </div>
    </div>
  );
};

export default Projects;

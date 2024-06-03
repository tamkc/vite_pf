import React from "react";
import PropTypes from "prop-types";

const WorkItem = ({ year, title, role, duration, details, stack }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white" />
        <div className="border border-gray-200 rounded-lg shadow-md p-4 mb-4">
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm mb-2">
            <span className="bg-[#001b5e] inline-block px-2 py-1 font-semibold text-white rounded-md">
              {year}
            </span>
            <span className="text-[#001b5e] font-semibold text-lg">
              {title}
            </span>
            <span className="my-1 text-sm font-normal leading-none text-stone-400">
              {duration}
            </span>
          </p>
          <span className="text-blue-600 font-semibold">{role}</span>
          <p className="my-2 text-base font-normal text-stone-500">{details}</p>
          <div className="mt-2">
            <span className="text-sm font-semibold text-gray-600">
              Tech Stack:
            </span>
            <span className="ml-2">
              {stack.split(",").map((tech, index) => (
                <span
                  key={`${tech}-${index}`} // Use a unique key, such as tech combined with index
                  className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-xs md:text-sm inline-block mr-2"
                >
                  {tech.trim()}
                </span>
              ))}
            </span>
          </div>
        </div>
      </li>
    </ol>
  );
};

WorkItem.propTypes = {
  stack: PropTypes.string,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default WorkItem;

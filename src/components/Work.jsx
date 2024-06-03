import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Hung Hing Printing Group Limited", //, WEB DEVELOPER(ASSISTANT SOFTWARE ENGINEER)
    duration: "1 Year",
    details: "Vite + React",
  },
  {
    year: 2022,
    title: "At-Vibe Technology Limited", // , WEB DEVELOPER(ASSISTANT SOFTWARE ENGINEER)
    duration: "1 Year",
    details: "Vite + React",
  },
  {
    year: 2022,
    title: "Kks Marketing", //, WEB DEVELOPER(PART-TIME)
    duration: "4 Months",
    details: "Vite + React",
  },
  {
    year: 2021,
    title: "Performve Limited", //, WEB DEVELOPER(INTERNSHIP)
    duration: "4 Months",
    details: "Vite + React",
  },
  {
    year: 2021,
    title: "At-Vibe Technology Limited", //, WEB DEVELOPER(INTERNSHIP)
    duration: "3 Months",
    details: "WEB DEVELOPER(INTERNSHIP)",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto p-4 py-16 md:pl-20 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] font-sans mb-2">
        Work
      </h1>
      {data.map((item, index) => (
        <WorkItem
          key={index}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;

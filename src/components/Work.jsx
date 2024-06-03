import React from "react";
import WorkItem from "./WorkItem";

const jobDetails = [
  {
    id: "1",
    year: 2023,
    title: "Hung Hing Printing Group Limited",
    role: "Programmer",
    duration: "1 Year",
    details:
      "Developed and maintained web applications using Python, ReactJs, NodeJs, NextJs, and Odoo. Collaborated with cross-functional teams to design and implement new features and improve existing functionalities.",
    stack: "Python, ReactJs, NodeJs, NextJs, Odoo, ViteJs",
  },
  {
    id: "2",
    year: 2022,
    title: "At-Vibe Technology Limited",
    role: "Assistant Software Engineer (Part-Time)",
    duration: "1 Year",
    details:
      "Built and maintained web solutions using PHP, Python, jQuery, and JavaScript. Contributed to back-end and front-end development, ensuring the delivery of high-quality, scalable applications.",
    stack: "PHP, Python, jQuery, JavaScript",
  },
  {
    id: "3",
    year: 2022,
    title: "KKS Marketing",
    role: "Web Developer (Part-Time)",
    duration: "4 Months",
    details:
      "Worked on developing and enhancing websites using PHP, WordPress, and JavaScript. Implemented custom themes and plugins for WordPress, optimizing the user experience and performance.",
    stack: "PHP, WordPress, JavaScript",
  },
  {
    id: "4",
    year: 2021,
    title: "Performve Limited",
    role: "Web Developer (Internship)",
    duration: "4 Months",
    details:
      "Gained hands-on experience in web development using NodeJs and VueJs. Assisted in creating dynamic web applications and improving existing projects through bug fixes and feature enhancements.",
    stack: "NodeJs, VueJs",
  },
  {
    id: "5",
    year: 2021,
    title: "At-Vibe Technology Limited",
    role: "Web Developer (Internship)",
    duration: "3 Months",
    details:
      "Participated in the development of web applications using PHP and C++. Supported the team in various stages of the software development lifecycle, from coding to testing and deployment.",
    stack: "PHP, C++, JavaScript",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto p-4 py-16 md:pl-20 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] font-sans mb-2">
        Work
      </h1>
      {jobDetails.map((item) => (
        <WorkItem
          key={item.id}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
          role={item.role}
          stack={item.stack}
        />
      ))}
    </div>
  );
};

export default Work;

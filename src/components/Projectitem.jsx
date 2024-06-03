import React from "react";
import PropTypes from "prop-types";

const ProjectItem = ({ img, title, stack }) => {
  const isImageLarge = determineImageSize(img) > 300;

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] transform transition-transform duration-300 hover:scale-105">
      <div
        className={`aspect-w-16 aspect-h-9 max-w-full ${
          isImageLarge ? "place-self-end" : ""
        }`}
      >
        <img
          src={img}
          alt="/"
          className="object-cover rounded-xl group-hover:opacity-10"
        />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{stack}</p>
      </div>
    </div>
  );
};

function determineImageSize(imgUrl) {
  const img = new Image();
  img.src = img;
  return Math.max(img.width, img.height);
}

// Define propTypes
ProjectItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
};

export default ProjectItem;

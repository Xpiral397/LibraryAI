import React from "react";

const Header = ({ title, color, style, duration }) => {
  return (
    <h1
      className={
        "mt-8 lg:mt-0  mb-4 text-3xl font-semibold tracking-tight leading-none md:text-5xl lg:text-4xl " +
        (color ? "text-white " : "lg:text-gray-900 ") +
        (style && style)
      }
      data-aos={duration ? "zoom-in-right" : ""}
      data-aos-duration={duration ? duration : ""}
    >
      {title}
    </h1>
  );
};

export default Header;

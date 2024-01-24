import React from "react";
import Header from "./Header";
import Button from "./Button";

const IntroBlock = ({ color, title, desc, btn = true }) => {
  return (
    <div
      className=" px-2 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 "
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
    >
      {title && <Header title={title} color={color} />}
      {desc && (
        <p
          className={
            "mb-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-  " +
            (color && "text-white text-left")
          }
        >
          {desc}
        </p>
      )}
      {desc | btn ? <Button value="Get Started" color={color} /> : ""}
    </div>
  );
};

export default IntroBlock;

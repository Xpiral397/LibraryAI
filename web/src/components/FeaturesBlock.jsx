import React from "react";
import SpriteLoader from "./SpriteLoader";
import hero from "../assets/wordpress.jpg";
import Header from "./Header";

const FeaturesBlock = ({ title, desc, img }) => {
  return (
    <>
      <article
        className={
          "feature  mx-0 my-5 " +
          (img
            ? "grid grid--1x2 gap-[4rem_2rem] my-48 first-of-type:mt-12"
            : "flex flex-wrap ")
        }
      >
        {/* <picture>
          <source
            type="image/webp"
            srcset="images/easy.webp 1x, images/easy@2x.webp 2x"
          />
          <source
            type="image/jpg"
            srcset="images/easy.jpg 1x, images/easy@2x.jpg 2x"
          /> */}
        {/* <img className="feature__image" src="Images/easy@2x.jpg" alt="" /> */}
        {img && (
          <img
            className="feature__image"
            src={hero}
            alt=""
            data-aos="zoom-out-up"
            data-aos-duration="1200"
          />
        )}
        {/* </picture> */}
        <div
          className="feature__content"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1200"
        >
          <span className="w-16 h-16 inline-flex justify-center items-center rounded-[100%] bg-[#f3f9fa]">
            <SpriteLoader color="#2584ff" id="wordpress" />
          </span>
          <Header
            title={title}
            style={"mx-0 my-4 !text-2xl !md:text-3xl !lg:text-4xl !mt-1"}
          />
          <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray- lg:dark:text-gray-700 ">
            {desc}
          </p>
          {/* <a
            href="#"
            className="text-[color:#ff3400] uppercase text-[2rem] font-bold after:content-['-->'] after:transition-[margin] after:duration-[0.15s] after:ml-[5px] after:hover:ml-2.5 lg:text-2xl"
          >
            learn more
          </a> */}
        </div>
      </article>
    </>
  );
};

export default FeaturesBlock;

import React, { forwardRef } from "react";
import img from "../assets/hero-img.jpg";

function Hero({}, ref) {
  return (
    <section className="relative h-screen object-cover" ref={ref}>
      <div className="absolute ">
        <img
          src={img}
          alt=""
          className="h-screen object-cover w-screen brightness-[.6] clipper"
          loading="lazy"
        />
      </div>
      <div className="absolute top-0 h-screen flex justify-center items-center flex-col w-full px-[15px]">
        <div className="text-center flex-wrap max-w-[69rem] px-[15px]">
          <p
            className={"font-light text-2xl text-white"}
            data-aos="fade-right"
            data-aos-duration="800"
          >
            EcoGuard it's a smart helper for nature lovers. It's a system that
            uses technology to keep an eye on both the sea and the land, helping
            to protect animals and plants.
          </p>
          <h1
            className="font-[SchnyderMLight] text-[3.125rem] leading-[1.2] text-center md:text-[5rem] translate-y-0 transition-transform text-white"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="800"
          >
            EcoGuard - Friend of Nature
          </h1>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Hero);

import React from "react";
import sprite from "../assets/sprite.svg";

const SpriteLoader = ({ id, color, style }) => {
  return (
    <>
      <svg
        className={
          "w-10 h-10 " + (color ? `fill-[#2568ff] ` : "fill-white ") + style
        }
      >
        <use xlinkHref={`${sprite}#${id}`} />
      </svg>
    </>
  );
};

export default SpriteLoader;

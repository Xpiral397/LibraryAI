import React from "react";

const NavigationList = ({ list, style }) => {
  const handleClick = (position) => {
    position.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ul
      className={
        "list w-full m-0 md:w-auto md:flex md:text-[1.6rem] md:max-h-full md:opacity-100 opacity-0 max-h-0 overflow-hidden transition-all duration-[0.2s]  " +
        style
      }
    >
      {list.map((item, index) => {
        return (
          <li
            className="px-8 py-2 border-b-[#222] border-b border-solid md:border-b-0 last-of-type:border-b-[none]"
            key={index}
          >
            <a
              // href={item.href || "#"}
              className="text-[#d2d0db] transition-[color] duration-[0.3s] hover:text-white text-xl lg:text-2xl"
              onClick={() => handleClick(item.position)}
            >
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationList;

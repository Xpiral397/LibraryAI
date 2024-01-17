import React from "react";

const NavigationList = ({ list }) => {
  return (
    <ul className="list w-full m-0 md:w-auto md:flex md:text-[1.6rem] md:max-h-full md:opacity-100 collapsible__content">
      {list.map((item, index) => {
        return (
          <li
            className="px-8 py-2 border-b-[#222] border-b border-solid last-of-type:border-b-[none]"
            key={index}
          >
            <a
              href={item.href || "#"}
              className="text-[#d2d0db] transition-[color] duration-[0.3s] hover:text-white"
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

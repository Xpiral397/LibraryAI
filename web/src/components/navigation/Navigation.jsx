import React from "react";

import sprite from "../../assets/sprite.svg";
import viteLogo from "/vite.svg";
import NavigationList from "./NavigationList";

const data = [
  { name: "home" },
  { name: "Info" },
  { name: "contact us" },
  { name: "About" },
];

const Navigation = () => {
  return (
    <nav className="bg-black flex justify-between flex-wrap p-4 items-center collapsible collapsible--expanded nav">
      <a className="translate-y-[5px] w-[150px]" href="/">
        <img src={viteLogo} alt="" />
      </a>
      <svg className="w-10 h-10 fill-white nav__toggler">
        <use xlinkHref={`${sprite}#menu`} />
      </svg>
      <NavigationList list={data} />
    </nav>
  );
};

export default Navigation;

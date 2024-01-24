import React, { useEffect, useRef, useState } from "react";
import viteLogo from "/vite.svg";
import NavigationList from "./NavigationList";
import SpriteLoader from "../SpriteLoader";

const data = ["home", "Info", "About us", "why us", "Contact US"];
const Navigation = ({ PositionList }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showNavList, setShowNavList] = useState(false);
  const navRef = useRef();

  const newData = PositionList.map((item, index) => ({
    name: data[index],
    position: item,
  }));

  useEffect(() => {
    const handleScroll = () => {
      const ShowNavPosition = PositionList[1].current.offsetTop;

      if (scrollY >= ShowNavPosition) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
        setShowNavList(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    showNavbar == false &&
      showNavList == false &&
      (setShowNavList(true), setShowNavbar(true)),
      showNavbar == true &&
        showNavList == true &&
        (setShowNavList(false), setShowNavbar(false)),
      showNavbar == true && showNavList == false
        ? setShowNavList(true)
        : showNavbar == false && showNavList == true && setShowNavbar(true);

    console.log(showNavbar, showNavList);
  };

  return (
    <nav
      className={
        "top-0 z-50 flex justify-between flex-wrap w-full p-4 items-center collapsible collapsible--expanded nav transition-all duration-700 " +
        (showNavbar ? "bg-gray-900 fixed " : "absolute bg-transparent ")
      }
      ref={navRef}
      onClick={handleClick}
    >
      <a className="translate-y-[5px] w-[150px]" href="/">
        <img src={viteLogo} alt="" />
      </a>
      <SpriteLoader id="menu" style={"nav__toggler"} />
      <NavigationList
        list={newData}
        style={showNavList && "!opacity-100 !max-h-full"}
      />
    </nav>
  );
};

export default Navigation;

"use client"
import React, {RefObject, useEffect, useRef, useState} from "react";
import nextLogo from "../../public/assets/next.svg";
import Image from "next/image";
import NavigationList from "./NavigationList";
import SpriteLoader from "../SpriteLoader";

const data = ["Home ", "Info", "About us", "Why Us", "Contact US", "Login"];
const Navigation = ({PositionList}: {PositionList: Array<RefObject<HTMLElement>>}) => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showNavList, setShowNavList] = useState(false);
    const navRef = useRef(null);

    const newData = PositionList.map((item, index) => ({
        name: data[index],
        position: item,
    }));

    useEffect(() => {
        const handleScroll = () => {
            const ShowNavPosition = PositionList[1]?.current?.offsetTop;

            if(scrollY >= (ShowNavPosition ?? 0)) {
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
                <Image height={'0'} width={'0'} src={nextLogo} alt="" />
            </a>
            <SpriteLoader id="menu" style={"opacity-50 transition-shadow duration-[0.15s] cursor-pointer md: hidden"} />
            <NavigationList
                list={newData}
                style={showNavList ? "!opacity-100 !max-h-full" : ''}
            />
        </nav>
    );
};

export default Navigation;
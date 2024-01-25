// components/Sidebar.tsx
'use client'
import {Divider} from '@nextui-org/react';
import {useEffect, useState} from 'react';
import React, {ReactNode} from "react";
import EcoGuardLogo from "@/public/assets/EcoGuardLogo.png"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, ScrollShadow} from "@nextui-org/react";
import Image from "next/image";
import {signOut, useSession} from 'next-auth/react';




interface SidebarItemProps {
    href: string;
    icon: string;
    label: string;
    pathname: string;
    children?: React.ReactNode;
}

const SidebarItem: React.FC<SidebarItemProps> = ({href, icon, label, children, pathname}) => {
    const isActive = pathname.startsWith(href);

    return (
        <li className={`mb-2 ${!isActive ? 'font-bold' : ''}`}>
            <Link href={href} legacyBehavior>
                <a className="flex items-center text-[14px] space-x-2 p-2 hover: rounded transition duration-300">
                    <span>{icon}</span>
                    <span>{label}</span>

                </a>
            </Link>
            <Divider />
            {!isActive && children}
        </li>
    );
};

interface SidebarProps { }

const Sidebar: React.FC<SidebarProps> = () => {
    const [link, setLink] = useState<string>("")
    useEffect(() => {
        // Check if window is defined before using it
        if(typeof window !== 'undefined') {
            // Get the current link when the component mounts
            setLink(window.location.href)

        }
    }, []);
    return (
        <nav className="bg-slate-900 h-[100vh] shadow-2xl py-3 px-2 w-[200px]">
            <ul>
                <SidebarItem href="/marine" icon="" label="Marines Monitorings" pathname={link}>
                    <ul>
                        <ul className="topic-list space-y-10  ">
                            <li className="flex items-center  px-2 rounded ">
                                <span className="icon text-[12px] mr-4">🌍</span>
                                <span className="topic text-[12px]">Overview</span>
                            </li>
                            <li className="flex items-center  px-2 rounded ">
                                <span className="icon text-[12px] mr-4">📊</span>
                                <span className="topic text-[12px]">Data Dashboard</span>
                            </li>
                            <li className="flex items-center  px-2 rounded ">
                                <span className="icon text-[12px] mr-4">🚨</span>
                                <span className="topic text-[12px]">Alerts and Notifications</span>
                            </li>
                            <li className="flex items-center  px-2 rounded ">
                                <span className="icon text-[12px] mr-4">🌐</span>
                                <span className="topic text-[12px]">Environmental Monitoring Stations</span>
                            </li>
                            <li className="flex items-center  px-2 rounded ">
                                <span className="icon text-[12px] mr-4">🐠</span>
                                <span className="topic text-[12px]">Marine Life Tracker</span>
                            </li>
                            <li className="flex items-center  px-2 rounded ">
                                <span className="icon text-[12px] mr-4">🛰️</span>
                                <span className="topic text-[12px]">Remote Sensing Technologies</span>
                            </li>
                            <li className="flex items-center  px-2 rounded ">
                                <span className="icon text-[12px] mr-4">🛰️</span>
                                <span className="topic text-[12px]">Research and Publications</span>
                            </li>
                            <li className="flex items-center  px-2 rounded ">
                                <span className="icon text-[12px] mr-4">🛰️</span>
                                <span className="topic text-[12px]">Education Center</span>
                            </li>
                            <li className="flex items-center  px-2 rounded ">
                                <span className="icon text-[12px] mr-4">🛰️</span>
                                <span className="topic text-[12px]">Contact and Support</span>
                            </li>


                        </ul>
                    </ul>
                </SidebarItem>


            </ul>
        </nav>
    );
};

export function EcoNavbar() {
    const {data: session} = useSession()
    return <Navbar className="drop-shadow-xl">
        <NavbarBrand>
            <Image src={EcoGuardLogo} alt='logo' className="rounded-full" width={100} height={30} />
            <p className="font-bold text-inherit">EcoGuard</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
                <Link color="foreground" href="/">
                    Home
                </Link>
            </NavbarItem>
            <NavbarItem isActive>
                <Link href="/dashboard" aria-current="page" color="secondary">
                    Dashboard
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color="foreground" href="#">
                    Integrations
                </Link>
            </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
            {
                session?.user?.name ?
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name="Jason Hughes"
                                size="sm"
                                src={session?.user.image || ""}
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">

                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">{session?.user?.email}</p>
                            </DropdownItem>
                            <DropdownItem key="settings">My Settings</DropdownItem>
                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                            <DropdownItem key="analytics">Analytics</DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                            <DropdownItem key="logout" color="danger" onClick={() => {signOut()}}>
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    :
                    <Button type='button' variant='flat' className='px-5 w-[30%] bg-purple-800 text-white font-bold text-[14px] rounded-md '>
                        <Link href='auth/login'><span className='text-white text-[14px]'>Log in</span></Link>
                    </Button>

            }
        </NavbarContent>
    </Navbar>
}
export default Sidebar;

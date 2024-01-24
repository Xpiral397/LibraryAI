// components/Sidebar.tsx
'use client'
import {Divider} from '@nextui-org/react';
import Link from 'next/link';
import {useEffect, useState} from 'react';


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
        <nav className="bg-slate-900 h-screen shadow-2xl py-3 px-2 w-[200px]">
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

export default Sidebar;

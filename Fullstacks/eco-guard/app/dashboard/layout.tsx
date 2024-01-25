
import React, {ReactNode} from "react";
import EcoGuardLogo from "@/public/assets/EcoGuardLogo.png"
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, ScrollShadow} from "@nextui-org/react";
import Sidebar, {EcoNavbar} from "./navbar";
import Image from "next/image";




export default function App({children}: {children: ReactNode}) {

    return (
        <div>
            <AppRouterCacheProvider options={{enableCssLayer: true}}>
                {(<div>

                    <main className="overflow-hidden overflow  flex space-x-1 ">
                        <div className="sm:flex hidden shadow-2xl  ">
                            <Sidebar />
                        </div>
                        <div className="w-full">
                            <EcoNavbar />
                            <ScrollShadow orientation="vertical" className="rounded-md w-full overflow-scroll max-h-[95vh] shadow-xl r">
                                {children}
                            </ScrollShadow>


                        </div>
                    </main>
                </div>

                ) as any
                }
            </AppRouterCacheProvider >

        </div >

    )
}


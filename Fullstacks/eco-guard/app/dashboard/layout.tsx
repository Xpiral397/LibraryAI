import React, {ReactNode} from "react";
import EcoGuardLogo from "@/public/assets/EcoGuardLogo.png"
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import Sidebar from "./navbar";
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
                            <Navbar className="drop-shadow-xl">
                                <NavbarBrand>
                                    <Image src={EcoGuardLogo} alt='logo' className="rounded-full" width={100} height={30} />
                                    <p className="font-bold text-inherit">EcoGuard</p>
                                </NavbarBrand>

                                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                                    <NavbarItem>
                                        <Link color="foreground" href="#">
                                            Features
                                        </Link>
                                    </NavbarItem>
                                    <NavbarItem isActive>
                                        <Link href="#" aria-current="page" color="secondary">
                                            Customers
                                        </Link>
                                    </NavbarItem>
                                    <NavbarItem>
                                        <Link color="foreground" href="#">
                                            Integrations
                                        </Link>
                                    </NavbarItem>
                                </NavbarContent>

                                <NavbarContent as="div" justify="end">
                                    <Dropdown placement="bottom-end">
                                        <DropdownTrigger>
                                            <Avatar
                                                isBordered
                                                as="button"
                                                className="transition-transform"
                                                color="secondary"
                                                name="Jason Hughes"
                                                size="sm"
                                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                            />
                                        </DropdownTrigger>
                                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                                            <DropdownItem key="profile" className="h-14 gap-2">
                                                <p className="font-semibold">Signed in as</p>
                                                <p className="font-semibold">zoey@example.com</p>
                                            </DropdownItem>
                                            <DropdownItem key="settings">My Settings</DropdownItem>
                                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                                            <DropdownItem key="analytics">Analytics</DropdownItem>
                                            <DropdownItem key="system">System</DropdownItem>
                                            <DropdownItem key="configurations">Configurations</DropdownItem>
                                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                                            <DropdownItem key="logout" color="danger">
                                                Log Out
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavbarContent>
                            </Navbar>
                            <div className="w-full h-full flex justify-center items-center">
                                {children}
                            </div>
                        </div>


                    </main>
                </div>) as any
                }
            </AppRouterCacheProvider >

        </div >

    )
}


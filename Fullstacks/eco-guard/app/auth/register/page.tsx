"use client"
import React, {useState} from 'react'
import nextLogo from "@/public/vercel.svg"
import {Button, Select, SelectItem} from "@nextui-org/react";
import Image from 'next/image';
import Glogo from '@/public/assets/GoogleLogo.svg'
import Google from 'next-auth/providers/google';
import Link from 'next/link';

export default function Page() {
    const [gender, setGender] = useState<Set<any>>(new Set([]))
    const FormDataObject = () => {
        const Form = new FormData()
        let username = Form.get('username')
        let email = Form.get('email')
        let password = Form.get('password')
        let gender_ = gender
    }

    const GoogleLogo = () => {
        return <Image src={Glogo} height={'20'} width={'20'} alt='Google' />
    }
    return (
        <div className='border-zinc-950 text-slate-950 text-extabold flex text-[16px] h-screen w-full justify-center items-center '>

            <div className='px-10 border-[1px] shadow-2xl rounded-md border-l-purple-100 border-r-purple-100 border-blue-100 py-5 bg-white px-1'>
                <form method='POST' className='space-y-5'>
                    <div className='flex justify-center '>
                        <Image src={nextLogo} alt="" width={'100'} height={'50'} />
                    </div>
                    <div className='w-full space-x-5 w-[400px]'>
                        <label htmlFor="username" className=''>Username:</label>
                        <input name="username" type='text' className='px-2 w-[300px] text-slate-600 font-[500] text-[14px] focus:outline-none border border-purple-300 rounded-[5px] px-2 py-2' placeholder='xpiral397' />
                    </div>

                    <div className='w-full space-x-1 '>
                        <label htmlFor="username" className=''>OtherName:</label>
                        <input name="username" type='text' className='px-2 w-[300px] text-slate-600 text-extrabold text-[14px] focus:outline-none border border-purple-300 rounded-[5px] px-2 py-2' placeholder='xpiral397' />
                    </div>

                    <div className='w-full space-x-12'>
                        <label htmlFor="username" className=''>Email:</label>
                        <input name="username" type='text' className='mx-2 px-2 w-[300px] text-slate-600 text-slate-600 text-extrabold text-[14px] focus:outline-none border border-purple-300 rounded-[5px] px-2 py-2' placeholder='xpiral397@gmail' />
                    </div>

                    <div className='w-full space-x-5'>
                        <label htmlFor="username" className=''>Password:</label>
                        <input name="username" type='password' className='px-2 w-[300px] text-slate-600 text-extrabold text-[14px] focus:outline-none border border-purple-300 rounded-[5px] px-2 py-2' placeholder='xpiral397' />
                    </div>
                    <div className='flex justify-center items-center space-x-3 '>
                        <Select
                            label="Select an gender"
                            className="max-w-xs"
                            selectedKeys={gender}

                        >
                            {["Male", "Female"].map((gender) => (
                                <SelectItem key={gender} value={gender}>
                                    {gender}
                                </SelectItem>
                            ))}
                        </Select>
                        <Select
                            label="User"
                            className="max-w-xs"
                            selectedKeys={gender}

                        >
                            {["Developer", "Causal User"].map((gender) => (
                                <SelectItem key={gender} value={gender}>
                                    {gender}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div>
                        <Link href='/auth/login'><Button variant='flat' type='button' className='bg-neutral-100 border-slate-100 border font-[600] text-[15px] rounded-[10px] w-full shadow-sm mt-2 px-2 py-2'>Already Have Account Login</Button></Link>
                        <p></p>
                        <Button startContent={<GoogleLogo />} variant='flat' type='button' className='bg-neutral-100 border-slate-100 border font-[600] text-[15px] rounded-[10px] w-full shadow-sm mt-2 px-2 py-2'>Sign in with Google</Button>
                    </div>
                    <input type='submit' className=' px-2 py-2 w-full bg-slate-900 rounded-md text-white text-bold hover:bg-slate-900' />
                </form>
            </div>
        </div>
    )
}



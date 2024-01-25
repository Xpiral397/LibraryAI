"use client"
import React, {useState} from 'react'
import nextLogo from "@/public/assets/EcoGuardLogo.png"
import {Button, Select, SelectItem} from "@nextui-org/react";
import Image from 'next/image';
import Glogo from '@/public/assets/GoogleLogo.svg'
import Google from 'next-auth/providers/google';
import Link from 'next/link';
import {signIn, signOut} from 'next-auth/react';

export default function Page() {
    const [gender, setGender] = useState<Set<any>>(new Set([]))
    const [usernmaeErorr, setUserNameError] = useState<string>('')
    const [emailError, setEmailError] = useState<string>('')
    const FormDataObject = () => {
        const Form = new FormData()

        let username = Form.get('username')?.valueOf()
        let email = Form.get('email')?.valueOf()

        console.log(username, email, Form.values())
        // let emailTesting = (email??"").split('@')

    }

    const GoogleLogo = () => {
        return <Image src={Glogo} height={'20'} width={'20'} alt='Google' />
    }
    return (
        <div className='border-zinc-950 text-slate-950 text-extabold flex text-[16px] h-screen w-full justify-center items-center '>

            <div className='px-10 border-[1px] shadow-2xl rounded-md border-l-purple-100 border-r-purple-100 border-blue-100 py-5 bg-white px-1'>
                <form method='POST' className='space-y-5' >
                    <div className='flex items-center justify-center '>
                        <Image className='rounded-full' src={nextLogo} alt="" width={'50'} height={'50'} />
                        <span className='font-bold text-xl text-slate-900'>EcoGuard</span>
                    </div>
                    <div className='w-full space-x-5 w-[400px]'>
                        <label htmlFor="username" className=''>Username:</label>
                        <input name="username" type='text' className='px-2 w-[300px] text-slate-600 font-[500] text-[14px] focus:outline-none border border-purple-300 rounded-[5px] px-2 py-2' placeholder='Your Eamil Or Username' />
                    </div>

                    <div className='w-full space-x-5'>
                        <label htmlFor="username" className=''>Password:</label>
                        <input name="username" type='password' className='px-2 w-[300px] text-slate-600 text-extrabold text-[14px] focus:outline-none border border-purple-300 rounded-[5px] px-2 py-2' placeholder='Password' />
                    </div>

                    <div>
                        <Button variant='flat' type='button' className='bg-neutral-100 border-slate-100 border font-[600] text-[15px] rounded-[10px] w-full shadow-sm mt-2 px-2 py-2'><Link href={'/auth/register'}>Don't Have Account </Link></Button>
                        <p></p>
                        <Button onClick={() => signIn()} startContent={<GoogleLogo />} variant='flat' type='button' className='bg-neutral-100 border-slate-100 border font-[600] text-[15px] rounded-[10px] w-full shadow-sm mt-2 px-2 py-2'>Sign in with Google</Button>
                    </div>
                    <input type='submit' className=' px-2 py-2 w-full bg-slate-900 rounded-md text-white text-bold hover:bg-slate-900' />
                </form>
            </div>
        </div>
    )
}



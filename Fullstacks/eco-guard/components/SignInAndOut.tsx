"use client"
import React from 'react'
import {signIn, signOut, useSession} from 'next-auth/react'

export default function SignInAndOut() {
    const {data: session} = useSession()
    if(session && session.user) {
        return <div className='flex ml-auto gap-4'>
            <p className='text-[15px] text-extrabold text-slate-100 bg-slate-900 px-2 py-2'>{session.user.name}</p>
            <button onClick={() => signOut()} className='rounded-md text-slate-200 bg-red-500 px-2 py-2 rounded-md'>Sign Out</button>
        </div>
    }
    return (
        <div className='bg-slate-900 px-2 py-2'>
            <button onClick={() => signIn()} className='rounded-md text-slate-200 bg-green-500 px-2 py-2 rounded-md'>Sign In</button>
        </div>
    )
}

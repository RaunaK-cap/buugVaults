"use client"

import React from 'react'
import { GrStorage } from "react-icons/gr";

import { signOut   , useSession, SessionProvider } from "next-auth/react"
import { useRouter } from 'next/navigation'


const Navbar = () => {
 
return <SessionProvider>
  <Home/>
</SessionProvider>
}

export function Home (){
  const {status} = useSession() 
  const router = useRouter()
  return (
    <div className='h-5 w-[70vw] ml-52 mt-4 bg-gray-200/5 fixed top-0 z-50 p-9   rounded-lg flex justify-between items-center backdrop-blur-3xl'>
      <div className='flex ml-6 text-white items-center gap-2'>
        {<GrStorage size={40}/>}
        <h1 className='text-xl font-bold  '> BugVaults</h1>
      </div>
      <div className='flex '>
        <ul className='flex gap-5 text-gray-300'>
            <li className='hover:bg-yellow-500/10 p-2 rounded-full'>
                Features
            </li>
            <li className='hover:bg-yellow-500/10 p-2 rounded-full'>
                How its work
            </li>
            <li className='hover:bg-yellow-500/10 p-2 rounded-full'>
                Pricing 
            </li>
        </ul>
      </div>
      <div className='flex gap-5 '>
        { status === "authenticated" ? ( <button 
        onClick={()=> signOut({ callbackUrl:"/"})}
        className='p-2 px-4 bg-gradient-to-r from-emerald-300 to-yellow-600 hover:from-emerald-200 hover:to-yellow-400  text-black cursor-pointer rounded-lg'> Logout</button>):( <button 
        onClick={()=> router.push("/api/auth/signin") }
        className='p-2 px-4 bg-gradient-to-r from-emerald-300 to-yellow-600 hover:from-emerald-200 hover:to-yellow-400  text-black cursor-pointer rounded-lg'> Get started </button>)}
      
      </div>
      
    </div>

  )
}





export default Navbar

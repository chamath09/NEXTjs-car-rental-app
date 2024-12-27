import Image from 'next/image'
import React from 'react'
import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <div className='hidden md:flex items-center justify-between p-3 px-10 shadow-sm border-b-[1px] '>
        <Image src='/logo.png' alt='logo' width={200} height={150} />
        <div className='flex gap-5'>
            <h2 className='hover:bg-blue-500 p-2 rounded-full hover:text-white cursor-pointer'>Home</h2>
            <h2 className='hover:bg-blue-500 p-2 rounded-full hover:text-white cursor-pointer'>History</h2>
            <h2 className='hover:bg-blue-500 p-2 rounded-full hover:text-white cursor-pointer'>Contact Us</h2>
        </div>
        <UserButton/>
    </div>
  )
}

export default NavBar
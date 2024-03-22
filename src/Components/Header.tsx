"use client";
import React from 'react'
import Image from 'next/image';
import img from '@/Components/Image/bg.jpg'
import Navbar from './Navbar';
const Header = () => {
    return (
        <>
            <div className={`h-[100vh] w-[100%]  z-10 relative header flex items-center justify-center`}>
                <div className='w-[100px] h-[100px] z-50'>
                    <h1 className='text-white'>Hello</h1>

                </div>

                {/* <Image src={img} alt="header" layout='fill' objectFit='cover' className='-z-9 relative' /> */}

            </div>
        </>
    )
}

export default Header
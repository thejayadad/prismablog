'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaYoutube, FaTiktok, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import Social from '../Social';
import AuthLinks from '../authLinks/AuthLinks';



const Navbar = () => {
  return (
    <header className='px-4 py-8'>
        <div className='flex justify-between items-center'>
            <div>
                <Link href={'/'}>DonutShop</Link>
            </div>
            <div className='hidden md:flex space-x-4'>
            <Social />
            </div>
            <div className='flex items-center gap-2'>
                <Link className='sm:hidden md:block lg:block' href={'/'}>HomePage</Link>
                <Link className='sm:hidden md:block lg:block' href={'/about'}>About</Link>
                <Link className='sm:hidden md:block lg:block' href={'/contact'}>Contact</Link>
                <AuthLinks />
            </div>
        </div>
    </header>
  )
}

export default Navbar
import React, { useEffect, useState } from 'react'
import {FaBars} from 'react-icons/fa6'
import {FaXmark} from 'react-icons/fa6'
export const Header = () => {
  const [open,setopen] =useState(true)
  useEffect(() => {
    console.log(open);
  },[open])
  return (
    <div className='z-50 absolute w-full flex  flex-row shadow-2xl justify-between items-center p-5 text-white bg-gradient-to-r from-cyan-500 to-transparent'>
        <div className=' font-bold text-4xl'>Logo</div>
            <ul className=' hidden flex-row md:flex '>
                <a href='#'><li className='navitem relative mr-12 text-2xl'>Home</li></a>
                <a href='#'><li className='relative navitem mr-12 text-2xl'>Services</li></a>
                <a href='#'><li className='relative navitem mr-12 text-2xl'>About</li></a>
                <a href='#'><li className='relative navitem mr-12 text-2xl'>Contact</li></a>                
            </ul>
            {
              !open? 
            <ul className=' z-50 menu absolute top-20 left-1/2 '>
                <a href='#'><li className='navitem relative pt-5 font-bold mr-28 text-2xl'>Home</li></a>
                <a href='#'><li className='relative navitem pt-5 font-bold mr-28 text-2xl'>Services</li></a>
                <a href='#'><li className='relative navitem pt-5 font-bold mr-28 text-2xl'>About</li></a>
                <a href='#'><li className='relative navitem pt-5 font-bold mr-28 text-2xl'>Contact</li></a>                
            </ul>
            :
            <span className='hidden'></span>
            }
            <div className='block  md:hidden relative'> 
            {
              open? 
              <FaBars onClick={() => setopen(false)}/>
              :
              <FaXmark onClick={() => setopen(true)}/>
            }
            </div>

    </div>
  )
}

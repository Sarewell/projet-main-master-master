import React from 'react'

import { GrFacebookOption, GrGithub, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import {  HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function Footer() {
  return (
    <div className='bg-gray-900 flex justify-center items-center'>
      <div className='text-center'>
        <div className='flex justify-center '>
          <HiOutlineChevronDoubleUp className='text-white text-6xl text-center -mt-6 bg-rose-500 p-2 '/>
        </div>
        
        <div className='flex gap-8 text-white text-4xl my-12'>
          <div className='p-2 bg-gray-600  hover:bg-cyan-400 '><GrFacebookOption className='  hover:animate-spin    '/></div>
          <div className='p-2 bg-gray-600  hover:bg-cyan-400 overflow-hidden'><GrLinkedinOption className=' hover:animate-spin  '/></div>
          <div className='p-2 bg-gray-600  hover:bg-cyan-400 overflow-hidden'><GrInstagram className=' hover:animate-spin '/></div>
          <div className='p-2 bg-gray-600  hover:bg-cyan-400 overflow-hidden'><GrGithub className=' hover:animate-spin'/></div>
          
          
          
          

        </div>
        <p className='uppercase text-gray-300 mb-8'>libois nicolas <span className='text-rose-800'>@ 2023</span></p>
      </div>
      
    </div>
  )
}

import React from 'react'

import loginImg from "../assets/1.jfif"
import logo from "../assets/logo.png"

import {GrClose} from "react-icons/gr"

const RegisterModal = ({isOpen,setIsOpen}) => {
  return (
        <div className={isOpen===true?'flex fixed top-0 left-0 w-full h-screen z-10':"hidden"}>
            <div className='hidden md:flex w-1/2 h-screen'>
                <img src={loginImg} alt="Register" className='h-full object-cover'/>
            </div>
            <div className='flex items-center justify-center w-full md:w-1/2 bg-sky-50'>
            <div className='flex flex-col gap-3 w-80'>
                <img src={logo} alt="logo" className='w-wull mx-auto drop-shadow-2xl mb-3'/>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-red-800 font-bold'>Mail</label>
                    <input type="text"  className='bg-sky-50 border-b-2'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-red-800 font-bold'>Username</label>
                    <input type="text"  className='bg-sky-50 border-b-2'/>
                </div>
                <div  className='flex flex-col'>
                    <label htmlFor="" className='text-red-800 font-bold'>Password</label>
                    <input type="password" className='bg-sky-50 border-b-2'/>
                </div>
                <div  className='flex flex-col'>
                    <label htmlFor="" className='text-red-800 font-bold'>Repeat password</label>
                    <input type="password" className='bg-sky-50 border-b-2'/>
                </div>
                <div className='flex items-center justify-center'>
                    <button className='bg-red-800 text-sky-50 font-bold text-2xl py-1 px-8 rounded-full mt-3'>Register</button>
                </div>
            </div>
                <button className='absolute top-4 right-4' onClick={()=>setIsOpen(!isOpen)}>
                    <GrClose size={25}/>
                </button>
            </div>
        </div>
  )
}

export default RegisterModal
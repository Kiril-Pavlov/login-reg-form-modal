import React from 'react'

import loginImg from "../assets/1.jfif"

import {GrClose} from "react-icons/gr"

const RegisterModal = ({isOpen,setIsOpen}) => {
  return (
        <div className={isOpen===true?'flex fixed top-0 left-0 w-full h-screen z-10':"hidden"}>
            <div className='hidden md:flex w-1/2 h-screen'>
                <img src={loginImg} alt="Register" className='h-full object-cover'/>
            </div>
            <div className='flex items-center justify-center w-full md:w-1/2 bg-white'>
                REGISTER
                <button className='absolute top-4 right-4' onClick={()=>setIsOpen(!isOpen)}>
                    <GrClose size={25}/>
                </button>
            </div>
        </div>
  )
}

export default RegisterModal
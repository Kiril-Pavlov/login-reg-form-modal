import React from 'react'

import loginImg from "../assets/1.jfif"

const LoginModal = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-screen z-10 flex'>
        <div className='flex w-1/2 bg-red-500 h-screen'>
            <img src={loginImg} alt="Login" className='h-full object-cover'/>
        </div>
        <div className='flex items-center justify-center w-1/2 bg-white'>
            LOGIN
            <button className='absolute top-4 right-4'>X</button>
        </div>
    </div>
  )
}

export default LoginModal
import React, { useState } from "react";

import loginImg from "../assets/1.jfif";
import logo from "../assets/logo.png";

import { GrClose } from "react-icons/gr";

const RegisterModal = ({ isOpen, setIsOpen }) => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [mailError, setMailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");

  

  const handleSubmit = () => {
    //hahdle mail input error
    if(email === ""){
        setMailError("enter mail")
    }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        setMailError("")
    }else{
        setMailError("not a valid mail")
    }

    //handle password comparing
    if(password === repeatPassword){
        setRepeatPasswordError("")
    }else {
        setRepeatPasswordError("different password")
    }

    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("RepeatPassword:", repeatPassword);
  }

  return (
    <div
      className={
        isOpen === true
          ? "flex fixed top-0 left-0 w-full h-screen z-10"
          : "hidden"
      }
    >
      <div className="hidden md:flex w-1/2 h-screen">
        <img src={loginImg} alt="Register" className="h-full object-cover" />
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2 bg-sky-50">
        <div className="flex flex-col gap-3 w-80">
          <img
            src={logo}
            alt="logo"
            className="w-wull mx-auto drop-shadow-2xl mb-3"
          />
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label htmlFor="" className="text-red-800 font-bold">
                Mail
              </label>
              <span className="text-red-400">{mailError}</span>
            </div>
            <input
              type="email"
              className="bg-sky-50 border-b-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
          <div className="flex justify-between">
              <label htmlFor="" className="text-red-800 font-bold">
                Username
              </label>
              <span className="text-red-400">{usernameError}</span>
            </div>
            <input
              type="text"
              className="bg-sky-50 border-b-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
          <div className="flex justify-between">
              <label htmlFor="" className="text-red-800 font-bold">
                Password
              </label>
              <span className="text-red-400">{passwordError}</span>
            </div>
            <input
              type="password"
              className="bg-sky-50 border-b-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
          <div className="flex justify-between">
              <label htmlFor="" className="text-red-800 font-bold">
                Repeat Password
              </label>
              <span className="text-red-400">{repeatPasswordError}</span>
            </div>
            <input
              type="password"
              className="bg-sky-50 border-b-2"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button 
                className="bg-red-800 text-sky-50 font-bold text-2xl py-1 px-8 rounded-full mt-3"
                onClick={handleSubmit}
            >
              Register
            </button>
          </div>
        </div>
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GrClose size={25} />
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;

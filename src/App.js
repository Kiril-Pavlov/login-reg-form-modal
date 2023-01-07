import { useState } from "react";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";



function App() {
  const [isLoginOpen,setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  return (
    <div className="flex flex-col gap-4 w-full h-screen items-center justify-center">
      <button onClick={()=>setIsLoginOpen(!isLoginOpen)}
        className="border-2 bg-stone-50 hover:bg-stone-300 py-2 px-4 font-bold transition-all duration-300"
        >
        Login
      </button>
      <button className="border-2 bg-stone-50 hover:bg-stone-300 py-2 px-4 font-bold transition-all duration-300">
        Register
      </button>
      <LoginModal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen}/>
      <RegisterModal/>
    </div>
  );
}

export default App;

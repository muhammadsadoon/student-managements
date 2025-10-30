import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import logo from "../../../assets/image/logo.png"

const NotFoundPage = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/");
        },3000);
    },[]);
  return (
    <div className="h-dvh w-full flex items-center justify-center flex-col" style={{
        background: "#08201D"
    }}>
        <img src={logo} className="my-5" alt="" />
        <h1 className="text-6xl text-white animate-bounce">404 | PAGE NOT FOUND!</h1>
        <p className='text-white'>you have just 3 sec to redirect to home page.</p>
    </div>
  )
}

export default NotFoundPage

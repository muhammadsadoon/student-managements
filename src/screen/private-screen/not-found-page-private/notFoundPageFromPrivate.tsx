import { useEffect } from 'react'

import { useNavigate } from "react-router-dom";
const NotFoundPageFromPrivate = () => {

    const navigate = useNavigate();
    let temp : any = 0;
    useEffect(() => {
        temp = setTimeout(() => {
            navigate("/");
        }, 3000);

        return (() => clearTimeout(temp))
    }, []);
    return (
        <div className="h-dvh w-full flex items-center justify-center flex-col" >
            <h3 className='text-center'>DashBoard</h3>
            <h1 className="text-6xl text-black animate-bounce">404 | PAGE NOT FOUND!</h1>
            <p className='text-black'>you have just 3 sec to redirect to home page.</p>
        </div>
    )
}

export default NotFoundPageFromPrivate;

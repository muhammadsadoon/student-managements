// import TradeCard from '../../../components/trade-card/trade-card'

// react icons api
import { MdNotificationsNone } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import { SiGoogleclassroom } from 'react-icons/si';
import { PiStudentLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { logoutFromSupabase } from '../../../utils/supabase-client';


const HomeScreen = () => {
    return (
        <div className='w-full md:p-3'>
            <section className='md:block hidden w-full'>
                <div>
                    <div className='bg-slate-100 h-16 w-full p-4 flex items-center justify-between'>
                        <div>
                            <h4>Learn  how to launch faster</h4>
                            <p>watch our webinar for tips from our experts and get a limited time offer</p>
                        </div>
                        <div className='flex gap-2 items-center justify-center'>
                            <MdNotificationsNone className='text-3xl text-black' />
                            <button className='p-2 bg-sky-500 rounded-md text-white active:opacity-80' onClick={logoutFromSupabase}> Logout</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-5 p-5'>
                <h1 className='text-2xl lg:text-4xl '>Welcome to your dashboard, Udemy school</h1>
                <div className='md:p-6'>
                    <p className='md:text-2xl'>Uyo/school/@teachable.com</p>
                </div>
                <Link to={"/add-admin"}>
                    <div className='md:p-6 my-1 flex flex-col md:flex-row items-center justify-center'>
                        <div className='flex items-center justify-center md:w-1/4 w-full md:rounded-bl-xl md:rounded-tl-xl md:rounded-tr-none rounded-tl-xl rounded-tr-xl  bg-sky-200 h-15 md:h-20'>
                            <RiAdminLine className='text-2xl' />
                        </div>
                        <div className='flex flex-col items-start justify-center p-4 md:rounded-br-xl md:rounded-tr-xl md:rounded-bl-none rounded-bl-xl rounded-br-xl border border-t-0 md:border-t  md:border-l-0 md:h-20'>
                            <h1 className='text-xl'>Add other admins</h1>
                            <p className='text-sm text-gray-700'>Create rich course content and coaching products for your students.
                                When you give them a pricing plan, they’ll appear on your site!</p>
                        </div>
                    </div>
                </Link>
                <Link to={"/add-class"}>
                    <div className='md:p-6 my-1 flex flex-col md:flex-row items-center justify-center'>
                        <div className='flex items-center justify-center md:w-1/4 w-full md:rounded-bl-xl md:rounded-tl-xl md:rounded-tr-none rounded-tl-xl rounded-tr-xl  bg-sky-200 h-15 md:h-20'>
                            <SiGoogleclassroom className='text-2xl' />
                        </div>
                        <div className='flex flex-col items-start justify-center p-4 md:rounded-br-xl md:rounded-tr-xl md:rounded-bl-none rounded-bl-xl rounded-br-xl border border-t-0 md:border-t  md:border-l-0 md:h-20'>
                            <h1 className='text-xl'>Add classes </h1>
                            <p className='text-sm text-gray-700'>Create rich course content and coaching products for your students.
                                When you give them a pricing plan, they’ll appear on your site!</p>
                        </div>
                    </div>
                </Link>
                <Link to={"/add-student"}>
                    <div className='md:p-6 my-1 flex flex-col md:flex-row items-center justify-center'>
                        <div className='flex items-center justify-center md:w-1/4 w-full md:rounded-bl-xl md:rounded-tl-xl md:rounded-tr-none rounded-tl-xl rounded-tr-xl  bg-sky-200 h-15 md:h-20'>
                            <PiStudentLight className='text-2xl' />
                        </div>
                        <div className='flex flex-col items-start justify-center p-4 md:rounded-br-xl md:rounded-tr-xl md:rounded-bl-none rounded-bl-xl rounded-br-xl border border-t-0 md:border-t  md:border-l-0 md:h-20'>
                            <h1 className='text-xl'>Add students</h1>
                            <p className='text-sm text-gray-700'>Create rich course content and coaching products for your students.
                                When you give them a pricing plan, they’ll appear on your site!</p>
                        </div>
                    </div>
                </Link>

            </section>
        </div>
    )
}

export default HomeScreen

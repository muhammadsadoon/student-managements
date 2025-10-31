import React, { useContext, useEffect, useState } from 'react'
import { MdNotificationsNone } from 'react-icons/md'
import { logoutFromSupabase } from '../../../utils/supabase-client'
import { UserContext } from '../../../utils/contextApi'

const SettingProfile = () => {
    const [role, setRole] = useState<string>("Student")


    const context = useContext(UserContext);
    const handlerSubmitForm = (e: any) => {
        e.preventDefault();
        context?.setIsRoleAdminOrStudent(context?.isRoleAdminOrStudent == "Admin" ? "Student" : "Admin");
    }

    useEffect(()=>{
        setRole(context?.isRoleAdminOrStudent);
    },[]);
    return (
        <div className='min-h-[80vh] w-full p-4'>
            <div className='flex justify-self-end items-center justify-center gap-2'>
                <MdNotificationsNone className='text-3xl ' />
                <button onClick={logoutFromSupabase} className='text-md px-4 cursor-pointer'>Logout</button>
            </div>
            <h2 className='text-2xl font-semibold'>Setting and Profile: </h2>
            <form onSubmit={handlerSubmitForm} className='h-full flex flex-col items-center justify-center'>
                <div className='flex items-center justify-around flex-col md:flex-row'>
                    <div>
                        <h3>Change Role of Admin Or Student State...</h3>
                    </div>
                    <select value={role.toString()} onChange={(e) => setRole(e.target.value)}>
                        <option value="Admin">Admin</option>
                        <option value="Student">Student</option>
                    </select>
                </div>
                <button className='p-2 bg-sky-500 text-white rounded-md cursor-pointer block mx-auto my-4'>Submit</button>
            </form>
        </div>
    )
}

export default SettingProfile

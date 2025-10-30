import React, { useEffect, useState } from 'react'
import { MdNotificationsNone } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import { logoutFromSupabase } from '../../../utils/supabase-client'
import Skeleton from '@mui/material/Skeleton'
import { useFetchSupabase } from '../../../hooks/useFetch'
import type { TeacherGettingDataType } from '../../../utils/types/propes'

const TeacherSlot = () => {
    const [data, setData] = useState<TeacherGettingDataType>(null)

    const param = useParams()
    const teacherSlot = param["teacher-slot"];

    useEffect(() => {
        const getData = async () => {
            const { data }: any = await useFetchSupabase("teacher");
            const filturData = data?.find((item: any) => item?.name?.trim() == teacherSlot)
            setData(filturData);
            console.log(filturData)
        };
        getData();
    }, []);
    return (
        <div className='md:p-5 p-2 h-full w-full'>
            <div className='flex items-center justify-end gap-2 h-12 w-full'>
                <MdNotificationsNone className='text-3xl ' />
                <button onClick={logoutFromSupabase} className='text-md px-4 cursor-pointer'>Logout</button>
            </div>
            <button className='p-2 text-white text-xl bg-sky-500 rounded-md'>
                <Link to={"/teacher"}>Go back</Link>
            </button>
            {
                !data?.name && (<div className='min-h-[40vh]'>
                    <Skeleton />
                </div>)
            }
            {
                data && (
                    <div className='flex items-center justify-center flex-col'>
                        <div className='h-[50dvh] '>
                            <h1 className='text-5xl my-3'>{(data?.name).split(" ").map((item => {
                                return item.slice(0, 1).toUpperCase() + item.slice(1) + " "
                            }))}</h1>
                            <img src={data?.image_url} alt="" className='h-[200px] w-[200px] mx-auto rounded-full bg-gray-200' />
                            <div className='my-3 font-bold'>
                                <h2 className='text-center text-lg '>Gender: {data?.gender ? "Male" : "Female"}</h2>
                                <h2 className='text-center text-lg '>Email: <a href={`mailto:${data?.email}`}>{data?.email}</a></h2>
                                <h2 className='text-center text-lg '>Phone: {data?.number}</h2>
                            </div>
                            <p className='text-center text-gray-800'>Excelent tecaher in this {data?.subject} subject.</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default TeacherSlot

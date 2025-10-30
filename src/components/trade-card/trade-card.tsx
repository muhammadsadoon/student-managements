import React from 'react';
import type { TeacherGettingDataType } from '../../utils/types/propes';
import { Link } from 'react-router-dom';

const TradeCard = ({ data }: { data: TeacherGettingDataType }) => {
    return (
        <Link to={`/teacher/${data?.name}`}>
            <div className="profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
                <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
                    <div className="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
                        <img src={data?.image_url} className='z-50 h-[200px] bg-white' />
                    </div>
                </div>
                <div className="headings *:text-center *:leading-4">
                    <p className="text-xl font-serif font-semibold text-[#434955]">{data?.name}</p>
                    <p className="text-sm font-semibold text-[#434955]">Subject: {data?.subject}</p>
                </div>
                <div className="w-full items-center justify-center flex">
                    <ul className="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
                        <li>
                            <svg id="phone" viewBox="0 0 24 24" className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" />
                            </svg>
                            <p>{data?.number}</p>
                        </li>
                        <li>
                            <svg className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} id="mail" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z" fill="#231f20" />
                                <path d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z" fill="#231f20" />
                            </svg>
                            <p>{data?.email}</p>
                        </li>
                    </ul>
                </div>
                <hr className="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
            </div>
        </Link>
    );
}

export default TradeCard;

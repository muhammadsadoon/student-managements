"use client"
import * as React from 'react';
import type { TableSearchType, TeacherGettingDataType } from '../../utils/types/propes';
import { useFetchSupabase } from '../../hooks/useFetch';
import TradeCard from '../trade-card/trade-card';



export default function SearchTeacherByStudent({ arr }: { arr: TeacherGettingDataType[] }) {
    console.log(arr)
    return (
        <div className='flex gap-3 flex-wrap'>
            {!arr ? "" : (arr?.map((item, index) => {
                // if (index === 0) {
                    return (
                        <div key={index} >
                            <TradeCard data={item}/>
                        </div>
                    )
                }
            )
            )}
        </div>
    );
}
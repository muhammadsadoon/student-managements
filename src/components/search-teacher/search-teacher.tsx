"use client"
import * as React from 'react';
import type { TableSearchType, TeacherGettingDataType } from '../../utils/types/propes';
import { useFetchSupabase } from '../../hooks/useFetch';
import TradeCard from '../trade-card/trade-card';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


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
"use client"
import type { TeacherGettingDataType } from '../../utils/types/propes';
import TradeCard from '../trade-card/trade-card';



export default function SearchTeacherByStudent({ arr }: { arr: TeacherGettingDataType[] }) {
    console.log(arr)
    return (
        <div className='flex gap-3 flex-wrap'>
            {!arr ? "" : (arr?.map((item, index) => {
                // if (index === 0) {
                return (
                    <div key={index} >
                        <TradeCard data={item} />
                    </div>
                )
            }
            )
            )}
        </div>
    );
}
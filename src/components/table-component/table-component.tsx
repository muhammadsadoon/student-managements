"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type { TableSearchType, TeacherGettingDataType } from '../../utils/types/propes';
import { useFetchSupabase } from '../../hooks/useFetch';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';



export default function TableComponent({ search }: TableSearchType) {
    const [arr, setArr] = React.useState<TeacherGettingDataType[]>([]);
    const [fetchingErr, setFetchError] = React.useState<boolean>(false);

    const getData = async () => {
        try {
            const { data, error }: any = await useFetchSupabase("teacher");
            setArr(data)
            if (error) {
                console.log("fetching error from supabase: ", error?.massage)
                throw "fetching error from supabase: " + error?.massage
            }
        } catch (err: any) {
            setFetchError(err)
        }
    }
    // const context = React.useContext(UserContext);
    const filturData: TeacherGettingDataType[] = arr.filter(teacher => {
        if (!search) return true;
        return teacher?.name?.toLowerCase().includes(search.toLowerCase())
    })

    React.useEffect(() => {
        getData()
    }, []);

    return (<>
        {!arr && (<div className='flex h-32 w-full items-center justify-center'>
            <Skeleton className='h-full w-full' />
        </div>)}
        {
            arr && <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Teacher Id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Number</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Subject</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { }
                        {filturData ? filturData.map((row) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                key={row?.name}
                            >
                                <TableCell component="th" scope="row">
                                    <Link
                                        to={`/teacher/${row?.name}`}
                                    >
                                        {row?.id}
                                    </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Link
                                        to={`/teacher/${row?.name}`}
                                    >
                                        {row?.name}
                                    </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Link
                                        to={`/teacher/${row?.name}`}
                                    >
                                        {row?.email}
                                    </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Link
                                        to={`/teacher/${row?.name}`}
                                    >
                                        0{row?.number}
                                    </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Link
                                        to={`/teacher/${row?.name}`}
                                    >
                                        {row?.gender ? "Male" : "Female"}
                                    </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Link
                                        to={`/teacher/${row?.name}`}
                                    >
                                        {row?.subject?.toUpperCase()}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        )) : (
                            fetchingErr && <h1 className='text-center w-full'>The Teacher is not currently assigned</h1>
                        )}
                    </TableBody>
                </Table>
            </TableContainer >
        }
    </>
    );
}
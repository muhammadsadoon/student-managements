import { useContext, useEffect, useState } from 'react'
import { MdNotificationsNone } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { UserContext } from '../../../utils/contextApi';
import TableComponent from '../../../components/table-component/table-component';
import SearchTeacherByStudent from '../../../components/search-teacher/search-teacher';
import type { TeacherGettingDataType } from '../../../utils/types/propes';
import { useFetchSupabase } from '../../../hooks/useFetch';
import DiaLogsFormsComponent from '../../../components/dialogs/dialogs';
import { logoutFromSupabase } from '../../../utils/supabase-client';

const TeacherScreen = () => {
    const [searchInput, setSearchInput] = useState("");
    const [arr, setArr] = useState<TeacherGettingDataType[]>([null]);
    const [showForm, setShowForm] = useState(false)
    const context = useContext(UserContext);

    const filturData: TeacherGettingDataType[] = arr?.filter(teacher => {
        return searchInput && teacher?.name?.toLowerCase().includes(searchInput?.toLowerCase())
    })

    const getData = async () => {
        const { data, error }: any = await useFetchSupabase("teacher");
        setArr(data)
        if (error) console.log("fetching error from supabase: ", error?.massage)
    }
    const handleShowForm = () => {
        setShowForm(showForm ? false : true)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        console.log(formJson);
        try{
            if(formJson.name?.trim().length !== 0){}
        }catch(err){
            console.log(err)
        }
    };


    useEffect(() => {
        getData();
    }, []);
    return (
        <div className='p-3 w-dvw'>
            <section className='h-20 w-full flex items-center justify-between'>
                {showForm && (<DiaLogsFormsComponent isOpen={showForm}>
                    <form onSubmit={handleSubmit} id="subscription-form">
                        <div className='flex items-start md:items-center md:flex-row flex-col justify-center my-2'>
                            <label htmlFor="name" className="w-1/4 text-lg font-semibold">
                                Name:
                            </label>
                            <input required type="name" className='w-full border rounded-md p-3' name='name' placeholder='please enter name' /><br />
                        </div>
                        <div className='flex items-start md:items-center md:flex-row flex-col justify-center my-2'>
                            <label htmlFor="name" className="w-1/4 text-lg font-semibold">
                                Email:
                            </label>
                            <input required type="name" className='w-full border rounded-md p-3' name='email' placeholder='please enter email' /><br />
                        </div>
                        <div className='flex items-start md:items-center md:flex-row flex-col justify-center my-2'>
                            <label htmlFor="name" className="w-1/4 text-lg font-semibold">
                                Number:
                            </label>
                            <input required type="name" className='w-full border rounded-md p-3' name='number' placeholder='please enter number' /><br />
                        </div>
                        <div className='flex items-start md:items-center md:flex-row flex-col justify-center my-2'>
                            <label htmlFor="name" className="w-1/4 text-lg font-semibold">
                                Subject:
                            </label>
                            <input required type="name" className='w-full border rounded-md p-3' name='subject' placeholder='please enter subject name' /><br />
                        </div>
                        <div className='flex items-start md:items-center md:flex-row flex-col justify-center my-2'>
                            <label htmlFor="name" className="w-1/4 text-lg font-semibold">
                                Image Url:
                            </label>
                            <input required type="name" className='w-full border rounded-md p-3' name='image_url' placeholder='please enter iamge url' /><br />
                        </div>
                        <div className='flex items-start md:items-center md:flex-row flex-col justify-center my-2'>
                            <label htmlFor="name" className="w-1/4 text-lg font-semibold">
                                Gender:
                            </label>
                            <select value={"true"} className='w-full border rounded-md p-3' name='gender'>
                                <option value="true">Male</option>
                                <option value="false">Female</option>
                            </select><br />
                        </div>
                        <button className='bg-sky-500 text-white p-2 rounded-md cursor-pointer'>
                            Add now
                        </button>
                    </form>
                </DiaLogsFormsComponent>)}
                {context?.isRoleAdminOrStudent == "Admin" && <div >
                    <button onClick={handleShowForm} className='p-2 bg-sky-500 text-white rounded-md'>Add teacher</button>
                </div>}
                <div className='flex justify-self-end items-center justify-center gap-2'>
                    <MdNotificationsNone className='text-3xl ' />
                    <button onClick={logoutFromSupabase} className='text-md px-4 cursor-pointer'>Logout</button>
                </div>
            </section>
            <section className='h-16 w-full bg-slate-100 gap-3 flex items-center'>
                <div className='w-[100px] flex justify-end'>
                    <FaSearch />
                </div>
                <input type="text" className='focus:outline-0 w-full' placeholder='seach Teacher Here...' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            </section>
            <section>
                {context?.isRoleAdminOrStudent == "Admin" && <TableComponent />}
                {filturData[0]?.name
                    ?
                    (<div className='flex gap-4'>
                        <SearchTeacherByStudent arr={filturData} />
                    </div>)
                    :
                    (
                        <div className='flex min-h-[70vh] w-full items-center justify-center '>
                            <h1 className='text-2xl'>This Teacher is not found</h1>
                        </div>
                    )
                }
            </section>
        </div>
    )
}

export default TeacherScreen

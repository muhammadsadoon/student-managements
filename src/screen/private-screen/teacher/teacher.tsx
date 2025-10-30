import { useContext, useEffect, useState } from 'react'
import { MdNotificationsNone } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { UserContext } from '../../../utils/contextApi';
import TableComponent from '../../../components/table-component/table-component';
import SearchTeacherByStudent from '../../../components/search-teacher/search-teacher';
import type { TeacherGettingDataType } from '../../../utils/types/propes';
import { useFetchSupabase, useInsertSupabase } from '../../../hooks/useFetch';
import DiaLogsFormsComponent from '../../../components/dialogs/dialogs';
import { logoutFromSupabase } from '../../../utils/supabase-client';
import type { FromDataTypeForSendFormToSupabase } from '../../../utils/types/checkAuthType';
import AlertBox from '../../../components/alert-box/alert-box';
import { useNavigate } from 'react-router-dom';

const TeacherScreen = () => {
    const [searchInput, setSearchInput] = useState("");
    const [arr, setArr] = useState<TeacherGettingDataType[]>([]);
    const [showForm, setShowForm] = useState(false)
    const [name,setName] = useState<String>("")
    const [email,setEmail] = useState<String>("")
    const [number,setNumber] = useState<String>("")
    const [image_url,setImage_url] = useState<String>("")
    const [subject,setSubject] = useState<String>("")
    const [gender,setGender] = useState<boolean>()
    const context = useContext(UserContext);

    const navigate = useNavigate();

    const filturData: TeacherGettingDataType[] = arr.filter(teacher => {
        if (!searchInput) return true;
        return teacher?.name?.toLowerCase().includes(searchInput.toLowerCase())
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
        try {
            const nameStr = String(name ?? "").trim();
            const emailStr = String(email ?? "").trim();
            const numberStr = String(number ?? "").trim();
            const subjectStr = String(subject ?? "").trim();
            const imageUrlStr = String(image_url ?? "").trim();
            const genderStr = String(gender ?? "").trim();

            const errors: string[] = [];

            if (!nameStr) errors.push("Name is required.");
            else if (nameStr.length < 8) errors.push("Name must be at least 8 characters.");

            if (!emailStr) errors.push("Email is required.");
            else if (!/^\S+@\S+\.\S+$/.test(emailStr)) errors.push("Email is not valid.");

            if (!numberStr) errors.push("Number is required.");
            else if (!/^\d{7,15}$/.test(numberStr)) errors.push("Number must be 7 to 15 digits.");

            if (!subjectStr) errors.push("Subject is required.");

            if (!imageUrlStr) {
                errors.push("Image URL is required.");
            } else {
                try {
                    // basic URL validation
                    new URL(imageUrlStr);
                } catch {
                    errors.push("Image URL is not a valid URL.");
                }
            }

            if (!(genderStr === "true" || genderStr === "false")) errors.push("Gender must be selected.");

            if (errors.length > 0) {
                AlertBox({
                    text: errors.join("\n"),
                    role: "Error",
                });
                return;
            }

            // Prepare payload
            const payload = {
                name: nameStr,
                email: emailStr,
                number: numberStr,
                subject: subjectStr,
                image_url: imageUrlStr,
                gender: genderStr === "true",
            };

            // send to backend (useFetchSupabase signature assumed to accept method and payload)
            useInsertSupabase("teacher", payload)
                .then((res: any) => {
                    const { error } = res || {};
                    if (error) {
                        AlertBox({ text: String(error?.message ?? error), role: "Error" });
                    } else {
                        AlertBox({ text: "Teacher added successfully.", role: 'Done' });
                        // reset form, close dialog and refresh data
                        (event.currentTarget as HTMLFormElement).reset();
                        setShowForm(false);
                        getData();
                        navigate("/");
                    }
                })
                .catch((err: any) => {
                    AlertBox({ text: String(err), role: "Error" });
                });
            
            window.location.reload();
        } catch (err: any) {
            console.log(err)
            AlertBox({
                text: String(err),
                role: 'Error',

            })
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
                            <input required type="text" value={name.toString()} onChange={(e)=> setName(e.target.value)} className='w-full border rounded-md p-3' name='name' placeholder='please enter name' /><br />
                        </div>
                        <div className='flex items-start md:items-center md:flex-row flex-col justify-center my-2'>
                            <label htmlFor="name" className="w-1/4 text-lg font-semibold">
                                Email:
                            </label>
                            <input required type="email" value={email.toString()} onChange={(e)=> setEmail(e.target.value)} className='w-full border rounded-md p-3' name='email' placeholder='please enter email' /><br />
                        </div>
                        <div className='flex items-start md:items-center md:flex-row flex-col justify-center my-2'>
                            <label htmlFor="name" className="w-1/4 text-lg font-semibold">
                                Number:
                            </label>
                            <input required type="number" value={number.toString()} onChange={(e)=> setNumber(e.target.value)} className='w-full border rounded-md p-3' name='number' placeholder='please enter number' /><br />
                        </div>
                        <div className='flex items-start md:items-center md:flex-row flex-col justify-center my-2'>
                            <label htmlFor="name" className="w-1/4 text-lg font-semibold">
                                Subject:
                            </label>
                            <input required type="text" value={subject.toString()} onChange={(e)=> setSubject(e.target.value)} className='w-full border rounded-md p-3' name='subject' placeholder='please enter subject name' /><br />
                        </div>
                        <div className='flex items-start md:items-center md:flex-row flex-col justify-center my-2'>
                            <label htmlFor="name" className="w-1/4 text-lg font-semibold">
                                Image Url:
                            </label>
                            <input required value={image_url.toString()} onChange={(e)=> setImage_url(e.target.value)} type="text" className='w-full border rounded-md p-3' name='image_url' placeholder='please enter iamge url' /><br />
                        </div>
                        <div className='flex items-start md:items-center md:flex-row flex-col justify-center my-2'>
                            <label htmlFor="name" className="w-1/4 text-lg font-semibold">
                                Gender:
                            </label>
                            <select 
                                value={gender?.toString()} 
                                onChange={(e) => setGender(e.target.value === "true")} 
                                className='w-full border rounded-md p-3' 
                                name='gender'
                                required
                            >
                                <option value="">Select Gender</option>
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
                {context?.isRoleAdminOrStudent == "Admin" && <TableComponent search={searchInput} />}
                {context?.isRoleAdminOrStudent == "Student" && ((filturData[0]?.name)
                    ?
                    (<div className='flex gap-4'>
                        <SearchTeacherByStudent arr={filturData} />
                    </div>)
                    :
                    (
                        <div className='flex min-h-[70vh] w-full items-center justify-center '>
                            <h1 className='text-2xl'>This Teacher is not found</h1>
                        </div>
                    ))
                }
            </section>
        </div>
    )

};

export default TeacherScreen

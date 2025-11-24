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
import AlertBox from '../../../components/alert-box/alert-box';
import { useNavigate } from 'react-router-dom';

const TeacherScreen = () => {
    const [searchInput, setSearchInput] = useState("");
    const [arr, setArr] = useState<TeacherGettingDataType[]>([]);
    const [showForm, setShowForm] = useState(false)
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [number, setNumber] = useState<string>("")
    const [image_url, setImage_url] = useState<string>("")
    const [subject, setSubject] = useState<string>("")
    const [gender, setGender] = useState<boolean | undefined>(undefined)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState<Record<string, string | undefined>>({})
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


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        try {
            const nameStr = (name ?? "").trim();
            const emailStr = (email ?? "").trim();
            const numberStr = (number ?? "").trim();
            const subjectStr = (subject ?? "").trim();
            const imageUrlStr = (image_url ?? "").trim();
            const genderStr = gender === undefined ? "" : String(gender);

            const errorsMap: Record<string, string> = {};

            if (!nameStr) errorsMap.name = "Name is required.";
            else if (nameStr.length < 8) errorsMap.name = "Name must be at least 8 characters.";

            if (!emailStr) errorsMap.email = "Email is required.";
            else if (!/^\S+@\S+\.\S+$/.test(emailStr)) errorsMap.email = "Email is not valid.";

            if (!numberStr) errorsMap.number = "Number is required.";
            else if (!/^\d{7,15}$/.test(numberStr)) errorsMap.number = "Number must be 7 to 15 digits.";

            if (!subjectStr) errorsMap.subject = "Subject is required.";

            if (!imageUrlStr) {
                errorsMap.image_url = "Image URL is required.";
            } else {
                try {
                    new URL(imageUrlStr);
                } catch {
                    errorsMap.image_url = "Image URL is not a valid URL.";
                }
            }

            if (!(genderStr === "true" || genderStr === "false")) errorsMap.gender = "Gender must be selected.";

            if (Object.keys(errorsMap).length > 0) {
                setErrors(errorsMap);
                AlertBox({
                    text: Object.values(errorsMap).join("\n"),
                    role: "Error",
                });
                setIsSubmitting(false);
                return;
            }

            const payload = {
                name: nameStr,
                email: emailStr,
                number: numberStr,
                subject: subjectStr,
                image_url: imageUrlStr,
                gender: genderStr === "true",
            };

            // Await insert so we don't reload/cancel request prematurely
            const res: any = await useInsertSupabase("teacher", payload);
            const { error } = res || {};
            if (error) {
                AlertBox({ text: String(error?.message ?? error), role: "Error" });
                setIsSubmitting(false);
                return;
            }

            AlertBox({ text: "Teacher added successfully.", role: 'Done' });
            // Reset controlled inputs
            setName("");
            setEmail("");
            setNumber("");
            setSubject("");
            setImage_url("");
            setGender(undefined);
            setShowForm(false);
            await getData();
        } catch (err: any) {
            console.error(err)
            AlertBox({ text: String(err), role: 'Error' })
        } finally {
            setIsSubmitting(false);
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
                        <div className='flex flex-col items-start md:items-start md:flex-row justify-center my-2'>
                            <label htmlFor="name" className="w-1/4 text-lg font-semibold">
                                Name:
                            </label>
                            <div className='w-full'>
                                <input type="text" value={name} onChange={(e)=> { setName(e.target.value); setErrors(prev => ({...prev, name: undefined})); }} className='w-full border rounded-md p-3' name='name' placeholder='please enter name' />
                                {errors.name && <p className='text-red-600 text-sm mt-1 pl-1'>{errors.name}</p>}
                            </div>
                        </div>
                        <div className='flex flex-col items-start md:items-start md:flex-row justify-center my-2'>
                            <label htmlFor="email" className="w-1/4 text-lg font-semibold">
                                Email:
                            </label>
                            <div className='w-full'>
                                <input type="email" value={email} onChange={(e)=> { setEmail(e.target.value); setErrors(prev => ({...prev, email: undefined})); }} className='w-full border rounded-md p-3' name='email' placeholder='please enter email' />
                                {errors.email && <p className='text-red-600 text-sm mt-1 pl-1'>{errors.email}</p>}
                            </div>
                        </div>
                        <div className='flex flex-col items-start md:items-start md:flex-row justify-center my-2'>
                            <label htmlFor="number" className="w-1/4 text-lg font-semibold">
                                Number:
                            </label>
                            <div className='w-full'>
                                <input type="text" value={number} onChange={(e)=> { setNumber(e.target.value); setErrors(prev => ({...prev, number: undefined})); }} className='w-full border rounded-md p-3' name='number' placeholder='please enter number' />
                                {errors.number && <p className='text-red-600 text-sm mt-1 pl-1'>{errors.number}</p>}
                            </div>
                        </div>
                        <div className='flex flex-col items-start md:items-start md:flex-row justify-center my-2'>
                            <label htmlFor="subject" className="w-1/4 text-lg font-semibold">
                                Subject:
                            </label>
                            <div className='w-full'>
                                <input type="text" value={subject} onChange={(e)=> { setSubject(e.target.value); setErrors(prev => ({...prev, subject: undefined})); }} className='w-full border rounded-md p-3' name='subject' placeholder='please enter subject name' />
                                {errors.subject && <p className='text-red-600 text-sm mt-1 pl-1'>{errors.subject}</p>}
                            </div>
                        </div>
                        <div className='flex flex-col items-start md:items-start md:flex-row justify-center my-2'>
                            <label htmlFor="image_url" className="w-1/4 text-lg font-semibold">
                                Image Url:
                            </label>
                            <div className='w-full'>
                                <input value={image_url} onChange={(e)=> { setImage_url(e.target.value); setErrors(prev => ({...prev, image_url: undefined})); }} type="text" className='w-full border rounded-md p-3' name='image_url' placeholder='please enter image url' />
                                {errors.image_url && <p className='text-red-600 text-sm mt-1 pl-1'>{errors.image_url}</p>}
                            </div>
                        </div>
                        <div className='flex flex-col items-start md:items-start md:flex-row justify-center my-2'>
                            <label htmlFor="gender" className="w-1/4 text-lg font-semibold">Gender:</label>
                            <div className='w-full'>
                                <select
                                    value={gender === undefined ? "" : String(gender)}
                                    onChange={(e) => { setGender(e.target.value === "true"); setErrors(prev => ({...prev, gender: undefined})); }}
                                    className='w-full border rounded-md p-3'
                                    name='gender'
                                >
                                    <option value="">Select Gender</option>
                                    <option value="true">Male</option>
                                    <option value="false">Female</option>
                                </select>
                                {errors.gender && <p className='text-red-600 text-sm mt-1 pl-1'>{errors.gender}</p>}
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`bg-sky-500 text-white p-2 rounded-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            {isSubmitting ? 'Adding...' : 'Add now'}
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

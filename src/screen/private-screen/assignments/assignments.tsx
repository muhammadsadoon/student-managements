import { useContext, useState } from 'react'
import { UserContext } from '../../../utils/contextApi'
import { MdNotificationsNone } from 'react-icons/md';
import { logoutFromSupabase } from '../../../utils/supabase-client';

const AssignmentsComponents = () => {
  const [assignments, setAssignments] = useState(null);
  const context = useContext(UserContext);


  return (
    <div className='w-full p-3'>
      <div className='flex justify-self-end items-center justify-center gap-2'>
        <MdNotificationsNone className='text-3xl ' />
        <button onClick={logoutFromSupabase} className='text-md px-4 cursor-pointer'>Logout</button>
      </div>
      <h2 className='text-2xl font-semibold'>Assignments: </h2>
      <div className='flex min-h-[60dvh] w-full items-center justify-center'>
        {!assignments && <h1 className='text-center text-4xl'>Not Assignments Yet!</h1>}
      </div>
    </div>
  )
}

export default AssignmentsComponents

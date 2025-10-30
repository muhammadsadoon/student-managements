import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'

const LoadingPage = () => {
  return (
    <div className='flex bg-green-950 h-dvh w-full items-center justify-center'>
        <CircularProgress color='primary'/>
    </div>
  )
}

export default LoadingPage

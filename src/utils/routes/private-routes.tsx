// import React from 'react'
import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../../screen/private-screen/home/home"
import NotFoundPageFromPrivate from "../../screen/private-screen/not-found-page-private/notFoundPageFromPrivate"
import SiderBarComponent from "../../components/side-bar/side-bar"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import TeacherScreen from "../../screen/private-screen/teacher/teacher"
import AssignmentsComponents from "../../screen/private-screen/assignments/assignments"
import TeacherSlot from "../../screen/private-screen/teacher-slot/teacher-slot"
import SettingProfile from "../../screen/private-screen/setting-profile/setting-profile"

const Theme = createTheme({
    palette: {
        primary: {
            light: '#dadada',
            main: '#ffffff00',
            dark: '#000000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#eee',
            main: '#eee',
            dark: '#eee',
            contrastText: '#eee',
        },
        
    },
});

const PrivateRoutes = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={Theme}>
                <SiderBarComponent >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/teacher" element={<TeacherScreen />} />
                        <Route path="/teacher/:teacher-slot" element={<TeacherSlot />} />
                        <Route path="/setting-profile" element={<SettingProfile />} />
                        <Route path="/assignments" element={<AssignmentsComponents />} />
                        <Route path="*" element={<NotFoundPageFromPrivate />} />
                    </Routes>
                </SiderBarComponent >
            </ThemeProvider>
        </React.Fragment>
    )
}

export default PrivateRoutes

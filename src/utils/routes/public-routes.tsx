// import React from 'react'

import { Route, Routes } from "react-router-dom"
import PublicHomeScreen from "../../screen/public-screen/public-home"
import React from "react"
import LoginScreen from "../../screen/public-screen/login/login"
import NotFoundPage from "../../screen/public-screen/not-found-page/not-found-page"
import SignUpScreen from "../../screen/public-screen/sign-up/sign-up"
const PublicRoutes = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<PublicHomeScreen />}></Route>
                <Route path="/login" element={<LoginScreen />}></Route>
                <Route path="/signup" element={<SignUpScreen />}></Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </React.Fragment>
    )
}

export default PublicRoutes

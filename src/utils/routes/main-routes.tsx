import React, { useEffect, useState, useContext } from "react"
// import PrivateRoutes from "./private-routes"
// import PublicRoutes from "./public-routes"
import PublicRoutes from "./public-routes";
import PrivateRoutes from "./private-routes";
import { supabase } from "../supabase-client";
import type { CheckAuthStateType } from "../types/checkAuthType";
import { Auth } from "../checkAuth";
import { UserContext } from "../contextApi";
import LoadingPage from "../../screen/loading";


const MainRoutes = () => {
  const [auth, setAuth] = useState<CheckAuthStateType>(false);
  const [loadingPage,setLoadingPage] = useState<Boolean>(true)
  const context = useContext(UserContext);
  // console.log(context)

  const fetchUserSession = async () => {
    const getAuth = Auth();
    if(!getAuth){
      const getSession = await supabase.auth.getSession();
      console.log(getSession.data?.session?.access_token);
      setAuth(getSession?.data?.session?.access_token)
      // console.log(supabase.storage)
    }else{
      setAuth(getAuth)
    }
  }
  useEffect(() => {
    fetchUserSession()
    console.log("auth: ", auth)
    setTimeout(() => {
      setLoadingPage(false)
    }, 2000);
  }, []);
  return (
    <React.Fragment>
      {
        loadingPage && <LoadingPage/>
      }
      {
        !loadingPage && ((auth) ?
          (<PrivateRoutes />)
          :
          (<PublicRoutes />))
      }
    </React.Fragment>
  )
}

export default MainRoutes;
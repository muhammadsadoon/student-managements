import { createContext, useState } from "react";
import type { GetChildrenTypeFromToParentComponent } from "./types/propes";
import { Auth } from "./checkAuth";
import type { CheckAuthRole } from "./types/checkAuthType";

export const UserContext = createContext<any>(null);

export const ContextApi = ({ children }: GetChildrenTypeFromToParentComponent) => {
    const getAuth = Auth();
    const [isRoleAdminOrStudent, setIsRoleAdminOrStudent] = useState<CheckAuthRole>("Admin");
    const [user, setUser] = useState({ title: "developer", salary: 13320, isUserAlready: getAuth });


    return (
        <UserContext.Provider value={{
            user,
            setUser,
            isRoleAdminOrStudent,
            setIsRoleAdminOrStudent
        }}>
            {children}
        </UserContext.Provider>
    )
}
import React, {useState} from "react";
import AuthContext from "./AuthContext";

const AuthContextProvider = ({children})=> {
    const [auth, setAuth] = useState(false)
    return(
            <AuthContext.Provider value={{auth:auth, setAuth:setAuth}}>
                {children}
            </AuthContext.Provider>
    )
}
export default AuthContextProvider

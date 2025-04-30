import React, {useState} from "react";
import AuthContext from "./AuthContext";

const AuthContextProvider = (props)=> {
    const [auth, setAuth] = useState(false)
    return(
        <div>
            <AuthContext.Provider value={{auth:auth, setAuth:setAuth}}>
                {props.children}
            </AuthContext.Provider>
        </div>
    )
}
export default AuthContextProvider

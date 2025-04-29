import React, {useState} from "react";
import AuthContext from "./AuthContext";

const AuthContextProvider = (props)=> {
    const [auth, setAuth] = useState(false)
    return(
        <div>
            <AuthContext.Provider value={{auth, setAuth}}>
                {props.children}
            </AuthContext.Provider>
        </div>
    )
}
export default AuthContextProvider

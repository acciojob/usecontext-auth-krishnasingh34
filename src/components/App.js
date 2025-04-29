
import React, { useContext } from "react";
import './../styles/App.css';
import { AuthContext } from "./AuthContext";

const App = () => {
  const {auth, setAuth} = useContext(AuthContext)
  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      {
        auth==true ? (
          <p>You are now authenticated, you can proceed</p>
        ) : (
          <p>You are not authenticated</p>
        )
      }
      <input type="checkbox" id="auth" onClick={()=> {
        setAuth(true)
      }}/>
      <label> I'm not a robot </label>
    </div>
  )
}

export default App

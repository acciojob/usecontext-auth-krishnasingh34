
import React, { useContext } from "react";
import './../styles/App.css';
import AuthContext from "../Context/AuthContext";

const App = () => {
  const {auth, setAuth} = useContext(AuthContext)
  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      {
        auth==true ? (
          <p className="authText">You are now authenticated, you can proceed</p>
        ) : (
          <p>you are not authenticated</p>
        )
      }
      <input type="checkbox" name="checkbox" onClick={()=> {
        setAuth(true)
      }}/>
      <label htmlFor="checkbox"> I'm not a robot </label>
    </div>
  )
}

export default App

import React, { useState } from "react";
const Login=()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const changeUsername=(event)=>{
        setUsername(event.target.value)
    }
    const changePassword=(event)=>{
        setPassword(event.target.value)
    }
    const Submit_=()=>{
        console.log(username);
        console.log(password);
    }
    return(
        <div>
            <input type="text" placeholder="Username" onChange={changeUsername}></input>
            <input type="password" placeholder="Password" onChange={changePassword}></input>
            <button onClick={Submit_}>Submit</button>
        </div>
    )
}
export default Login;
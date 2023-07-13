import React, { useState } from "react";
import axios from "axios";
const Signup=()=>{
    const [email,setEmail]=useState('')
    const [first,setFirst]=useState('')
    const [last,setLast]=useState('')
    const [password,setPassword]=useState('')
    const changeEmail=(event)=>{
        setEmail(event.target.value)
    }
    const changePassword=(event)=>{
        setPassword(event.target.value)
    }
    const changeFirst=(event)=>{
        setFirst(event.target.value)
    }
    const changeLast=(event)=>{
        setLast(event.target.value)
    }
    const Submit_=(event)=>{
        event.preventDefault()
        const newUser = {
            first_name: first,
            last_name: last,
            email: email,
            password: password
        }

        register(newUser).then(res => {
            console.log("done")
        })
    }
    const register = newUser => {
        return axios
            .post("https://localhost:5000/users/register", {
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                email: newUser.email,
                password: newUser.password
            })
            .then(response => {
                console.log("Registered")
            })
    }
    return(
        <div>
            <input type="text" placeholder="email" onChange={changeEmail}></input>
            <input type="password" placeholder="Password" onChange={changePassword}></input>
            <input type="text" placeholder="First Name" onChange={changeFirst}></input>
            <input type="text" placeholder="Last Name" onChange={changeLast}></input>
            <button onClick={Submit_}>Submit</button>
        </div>
    )
}
export default Signup;
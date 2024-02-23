import React, { useState } from 'react'
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "../Firebase"

const auth = getAuth(app)

const SignUp = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    //authorize the user
    const cretaeUser = () =>{
        createUserWithEmailAndPassword(auth , email , password)
        .then((value)=>{
            console.log(value)
        })

    } 
    

  return (
    <div>
        <h2>Sign In Page</h2>
        <div>
            <label htmlFor="">Email:</label>
            <input type="text" placeholder='enter your email here'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            />
            <label htmlFor="">Password:</label>
            <input type="password" placeholder='enter your password here'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
        </div>
        <div>
            <button onClick={cretaeUser}>Sign Up</button>
        </div>
    </div>
  )
}

export default SignUp




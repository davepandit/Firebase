import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import {app} from "../Firebase"
const auth= getAuth(app)

const SignIn = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


    //sign in feature
    const signIn = () =>{
        signInWithEmailAndPassword(auth , email , password)
        .then((value)=>{
            alert("signed in")
        })
        .catch((error)=>{
            alert("error")
        })
    }
  return (
    <div>
        <h2>Sign In Page</h2>
        <div>
            <label htmlFor="">Email:</label>
            <input type="text" 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            />
            <label htmlFor="">password</label>
            <input type="password" 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
        </div>
        <div>
            <button onClick={signIn}>Sign In</button>
        </div>

    </div>
  )
}

export default SignIn
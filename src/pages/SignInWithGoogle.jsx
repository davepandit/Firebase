import React from 'react'
import { GoogleAuthProvider } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { signInWithPopup } from 'firebase/auth'
import {app} from "../Firebase"

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export const SignInWithGoogle = () => {

    //sign in with google
    const signInWithGoogle = () =>{
        signInWithPopup(auth , provider)
        .then((value)=>{
            console.log("Login with Google successful")
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div>
        <div>
            <h2>Sign In with Google</h2>
            <button onClick={signInWithGoogle}>Sign In</button>
        </div>
    </div>
  )
}

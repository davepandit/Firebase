import { useState } from 'react'
import {app} from "./Firebase"
import {getDatabase , ref , set} from "firebase/database"
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import SignUp from './pages/SignUp';

//creating an instance for 

// const db = getDatabase(app)
const auth = getAuth(app);



function App() {

  //set data into the database

  // const putData = () => {
  //   set(ref(db , 'users'),{
  //     id:1,
  //     name:"Dave",
  //     age:12,
  //   });

  // };


  //authentication
  // const authorizeUser = () =>{
  //   createUserWithEmailAndPassword(auth, "dave@gmail.com", "hi_there_dave_here")
  //   .then((value)=>{
  //     console.log(value)
  //   })
  // }


  return (
    <>
     <h1>Firebase App</h1>
     <SignUp/>

     {/* <button onClick={authorizeUser}>sign up</button> */}
    </>
  )
}

export default App

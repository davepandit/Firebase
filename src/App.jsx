import { useState , useEffect} from 'react'
import {app} from "./Firebase"
import {getDatabase , ref , set} from "firebase/database"
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { SignInWithGoogle } from './pages/SignInWithGoogle';
import { onAuthStateChanged } from 'firebase/auth';
import LogOut from './pages/LogOut';

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



  //useState for checking the Auth status
  const [user , setUser]=useState(null)

  //checking the auth status of the user
  useEffect(()=>{
    onAuthStateChanged(auth , (user)=>{
      if(user){
        setUser(user)
      }
      else{
        setUser(null)
      }
    })
  },[])

  if(user){
    return(
      <div>
        <h2>Hey {user.email}</h2>
        <LogOut user={user} setUser={setUser}/>

      </div>
    )

  }

  else{
    return (
      <>
       <h1>Firebase App</h1>
       <SignUp/>
       <SignIn/>
       <SignInWithGoogle/>
  
       {/* <button onClick={authorizeUser}>sign up</button> */}
      </>
    )
  }
    
  }


  

export default App

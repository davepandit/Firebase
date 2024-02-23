
import React from 'react'

const LogOut = ({user,setUser}) => {
    //change state
    const changeState = () =>{
        setUser(null)
        
    }

  return (
    <div>
        <button onClick={changeState}>Logout</button>
    </div>
  )
}

export default LogOut
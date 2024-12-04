import React, { useState } from 'react'

function Forms() {

    let [fullName, setfullName] = useState("Sooraj")

    let nameHandler = (event)=>{
        console.log(event.target.value);
        setfullName(event.target.value)
        

    }
  return (
    <div>
       <form action=""> 
        <label htmlFor="userName"> Full Name :- </label>
        <input type="text"placeholder='input here' value={fullName} onChange={nameHandler} id='userName'/>
        <button>Submit </button>
        </form>
    </div>
  )
}

export default Forms
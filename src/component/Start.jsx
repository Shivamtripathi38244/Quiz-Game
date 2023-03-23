import React, { useRef } from 'react'

export default function Start({setusername}) {
   const inputref= useRef();
    const handleclick=()=>{
       inputref.current.value&&setusername(inputref.current.value);
    }
  return (
    
   <>
  
    <div className='Start'>
    <h1 className='head'>App Ban Sakte Ha Agle Crorepati </h1>
       <div className='user'>
       <input type="text" placeholder='Enter Your Name' className='Name'  ref={inputref}/>
        <button className='Btn' onClick={handleclick}>Start</button>
       </div>
    </div></>
  )
}

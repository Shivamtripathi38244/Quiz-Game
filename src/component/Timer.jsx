import { useEffect, useState } from 'react'

export default function Timer({setime,questions}) {
    const [timer,settimer]=useState(30);
  
  
    useEffect(()=>{
        if(timer===0)return setime(true);
const interval=setInterval(()=>{
settimer(prev=>prev-1);
},1000);
return ()=>clearInterval(interval);
    },[setime,timer]);


useEffect(()=>{
    settimer(30)
},[questions]);

  return timer;
}


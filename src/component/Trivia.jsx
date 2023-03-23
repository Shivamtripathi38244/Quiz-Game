import { useEffect, useState } from "react"
import useSound from "use-sound";
import play from '../assets/play.mp3';
import correct from '../assets/correct.mp3';
import wrong from '../assets/wrong.mp3';


export default function Trivia({data,setime,setquestions,questions})
 {     const [que,setque]=useState(null);
     const [selectans,setselectans]=useState(null);
     const [Classname,setClassname]=useState("answer");
     const [letsplay]=useSound(play);
     const [correctans]=useSound(correct);
     const [wronganswer]=useSound(wrong);


useEffect(()=>{
  letsplay();
},[letsplay]);

     useEffect(()=>{
        setque(data[questions-1]);
  },[data,questions]);

  const delay=(duration,callback)=>{
    setTimeout(() => {
        callback();
    }, duration);
  }
     const handleclick=(a)=>{
      setselectans(a);
      setClassname("answer active")
      delay(3000,()=>setClassname(a.correct?"answer correct":"answer wrong"));

      delay(5000,()=>{
   if(a.correct){
    correctans();
    delay(2000,()=>{
      setquestions((prev) => prev + 1);
    setselectans(null);
    })
   
   }
   
   else{
    wronganswer();
    delay(2000,()=>{
      setime(true);
    })
   }
      }
      )
     }
  
  
  return (
   
    <div className="trivia">
        <div className="question">{que?.question}</div>
        <div className="answers ">
        {que?.answers.map((a)=>(
            <div className={selectans ===a ? Classname:"answer"} onClick={()=>handleclick(a)}>{a.text}</div>
      ))}
       
        </div>
    </div>
  )
}


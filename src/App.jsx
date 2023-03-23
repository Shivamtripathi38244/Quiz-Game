import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Trivia from './component/Trivia';
import Timer from './component/Timer';
import Start from './component/Start';

function App() {
  const [questions,setquestions]=useState(1);
  const [time,setime]=useState(false);
  const [earned,setearned]=useState("$0");
  const [username,setusername]=useState(null);

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];


  const moneypyramid=useMemo(()=>[
    { id:1,aount:"$ 100"},
    { id:2,aount:"$ 200"},
    { id:3,aount:"$ 300"},
    { id:4,aount:"$ 400"},
    { id:5,aount:"$ 500"},
    { id:6,aount:"$ 600"},
    { id:7,aount:"$ 700"},
    { id:8,aount:"$ 800"},
    { id:9,aount:"$ 900"},
    { id:10,aount:"$ 1000"},
    { id:11,aount:"$ 1100"},
    { id:12,aount:"$ 1200"},
    { id:13,aount:"$ 12000"},
    { id:14,aount:"$ 200000"},
    { id:15,aount:"$ 100000"},
  ].reverse(),[])
  useEffect(()=>{
    questions > 1 && 
    setearned(moneypyramid.find((m)=> m.id ===questions-1).aount);
  },[moneypyramid,questions]);
  return (
    <div className="app">
     {username?(
      <>
       <div className="main">
        {time ?<h1 className='endtext'>You earned:{earned}</h1>:
        <>
        (
        <div className='top'>
          <div className='timer'><Timer setime={setime} questions={questions}/></div>
        </div>
        <div className='bottom'><Trivia data={data} setime={setime} setquestions={setquestions} questions={questions}/></div>)</>
}
      </div>
      <div className="pyramid">
    
      <ul className='money-list'>
            {moneypyramid.map((m)=>(
             <li className={questions===m.id?'moneylistitem active':'moneylistitem '} >
               <span className='moneylistitemnumber'>{m.id}     </  span>
                     <span className='moneylistamount'>{m.aount}</span>
              </li>
    ))}
     </ul>
   
      </div></>
     ):<Start setusername={setusername}/>}
     
  
 
    </div>
  );
}

export default App;

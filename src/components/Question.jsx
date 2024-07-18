import React, { useState } from 'react'
import "./Question.css"
import Options from './Options.jsx';
function Question(props) {
  // console.log(props);
  // let ans="";
  // let [ansArray,setAnsArray]=useState(Array(props.maxQns).fill("0"));
  // if(document.getElementById("option-a"))
  // {
  //   if(ansArray[props.qNo-1]=="a"){
  //     document.getElementById("option-a").checked=true;
  //   }else if(ansArray[props.qNo-1]=="b"){
  //     document.getElementById("option-b").checked=true;
  //   }else if(ansArray[props.qNo-1]=="c"){
  //     document.getElementById("option-c").checked=true;
  //   }
  // }
  // let [ansList,setAnsList]=useState(Array(props.maxQns).fill(""));
  //----------Question and Option List--------------------------
  const qns_opns=[
    {
      qn:"Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ?",
      a:"10",
      b:"20",
      c:"30"
    },
    {
      qn:"Bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb ?",
      a:"30",
      b:"40",
      c:"50"
    },
    {
      qn:"Cccccccccccccccccccccccccccccccccc ?",
      a:"50",
      b:"60",
      c:"40"
    },
    {
      qn:"Ddddddddddddddddddddddddddddddddd ?",
      a:"80",
      b:"0",
      c:"100"
    },
    {
      qn:"Eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee____",
      a:"a",
      b:"b",
      c:"both"
    },
    {
      qn:"Fffffffffffffffffffffffffffff ?",
      a:"A2",
      b:"B2",
      c:"C2"
    }
  ];
//-----------------Event Handler-----------------------
function nextQn(ansList){
  console.log(ansList)
  // setAnsArray(ansList);
  props.nextQn();
}
//-----------------HTML--------------------------------
  return (
    <div className="qns-opns">
      <div className='qn'>
        <p>{props.qNo}. {qns_opns[props.qNo-1].qn}</p>
      </div>
      <Options maxQns={props.maxQns} qNo={props.qNo} opnA={qns_opns[props.qNo-1].a} opnB={qns_opns[props.qNo-1].b} opnC={qns_opns[props.qNo-1].c} onSave={nextQn}/>
    </div>
  )
}


export default Question
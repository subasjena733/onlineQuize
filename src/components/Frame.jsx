import React, { useState } from 'react'
import "./Frame.css"
import Question from "./Question.jsx"

function Frame() {

//---------------Initializatin and declaratin-----------------------
    const maxNoOfQns=5;
    const [qnNo,setQnNo]=useState(1);
    let ansStatus=[];
    for(let i=1;i<=maxNoOfQns;i++){
        ansStatus.push(<button className="qn-no" onClick={qnButtonClickHandler} key={`q${i}`}>{i}</button>);
    };
    // console.log(ansStatus);
    function resetOptions(){
        // console.log(document.getElementById("option-a"));
        // console.log(document.getElementById("option-b"));
        // console.log(document.getElementById("option-c"));
        document.getElementById("option-a").checked=false;
        document.getElementById("option-b").checked=false;
        document.getElementById("option-c").checked=false;
    }
    function nextQn(){
        if(qnNo==maxNoOfQns)
        {
            setQnNo(1);
        }
        if(qnNo<maxNoOfQns){
            // console.log(parseInt(qnNo)+1);
            setQnNo(qnNo+1);
        }
        resetOptions();
    }
//-------------------Event Handler--------------------------------
    function qnButtonClickHandler(event){
        // console.log(event.target.innerText);
        setQnNo(parseInt(event.target.innerText))
    }
    function prevButtonClickHandler(){
        if(qnNo>1)
        {
            setQnNo(qnNo-1);
        }
        if(qnNo==1){
            setQnNo(maxNoOfQns);
        }
        resetOptions();
    }
    function nextButtonClickHandler(){
        if(qnNo==maxNoOfQns)
        {
            setQnNo(1);
        }
        if(qnNo<maxNoOfQns){
            // console.log(parseInt(qnNo)+1);
            setQnNo(qnNo+1);
        }
        resetOptions();
    }
//--------------------HTML-------------------------------------
  return (
    <div className='frame'>
        <div className='qnStatus'>{ansStatus}</div>
        <Question qNo={qnNo} maxQns={maxNoOfQns} nextQn={nextQn}/>
        <div className="prev-next-button-container">   
            <div className='prev-next-button'>
                <button className='prev-button' onClick={prevButtonClickHandler}>Prev</button>
                <button className='next-button' onClick={nextButtonClickHandler}>Next</button>
            </div>
        </div>
        <div className='submit-button-container'>
            <button className='submit-button'>Finish and Submit</button>
        </div>    
    </div>
  )
}
export default Frame
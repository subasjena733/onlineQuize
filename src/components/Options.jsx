import React, { useState } from 'react'
import "./Options.css"

function Options(props) {
  // console.log(props);
  let [ansList,setAnsList]=useState(Array(props.maxQns).fill("0"));
  let ans=ansList[props.qNo-1];
  //----------------Event Handler---------------------
  function noteOption(event){
    // console.log(event);
    if(event.target.id=="option-a"){
      if(event.target.checked){
        ans="a";
      }else{
        ans="0";
      }
    }
    if(event.target.id=="option-b"){
      if(event.target.checked){
        ans="b";
        event.target.checked=true;
      }else{
        ans="0";
      }
    }
    if(event.target.id=="option-c"){
      if(event.target.checked){
        ans="c";
        event.target.checked=true;
      }else{
        ans="0";
      }
    }
  }
  function saveAns(){
    ansList[props.qNo-1]=ans;
    setAnsList(ansList);
    // console.log(ansList);
    props.onSave(ansList);
  }
  //----------------HTML------------------------------
  return (
    <div className='opn'>
      <div className='opn-a'>
        <input type="radio" name='option' id='option-a'  onClick={noteOption}/>
        <label htmlFor="" className='opn-a-content'>{props.opnA}</label>
      </div>
      <div className="opn-b">
        <input type="radio" name='option' id='option-b'  onClick={noteOption}/>
        <label htmlFor="">{props.opnB}</label>
      </div>
      <div className="opn-c">
        <input type="radio" name='option' id='option-c'  onClick={noteOption}/>
        <label htmlFor="">{props.opnC}</label>
      </div>
      <div className="save-clear-button">
        <button className='save-button' onClick={saveAns} >Save</button>
        <button className='clear-button'>Clear</button>
      </div>
    </div>
  )
}
export default Options
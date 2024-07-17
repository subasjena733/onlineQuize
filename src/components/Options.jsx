import React from 'react'
import "./Options.css"

function Options() {
  return (
    <div className='options'>
        <input type="radio" name='option' id='option-a'/>
        <label htmlFor="option-a">Option A</label>
        <br />
        <br />
        <input type="radio" name='option' id='option-b' />
        <label htmlFor="option-b">Option B</label>
        <br />
        <br />
        <input type="radio" name='option' id='option-c' />
        <label htmlFor="option-c">Option C</label>
        <br />
        <br />
        <br />
        <button className='save-button'>Save</button>
        <button className='clear-button'>Clear</button>
    </div>
  )
}

export default Options
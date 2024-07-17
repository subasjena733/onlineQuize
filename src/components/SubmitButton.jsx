import React from 'react'
import "./SubmitButton.css"

function SubmitButton() {
  return (
    <>
        <div className='button-group'>
            <div className='prev-next-button'>
                <button className='prev-button'>Prev</button>
                <button>Next</button>
            </div>
            <br />
        </div>
        <div className='submit-button-container'>
            <button className='submit-button'>Submit & Finish</button>
        </div>
    </>
  )
}

export default SubmitButton
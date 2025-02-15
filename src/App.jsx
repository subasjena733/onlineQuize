import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question from './components/Question.jsx'
import Options from './components/Options.jsx'
import SubmitButton from './components/SubmitButton.jsx'
import Frame from './components/Frame.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='title'>Online Quize</h1>
      <br /><br />
      <Frame/>
    </>
  )
}

export default App

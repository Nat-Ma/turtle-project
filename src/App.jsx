import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Questionary from './questionary/Questionary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Questionary />

    </div>
  )
}

export default App

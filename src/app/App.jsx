import { useState } from 'react'
import Questionary from '../components/Questionary'

// import '/src/assets/stylesheets/App.css'
import Game from "/src/components/Game.jsx"

export default function App() {
  const [questionary, setQuestionary] = useState(true)
  // function endQuestionary() {
  // }
  return (
    <div className="App">
      {/* <Questionary questionary={endQuestionary} /> */}
      {questionary && <Game key="2193890"/>}
    </div>
  )
}

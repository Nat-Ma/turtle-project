import { useState } from 'react'
import Questionary from '../components/Questionary'

//import '/src/assets/stylesheets/App.css'
// import Game from "/src/components/Game.jsx"

export default function App() {
  const [questionary, setQuestionary] = useState(false)
  // function endQuestionary() {
  // }
  return (
    <div className="App">
      <Questionary />
      {/* <Questionary questionary={endQuestionary} /> */}
      {questionary && <Game key="asdasdasd"/>}
    </div>
  )
}

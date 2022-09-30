import React, { useState } from 'react';
import Questionary from '../components/Questionary';
import Game from "../components/Game";

// import '/src/assets/stylesheets/App.css'
//import Game from "/src/components/Game.jsx"

export default function App() {
  const [questionary, setQuestionary] = useState(true)

  return (
    <div className="App">
      {questionary && <Questionary setQuestionary={setQuestionary} />}
      {!questionary && <Game key="2193890"/>}
    </div>
  )
}

import { useState } from 'react'
import Questionary from '../components/Questionary'

//import '/src/assets/stylesheets/App.css'
import Game from "/src/components/Game.jsx"

export default function App() {
  return (
    <div className="App">
      <Questionary />
      <Game />
    </div>
  )
}
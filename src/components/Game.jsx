import Turty from "/src/components/Turty";
import { useState, useEffect } from "react"
import garbageData from "../assets/garbageData.json"
import Garbage from "./Garbage"

export default function Game() {
  const [turty, setTurty] = useState({
    col: window.innerWidth/11,
    positionX: window.innerWidth/2 - (window.innerWidth/11/2),
    lifepoints: 1,
  })

  const [timer, setTimer] = useState(3)
  const [counter, setCounter] = useState(0)
  const [multiplier, setMultiplier] = useState(1)
  const [garbage, setGarbage] = useState([] || totalGarbage())

  useEffect(() => {
    const handleKeyUp = (e) => {
      e.key === "ArrowRight" &&
      turty.positionX + turty.col*2 <= window.innerWidth &&
      setTurty((prev) => ({...prev, positionX: (turty.positionX + turty.col)})) ||
      e.key === "ArrowLeft" &&
      turty.positionX >= turty.col &&
      setTurty((prev) => ({...prev, positionX: (turty.positionX - turty.col)}))
    };
    window.document.addEventListener('keyup', handleKeyUp);

    return () => {
      window.document.removeEventListener('keyup', handleKeyUp);
    }
  }, [turty.positionX])


  useEffect(() => {
    const moveRubbish = () => {
      const updateRubbish = garbage.map(prev => ({...prev, positionY: prev.positionY + 100}));
      setGarbage(updateRubbish)
      setGarbage(prev => [...prev, ...totalGarbage()]);
      setMultiplier(prev => prev*1.1)
      setTimer(prev => prev + 1)
      }

    const interval = window.setInterval(moveRubbish, 1000);

    console.log("execute moveRubbish")

    console.log(garbage, "multiplier", multiplier, "counter", counter)
    return () => {
      window.clearInterval(interval);
    }
  }, [garbage])


  function randomUrl() {
    return garbageData.garbage[Math.floor(Math.random()* 5)]
  }

  function randomizeX() {
    // randomize a free column (an X position not already occupied)
    // const occupied = garbage.some(element => element.positionX)
    // console.log(occupied)
    return Math.floor(Math.random() * 11) * turty.col;
  }

  // function randomizeY() {
  //   return Math.floor(Math.random() * -200)
  // }

  function genGarbage() {
    return {
      src: randomUrl(),
      id: counter,
      key: counter,
      positionX: randomizeX(),
      positionY: -200
    }
  }

  function totalGarbage() {
      const garbageArr = []
      for (let i = 0; i < Math.floor(multiplier); i++) {
        setCounter(prev => prev +1)
        garbageArr.push(genGarbage());
      }
      return garbageArr
  }

  const garbageElements = garbage.map(gar => <Garbage id={gar.id} url={gar.src} position={[gar.positionX, gar.positionY]} width={turty.col}/>)
  // const garbageElements = garbage.map(gar => <Garbage id={gar.id} key={gar.key} url={gar.src} position={[gar.positionX, gar.positionY]} width={turty.col}/>)

  return (
    <div className="game-environment">
      {garbageElements}
      <Turty position={turty.positionX} width={turty.col}/>
    </div>
  )
}

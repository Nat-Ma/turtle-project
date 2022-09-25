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
  const [multiplier, setMultiplier] = useState(1)
  const [garbage, setGarbage] = useState(totalGarbage())

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
      setGarbage(updateRubbish);
      setMultiplier(prev => prev*2)
      setTimer(prev => prev + 1)
      setGarbage(prev => ([...prev, genGarbage(timer)]))
    }
    const interval = window.setInterval(moveRubbish, 1000);

    console.log(garbage, multiplier)
    return () => {
      window.clearInterval(interval);
    }
  }, [garbage])

  function randomUrl() {
    return garbageData.garbage[Math.floor(Math.random()* 5)]
  }

  function randomizeX() {
    return Math.floor(Math.random() * window.innerWidth)
  }

  function randomizeY() {
    return Math.floor(Math.random() * -200)
  }

  function genGarbage(i) {
    return {
      src: randomUrl(),
      id: i,
      key: i,
      positionX: randomizeX(),
      positionY: randomizeY() -100
    }
  }

  // function moreGarbage(multiplier) {
  //   for (let i = multiplier; i < multiplier; i++) {
  //     return {
  //       src: randomUrl(),
  //       id: i,
  //       key: i,
  //       positionX: randomizeX(),
  //       positionY: randomizeY()
  //     }
  //   }
  // }

  function totalGarbage(multiplier) {
    const garbageArr = []
    for (let i = 0; i < multiplier; i++) {
      garbageArr.push(genGarbage(i));
    }
    return garbageArr
  }

  const garbageElements = garbage.map(gar => <Garbage id={gar.id} url={gar.src} position={[gar.positionX, gar.positionY]} width={turty.col}/>)

  return (
    <div className="game-environment">
      {garbageElements}
      <Turty position={turty.positionX} width={turty.col}/>
    </div>
  )
}

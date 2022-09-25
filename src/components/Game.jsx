import Turty from "/src/components/Turty";
import { useState, useEffect } from "react"
import garbageData from "../assets/garbageData.json"
import Garbage from "./Garbage"

// TODO: add multiplier state that increases garbage items based on timer

export default function Game() {
  const [turty, setTurty] = useState({
    col: window.innerWidth/11,
    positionX: window.innerWidth/2 - (window.innerWidth/11/2),
    lifepoints: 10,
  })

  // const [timer, setTimer] = useState(30)
  // const [multiplier, setMultiplier] = useState(1.0)

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
    }
    const interval = window.setInterval(moveRubbish, 500);
    garbage.some(trash => {
      if (trash.positionY > 500 && trash.positionX === turty.positionX) {
        console.log("AYYY")
      }
    })

    // const gameOver = garbage.some(trash => {
    //   if (trash.positionY === 500) {
    //     console.log(trash.positionY)
    //     console.log('YAAAAYY')
    //   }
    // })

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
    return Math.floor(Math.random() * -2500)
  }

  function genGarbage(i) {
    return {
      src: randomUrl(),
      id: i,
      key: i,
      positionX: randomizeX(),
      positionY: randomizeY()
    }
  }

  function totalGarbage() {
    const garbageArr = []
    for (let i = 0; i < 2; i++) {
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

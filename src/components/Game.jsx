import Turty from "/src/components/Turty"

export default function Game() {
  // const [turty, setTurty] = useState({
  //   positionX: 0, //set default position to middle of screen
  //   lifepoints: 10
  // })
  window.addEventListener("keypress")
  function moveTurty(e) {
    console.log(e)
  }

  return (
    <div onKeyPress={(e) => moveTurty(e)} className="game-environment">
      <Turty />
    </div>
  )
}

// {garbageElements}
// <Turty position={positionX}/>

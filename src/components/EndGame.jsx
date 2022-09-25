export default function EndGame(props) {
  const styles = {
    backgroundColor: props.gameover ? "black" : "white"
  }

  return (
      <div className="game-over" style={styles}>
        <p>Around the world, nearly a million plastic beverage bottles are sold every minute. More than 40 percent of plastic is used just once, then tossed. 9 out of 10 plastic waste you produce ends up in nature.</p>
        <h1 className="game-over-header">OUR DECISIONS MATTER!</h1>
      </div>
  )
}

export default function Turty(props) {
  const styles = {
    left: props.position[0],
    width: props.width
  }

  return (
    <img className="turty" style={styles} src="src/assets/imgs/turty.svg" alt="turty" />
  )
}

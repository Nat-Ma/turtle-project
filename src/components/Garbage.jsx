export default function Garbage(props) {
  const styles = {
    left: props.position[0],
    width: props.width,
    top: props.position[1],
  }

  return (
    <img className="garbage" style={styles} src={props.url} alt="garbage_pic" />
  )
}

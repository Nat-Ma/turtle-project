export default function Question(props) {
  const questions = ["question1","question2","question3"];
  return (
    <div>
      <h2>{questions[props.index]} index: {props.index}</h2>
    </div>
  )
}

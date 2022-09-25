export default function Answer(props) {

  const answers = [<div> </div>, <div>GOTHA</div>, <div>GOTHAAAAAAAAAAAAAA</div>];

  return (
    <div>
      <h2>{answers[props.index]} index: {props.index}</h2>
    </div>
  )
}

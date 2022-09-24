export default function Question(props) {

  const questions = ["How many plastic bottle/cups do you use daily?",
    "How many shopping bags do you get per day?",
    "How many cigarette do you smoke per day?",
    "Do you use wet wipes?",
    "Do you use biodegradable cosmetics?",
    "How many takeaways in a week do you order on an average?",
    "Do you prefer synthetic clothing?"];

  return (
    <div>
      <h2>{questions[props.index]} index: {props.index}</h2>
    </div>
  )
}

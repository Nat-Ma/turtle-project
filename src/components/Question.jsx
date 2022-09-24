import { useState } from 'react';


export default function Question() {


  const questions = ["How many plastic bottle/cups do you use daily?",
    "How many shopping bags do you get per day?",
    "How many cigarette do you smoke per day?",
    "Do you use wet wipes?",
    "Do you use biodegradable cosmetics?",
    "How many takeaways in a week do you order on an average?",
    "Do you prefer synthetic clothing?"];
    
  let i = 0;
  const [index, setIndex] = useState(0);

  return (
    <div>
      <h2>{questions[index]}</h2>

      <button onClick={() => setIndex(index + 1)}>
        Click me
      </button>
    </div>
  )
}

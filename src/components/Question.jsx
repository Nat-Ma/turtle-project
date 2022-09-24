import { useState } from 'react';


export default function Question() {


  const questions = ["question1","question2","question3"];
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

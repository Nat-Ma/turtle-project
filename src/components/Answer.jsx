import { useState } from 'react';


export default function Answer() {


  const answers = [<input type="text"></input>, <div>GOTHA</div>, <div>GOTHAAAAAAAAAAAAAA</div>];

  let i = 0;
  const [index, setIndex] = useState(0);

  return (
    <div>
      <form>{answers[index]}</form>

      <button onClick={() => setIndex(index + 1)}>
        Click me
      </button>
    </div>
  )
}

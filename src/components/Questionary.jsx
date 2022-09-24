import Question from './Question'
import { useState } from 'react';


const Questionary = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='container'>
      <div className='container__questions'>
        <div id="logo">
        </div>
        <div className='question'>
          <Question index={index} />
        </div>
        <ul className='answers'>
          <li className='answer'>Answer Option 1</li>
          <li className='answer'>Answer Option 2</li>
          <li className='answer'>Answer Option 3</li>
          <li className='answer'>Answer Option 4</li>
        </ul>
        <button className="submit"  onClick={() => {
          setIndex(index + 1)
          }}>next question</button>
      </div>
    </div>
  )
}

export default Questionary

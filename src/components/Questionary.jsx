import Answer from './Answer'
import Question from './Question'
import { useState } from 'react';


const Questionary = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='container'>
      <div className='container__questions'>

        <div className='question'>
          <Question index={index} />
        </div>
        <ul className='answers'>
          <Answer />
        </ul>
        <button className="submit"  onClick={() => {
          setIndex(index + 1)
        }}>next question</button>
      </div>
    </div>
  )
}

export default Questionary

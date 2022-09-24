import Question from './Question'


const Questionary = () => {

  return (
    <div className='container'>
      <div className='container__questions'>

        <div className='question'>
          <Question />
        </div>

        <ul className='answers'>
          <li className='answer'>Answer Option 1</li>
          <li className='answer'>Answer Option 2</li>
          <li className='answer'>Answer Option 3</li>
          <li className='answer'>Answer Option 4</li>
        </ul>

        <button className="submit" ></button>
      </div>
    </div>

  )
}

export default Questionary

import Answer from './Answer'
import Question from './Question'


const Questionary = () => {

  return (
    <div className='container'>
      <div className='container__questions'>

        <div className='question'>
          <Question />
        </div>


        <ul className='answers'>
          <Answer />
        </ul>

        <button className="submit" ></button>




      </div>
    </div>

  )
}

export default Questionary

import { useState } from 'react';
const Questionary2 = () => {
  const questions = [
    {
      questionText: 'How many plastic bottle/cups do you use daily?',
      answerOptions: [
        { answerText: '0 to 2', points: 0 },
        { answerText: '3 to 5', points: 3 },
        { answerText: '6 to 8', points: 6 },
        { answerText: 'more than 9', points: 9 },
      ],
    },
    {
      questionText: 'How many shopping bags do you get per day?',
      answerOptions: [
        { answerText: '0 to 2', points: 0 },
        { answerText: '3 to 5', points: 3 },
        { answerText: '6 to 8', points: 6 },
        { answerText: 'more than 9', points: 9 },
      ],
    },
    {
      questionText: 'How many cigarette do you smoke per day?',
      answerOptions: [
        { answerText: '0 to 2', points: 0 },
        { answerText: '3 to 5', points: 3 },
        { answerText: '6 to 8', points: 6 },
        { answerText: 'more than 9', points: 9 },
      ],
    },
    {
      questionText: 'Do you use wet wipes?',
      answerOptions: [
        { answerText: 'Yes', points: 10 },
        { answerText: 'No', points: 0 }
      ],
    },
    {
      questionText: 'Do you use biodegradable cosmetics?',
      answerOptions: [
        { answerText: 'Yes', points: 10 },
        { answerText: 'No', points: 0 }
      ],
    },
    {
      questionText: 'How many takeaways in a week do you order on an average?',
      answerOptions: [
        { answerText: '0 to 2', points: 0 },
        { answerText: '3 to 5', points: 3 },
        { answerText: '6 to 8', points: 6 },
        { answerText: 'more than 9', points: 9 },
      ],
    },
    {
      questionText: 'Do you prefer synthetic clothing?',
      answerOptions: [
        { answerText: 'Yes', points: 10 },
        { answerText: 'No', points: 0 }
      ]
    }

  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (points) => {

    setScore((prevValue) => {
      return (prevValue + points);
    });

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setStartGame(true);
    }
  };
  return (
    <div className='app'>
      {startGame ? (
        <div className='score-section'>
          your points {score}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerOptionClick(answerOption.points)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}


export default Questionary2

import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "New York", "Berlin"],
      answer: "Paris"
    },
    {
      question: "What is the capital of Italy?",
      options: ["Rome", "Paris", "Madrid", "Berlin"],
      answer: "Rome"
    },
    // Add more questions here
  ];

  const handleAnswer = (selectedOption) => {
    setAnswers([...answers, selectedOption]);

    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <div className='contain-quiz'>
      <h1 className='title-quiz'>Quiz</h1>
      <div>

      {currentQuestion < questions.length ? (
        <>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(option)}>
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Your score is {score} / {questions.length}</p>
      )}
      </div>
    </div>
  );
};

export default Quiz;

import React, { useState } from 'react';
import './Quiz.css'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [strong, setStrong] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [subject, setSubject] = useState('Capital')
  const [selectedOption, setSelectedOption] = useState();
  const [result, setResult] = useState('');
  const questions = [
    {
      question: "Quel est la capitale de la France?",
      options: ["Paris", " Londre", " New York", "Berlin"],
      answer: "Paris"
    },
    {
      question: "Quel est la capitale de l'Italie?",
      options: ["Rome", "Londre", "Madrid", "Berlin"],
      answer: "Rome"
    },
    // Add more questions here
  ];
 
  
  const handleOptionClick = (option, answer) => {
    setSelectedOption(option);
    setIsDisabled(true);
    setResult(option.id === answer ? 'Correct' : 'Incorrect');
    setAnswers([...answers, selectedOption]);
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    // setCurrentQuestion(currentQuestion + 1);

  };
{/* <button  onClick={() => handleAnswer(option)} ></button> */}
  const handleAnswer = (selectedOption) => {
    setAnswers([...answers, selectedOption]);

    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    // else if (selectedOption !== questions[currentQuestion].answer) {
    //   setStrong(strong + 1);
    // }

    // setCurrentQuestion(currentQuestion + 1);
  }
  const handleTry= () => {
    setCurrentQuestion(0);
    // setScore(0),
    // // setAnswers([]);
    // // // setIsDisabled(false);
    // // // setSelectedOption(null);
    // // // setResult('');
    
  };
  const correctOption= questions[currentQuestion].answer  // const [correctOption, setCorrectOption] = useState(questions[currentQuestion].answer);
  const HandleNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setIsDisabled(false);
      setSelectedOption(null);
      // setCorrectOption(questions[currentQuestion].answer);
    }
  };
  const saveScore = () => {
    const scoreHistory = JSON.parse(localStorage.getItem('scoreHistory')) || [];
    scoreHistory.push({
      score,
      date: new Date().toString()
    });
    localStorage.setItem('scoreHistory', JSON.stringify(scoreHistory));
  };

  if (currentQuestion === questions.length) {
    saveScore();
  }
  const handleSubmitScore = () => {
    submitScore(score);
  };
  const submitScore = (score) => {
    fetch('http://localhost:8082/api/score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ score: score })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to submit score');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };


  return (
    <div className='quiz-container'>
      <h1 >Quiz : {subject} </h1>
      <div className='current-quiz'>

      {currentQuestion < questions.length ? (
        <>
        <p>{score}/{questions.length}</p>
          <p className="quiz-question">{questions[currentQuestion].question}</p>
          <ul className='quiz-options'>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}  className={`quiz-option ${selectedOption === option ? (selectedOption === correctOption ? 'correct' : 'incorrect') : ''}`}
              onClick={() =>!isDisabled &&  handleOptionClick(option)} 
           
             >
                
                  {option}
               
              </li>
            ))}
          </ul>
          <a href='/'className='leave-quiz'>Quit </a>

          <button onClick={HandleNext} className='next-quiz'>Next </button>
        </>
      ) : (
        <div className='finaly-quiz'>
        <p className='content-score'>Votre score est de {score} bonne réponse sur {questions.length} </p>
      
       <button onClick={handleTry} className='retry-quiz'>Recommencer </button>
       <a href='/' className='gohome-quiz'>Retour à l'accueil </a>
       <button onClick={handleSubmitScore}>Enregistrer le score</button>


       </div>
      )}
      </div>
    </div>
  );
};

export default Quiz;

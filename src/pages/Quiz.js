import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';
import { ProgressBar } from "react-bootstrap";


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [strong, setStrong] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [subject, setSubject] = useState('Capital')
  const [selectedOption, setSelectedOption] = useState();
  const [result, setResult] = useState('');
  const [timeLeft, setTimeLeft] = useState(20); // Initialisez la limite de temps à 30 secondes

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
 
  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     // Si la limite de temps est épuisée, passez à la question suivante
  //     setTimeLeft(timeLeft - 1);
  //     if (timeLeft === 0) {
  //       setCurrentQuestion(currentQuestion + 1);
  //       setTimeLeft(20);
  //     }
  //   }, 1300);
  //   return () => clearTimeout(timerId);
  // }, [currentQuestion, timeLeft]);


  const handleOptionClick = (option, answer) => {
    setSelectedOption(option);
    setIsDisabled(true);
    setResult(option.id === answer ? 'Correct' : 'Incorrect');
    setAnswers([...answers, selectedOption]);
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    // setCurrentQuestion(currentQuestion + 1);
    
    handleAnswer()
  };
{/* */}
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
    if (currentQuestion < questions.length - 1) {
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
        <p className='question-length'>{currentQuestion}/{questions.length}</p>
          <p className="quiz-question">{questions[currentQuestion].question}</p>
      
          <ProgressBar
      now={timeLeft / 15 * 100}
      label={`${timeLeft} secondes`}
    />
        <img className='img-quiz' src='https://static8.depositphotos.com/1004999/972/i/450/depositphotos_9725439-stock-photo-beautiful-spring-in-paris.jpg'></img>
          <ul className='quiz-options'>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}  className={`quiz-option`}
              onClick={() =>!isDisabled &&  handleOptionClick(option) } 
           
             >
                
                  {option}
               
              </li>
            ))}
          </ul>
          <Link to='/'className='leave-quiz'>Quit </Link>
          <button onClick={HandleNext} className='next-quiz'>Next </button>
        </>
      ) : (
        <div className='finaly-quiz'>
    
      
       <button onClick={handleTry} className='retry-quiz'>Recommencer </button>
       <Link to='/' className='gohome-quiz'>Retour à l'accueil </Link>
       <button onClick={handleSubmitScore}>Enregistrer le score</button>


       </div>
      )}
      </div>
    </div>
  );
};

export default Quiz;

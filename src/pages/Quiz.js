import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Quiz.css';
import { ProgressBar } from "react-bootstrap";


const Quiz = () => {
  const { id } = useParams();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [subject, setSubject] = useState('Capital');
  const [timeLeft, setTimeLeft] = useState(20);
  const [selectedOption, setSelectedOption] = useState();
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(null);
  const [progressBarPaused, setProgressBarPaused] = useState(false);
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
    },{
      question: "Quel est la capitale de l'Italiee?",
      options: ["Romee", "Londree", "Madridee", "Berline"],
      answer: "Romee"
    }
    // Add more questions here
  ];

  const handleAnswerOptionClick = (selectedOption) => {
    // Check if an option has already been selected
    if (selectedOption !== '' && selectedOption !== selectedOption) {
      return;
    }

    if (selectedOption === questions[currentQuestion].answer) {
      setSelectedOption(selectedOption);
      setShowCorrectAnswer(true);
      setScore((prevScore) => prevScore + 1);

    } else {
      setSelectedOption(selectedOption);
      setShowCorrectAnswer(false);
    }
    clearInterval(timer)
    setProgressBarPaused(true);
  };

  const nextQuestion = () => {
    setSelectedOption('');
    setShowCorrectAnswer(false);
    setCurrentQuestion(currentQuestion + 1);
    setTimeLeft(20);
    setProgressBarPaused(false);
    clearInterval(timer); // arrêter la barre de progression actuelle
    // créer une nouvelle barre de progression
    if (currentQuestion < questions.length - 1) {
      // setCurrentQuestion((currentQuestion) => currentQuestion + 1);
      setTimeLeft(20);
    }

  };


  useEffect(() => {
    if (currentQuestion < questions.length && timeLeft > 0) {
      setTimer(setInterval(() => setTimeLeft(timeLeft - 1), 1000));
    }
    return () => clearInterval(timer);
  }, [currentQuestion, questions.length, timeLeft]);

  return (
    <div className='quiz-container'>
      <h1>Quiz : {id} </h1>
      <p>Score : {score}/{questions.length}</p>
      <div className='current-quiz'>
        {currentQuestion < questions.length ? (
          <>
            <p className='question-length'>
              {currentQuestion + 1}/{questions.length}
            </p>
            <p className='quiz-question'>{questions[currentQuestion].question}</p>
            <ProgressBar
              now={timeLeft / 20 * 100}
              label={`${timeLeft} secondes`}
              animated={!progressBarPaused}
            />
            <img
              className='img-quiz'
              src='https://static8.depositphotos.com/1004999/972/i/450/depositphotos_9725439-stock-photo-beautiful-spring-in-paris.jpg'
              alt='Quiz question'
            />
            <ul className='quiz-options'>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`quiz-option ${selectedOption === option
                    ? showCorrectAnswer
                      ? 'correct-answer'
                      : 'wrong-answer'
                    : ''
                    }`}
                  onClick={() => handleAnswerOptionClick(option)}
                  disabled={selectedOption}
                >
                  {option}
                </button>
              ))}
            </ul>
            <Link to='/' className='leave-quiz'>
              Quit
            </Link>
            {selectedOption && (
              <button className='next-quiz' onClick={nextQuestion}>
                Next
              </button>
            )}
          </>
        ) : (
          <div className='finaly-quiz'>
            <p style={{ color: 'black' }}>Bien joué le quizz est terminé, tu as accès à ton score sur ton profil !</p>
            <Link to='/' className='gohome-quiz'>
              Retour à l'accueil
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
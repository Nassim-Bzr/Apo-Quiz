import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Quiz.css';
import { ProgressBar } from "react-bootstrap";
import axios from 'axios';


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
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get(`http://localhost:8082/api/question/?quizzId=${id}`);
      setQuestions(response.data);
    };

    fetchQuestions();
  }, [id]);
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
console.log(questions[currentQuestion])

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
            {questions[currentQuestion].answers.map((answer, index) => (
                <button
                  key={index}
                  className={`quiz-option ${selectedOption === answer
                    ? showCorrectAnswer
                      ? 'correct-answer'
                      : 'wrong-answer'
                    : ''
                    }`}
                  onClick={() => handleAnswerOptionClick(answer)}
                  disabled={selectedOption}
                >
                  {answer.text}
                </button>
              ))}
            </ul>
            {selectedOption && (
             <p className='quiz-anecdote'>{questions[currentQuestion].anecdote}</p> 
            )}
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
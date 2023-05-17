import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Quiz.css';
import { ProgressBar } from "react-bootstrap";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { actionUpdateScore } from '../actions/user';
import { useDispatch } from 'react-redux';



const Quiz = () => {
  const { id } = useParams();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [selectedOption, setSelectedOption] = useState();
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(null);
  const [progressBarPaused, setProgressBarPaused] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentCategorieTitle, setCurrentCategorieTitle] = useState('');
  const ScoreUser = useSelector((state) => state.user.score);
  console.log(ScoreUser)
  
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get(`http://localhost:8082/api/question/?quizzId=${id}`);
      setQuestions(response.data);
    };

    fetchQuestions();
  }, [id]);

  useEffect(() => {
    const fetchCategorie = async () => {
      const response = await axios.get(`http://localhost:8082/api/category/${id}`);
      setCurrentCategorieTitle(response.data.title);
    };

    fetchCategorie();
  }, [id]);
  const handleAnswerOptionClick = (selectedOption) => {
    // Check if an option has already been selected
    if (selectedOption !== '' && selectedOption !== selectedOption) {
      return;
    }

    const currentQuestionObj = questions[currentQuestion];

    if (selectedOption.id === currentQuestionObj.answer_id) {
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

  const handleSaveChanges = async () => {
    // ...
    dispatch(actionUpdateScore(score)); // Dispatch l'action pour mettre à jour le score
  };

  useEffect(() => {
    if (currentQuestion === questions.length) {
      handleSaveChanges(); // Enregistrer automatiquement le score lorsque toutes les questions ont été répondues
    }
  }, [currentQuestion, questions.length]);



  return (
    <div className='quiz-container'>
      <h1 className='title-quiz'>Quiz : {currentCategorieTitle} </h1>
      <p className='current-score'>Score : {score}/{questions.length}</p>
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
              src='https://www.interieur.gouv.fr/var/miomcti/storage/images/www.interieur.gouv.fr/version-fre/actualites/l-actu-du-ministere/bac-2019-les-resultats-de-notre-quizz/941648-1-fre-FR/Bac-2019-les-resultats-de-notre-quizz.png'
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
              <div className='quiz-anecdote-dialog'>
                <p className='quiz-anecdote'>{questions[currentQuestion].anecdote}</p>
              </div>
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
            <p style={{ color: 'black' }}>Bien joué le quizz est terminé, si tu es connectée tu as accès à ton score sur ton profil !</p>
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
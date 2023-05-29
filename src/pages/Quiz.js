import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Quiz.css';
import { ProgressBar } from "react-bootstrap";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { actionUpdateScore } from '../actions/user';

const Quiz = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [selectedOption, setSelectedOption] = useState();
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentCategorieTitle, setCurrentCategorieTitle] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get(`http://localhost:8082/api/question/?quizzId=${id}`);
      setQuestions(response.data);
      const categoryResponse = await axios.get(`http://localhost:8082/api/category/${id}`);
      setCurrentCategorieTitle(categoryResponse.data.title);
    };
    fetchQuestions();
  }, [id]);

  const timerRef = useRef(null);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentQuestion]);

  useEffect(() => {
    if (timeLeft === 0) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimeLeft(20);
    }
  }, [timeLeft]);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption.id === questions[currentQuestion].answer_id) {
      setSelectedOption(selectedOption);
      setShowCorrectAnswer(true);
      setScore((prevScore) => prevScore + 1);
    } else {
      setSelectedOption(selectedOption);
      setShowCorrectAnswer(false);
    }
    clearInterval(timerRef.current);
  };

  const nextQuestion = () => {
    setSelectedOption('');
    setShowCorrectAnswer(false);
    clearInterval(timerRef.current);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setTimeLeft(20);
  };

  const handleScoreUpdate = () => {
    if (score > user.score) {
      dispatch(actionUpdateScore(user.id, score));
    }
  };

  useEffect(() => {
    if (currentQuestion === questions.length) {
      handleScoreUpdate();
    }
  }, [currentQuestion, questions.length]);


  return (
    <div className='quiz-container'>
      <h1 className='title-quiz'>Quiz : {currentCategorieTitle} </h1>
      <p className='current-score'>Score : {score}/{questions.length}</p>
      <div className='current-quiz'>
        {currentQuestion < questions.length ? (
          // Affichage de la question et des options de réponse
          <>
            <p className='question-length'>
              {currentQuestion + 1}/{questions.length}
            </p>
            <p className='quiz-question'>{questions[currentQuestion].question}</p>
            <ProgressBar
              now={timeLeft / 20 * 100}
              label={`${timeLeft} secondes`}
              animated={timeLeft > 0}
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
          // Affichage du message de fin du quiz
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

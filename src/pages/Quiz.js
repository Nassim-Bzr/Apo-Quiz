import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Quiz.css';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // Charger les questions à partir d'une API ici
    axios.get('/api/questions')
      .then(res => setQuestions(res.data))
      .catch(err => console.log(err));
  }, []);

  function handleAnswer(answer) {
    setAnswers(answers.concat([answer]));
    if (answer.correct) {
      setScore(score + 1);
    }
    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  if (showResults) {
    return (
      <div className="quiz-container">
        <h1>Résultats</h1>
        <p>Score : {score} / {questions.length}</p>
        <button className="restart-button" onClick={() => window.location.reload()}>Recommencer</button>
      </div>
    );
  } else {
    return (
      <div className="quiz-container">
        <h1>{questions[currentQuestion].question}</h1>
        {questions[currentQuestion].answers.map(answer => (
          <div key={answer.id} className="answer-container">
            <button className="answer-button" onClick={() => handleAnswer(answer)}>{answer.text}</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Quiz;

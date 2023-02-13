import React, { useState, useEffect } from 'react';
import './Login.css';
import { Navigate } from 'react-router-dom';
import './ProfilePage.css';
import { useDropzone } from 'react-dropzone';




function ProfilePage({ name }) {

  const [quizzesCreated, setQuizzesCreated] = useState(0)
  const [quizzesTaken, setQuizzesTaken] = useState(0)
  const [highScore, setHighScore] = useState(55)
  const [scoreHistory, setScoreHistory] = useState([]);
  const [file, setFile] = useState(null);

  const onDrop = acceptedFiles => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const clearScoreHistory = () => {
    setScoreHistory([]);
    localStorage.removeItem('scoreHistory');
  };

  useEffect(() => {
    const historyFromStorage = JSON.parse(localStorage.getItem('scoreHistory')) || [];
    setScoreHistory(historyFromStorage);
    // Récupérez les scores de tous les scores de l'historique
    const scores = historyFromStorage.map(entry => entry.score);

    // Trouvez le plus grand nombre
    // Définir la valeur de maxScore en fonction de la longueur de scores
    let maxScore = 0;
    if (scores.length) {
      maxScore = Math.max(...scores);
    }

    // Affectez la valeur de maxScore à highScore
    setHighScore(maxScore);
  }, []);






  const [isLog, setIslog] = useState(true);
  if (!isLog) {
    return <Navigate to="/error" replace />;
  }
  // rest of the code
  return (
    <div className="quiz-profile-container">
      <div className="ProfilePicture" {...getRootProps()}>
        <input {...getInputProps()} />
        {file ? <img src={URL.createObjectURL(file)} className='quiz-profile-img' /> : 'Click here to upload a profile picture'}

        <div className="quiz-profile-name">
          <p className="quiz-profile-name">{name}</p>

        </div>
      </div>
      <div className="quiz-profile-stats">
        <div className="stat">
          <p className="stat-value">{scoreHistory.length}</p>
          <p className="stat-label">Quizz Effectuées</p>
        </div>
        <div className="stat">
          <p className="stat-value">{quizzesCreated}</p>
          <p className="stat-label">Quizz Crée</p>
        </div>
        <div className="stat">
          <p className="stat-value">{highScore}</p>
          <p className="stat-label">Meilleurs Score</p>
        </div>
      </div>

      <div className="quiz-profile-recent-activity">
        <h2 className="quiz-profile-recent-activity-title">Recente Activité</h2>
        <button onClick={clearScoreHistory} className='button-history'>Supprimer mon historique</button>

        <ul className="quiz-profile-recent-activity-list">
          {scoreHistory.map((entry, index) => (
            <li key={index} className="quiz-profile-recent-activity-item">
              <p> - {entry.score} le {entry.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}




export default ProfilePage;

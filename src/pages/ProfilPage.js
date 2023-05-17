import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link, Navigate } from 'react-router-dom';
import './ProfilePage.css';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { actionUpdatePseudo } from '../actions/user'; // Importez l'action

function ProfilePage({ pseudo }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPseudo, setNewPseudo] = useState(pseudo); // State pour stocker le nouveau pseudo
  const [quizzesCreated, setQuizzesCreated] = useState(0);
  const [quizzesTaken, setQuizzesTaken] = useState(0);
  const [highScore, setHighScore] = useState(55);
  const [scoreHistory, setScoreHistory] = useState([]);
  const [file, setFile] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false); // Ajout de l'état pour la confirmation
  const isLogged = useSelector((state) => state.user.logged);
  const score = useSelector((state) => state.user.score);
  const ProfilImg = useSelector((state) => state.user.profilImgUrl)
  const userID = useSelector((state) => state.user.userId);
  const [newEmail, setNewEmail] = useState(''); // State pour stocker le nouvel email

  console.log(userID)
  console.log("lahwak")

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  const onDrop = acceptedFiles => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const clearScoreHistory = () => {
    setScoreHistory([]);
    localStorage.removeItem('scoreHistory');
  };


  const handleSubmitEmail = e => {
    e.preventDefault();

    fetch(`http://localhost:8082/api/users/${userID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: newEmail })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Vous pouvez également mettre à jour l'email dans le state de Redux si vous le stockez
      })
      .catch(error => console.error(error));

    setIsUpdated(true);
  };

  const handleSubmitPassword = e => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert('Le nouveau mot de passe et la confirmation ne correspondent pas');
      return;
    }
    
    fetch(`http://localhost:8082/api/users/${userID}`, { // notez l'URL différente
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        currentPassword: currentPassword, 
        password: newPassword 
      })
    })
    .then(response => {
      if (response.ok) {
        alert('Mot de passe changé avec succès');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        alert('Échec du changement de mot de passe');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch(`http://localhost:8082/api/users/${userID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: newPseudo })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        dispatch(actionUpdatePseudo(newPseudo)); // Dispatchez l'action
      })
      .catch(error => console.error(error));

    setIsUpdated(true);
  };
  // useEffect(() => {
  //   const historyFromStorage = JSON.parse(localStorage.getItem('scoreHistory')) || [];
  //   setScoreHistory(historyFromStorage);
  //   // Récupérez les scores de tous les scores de l'historique
  //   const scores = historyFromStorage.map(entry => entry.score);

  //   // Trouvez le plus grand nombre
  //   // Définir la valeur de maxScore en fonction de la longueur de scores
  //   let maxScore = 0;
  //   if (scores.length) {
  //     maxScore = Math.max(...scores);
  //   }

  //   // Affectez la valeur de maxScore à highScore
  //   setHighScore(maxScore);
  // }, []);

  useEffect(() => {
    let timeout;
    if (isUpdated) {
      timeout = setTimeout(() => {
        setIsUpdated(false);
      }, 3000); // afficher la confirmation pendant 3 secondes
    }
    return () => clearTimeout(timeout);
  }, [isUpdated]);


  if (!isLogged) {
    return <Navigate to="/error" replace />;
  }


  // rest of the code
  return (
    <div>
      <h1 className='title-profile'>Bonjour {pseudo}</h1>
      <div className="quiz-profile-container">
        <div className='header-quizz-container'>
          <div className="ProfilePicture" {...getRootProps()}>
            <input {...getInputProps()} />
            {file ? <img src={URL.createObjectURL(file)} className='quiz-profile-img' /> : 'Click here to upload a profile picture'}
          </div>
          <div className="quiz-profile-name">
            <form onSubmit={handleSubmitPassword}>
              <input
                type="password"
                className='input-change'
                value={currentPassword}
                onChange={e => setCurrentPassword(e.target.value)}
                placeholder="Mot de passe actuel"
              />
              <input
                type="password"
                className='input-change'
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                placeholder="Nouveau mot de passe"
              />
              <input
                type="password"
                className='input-change'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="Confirmer le nouveau mot de passe"
              />
              <button type="submit" className='button-change'>Changer de mot de passe</button>
            </form>
            <form onSubmit={handleSubmitEmail}>
              <input
                type="email"
                className='input-change'
                value={newEmail}
                onChange={e => setNewEmail(e.target.value)}
                placeholder="Nouvel email" // Ajoutez ceci pour guider l'utilisateur
              />
              <button type="submit" className='button-change'>Changer d'email</button>
            </form>
            <form onSubmit={handleSubmit}>
              <input type="text" className='input-change' value={newPseudo} onChange={e => setNewPseudo(e.target.value)} />
              <button type="submit" className='button-change'> Changer de pseudo</button>
            </form>
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
            <p className="stat-value">{score}</p>
            <p className="stat-label">Score</p>
          </div>
        </div>
        <Link to='/'>
          <button className='button-connexion' onClick={handleLogout}> Deconnexion</button>
        </Link>
        <div className="quiz-profile-recent-activity">
          <h2 className="quiz-profile-recent-activity-title">Recente Activité</h2>
          <button className="btn-history" onClick={clearScoreHistory}>
            <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" className="icon">
              <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
            </svg>
          </button>
          {isUpdated && <p>Votre pseudo a été mis à jour avec succès !</p>}

          <ul className="quiz-profile-recent-activity-list">
            {scoreHistory.map((entry, index) => (
              <li key={index} className="quiz-profile-recent-activity-item">
                <p> - {entry.score} le {entry.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}




export default ProfilePage;

import React, { useState } from 'react';
import './Login.css';
import { Navigate } from 'react-router-dom';

function Login({ isLog }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [isLog,setIslog] = useState(true);
  if (isLog) {
    return <Navigate to="/error" replace />;
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert('Conexion en cours..')
    // Appeler une fonction pour envoyer les données de connexion à l'API ici
    console.log(email, password);
  }
  return (
    <div className="login-container">
      <h1 className='title-login'>Connexion</h1>
      <form onSubmit={handleSubmit} className="login-form">

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Entrez votre email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        <a href='/signup' className='link-signup'>
          <p>Vous n'avez pas encore de compte ? Créez vous en un ici  </p>
        </a>
        <a href='/forgot-password' className='link-forgot'>
          <p>Vous avez oublié votre mot de passe ? </p>
        </a>
        <button type="submit" className="submit-button">Se connecter</button>
        </div>



      </form>
    </div>
  );
}

export default Login;
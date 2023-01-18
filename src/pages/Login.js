import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    alert('Conexion en cours..')
    // Appeler une fonction pour envoyer les données de connexion à l'API ici
    console.log(email, password);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Connexion</h1>
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
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Entrez votre mot de passe" 
            value={password}
            onChange={e => setPassword(e.target.value)} 
            required
          />
        </div>
        <button type="submit" className="submit-button">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
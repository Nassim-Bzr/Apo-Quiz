// @ts-nocheck
import React, { useState } from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
// import { actionChangeInputValue, actionCheckLogin } from '../actions/user';
import { Link } from 'react-router-dom';

function Login() {
const email = useSelector((state) => state.user.email);
const password = useSelector((state) => state.user.password);
const loading = useSelector((state) => state.user.loading);
const isLogged = useSelector((state) => state.user.logged);
const pseudo = useSelector((state) => state.user.pseudo);
const dispatch = useDispatch();
// const history = useHistory();
const handleSubmit = (evt) => {
  evt.preventDefault();
  dispatch({
    type: 'LOGIN',
    
  });
  console.log('cc')
};

const handleChange = (evt) => {
  dispatch({
    type: 'CHANGE_VALUE',
    value: evt.target.value,
    key: evt.target.id, 
  });
};
return (
  
  <div className="login-container">
    
  {!isLogged && (
<form onSubmit={handleSubmit} className="login-form">
<div className="form-group">
<h1 className='title-login'>Connexion</h1>
<label htmlFor="email">Email</label>
<input
type="email"
id="email"
placeholder="Entrez votre email"
value={email}
onChange={handleChange}
/>
</div>
<div className="form-group">
<label htmlFor="password">Mot de passe</label>

<input
type="password"
id="password"
placeholder="Entrez votre mot de passe"
value={password}
onChange={handleChange}
/>
</div>
<Link to="/signup" className='link-signup'>
<p>Vous n'avez pas encore de compte ? Créez vous en un ici </p>
</Link>
<Link to="/forgot-password" className='link-forgot'>
<p>Vous avez oublié votre mot de passe ? </p>
</Link>
<button type="submit" className="submit-button" onSubmit={handleSubmit} >Se connecter</button>

</form>
)}
  {isLogged && (
    <div>
      Salutation, tu est connectée {pseudo}
    </div>
         )}
</div>
);
}

export default Login;
// @ts-nocheck
import React, { useState } from "react";
import axios from 'axios';
import './SignUp.css';
import Swal from 'sweetalert2';

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [acceptedConditions, setAcceptedConditions] = useState(false);


  const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('coucou')
  }

  return (
    <div className="contain-signup">
      <h1>Inscription</h1>
      <form className="formsignup" onSubmit={handleSubmit}>
        <label className="label-signup">
          Nom d'utilisateur :
          <input
            className="signup-input"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
      
        <label className="label-signup">
          Adresse e-mail :
          <input className="signup-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            validations={[required]}
          />
        </label>
        <label className="label-signup">
          Confirmer l'adresse e-mail :
          <input
            className="signup-input"
            type="email"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
          />
        </label>
        <label className="label-signup">
          Mot de passe :
          <input
            className="signup-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label className="label-signup">
          Confirmer le mot de passe :
          <input
            className="signup-input"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>

        <input
          type="checkbox"
          onChange={() => setAcceptedConditions(!acceptedConditions)}
        /> <strong>J'accepte les conditions d'utilisation</strong>


        <button type="submit" className="button-signup" disabled={!acceptedConditions}> </button>
        <button type="submit" className="button-signup" disabled={!acceptedConditions}>S'inscrire</button>
      </form>
    </div>
  );
}

export default SignUpForm;

import React, { useState } from "react";
import axios from 'axios';
import './SignUp.css';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formError, setFormError] = useState(false); // State variable for form error



  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (formData.username === "" || formData.email === "" || formData.password === "") {
      setFormError(true); // Update formError if any field is empty
      return; // Stop form submission
    }
    try {
      const response = await axios.post("http://localhost:8082/api/auth/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Inscription réussie!',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Quelque chose a mal tourné',
      })
    }
  }

  return (
    <div className="contain-signup">
      <h1>Inscription</h1>
      <form className="formsignup" onSubmit={handleSubmit}>
      {formError && (
          <p className="error-message">Veuillez remplir tous les champs obligatoires.</p>
        )}
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
            autoComplete="false"
            required // Champ obligatoire


          />
        </label>
        <label className="label-signup">
          Mot de passe :
          <input
            className="signup-input"
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required // Champ obligatoire

          />
          <button type="button" onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            {passwordVisible ? ' Masquer' : ' Afficher'}
          </button>
        </label>


        <strong className="text-accord">En créant un compte, je suis d'accord avec la <Link to='/poli-confi'>Politique de confidentialité</Link>.</strong>

        <button type="submit" className="button-signup" >S'inscrire</button>
     
      </form>

      <div className="div-avantage" >

        <h1 className="title-avantage"> Avantages</h1>

        <ul>
          <li className="li-avantage">
            Vos quizz sont tous rattachés dans votre compte membre.
          </li>
          <li className="li-avantage">
            Vous pourrez suivre les autres membres afin d'être averti de leurs nouveaux quizz.
          </li>
          <li className="li-avantage">
            Vous pourrez laisser des commentaires (et voir ceux des autres membres) sur l'ensemble des quizz.
          </li>
          <li className="li-avantage">
            Votre rang dans les classements est mémorisé.
          </li>
          <li className="li-avantage">
            Vous jouez en live avec votre pseudo.
          </li>
          <li className="li-avantage">
            Une messagerie vous permet de communiquer avec les autres membres.
          </li>
          <li className="li-avantage">
            Et beaucoup d'autres choses !
          </li>
        </ul>
      </div>

    </div>

  );
}

export default SignUpForm;
import React, { useState } from "react";
import axios from 'axios';
import './SignUp.css';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });




  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8082/api/auth/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Inscription réussie!',
        showConfirmButton: false,
        timer: 1500
      })
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
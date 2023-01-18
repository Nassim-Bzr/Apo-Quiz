import React, { useState } from "react";
import axios from 'axios';

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/users', formData);
      alert('Inscription réussi !');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contain-signup">
    <form className="form-signup" onSubmit={handleSubmit}>
      <h1>Inscription</h1>
      <label className="label-signup">
        Nom d'utilisateur :
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label  className="label-signup">
        Adresse e-mail :
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label  className="label-signup">
        Mot de passe :
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="button-signup">S'inscrire</button>
    </form>
    </div>
  );
}

export default SignUpForm;

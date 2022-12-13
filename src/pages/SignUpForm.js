import React, { useState } from "react";

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

  function handleSubmit(event) {
    event.preventDefault();
  
    const data = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
  
    fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom d'utilisateur :
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Adresse e-mail :
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Mot de passe :
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default SignUpForm;

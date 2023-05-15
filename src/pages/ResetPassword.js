import React, { useState } from 'react';
import './ResetPassword.css';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérifier si les mots de passe correspondent et effectuer l'action de réinitialisation du mot de passe ici
    if (password === confirmPassword) {
      // Effectuer l'action de réinitialisation du mot de passe
      alert('Mot de passe réinitialisé avec succès!');
      // Réinitialiser les champs du formulaire
      setPassword('');
      setConfirmPassword('');
    } else {
      // Les mots de passe ne correspondent pas, afficher une erreur ou prendre d'autres mesures appropriées
      alert('Les mots de passe ne correspondent pas!');
    }
  };

  return (
    <div className="reset-password-container">
      <h2 className="reset-password-title">Réinitialisation du mot de passe</h2>
      <form onSubmit={handleSubmit} className="reset-password-form">
        <div className="form-group">
          <label className="form-label">Nouveau mot de passe :</label>
          <input type="password" value={password} onChange={handlePasswordChange} className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Confirmer le nouveau mot de passe :</label>
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} className="form-input" />
        </div>
        <button type="submit" className="reset-password-button">Réinitialiser le mot de passe</button>
      </form>
    </div>
  );
}
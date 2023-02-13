import PropTypes from 'prop-types';
import React from 'react';

import Field from './Field';

import './style.scss';

/**
 * Composant qui affiche un formulaire de connexion ou un message et un bouton deconnexion
 */
function LoginForm({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (

        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            OK
          </button>
        </form>
      )}
    </div>
  );
}

LoginForm.propTypes = {
  /** valeur utilisée pour la value de l'input email */
  email: PropTypes.string.isRequired,
  /** valeur utilisée pour la value de l'input password */
  password: PropTypes.string.isRequired,
  /** fonction executée à chaque changmeent de value d'un input */
  changeField: PropTypes.func.isRequired,
  /** fonction executée au click sur le bouton submit */
  handleLogin: PropTypes.func.isRequired,
  /** fonction executée au click sur le bouton deconnexion */
  handleLogout: PropTypes.func.isRequired,
  /** booléen qui
   * - si faux affiche le form de connexion
   * - si vrai affiche le message et un bouton 'deconnexion' */
  isLogged: PropTypes.bool,
  /** message affiché quand on est loggé */
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;

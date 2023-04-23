import React, { Component } from 'react';
import './index.css';
class PasswordResetForm extends Component {
  state = {
    email: '',
    success: false,
    error: false
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Envoyer une demande de réinitialisation de mot de passe à l'adresse e-mail de l'utilisateur ici
    // Si la demande réussie, mettez à jour l'état en utilisant this.setState({ success: true })
    // Si la demande échoue, mettez à jour l'état en utilisant this.setState({ error: true })
  }

  render() {
    return (
      <div className='div-forgot'>
        <h1 className='forgot-title'>Réinitialisation de votre mot de passe</h1>
      <form className='form-resetpassword' onSubmit={this.handleSubmit}>
        {this.state.success && <p>Un lien de réinitialisation de mot de passe a été envoyé à votre adresse e-mail.</p>}
        {this.state.error && <p>Une erreur s'est produite. Veuillez réessayer.</p>}
        <input
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Adresse e-mail"
          className='input-forgot'
          required
        />
        <button className='button-forgot' type="submit">Envoyer le lien de réinitialisation de mot de passe</button>
      </form>
      </div>
    );
  }
}

export default PasswordResetForm;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Logique pour réinitialiser le mot de passe
    console.log('Réinitialisation du mot de passe pour:', email);
  };

  const handleChange = (evt) => {
    dispatch({
      type: 'CHANGE_VALUE',
      value: evt.target.value,
      key: evt.target.id,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#34495E]">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Réinitialiser le mot de passe</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                         focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Envoyer le lien de réinitialisation
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-sm no-underline text-blue-600 hover:underline">
            Retour à la page de connexion
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

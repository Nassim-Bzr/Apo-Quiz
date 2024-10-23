import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function SignUpForm() {
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const pseudo = useSelector((state) => state.user.pseudo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Logique pour l'inscription
    console.log('Inscription avec:', { email, password, pseudo });
    // Après une inscription réussie, vous pouvez rediriger vers la page de connexion
    // navigate('/login');
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
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Créer un compte</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="pseudo" className="block text-sm font-medium text-gray-700">Pseudo</label>
            <input
              type="text"
              id="pseudo"
              placeholder="Choisissez un pseudo"
              value={pseudo}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                         focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
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
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              id="password"
              placeholder="Choisissez un mot de passe"
              value={password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                         focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            S'inscrire
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-sm no-underline text-blue-600 hover:underline">
            Déjà un compte ? Connectez-vous
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;

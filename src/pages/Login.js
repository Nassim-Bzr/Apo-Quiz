// @ts-nocheck
import React from 'react';
// Assurez-vous que ce fichier CSS ne remplace pas les styles Tailwind

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.logged);
  const pseudo = useSelector((state) => state.user.pseudo);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: 'LOGIN' });
    if (isLogged) {
      navigate('/home');
    }
  };

  const handleChange = (evt) => {
    dispatch({
      type: 'CHANGE_VALUE',
      value: evt.target.value,
      key: evt.target.id,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#34495E] from-blue-500 to-purple-600">
      {!isLogged ? (
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Connexion</h1>
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
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
              <input
                type="password"
                id="password"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                           focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <Link to="/signup" className="text-sm  no-underline text-blue-600 hover:underline">Créer un compte</Link>
              <Link to="/forgot-password" className="text-sm no-underline text-blue-600 hover:underline">Mot de passe oublié ?</Link>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Se connecter
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <p className="text-xl font-semibold text-gray-800">Bienvenue, {pseudo} !</p>
          <p className="mt-2 text-gray-600">Vous êtes maintenant connecté.</p>
        </div>
      )}
    </div>
  );
}

export default Login;

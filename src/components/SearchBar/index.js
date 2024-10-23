import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function SearchBar({ setSearchResults }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [tempResults, setTempResults] = useState([]);
  const isAdmin = useSelector((state) => state.user.roles === 'admin');

  const location = useLocation();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setSearchResults(tempResults);
    navigate('/search-results', { state: { searchResults: tempResults } });
  }

  async function fetchQuizzes(query) {
    const response = await fetch(`http://localhost:8082/api/quizz/search?title=${query}`);
    const data = await response.json();
    setTempResults(data);
  }

  function handleSearchChange(value) {
    setSearch(value);
    if (value.length > 2) {
      fetchQuizzes(value);
    }
  }

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <nav className="hidden md:flex space-x-12">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-300">Accueil</Link>
            <Link to="/categories" className="text-gray-700 hover:text-blue-600 transition duration-300">Catégories</Link>
            <Link to="/classement" className="text-gray-700 hover:text-blue-600 transition duration-300">Classement</Link>
            {isAdmin && (
              <Link to="/admin" className="text-gray-700 hover:text-blue-600 transition duration-300">Admin</Link>
            )}
            <Link to="/create" className="text-gray-700 hover:text-blue-600 transition duration-300">Créer un Quiz</Link>
            <Link to="/favoris" className="text-gray-700 hover:text-blue-600 transition duration-300">Favoris</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">À propos</Link>
          </nav>

          <form onSubmit={handleSubmit} className="flex-grow max-w-md mx-4">
            <input
              type="text"
              placeholder="Rechercher un quiz..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-300">Accueil</Link>
            <Link to="/categories" className="text-gray-700 hover:text-blue-600 transition duration-300">Catégories</Link>
            <Link to="/classement" className="text-gray-700 hover:text-blue-600 transition duration-300">Classement</Link>
            {isAdmin && (
              <Link to="/admin" className="text-gray-700 hover:text-blue-600 transition duration-300">Admin</Link>
            )}
            <Link to="/create" className="text-gray-700 hover:text-blue-600 transition duration-300">Créer un Quiz</Link>
            <Link to="/favoris" className="text-gray-700 hover:text-blue-600 transition duration-300">Favoris</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">À propos</Link>
          </nav>
        </div>
      )}
    </div>
  );
}

export default SearchBar;

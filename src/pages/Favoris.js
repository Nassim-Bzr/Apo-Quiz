import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaPlay } from 'react-icons/fa';

// Données factices pour les quiz favoris
const fakeFavorites = [
  { id: 1, title: "Histoire de France", category: "Histoire", difficulty: "Moyen", playCount: 1250 },
  { id: 2, title: "Capitales du Monde", category: "Géographie", difficulty: "Difficile", playCount: 980 },
  { id: 3, title: "Sciences et Découvertes", category: "Sciences", difficulty: "Facile", playCount: 1500 },
  { id: 4, title: "Cinéma des années 90", category: "Culture Pop", difficulty: "Moyen", playCount: 750 },
  { id: 5, title: "Les Merveilles de la Nature", category: "Nature", difficulty: "Facile", playCount: 2000 },
  { id: 6, title: "Mythologie Grecque", category: "Mythologie", difficulty: "Difficile", playCount: 600 },
];

function Favoris() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-black mb-10">Mes Quiz Favoris</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fakeFavorites.map((quiz) => (
            <div key={quiz.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-black mb-2">{quiz.title}</h2>
                  <FaStar className="text-yellow-400 text-xl" />
                </div>
                <p className="text-sm text-black mb-4">Catégorie: {quiz.category}</p>
                <div className="flex justify-between items-center text-sm text-black">
                  <span>Difficulté: {quiz.difficulty}</span>
                  <span>{quiz.playCount} joueurs</span>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <Link 
                  to={`/quiz/${quiz.id}`} 
                  className="flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <FaPlay className="mr-2" />
                  Jouer maintenant
                </Link>
              </div>
            </div>
          ))}
        </div>

        {fakeFavorites.length === 0 && (
          <div className="text-center text-black mt-10">
            <p>Vous n'avez pas encore de quiz favoris.</p>
            <Link to="/categories" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              Découvrir des quiz
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favoris;

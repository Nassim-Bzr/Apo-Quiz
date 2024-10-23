import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Données factices pour les quiz
const fakeQuizzes = [
  {
    id: 1,
    title: "Culture Générale",
    description: "Testez vos connaissances sur divers sujets passionnants !",
    category: { id: 1 }
  },
  {
    id: 2,
    title: "Histoire du Monde",
    description: "Voyagez à travers les époques et découvrez les grands événements historiques.",
    category: { id: 2 }
  },
  {
    id: 3,
    title: "Sciences et Nature",
    description: "Explorez les merveilles de la science et de la nature dans ce quiz captivant.",
    category: { id: 3 }
  },
  {
    id: 4,
    title: "Cinéma et Séries TV",
    description: "Mettez à l'épreuve vos connaissances sur le monde du cinéma et des séries télévisées.",
    category: { id: 4 }
  },
  {
    id: 5,
    title: "Géographie Mondiale",
    description: "Parcourez le globe et découvrez les pays, les capitales et les merveilles naturelles.",
    category: { id: 5 }
  },
  {
    id: 6,
    title: "Sport et Olympisme",
    description: "Plongez dans l'univers du sport et des Jeux Olympiques avec ce quiz stimulant.",
    category: { id: 6 }
  }
];

export default function HomeListCategory() {
  const [quizzList, setQuizzList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler un chargement asynchrone
    setTimeout(() => {
      setQuizzList(fakeQuizzes);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="text-center text-2xl font-bold text-gray-600">Chargement...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Quizz au hasard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzList.map(q => (
          <Link key={q.id} to={`/quiz/${q.category.id}/${q.id}`} className="block no-underline">
            <div className="bg-gray-50 p-4 rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105 h-full flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{q.title}</h3>
              <p className="text-gray-600 text-sm">{q.description.length > 100 ? q.description.substring(0, 100) + '...' : q.description}</p>
              <div className="mt-4 text-blue-600 text-sm font-medium">Jouer maintenant</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

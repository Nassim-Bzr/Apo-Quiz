import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader';

// Données factices pour simuler le chargement des quiz d'une catégorie
const fakeQuizzes = [
  { id: 1, title: "Quiz sur l'Histoire de France", difficulty: "Moyen", questionCount: 15 },
  { id: 2, title: "Les Grands Explorateurs", difficulty: "Difficile", questionCount: 20 },
  { id: 3, title: "La Révolution Française", difficulty: "Facile", questionCount: 10 },
  // Ajoutez d'autres quiz fictifs ici
];

function CurrentCategories() {
  const { slug } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    // Simuler un appel API
    setTimeout(() => {
      setQuizzes(fakeQuizzes);
      setCategoryName(slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' '));
      setLoading(false);
    }, 1500); // Simuler un délai de chargement de 1.5 secondes
  }, [slug]);

  if (loading) {
    return <div className="flex justify-center items-center h-64"><Loader /></div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Quizzes de {categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <Link key={quiz.id} to={`/quiz/${slug}/${quiz.id}`} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{quiz.title}</h2>
                <p className="text-sm text-gray-600 mb-4">Difficulté: {quiz.difficulty}</p>
                <p className="text-sm text-gray-600">{quiz.questionCount} questions</p>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <span className="text-blue-600 font-medium">Commencer le quiz</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CurrentCategories;

import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './style.css';
export default function SearchedPage() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <div className="searched-page">
      <h1 className="searched-page__title">Résultats de recherche</h1>
      <div className="searched-page__results">
        {searchResults.map((quizz) => (
          <Link
            key={quizz.id}
            to={`/quiz/${quizz.category}/${quizz.id}`}
            className="searched-page__result"
          >
            <p className="quizz-name">{quizz.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

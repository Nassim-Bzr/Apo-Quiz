import React from 'react'
import './create.css';
import img from '../assets/quizzo.jpg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../actions/favoris';

export default function Favoris({ isLogged }) {
  const favoriteQuizzes = useSelector((state) => state.favorites.favorites);
  console.log(favoriteQuizzes)

  const dispatch = useDispatch();

  return (
    <div className='app-contenor'>
      {isLogged ? (
        <>
          <h1 className='favoris-title'>Mes favoris</h1>
          <div className='div-article'>
            {favoriteQuizzes.length > 0 ? (
              favoriteQuizzes.map((quiz) => (
                <article className='article' key={quiz.id}>
                  <p className='title-article'>{quiz.title}</p>
                  <p className='category-article'>{quiz.description}</p>
                  <Link className='title-article' to={`/quiz/${quiz.category.id}/${quiz.id}`}>
                    <img src={img} className='img-favoris'  />
                  </Link>
                <button onClick={() => dispatch(removeFavorite(quiz.id))} className='remove-favoris'>Supprimer</button>

                  <button className="btn-history">
                    <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" className="icon">
                    </svg>
                  </button>
                </article>
              ))
              ) : (
                <p className='text-nowfavoris'>Aucun quiz en favori </p>
                )}
                </div>
        </>
      ) : (
        <h1>Vous devez vous connecter</h1>
      )}
    </div>
  );
}
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuizz } from 'actions/quizz';
import axios from 'axios';
import { addFavorite } from '../actions/favoris';

export default function CurrentCategories() {

  const { id } = useParams();
  const dispatch = useDispatch();

  const [quizzList, setQuizzList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAlreadyFavorited, setIsAlreadyFavorited] = useState(false);
  const favoriteQuizzes = useSelector((state) => state.favorites.favorites);
  const isLogged = useSelector((state) => state.user.logged);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const fetchQuizz = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/api/quizz?category=${id}`);
        setQuizzList(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuizz();
  }, [id]);

  const addToFavorites = (quiz) => {
    const alreadyFavorited = favoriteQuizzes.some(favoriteQuiz => favoriteQuiz.id === quiz.id);
    if (alreadyFavorited) {
      setIsAlreadyFavorited(true);
      setTimeout(() => {
        setIsAlreadyFavorited(false);
      }, 2000); // Hide message after 3 seconds
      return;
    }
    dispatch(addFavorite(quiz));
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000); // Hide message after 3 seconds
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <div className='contain-categories'>
        <h1 className='header-categories'>  {id}</h1>
        {isAlreadyFavorited && (
          <p className='text-alreadyfavoris'>Vous avez déjà ajouté ce quiz à vos favoris</p>
        )}
        {showConfirmation && (
          <p className='text-addfavoris'>Le quiz a été ajouté à vos favoris</p>
        )}
        <div className='div-article'>
          {quizzList.map(quizz => (
            <div className='img-categories quizz-image-container' key={quizz.id}>
              <Link to={`/quiz/${id}/${quizz.id}`} className='titl-article'>

                <p className='quizzname'> {quizz.title} </p>

              </Link>
              {isLogged && (
                <button onClick={() => addToFavorites(quizz)} className='add-favoris'>Add Favoris ❤️</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
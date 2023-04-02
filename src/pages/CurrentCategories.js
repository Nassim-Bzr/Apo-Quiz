import React, { Fragment, useEffect, useState  } from 'react'
import { Link, useParams } from 'react-router-dom'
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuizz } from 'actions/quizz';
import axios from 'axios';

export default function CurrentCategories() {

  const { id } = useParams();
  const dispatch = useDispatch();

  const [quizzList, setQuizzList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoriteQuizzes, setFavoriteQuizzes] = useState([]);
  const isLogged = useSelector((state) => state.user.logged);


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
  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(favoriteQuizzes)
  // const quizz = useSelector((state) => findQuiz(state.quizz.list , id));
  // const quizz = useSelector((state) => state.quizz.list);

  // const quizz = useSelector((state) =>
  //   state.quizz.list.filter((quiz) =>
  //     quiz.category.some((cat) => cat.id === id)
  //   )

  // );
// console.log(quizz)
  return (
    <Fragment>
      <div className='contain-categories'>
              <h1 className='header-categories'>  {id}</h1>
        <div className='div-article'>
          
        {quizzList.map(quizz => (
                     <div className='img-categories quizz-image-container' >
                    <Link to={`/quiz/${id}/${quizz.id}`} className='titl-article' key={quizz.title}>

                            <p className='quizzname'> {quizz.title} </p>

                    </Link>
                    {isLogged && (
  <button onClick={() => setFavoriteQuizzes([...favoriteQuizzes, quizz])}>Add Favoris ❤️</button>
)}                        </div>
                ))}
         
       
      
        </div>
      </div>
    </Fragment>
  )
}

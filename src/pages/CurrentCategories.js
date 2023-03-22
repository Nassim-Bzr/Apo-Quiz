import React, { Fragment, useEffect  } from 'react'
import { Link, useParams } from 'react-router-dom'
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuizz } from 'actions/quizz';

export default function CurrentCategories({quizz}) {

  const { id } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchQuizz());
    console.log('fetchQuizz')
  }, []);
  // const quizz = useSelector((state) => findQuiz(state.quizz.list , id));
  // const quizz = useSelector((state) => state.quizz.list);

  // const quizz = useSelector((state) =>
  //   state.quizz.list.filter((quiz) =>
  //     quiz.category.some((cat) => cat.id === id)
  //   )

  // );
console.log(quizz)
  return (
    <Fragment>
      <div className='contain-categories'>
              <h1 className='header-categories'>  {id}</h1>
        <div className='div-article'>
          
        {quizz.map(quizz => (
                    <Link to={`/quizz/${id}/${quizz.title}`} className='titl-article' key={quizz.name}>
                     <div className='img-categories quizz-image-container' >

                            <p className='quizzname'> {quizz.title} </p>


                        </div>
                    </Link>
                ))}
         
       
      
        </div>
      </div>
    </Fragment>
  )
}

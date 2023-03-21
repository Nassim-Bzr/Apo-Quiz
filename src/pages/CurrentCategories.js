import React, { Fragment  } from 'react'
import { Link, useParams } from 'react-router-dom'
import './index.css'
import { useSelector } from 'react-redux'

export default function CurrentCategories() {

  const { id } = useParams();

  // const quizz = useSelector((state) => findQuiz(state.quizz.list , slug));
  const quizz = useSelector((state) => state.quizz.list);


  return (
    <Fragment>
      <div className='contain-categories'>
              <h1 className='header-categories'>  {id}</h1>
        <div className='div-article'>
          
            <Link  className='link-quizz' to={`/quiz/${id}`}>
              <article className='article'>
                <p>Quizz {id}</p>
                <img className='img-categories' src={id} alt={quizz.name} />
              
              </article>
            </Link>
         
       
      
        </div>
      </div>
    </Fragment>
  )
}

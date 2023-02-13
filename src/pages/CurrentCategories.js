import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './index.css'
import imgCategory from '../assets/geo.jpg'

export default function CurrentCategories() {
 



  return (
      
      
      
      <>
        


        <div className='contain-categories'>
            <h1 className='header-categories'>Géographie:</h1>
            <div className='div-article'>
             <Link className='link-quizz' to='/quiz'>
            <article className='article'>
            <p className='title-article'>Capitales</p>
                <img className='img-categories' src={imgCategory}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            </Link >
            <Link className='link-quizz' to='/quiz'>
            <article className='article'>
            <p className='title-article'>Capitales</p>
                <img className='img-categories' src={imgCategory}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            </Link >
            <Link className='link-quizz' to='/quiz'>
            <article className='article'>
            <p className='title-article'>Capitales</p>
            <img className='img-categories' src={imgCategory}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            </Link >
            <Link className='link-quizz' to='/quiz'>
            <article className='article'>
            <p className='title-article'>Capitales</p>
                <img className='img-categories' src={imgCategory}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            </Link >
            <Link className='link-quizz' to='/quiz'>
            <article className='article'>
            <p className='title-article'>Capitales</p>
                <img className='img-categories' src={imgCategory}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            </Link >
            <Link className='link-quizz' to='/quiz'>
            <article className='article'>
            <p className='title-article'>Capitales</p>
                <img className='img-categories' src={imgCategory}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            </Link >
            </div>
            
        </div>










    </>
  )
}

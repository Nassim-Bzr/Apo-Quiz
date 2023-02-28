import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './index.css'
import imgCategory from '../assets/geo.jpg'

export default function CurrentCategories() {




    return (



        <Fragment>



            <div className='contain-categories'>
                <h1 className='header-categories'>Géographie:</h1>
                <div className='div-article'>
                    <Link className='link-quizz' to='/quiz'>
                        <article className='article'>
                            <img className='img-categories' src={imgCategory}></img>
                            <p className='title-article'> Quizz Capitales</p>

                        </article>
                    </Link >
                    <Link className='link-quizz' to='/quiz'>
                        <article className='article'>
                            <img className='img-categories' src={imgCategory}></img>
                            <p className='title-article'>Quizz Capitales</p>

                        </article>
                    </Link >
                    <Link className='link-quizz' to='/quiz'>
                        <article className='article'>
                            <img className='img-categories' src={imgCategory}></img>
                            <p className='title-article'> Quizz Capitales</p>

                        </article>
                    </Link >
                    <Link className='link-quizz' to='/quiz'>
                        <article className='article'>
                            <img className='img-categories' src={imgCategory}></img>
                            <p className='title-article'> Quizz Capitales</p>

                        </article>
                    </Link >
                    <Link className='link-quizz' to='/quiz'>
                        <article className='article'>
                            <img className='img-categories' src={imgCategory}></img>
                            <p className='title-article'> Quizz Capitales</p>

                        </article>
                    </Link >
                    <Link className='link-quizz' to='/quiz'>
                        <article className='article'>
                            <img className='img-categories' src={imgCategory}></img>
                            <p className='title-article'> Quizz Capitales</p>

                        </article>
                    </Link >
                </div>

            </div>










        </Fragment>
    )
}
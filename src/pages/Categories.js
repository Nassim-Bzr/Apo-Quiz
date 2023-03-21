// @ts-nocheck
import React, { useState, useEffect } from 'react';

import './categoriess.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';





export default function Categories() {

    const quizz = useSelector((state) => state.quizz.list);

    return (
        <div className='containor-categories'>
            <h1 className='header-categories'>Categories : </h1>
            <div className='container'>
                {quizz.map(quiz => (
                    <Link to={`/categories/${quiz.slug}`} className='titl-article' key={quiz.name}>
                     <div className='img-categories category-image-container' style={{ backgroundImage: `url(${quiz.imageUrl})` }}>

                            <p className='category-name'> {quiz.name} </p>


                        </div>
                    </Link>
                ))}

                {/* Div */}
            </div>
        </div>
    )
}
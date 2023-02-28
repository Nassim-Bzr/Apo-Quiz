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
            {quizz.map(category => (
                    <Link to={`/categories/${category.slug}`} className='titl-article' key={category.name}>
                <div className='categories-card' >
                        <p className='category-name'> {category.name} </p>
                        
                        <img src={category.imageUrl} className='img-categories'></img>
                </div>
                    </Link>
             ))}
            
            {/* Div */}
           </div>
        </div>
    )
}
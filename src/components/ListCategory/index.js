// @ts-nocheck
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './style.scss'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ListCategory() {




    const category = useSelector((state) => state.category.list);


    
    return (
        <>
        <div className='app-contenor'>
        <div className='backgroundCategory'>
        <div className='ListCategory'>
            <span className='title-categories'>Catégories :</span>
            <div className='categories-column'>
            <ul >
            {category.map(category => (
                <li className='li-link'  key={category.id}  >
                <Link className='link-categories'to={`/categories/${category.slug}`}>
                    {category.name}
                </Link>
                </li>
                ))}
            </ul>



        </div>
        </div>
        
        </div>
      
        </div>
        </>
    )
}
        

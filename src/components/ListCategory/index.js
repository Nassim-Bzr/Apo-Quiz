import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './style.scss'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function ListCategory() {

    let { slug } = useParams();
    const [categories,setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/api/tag')
          .then(res => setCategories(res.data))
          .catch(err => console.log(err));
      }, []);
    
    return (
        <>
        <main className='app-contenor'>
        <div className='backgroundCategory'>
        <div className='ListCategory'>
            <span className='title-categories'>Catégories :</span>
            <div className='categories-column'>
            <ul >
            {categories.map(category => (
                <li className='li-link' >
                <Link className='link-categories' key={category.id} to={`/categories/${slug}`}>
                    {category.name}
                </Link>
                </li>
                ))}
            </ul>



        </div>
        </div>
        
        </div>
      
        </main>
        </>
    )
}
        

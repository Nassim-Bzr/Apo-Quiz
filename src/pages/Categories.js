import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './categoriess.css'
import { Link } from 'react-router-dom';





export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8082/api/category')
        .then(res => setCategories(res.data))
        .catch(err => console.log(err));
    }, []);
    return (
        <div className='containor-categories'>
            <h1 className='header-categories'>Categories : </h1>
            <div className='container'> 
            {categories.map(category => (
                    <Link to={`/categories/${category.slug}`} className='titl-article' >
                <div className='categories-card' key={category.id}>{category.name}
                        <h3> Title card </h3>
                        
                        <img src={category.imageUrl}></img>
                </div>
                    </Link>
             ))}

            {/* Div */}
           </div>
        </div>
    )
}
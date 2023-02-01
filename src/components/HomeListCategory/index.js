import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom';

export default function HomeList() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/api/category')
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, []);

  return (

    <div className='HomeList'>
      <h1> Quizz aléatoire  </h1>
      <div className='container'>
            {categories.map(category => (
                    <Link to={`/categories/${category.slug}`} key={category.id} className='title-article' >
                <div className='home-card' >
                        <h3 className='titleimg-home'> {category.name}</h3>
                        <img src={category.imageUrl} className='img-home'></img>
                        
                </div>
                    </Link>
             ))}

            {/* Div */}
           </div>
    </div>
  )
}

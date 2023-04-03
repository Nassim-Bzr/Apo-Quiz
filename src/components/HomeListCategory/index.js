import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function HomeList() {

  const [quizz, setQuizz] = useState([]);
  const [selectedButton, setSelectedButton] = useState(''); // default is 'populaires'

  // state pour stocker l'option choisie
  const [option, setOption] = useState('populaires');

  // fonction pour mettre à jour l'option choisie
  const handleOptionClick = (newOption) => {
    setOption(newOption);
    setSelectedButton(newOption)
  };

  // contenu du titre en fonction de l'option choisie
  const titleContent = option === 'populaires' ? 'Quizz les + populaires' :
    option === 'recents' ? 'Quizz les + récents' :
      option === 'hasard' ? 'Quizz au hasard' : '';

  useEffect(() => {
    const fetchQuizz = async () => {
      try {
        let url = 'http://localhost:8082/api/quizz';
        switch (option) {
          case 'populaires':
            url += '?sort=popularity';
            break;
          case 'recents':
            url += '?sort=createdAt';
            break;
          case 'hasard':
            url += '?sort=random';
            break;
          default:
            url += '?sort=popularity';
            break;
        }
        const response = await axios.get(url);
        setQuizz(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuizz();
  }, [option]);

  return (
    <div className='HomeList'>
      <h1> {titleContent} </h1>
      <div className='div-choice'>
        <button>
          <Link className={`choice-home ${selectedButton === 'populaires' ? 'selected' : ''}`} onClick={() => handleOptionClick('populaires')} to={''}> LES + POPULAIRES</Link>
        </button>
        <button>
          <Link onClick={() => handleOptionClick('recents')} className={`choice-home ${selectedButton === 'recents' ? 'selected' : ''}`} to={''}> LES + RECENTS</Link>
        </button>
        <button >
          <Link className={`choice-home ${selectedButton === 'hasard' ? 'selected' : ''}`} onClick={() => handleOptionClick('hasard')} to={''}> AU HASARD</Link>
        </button>
      </div>
      <div className='container'>
        {quizz.map(quiz => (
          <p className='category-name'> {quiz.title} </p>
        ))}
      </div>
    </div>
  )
}
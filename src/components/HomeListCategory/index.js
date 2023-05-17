import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function HomeList() {

  const [quizzList, setQuizzList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const [quizz, setQuizz] = useState([]);
  const [selectedButton, setSelectedButton] = useState(''); // default is 'populaires'

  // state pour stocker l'option choisie
  const [option, setOption] = useState('populaires');

  // fonction pour mettre à jour l'option choisie
  const handleOptionClick = (newOption) => {
    setOption(newOption);
    setSelectedButton(newOption)
  };

  // // contenu du titre en fonction de l'option choisie
  // const titleContent = option === 'populaires' ? 'Quizz les + populaires' :
  //   option === 'recents' ? 'Quizz les + récents' :
  //     option === 'hasard' ? 'Quizz au hasard' : '';

  useEffect(() => {
    const fetchQuizz = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/api/quizz`);
        setQuizzList(response.data);
        setLoading(false);
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuizz();
  }, [id]);

  return (
    <div className='HomeList'>
      <h1 className='title-home'> QUIZZ LES + RECENTS</h1>
      <div>
        {
          quizz.map(q => (
            <div key={q.id}>
              <h2>{q.title}</h2>
              <p>{q.description}</p>
              {/* Vous pouvez également ajouter d'autres informations que vous souhaitez afficher ici */}
            </div>
          ))
        }
      </div>
    </div>
  )
}
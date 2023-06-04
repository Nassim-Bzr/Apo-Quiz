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



  // // contenu du titre en fonction de l'option choisie
  // const titleContent = option === 'populaires' ? 'Quizz les + populaires' :
  //   option === 'recents' ? 'Quizz les + récents' :
  //     option === 'hasard' ? 'Quizz au hasard' : '';


  useEffect(() => {
    const fetchQuizz = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/api/quizz`);
        let shuffledQuizzList = response.data.sort(() => Math.random() - 0.5);
        setQuizzList(shuffledQuizzList.slice(0, 6));
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
      <h1 className='title-home'> QUIZZ AU HASARD</h1>
      <div>
        {
          quizzList.map(q => (
            // <img src={img} className='img-favoris'  />
            <Link className='title-article' to={`/quiz/${q.category.id}/${q.id}`}>
            <div className='quizz' key={q.id}>
              <h2>{q.title}</h2>
              <p>{q.description}</p>
              {/* Vous pouvez également ajouter d'autres informations que vous souhaitez afficher ici */}
            </div>
                  </Link>
          ))
        }
      </div>
    </div>
  )
}
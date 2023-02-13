import React from 'react';
import './Page404.css';
import img404 from '../assets/err404.png'
import { Link } from 'react-router-dom';
const Page404 = () => {
  return (
    <div className="page404-container">
      <img className='logo-404' src={img404}/>
      <h1 className='h1-404'>Oops! Page non trouvée</h1>
      <p className='p-404'>La page que vous avez demandée n'a pas été trouvée sur ce site.</p>
      <Link to="/">
      <button className='button-404'>Retour à l'accueil</button>
      </Link>
   </div>
  );
};

export default Page404;

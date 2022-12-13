import React from 'react'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar';
import './index.css';

export default function About() {
    return (
        <div>
           
        <div>
             <h1 className="about-title" >A propos</h1>
             <div className='about-content'>
             <h2 className='about-titl'>Plus de 130 quiz divisés en sept grandes catégories
             </h2>
             <p className='about-text'>Vous êtes un mordu de sport, d’histoire, de géographie, de la vie animale, de culture, de science ou de la langue française? Explorez chacune de nos sept catégories pour tester vos connaissances.</p>
            </div>
            <h2 className='about-titl'>Plus de 4 500 questions aléatoires</h2>
            <p className='about-text'>Vous pensez avoir répondu à un quiz? Retournez-y et vous y trouverez de nouvelles questions. Nous en avons plus de 4 500 en réserve pour vous, que nous vous offrons de façon aléatoire, de façon à vous garder sur le qui-vive.</p>
            <h2 className='about-titl'>Lancez-vous : jouez dès maintenant</h2>
            <p className='about-text'>Cliquez sur l’un des quiz ci-dessous ou recherchez une thématique particulière en utilisant le moteur de recherche.

</p>
            
        </div>
        </div>
    )
}

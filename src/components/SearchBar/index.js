import React from 'react'
import './style.scss';
 
export default function SearchBar() {
    return (
        <div className='SearchBar'>
            <a className='button-searchBar' href='/home'>HOME</a>
            <a className='button-searchBar' href='/categories'>CATEGORIES</a>
            <a className='button-searchBar' href='/create-quiz'>CREER UN QUIZ</a>
            <input  className='input-search' type="text" placeholder="Rechercher un quiz..."></input>
            <a className='button-searchBar' href='/contact'>NOUS CONTACTER</a>
            <a className='button-searchBar' href='/faq'>FAQ</a>
            <a className='button-searchBar' href='/a-propos'>A PROPOS</a>
            
    
        </div>
    )
}

import React from 'react'
import './style.scss';
 
export default function SearchBar() {
    return (
        <div className='SearchBar'>
            <button className='button-searchBar'>HOME</button>
            <button className='button-searchBar'>CATEGORIES</button>
            <button className='button-searchBar'>CREER UN QUIZ</button>
            <input  className='input-search' type="text" placeholder="Rechercher un quiz..."></input>
            <button className='button-searchBar'>NOUS CONTACTER</button>
            <button className='button-searchBar'>FAQ</button>
            <button className='button-searchBar'>A PROPOS</button>
            
    
        </div>
    )
}

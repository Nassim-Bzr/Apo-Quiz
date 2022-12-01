import React from 'react';
import './style.scss';
import PropTypesLibrary from 'prop-types';

 
function SearchBar({handleSearchChange , search}) {

   
      console.log(search)
    return (
        <div className='SearchBar'>
            <a className='button-searchBar' href='/'>HOME</a>
            <a className='button-searchBar' href='/categories'>CATEGORIES</a>
            <a className='button-searchBar' href='/create-quiz'>CREER UN QUIZ</a>
            <input className='input-search' type="text"
            value={search} 
            onChange={(event)=> {
                handleSearchChange(event.target.value)
            }}
             placeholder="Rechercher un quiz..."/> 
            <a className='button-searchBar' href='/contact'>NOUS CONTACTER</a>
            <a className='button-searchBar' href='/faq'>FAQ</a>
            <a className='button-searchBar' href='/about'>A PROPOS</a>
            
    
        </div>
    )
}

SearchBar.propTypes = {
    search: PropTypesLibrary.string.isRequired,
    handleSearchChange: PropTypesLibrary.func.isRequired,
  };

export default SearchBar;
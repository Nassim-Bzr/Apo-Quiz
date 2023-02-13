import React from 'react';
import './style.scss';
import PropTypesLibrary from 'prop-types';
import { Link } from 'react-router-dom';

 
function SearchBar({handleSearchChange , search}) {
   
      function handleSubmit(e) {
        // e.preventDefault();
        alert('Recherche en cours...')
        //Logic to submit the form
      }

    
// Determine whether the sentiment of text is positive
// Use a web service
      console.log(search)
    return (
        <div className='SearchBar'>
            <Link className='button-searchBar' to={'/'}>HOME</Link>
            <Link className='button-searchBar' to='/categories'>CATEGORIES</Link>
            <Link className='button-searchBar' to='/favoris'>MES FAVORIS</Link>
           <form>
            <input id='input-search' type="text"
            value={search} 
            onChange={(event)=> {
                handleSearchChange(event.target.value)
            }}
            onSubmit={handleSubmit}
             placeholder="Rechercher un quiz..."/> 
            </form>
            <Link className='button-searchBar' to='/contact'>NOUS CONTACTER</Link>
            <Link className='button-searchBar' to='/faq'>FAQ</Link>
            <Link className='button-searchBar' to='/about'>A PROPOS</Link>
            
    
        </div>
    )
}

SearchBar.propTypes = {
    search: PropTypesLibrary.string.isRequired,
    handleSearchChange: PropTypesLibrary.func.isRequired,
  };

export default SearchBar;
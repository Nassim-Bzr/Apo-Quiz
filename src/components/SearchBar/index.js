import React from 'react';
import './style.scss';
import PropTypesLibrary from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Input, Segment } from 'semantic-ui-react';


function SearchBar({ handleSearchChange, search }) {

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
      <Link className='button-searchBar' to={'/'}>
        <i className="material-icons">home</i>
      </Link>
      <Link className='button-searchBar' to='/categories'>CATEGORIES</Link>
      <Link className='button-searchBar' to='/classement'> CLASSEMENT</Link>
      <Form>
        <Input 
          aria-label="Termes à rechercher"

          value={search}
          icon="search"
          iconPosition="left"
          fluid
          onChange={(event) => {
            handleSearchChange(event.target.value)
          }}
          onSubmit={handleSubmit}
          placeholder="Votre recherche"
          />
      </Form>
      <Link className='button-searchBar' to='/create'>CREER UN QUIZZ</Link>
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
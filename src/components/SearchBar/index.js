import React, { useState } from 'react';
import './style.scss';
import PropTypesLibrary from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Input, Segment } from 'semantic-ui-react';

function SearchBar({ handleSearchChange, search }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSubmit(e) {
    alert('Recherche en cours...')
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className='SearchBar'>
      <button className='menu-button' onClick={toggleMenu}>
        <i className='material-icons'>menu</i>
      </button>
      {menuOpen && (
        <div className='menu'>
          <Link className='button-searchBar' to={'/'}>
            <i className="material-icons">home</i>
          </Link>
          <Link className='menu-link' to='/categories'>CATEGORIES</Link>
          <Link className='menu-link' to='/classement'> CLASSEMENT</Link>
          <Link className='menu-link' to='/create'>CREER UN QUIZZ</Link>
          <Link className='menu-link' to='/favoris'>FAVORIS</Link>
          <Link className='menu-link' to='/about'>A PROPOS</Link>
        </div>
      )}
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
    </div>
  )
}

SearchBar.propTypes = {
  search: PropTypesLibrary.string.isRequired,
  handleSearchChange: PropTypesLibrary.func.isRequired,
};

export default SearchBar; 
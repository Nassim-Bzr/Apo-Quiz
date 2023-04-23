import React, { useEffect, useState } from 'react';
import './style.scss';
import PropTypesLibrary from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Input, Segment } from 'semantic-ui-react';
import { slide as Menu } from 'react-burger-menu'

function SearchBar({ handleSearchChange, search }) {
  
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleSubmit(e) {
    // e.preventDefault();
    alert('Recherche en cours...')
    //Logic to submit the form
  }

  function handleResize() {
    const windowWidth = window.innerWidth;
    setIsMobile(windowWidth <= 768);
    setIsTablet(windowWidth > 768 && windowWidth <= 1025);
  }

  const handleCloseMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  return (
    <div className='SearchBar'>
      {isMobile || isTablet ?
        <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} className='menu-burger'>
          <Link className='button-searchBar' to={'/'} onClick={() => setIsMenuOpen(false)}>
            <i className="material-icons">home</i>
          </Link>
          <Link to='/categories' onClick={() => handleCloseMenu}>CATEGORIES</Link>
          <Link to='/classement' onClick={() => setIsMenuOpen(false)}> CLASSEMENT</Link>
          <Link to='/create' onClick={() => setIsMenuOpen(false)}>CREER UN QUIZZ</Link>
          <Link to='/favoris' onClick={() => setIsMenuOpen(false)}>FAVORIS</Link>
          <Link to='/about' onClick={() => setIsMenuOpen(false)}>A PROPOS</Link>
        </Menu>
        :
        <>
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
          <Link className='button-searchBar' to='/favoris'>FAVORIS</Link>
          <Link className='button-searchBar' to='/about'>A PROPOS</Link>
        </>
      }
    </div>
  )
}

export default SearchBar;

import React, { useEffect, useState } from 'react';
import './style.scss';
import PropTypesLibrary from 'prop-types';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Importez useLocation et useNavigate
import { Form, Input, Segment } from 'semantic-ui-react';
import { slide as Menu } from 'react-burger-menu'

function SearchBar({ setSearchResults }) {
  
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [tempResults, setTempResults] = useState([]);

  // const [searchResults, setSearchResults] = useState([]);

  const location = useLocation(); // Utilisez useLocation
  const navigate = useNavigate(); // Utilisez useNavigate

  function handleSubmit(e) {
    e.preventDefault();
    setSearchResults(tempResults); // Envoyez les résultats de la recherche à l'état parent
    navigate('/search-results', { state: { searchResults: tempResults } }); // Naviguez vers la page de résultats
    console.log('click')
  }
  async function fetchQuizzes(query) {
    const response = await fetch(`http://localhost:8082/api/quizz/search?title=${query}`);
    const data = await response.json();
    setTempResults(data); // Mettez à jour l'état temporaire ici
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

  useEffect(() => {
    setIsMenuOpen(false); // Fermez le menu lorsque le chemin d'accès change
  }, [location]);

  let searchDebounce = null;  // Définir une variable pour le délai

  function handleSearchChange(value) {
    setSearch(value);
  
    if (searchDebounce) {
      clearTimeout(searchDebounce);
    }
  
    searchDebounce = setTimeout(() => {
      fetchQuizzes(value);
    }, 500);  // Ajouter un délai de 500ms
  }
  
  return (
    <div className='SearchBar'>
      {isMobile || isTablet ?
        <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false )} className='menu-burger'>
          <Link className='button-searchBar' to={'/'} onClick={() => setIsMenuOpen(true)}>
            <i className="material-icons">home</i>
          </Link>
          <Link to='/categories'  onClick={() => setIsMenuOpen(true)}>CATEGORIES</Link>
          <Link to='/classement' onClick={() => setIsMenuOpen(true)}> CLASSEMENT</Link>
          <Link to='/create' onClick={() => setIsMenuOpen(true)}>CREER UN QUIZZ</Link>
          <Link to='/favoris' onClick={() => setIsMenuOpen(true)}>FAVORIS</Link>
          <Link to='/about' onClick={() => setIsMenuOpen(true)}>A PROPOS</Link>
        </Menu>
        :
        <>
          <Link className='button-searchBar' to={'/'}>
            <i className="material-icons">home</i>
          </Link>
          <Link className='button-searchBar' to='/categories'>CATEGORIES</Link>
          <Link className='button-searchBar' to='/classement'> CLASSEMENT</Link>
          <Form    onSubmit={handleSubmit}>
            <Input
              aria-label="Termes à rechercher"
              value={search}
              icon="search"
              iconPosition="left"
              fluid
              onChange={(event) => {
                handleSearchChange(event.target.value)
              }}
           
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

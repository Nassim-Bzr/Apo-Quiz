import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../SearchBar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoprof from '../../assets/user.png';
function Header() {

  const isLogged = useSelector((state) => state.user.logged);
  const [searchResults, setSearchResults] = useState([]);




  return (
    <>
      <header className='Header'>
        <Link to='/'>
      <button data-text="Awesome" className="button-logo">
    <span className="actual-text">&nbsp;goquiz&nbsp;</span>
    <span className="hover-text" aria-hidden="true">&nbsp;goquiz
    &nbsp;</span>
</button>

</Link>
{isLogged ? (
     <>
     <Link to='/profile'>
     <img className='logoprof' src={logoprof} alt="logo" />
     </Link>
 
</>
):(
         
        <Link className='link-login' to='/Login'>
     <img className='logoprof' src={logoprof} alt="logo" />
        </Link>
)};
       
      </header>
      <SearchBar setSearchResults={setSearchResults} searchResults={searchResults} />


    </>
  )
}
export default Header
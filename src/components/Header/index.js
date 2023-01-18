import './style.css';
// import LoginForm from '../LoginForm';
import { useDispatch, useSelector } from 'react-redux';
// import { actionChangeInputValue, actionCheckLogin, actionDeconnectUser } from '../../actions/user';
import SearchBar from '../SearchBar';
import React, { useState } from 'react';
// @ts-ignore
import { useEffect } from 'react';


function Header() {

  // const valueFromStore = useSelector((state) => state.isOk)
  // const dispatch = useDispatch();
  // const {toggleModals} = useContext(UserContext);
  const [search, setSearch] = useState('');

  // @ts-ignore
  const isLogged = useSelector((state) => state.user.logged);
  // @ts-ignore
  const pseudo = useSelector((state) => state.user.pseudo);


  // const dispatch = useDispatch();
  // @ts-ignore
  const email = useSelector((state) => state.user.email);
  // @ts-ignore
  const password = useSelector((state) => state.user.password);
  // @ts-ignore
  const dispatch = useDispatch();
  return (
    <>
      <header className='Header'>
        <a href='/'>
      <button data-text="Awesome" className="button-logo">
    <span className="actual-text">&nbsp;goquiz&nbsp;</span>
    <span className="hover-text" aria-hidden="true">&nbsp;goquiz
    &nbsp;</span>
</button>
</a>
        <a href='/signup'>
        <button className='button-login'   >Inscription </button>
        </a>
        <a href='/profile'>
        <button className='button-profil'   >Mon profil </button>
        </a>
       
      </header>
        <SearchBar search={search} handleSearchChange={setSearch} />

    </>
  )
}
export default Header
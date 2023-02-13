import './style.css';
// import LoginForm from '../LoginForm';
import { useDispatch, useSelector } from 'react-redux';
// import { actionChangeInputValue, actionCheckLogin, actionDeconnectUser } from '../../actions/user';
import SearchBar from '../SearchBar';
import React, { useState } from 'react';
// @ts-ignore
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoprofil from '../../assets/profil.png'
// import { actionCheckLogin, actionDeconnectUser } from 'actions/user';

function Header({isLogged}) {

  // const valueFromStore = useSelector((state) => state.isOk)
  // const dispatch = useDispatch();
  // const {toggleModals} = useContext(UserContext);
  const [search, setSearch] = useState('');


  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };
  // @ts-ignore
  // const isLogged = useSelector((state) => state.user.logged);
  // @ts-ignore
  // const pseudo = useSelector((state) => state.user.pseudo);


  // const dispatch = useDispatch();
  // @ts-ignore
  // const email = useSelector((state) => state.user.email);
  // // @ts-ignore
  // const password = useSelector((state) => state.user.password);
  // @ts-ignore
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
  <button className='button-profil'> Profil</button>
     </Link>
     <Link to='/'>
     <button className='button-connexion' onClick={handleLogout}> Deconnexion</button>
     </Link>
</>
):(
         
        <Link to='/Login'>
        <button className='button-connexion'> Connexion / Inscription </button>

        </Link>
)};
        {/* <Link to='/signup'>
        <button className='button-login'>Inscription </button>
        </Link> */}
       

      </header>
        <SearchBar search={search} handleSearchChange={setSearch} />

    </>
  )
}
export default Header
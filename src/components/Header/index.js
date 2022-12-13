import logo from '../../assets/logoquizz.png'
import './style.css';
import LoginForm from '../LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { actionChangeInputValue, actionCheckLogin, actionDeconnectUser } from '../../actions/user';
import SearchBar from 'components/SearchBar';
import React, { useState } from 'react';
import { useEffect } from 'react';
import NavBar from 'components/NavBar'
import { Button } from 'semantic-ui-react';

function Header() {

  // const valueFromStore = useSelector((state) => state.isOk)
  // const dispatch = useDispatch();
  // const {toggleModals} = useContext(UserContext);
  const [search, setSearch] = useState('');

  const isLogged = useSelector((state) => state.user.logged);
  const pseudo = useSelector((state) => state.user.pseudo);

  // const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const dispatch = useDispatch();
  return (
    <>
      <header className='Header'>
        <a href='/'>
          <img src={logo} className='img-logo' alt="GoQuizz Logo" />
        </a>
        <a href='/SignUp'>
        <Button>Sign Up</Button>
        </a>
        <LoginForm
          email={email}
          password={password}
          changeField={(inputValue, inputName) => {

            dispatch(actionChangeInputValue(inputValue, inputName));
          }}
          handleLogin={() => {
            dispatch(actionCheckLogin())
            console.log('handleLogin');
          }}
          handleLogout={() => {
            console.log('handleLogout');
            /* le user se deconnecte on dispatch actionDeconnectUser */
            dispatch(actionDeconnectUser());
          }}
          isLogged={isLogged}
          loggedMessage={`Bienvenue ${pseudo}`} />

        <SearchBar search={search} handleSearchChange={setSearch} />
      </header>

    </>
  )
}
export default Header
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../SearchBar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoprof from '../../assets/user.png';
function Header() {

  // const valueFromStore = useSelector((state) => state.isOk)
  // const dispatch = useDispatch();
  // const {toggleModals} = useContext(UserContext);
  // const [search, setSearch] = useState('');
  const [dropdownValue, setDropdownValue] = useState(''); // initial value is empty string
  const isLogged = useSelector((state) => state.user.logged);


  const dispatch = useDispatch();

  // const handleLogout = () => {
  //   dispatch({
  //     type: 'LOGOUT',
  //   });
  // };
  // @ts-ignore
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
     <img className='logoprof' src={logoprof} alt="logo" />
     </Link>
 
</>
):(
         
        <Link to='/Login'>
     <img className='logoprof' src={logoprof} alt="logo" />
        </Link>
)};
       
      </header>
        <SearchBar  />

    </>
  )
}
export default Header
import React from 'react'
import logo from '../../assets/logoquizz.png'
import './style.css';

export default function Header() {
    return (
        <div className='Header'>
           <img src={logo} alt="GoQuizz Logo"/>
           <a className='link-login' href='/login'> Se connecter/ S'inscrire</a>
        </div>
    )
}

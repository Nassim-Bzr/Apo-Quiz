import React from 'react';
import logo from '../../assets/logoquizz.png';
import './style.scss';


export default function Header() {
    return (
        <div className='Header'>
                  <img src={logo} className="header-logo" alt="Logo GoQuizz" />
                  <button className='Login'>Se connecter / S'inscrire</button>
            
            
        </div>
    )
}

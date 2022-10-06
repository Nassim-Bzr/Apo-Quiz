import React from 'react'
import './style.scss'

export default function index() {
    return (
        <div className='app-contenor'>
        <div className='backgroundCategory'>
        <div className='ListCategory'>
            <span className='title-categories'>Catégories :</span>
            <div className='categories-column'>
            <ul >
                <li className='li-link'>
                <a className='link-categories' href="/">
                    Musique
                </a>
                </li>
                <li className='li-link'>
                <a className='link-categories' href="/">
                    Musique
                </a>
                </li> <li className='li-link'>
                <a className='link-categories' href="/">
                    Musique
                </a>
                </li> <li className='li-link'>
                <a className='link-categories' href="/">
                    Musique
                </a>
                </li>
            </ul>
             



        </div>
        </div>
        
        </div>
        <div className='CurrentChoic'>
            <div className='CurrentChoice'>
                <div className='choice'>
                
                     <button className='button-choice'> LES + POPULAIRES </button>
                    <button className='button-choice'> LES + RECENTS </button>
                    <button className='button-choice'> AU HASARD </button>
                </div>
            </div>
                 
        </div>
        </div>
    )
}

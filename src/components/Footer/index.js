import React from 'react'
import './style.scss'
import {Link} from "react-router-dom"
export default function Footer() {
    return (
        <>
               <footer>
                // how i can center input ? 
            <div className='firstFooter'> <Link to='/contact' className='link-footer'>Nous contacter</Link>
            <Link to='/cgv' className='link-footer' title='Test-title'>Conditions d’utilisations</Link>
            <Link to="/mentions-legales" className='link-footer'>Mentions légales </Link>
            <Link to='/politque-de-confidentitalite'className='link-footer' >Politique de confidentialité</Link>
            <Link to='/'className='link-footer' >Accueil</Link>
            <span className='newsletter'>Recevoir les nouveaux quizz chaque semaine : 
                <input type='text' placeholder='votre@email.com' className='input-newsletter'/>
            </span>
            
           
           
                <p className='text-footer'>Testez votre culture générale en jouant aux milliers de quizz proposés et créez votre propre quiz en quelques clics. <span className='span-footer'> © 2022 GoQuiz.com</span></p>
            
            </div>
        </footer>
        </>
    )
}

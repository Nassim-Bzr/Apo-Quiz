import React from 'react'
import './style.scss'

export default function Footer() {
    return (
        <>
        <footer>
            <div className='firstFooter'> <a href='/contact' className='link-footer'>Nous contacter</a>
            <a href='/cgv' className='link-footer'>Conditions d’utilisations</a>
            <a href="/mentions-legales" className='link-footer'>Mentions légales </a>
            <a href='/politque-de-confidentitalite'className='link-footer' >Politique de confidentialité</a>
            <span className='newsletter'>Recevoir les nouveaux quizz chaque semaine : 
                <input type='text' placeholder='votre@email.com' className='input-newsletter'/>
            </span>
            
           
           
                <p className='text-footer'>Testez votre culture générale en jouant aux milliers de quizz proposés et créez votre propre quiz en quelques clics. <span className='span-footer'> © 2022 GoQuiz.com</span></p>
            
            </div>
        </footer>
        </>
    )
}

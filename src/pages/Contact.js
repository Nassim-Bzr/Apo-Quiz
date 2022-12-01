import React from 'react'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import './main.css'

export default function Contact() {
    return (
        <div className='contact-form'>
            
            <h1 className='display-4'>Contactez nous !</h1>
            <div className='div-contact'>
            <p className ='contact-text' >
                Si votre question concerne l'utilisation de <a className='GoQuiz' href='/'>GoQuiz</a>, vérifiez tout d'abord que la réponse ne se trouve pas ci-dessous, ou dans l'aide et sur le forum fonctionnement du site.
                Vous souhaitez contacter l'équipe Culture Quizz ?

Nous faire une remarque sur notre site ? Nous suggérer une fonctionnalité ? Nous signaler un bug ?

Vous pouvez remplir le formulaire ce-dessous et nous reviendront vers vous dans les meilleurs délais :
            </p>
            </div>
            
        </div>
    )
}

import Footer from 'components/Footer'
import SearchBar from 'components/SearchBar'
import React from 'react'

export default function Faq() {
    return (
        <div className='contact-form'>
            
            <h1 className='contact-title'>FAQ</h1>
            <div className='div-contact'>
            <p className ='contact-text' >
                Si votre question concerne l'utilisation de <a className='GoQuiz' href='/'>GoQuiz</a>, vérifiez tout d'abord que la réponse ne se trouve pas ci-dessous, ou dans l'aide et sur le forum fonctionnement du site.
                
            </p>
            </div>
            
        </div>
    )
}
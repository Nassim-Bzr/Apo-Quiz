import React from 'react'
import './index.css'

export default function Contact() {
    return (
        <>
        <div className='app-contenor'>
            
            <h1 className='title-contact' >Contactez nous !</h1>
            <div className='div-contact'>
            <p className ='contact-text' >
                Si votre question concerne l'utilisation de <a className='GoQuiz' href='/'>GoQuiz</a>, vérifiez tout d'abord que la réponse ne se trouve pas ci-dessous, ou dans l'aide et sur le forum fonctionnement du site.
                Vous souhaitez contacter l'équipe Culture Quizz ?

Nous faire une remarque sur notre site ? Nous suggérer une fonctionnalité ? Nous signaler un bug ?

Vous pouvez remplir le formulaire ce-dessous et nous reviendront vers vous dans les meilleurs délais :
            </p>
            <form className='contact-form'>
<label htmlFor='name'>Nom :</label>
<input type='text' id='name' name='name' />
<label htmlFor='email'>Email :</label>
                    <input type='email' id='email' name='email' />

                    <label htmlFor='message'>Message :</label>
                    <textarea id='message' name='message'></textarea>

                    <button type='submit'>Envoyer</button>
                </form>

            </div>

        </div>
        </>
    )
}

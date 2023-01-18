import React from 'react'
import Footer from 'components/Footer'
import logo from '../assets/logoquizz.png'
import './index.css'
import logo_sport from '../assets/sport.jpg'
import logo_music from '../assets/mwusic.jpg'
import logo_jeux from '../assets/jeux.jpg'
import logo_geo from '../assets/geo.jpg'
import logo_hist from '../assets/hist.jpg'

export default function CurrentCategories() {
  return (
    <>
        


        <div className='contain-categories'>
            <h1 className='header-categories'>Geographie :</h1>
            <div className='div-article'>
             <a href='/quiz'>
            <article className='article'>
            <p className='title-article'>Capitales</p>
                <img className='img-categories' src={logo_hist}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            </a>
            <a href='/quiz'>
            <article className='article'>
            <p className='title-article'>Capitales</p>
                <img className='img-categories' src={logo_hist}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            </a>
            <a href='/quiz'>
            <article className='article'>
            <p className='title-article'>Capitales</p>
                <img className='img-categories' src={logo_hist}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            </a>
            <a href='/quiz'>
            <article className='article'>
            <p className='title-article'>Capitales</p>
                <img className='img-categories' src={logo_hist}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            </a>
            <a href='/quiz'>
            <article className='article'>
            <p className='title-article'>Capitales</p>
                <img className='img-categories' src={logo_hist}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            </a>
            <a href='/quiz'>
            <article className='article'>
            <p className='title-article'>Capitales</p>
                <img className='img-categories' src={logo_hist}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            </a>
            </div>
            
        </div>










    </>
  )
}

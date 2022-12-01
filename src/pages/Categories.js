import Footer from 'components/Footer'
import React from 'react'
import SearchBar from '../components/SearchBar'
import logo from '../assets/logoquizz.png'
import './index.css'
import logo_sport from '../assets/sport.jpg'
import logo_music from '../assets/mwusic.jpg'
import logo_jeux from '../assets/jeux.jpg'
import logo_geo from '../assets/geo.jpg'
import logo_hist from '../assets/hist.jpg'




export default function Categories() {
    return (
        <div className='contain-categories'>
            
            <h1 className='header-categories'>Categories :</h1>
            <div className='div-article'>
            <article className='article'>
            <a href='/histoire' className='title-article'>Histoire</a>
                <img className='img-categories' src={logo_hist}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            <article className='article'>
            <a href='/categories/geographie' className='title-article'>Geo</a>
                <img className='img-categories' src={logo_geo}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article><article className='article'>
            <a href='/musique' className='title-article'>Musique</a> 
            <img className='img-categories'src={logo_music}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article><article className='article'>
            <a href='/jeux' className='title-article'>Jeux </a>   
            <img className='img-categories'src={logo_jeux}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            <article className='article' >
            <a href='/cinema' className='title-article'>Cinéma</a>
             <img className='img-categories' src={logo}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>
                <a>Cliquez ici  </a>
            </article>
            <article className='article'>
                <a href='/sport' className='title-article'>Sport</a>
                <img className='img-categories' src={logo_sport}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            <article className='article'>
            <a href='/animaux' className='title-article'>Animaux</a>
            <img className='img-categories' src={logo}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
          <article className='article'>
            <a href='/mangas' className='title-article'>Mangas</a>
            <img className='img-categories' src={logo}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            </div>
            
        </div>
    )
}

import React from 'react'
import Footer from 'components/Footer'
import SearchBar from '../components/SearchBar'
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
            <article className='article'>
            <p className='title-article'>Les pays du monde</p>
                <img className='img-categories' src={logo_geo}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article><article className='article'>
            <p className='title-article'>Le monde en drapeaux</p> 
            <img className='img-categories'src={logo_music}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article><article className='article'>
            <p className='title-article'>Monuments célèbres  </p>   
            <img className='img-categories'src={logo_jeux}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            <article className='article' >
            <p className='title-article'>Une photo, un département</p>
             <img className='img-categories' src={logo}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>
                <a>Cliquez ici  </a>
            </article>
            <article className='article'>
                <p className='title-article'>Lacs et rivières</p>
                <img className='img-categories' src={logo_sport}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            <article className='article'>
            <p className='title-article'>Capitales du monde</p>
            <img className='img-categories' src={logo}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
          <article className='article'>
            <a href='/un-monde-de-migrants' className='title-article'>Un monde de migrants</a>
            <img className='img-categories' src={logo}></img>
                <p>Ut eu duis duis reprehenderit proident reprehenderit deserunt dolor magna.</p>

            </article>
            </div>
            
        </div>










    </>
  )
}

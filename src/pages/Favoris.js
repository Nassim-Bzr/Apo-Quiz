import React from 'react'
import './create.css';
import img from '../assets/geo.jpg'



export default function Create({isLogged}) {

    return (
        <div className='app-contenor'>
           {isLogged ? (
            <>
            <h1 className='favoris-title'>Mes favoris</h1>
            <div className='div-article'>
           <article className='article'>
    <p className='title-article'>Capitales</p>
             <a href='/quiz'>
            </a>
                  <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article><article className='article'>
             <a href='/quiz'>
            <p className='title-article'>Capitales</p>
            </a>
            <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article><article className='article'>
             <a href='/quiz'>
            <p className='title-article'>Capitales</p>
            </a>
                  <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article><article className='article'>
             <a href='/quiz'>
            <p className='title-article'>Capitales</p>
            </a>
                  <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article><article className='article'>
             <a href='/quiz'>
            <p className='title-article'>Capitales</p>
            </a>
                  <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article><article className='article'>
             <a href='/quiz'>
            <p className='title-article'>Capitales</p>
            </a>
                  <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article><article className='article'>
             <a href='/quiz'>
            <p className='title-article'>Capitales</p>
            </a>
                  <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article><article className='article'>
             <a href='/quiz'>
            <p className='title-article'>Capitales</p>
            </a>
                  <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article><article className='article'>
             <a href='/quiz'>
            <p className='title-article'>Capitales</p>
            </a>
                  <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article><article className='article'>
             <a href='/quiz'>
            <p className='title-article'>Capitales</p>
            </a>
                  <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article><article className='article'>
             <a href='/quiz'>
            <p className='title-article'>Capitales</p>
            </a>
                  <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article><article className='article'>
             <a href='/quiz'>
            <p className='title-article'>Capitales</p>
            </a>
                  <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article><article className='article'>
             <a href='/quiz'>
            <p className='title-article'>Capitales</p>
            </a>
                  <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article><article className='article'>
             <a href='/quiz'>
            <p className='title-article'>Capitales</p>
            </a>
                  <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article><article className='article'>
             <a href='/quiz'>
            <p className='title-article'>Capitales</p>
            </a>
                  <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article><article className='article'>
             <a href='/quiz'>
            <p className='title-article'>Capitales</p>
            </a>
                  <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article><article className='article'>
             <a href='/quiz'>
            <p className='title-article'>Capitales</p>
            </a>
                  <img src={img} className='img-categories'  />
                <button className='remove-favoris'>Retirer des favoris</button>

            </article>
            </div>
            </>
):(
<h1>Vous devez vous connectez </h1>
    )};
          
            </div>
            


        
    )
}

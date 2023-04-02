import React from 'react'
import './create.css';
import img from '../assets/geo.jpg'
import { Link } from 'react-router-dom';



export default function Create({isLogged}) {

    return (
        <div className='app-contenor'>
           {isLogged ? (
            <>
            <h1 className='favoris-title'>Mes favoris</h1>
            <div className='div-article'>
           <article className='article'>
    <p className='title-article'>Capitales</p>
             <Link className='title-article' to='/quiz/:id'>
            </Link>
                  <img src={img} className='img-categories'  />
        <button className="btn-history">
  <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" className="icon">
  <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
</svg>
</button>

            </article>
            </div>
            </>
):(
<h1>Vous devez vous connectez </h1>
    )};
          
            </div>
            


        
    )
}

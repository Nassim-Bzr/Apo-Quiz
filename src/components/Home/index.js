import React from 'react'
import ListCategory from '../ListCategory'
import Footer from '../Footer'
import HomeListCategory from '../HomeListCategory'
import './style.css'
export default function Home() {
    return (
        <main className='main-home'>
              
            <ListCategory/>
            <HomeListCategory/>
            
        </main>
    )
}

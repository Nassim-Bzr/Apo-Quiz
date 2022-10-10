import React from 'react'
import Header from '../Header'
import SearchBar from '../SearchBar'
import ListCategory from '../ListCategory'
import Footer from '../Footer'

// import {
// 	BrowserRouter , 
// 	Routes,
// 	Route,
// 	Link
// } from 'react-router-dom';



export default function App() {
    console.log (window.location)
    return (
        <div className='app'>
           
            <Header />
            <SearchBar />   
            <ListCategory/>
            
            <Footer/>
            
          
        </div>
    );
}

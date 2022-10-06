import React from 'react'
import Menu from '../Header'
import SearchBar from '../SearchBar'
import ListCategory from '../ListCategory'
import Faq from '../Faq'
import Footer from '../Footer'

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';



export default function App() {
    return (
        <div className='app'>
            
            <Menu />
            <SearchBar />   
            <ListCategory/>
            
            <Footer/>
            
            
            <Routes>
                <Route path="/footer" element={<Footer /> }/>
                </Routes>
                
        </div>
    )
}

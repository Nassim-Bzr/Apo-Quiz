import React, { useState } from 'react'
import Header from '../Header'
import Contact from '../../pages/Contact.js'
import About from '../../pages/About'
import Categories from '../../pages/Categories'
import Create from '../../pages/Create'
import Faq from '../../pages/Faq'
import Poli_confi from '../../pages/Poli_confi'
import CurrentCategories from '../../pages/CurrentCategories'
import { Message, Segment } from 'semantic-ui-react';
import SignUpModal from '../../components/SignUpModal'


import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from '../Home';
import './style.scss'
import SearchBar from 'components/SearchBar'
import Footer from 'components/Footer'


// import {
// 	BrowserRouter , 
// 	Routes,
// 	Route,
// 	Link
// } from 'react-router-dom';



export default function App() {
    const [search, setSearch] = useState('');
    const [message, setMessage] = useState('Veuillez taper une recherche');

    return (
        <>
            
            {/* <SignUpModal /> */}
                <Header />
                <SearchBar search={search} handleSearchChange={setSearch} />
                <Message>{message} </Message>
            <Router>

                <Routes>
                    <Route path="/" element={<Home />} 
                     />
                     
                    <Route path="/login" element={<SignUpModal />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/create-quiz" element={<Create />} />
                    <Route path='/faq' element={<Faq />} />
                    <Route path='/politque-de-confidentitalite' element={<Poli_confi/>} />
                    <Route path='/geographie' element={<CurrentCategories />} />


                </Routes>


            </Router>
            <Footer/>
        </>
    );
}

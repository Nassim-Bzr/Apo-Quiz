import React, { useState } from 'react'
import Header from '../Header'
import Contact from '../../pages/Contact.js'
import About from '../../pages/About'
import Categories from '../../pages/Categories'
import Create from '../../pages/Create'
import Faq from '../../pages/Faq'
import SignUp from '../../pages/SignUpForm'
import Poli_confi from '../../pages/Poli_confi'
import CurrentCategories from '../../pages/CurrentCategories'
import { Message, Segment } from 'semantic-ui-react';
// import SignUpModal from '../../components/SignUpModal'


import './style.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import './style.scss'
import SearchBar from 'components/SearchBar'
import Footer from 'components/Footer'
import Quiz from 'pages/Quiz'
// import HomeQuiz from 'components/HomeQuiz/HomeQuiz'
// import Quiz from 'components/HomeQuiz/Quiz'
// import Start from 'components/HomeQuiz/Start'
// import Result from 'components/HomeQuiz/Result'

// import {
// 	BrowserRouter , 
// 	Routes,
// 	Route,
// 	Link
// } from 'react-router-dom';



function App() {
    const [message, setMessage] = useState('Veuillez taper une recherche');

    const [quizs, setQuizs] = useState([]);
    const [question, setQuesion] = useState({});
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [marks, setMarks] = useState(0);

    // Display Controlling States
    const [showStart, setShowStart] = useState(true);
    const [showQuiz, setShowQuiz] = useState(false);
    const [showResult, setShowResult] = useState(false);

    // Load JSON Data
    useEffect(() => {
        fetch('http://localhost:3001/quizz')
            .then(res => res.json())
            .then(data => setQuizs(data))
            console.log(quizs);
    }, []);

    return (
        <div className="app">

            {/* <SignUpModal /> */}
            <Header />
            {/* <SearchBar search={search} handleSearchChange={setSearch} /> */}
            {/* <Message>{message} </Message> */}


            <Routes>
                <Route path="/" element={<Home />}
                />

                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/create-quiz" element={<Create />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/politque-de-confidentitalite' element={<Poli_confi />} />
                <Route path='/geographie' element={<CurrentCategories />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path='/signUp' element={<SignUp/>} />

                {/* <Route path="/test" element={/>}/> */}





            </Routes>



            <Footer />
        </div>
    );
}

export default App;

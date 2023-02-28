// @ts-nocheck
import React, { useState } from 'react'

import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header'
import Contact from '../../pages/Contact.js'
import About from '../../pages/About'
import Categories from '../../pages/Categories'
import Favoris from '../../pages/Favoris'
import Faq from '../../pages/Faq'
import SignUp from '../../pages/SignUpForm'
import PoliConfi from '../../pages/Poli_confi'
import CurrentCategories from '../../pages/CurrentCategories'
import ForgotPassword from '../../pages/ForgotPassword'
import Page404 from '../../pages/Page404'
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from '../App/Loading';


import './style.scss';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Home';
import './style.scss'
import Footer from 'components/Footer'
import Login from 'pages/Login'
import Quiz from 'pages/Quiz'
import ProfilePage from 'pages/ProfilPage'
import { fetchQuizz } from 'actions/quizz';
import LegalsMention from 'pages/LegalsMention';
import ConditionsUser from 'pages/TermsOfUse';
import TermsOfUse from 'pages/TermsOfUse';
import Classement from 'pages/Classement';


function App() {

    const dispatch = useDispatch();

    const email = useSelector((state) => state.user.email);
    const password = useSelector((state) => state.user.password);
    const isLogged = useSelector((state) => state.user.logged);
    const pseudo = useSelector((state) => state.user.pseudo);
  
    const loading = useSelector((state) => state.quizz.loading);
    useEffect(() => {
        dispatch(fetchQuizz());
        console.log('fetchQuiz')
      }, []);
      if (loading) {
        return <Loading />;
      }
    // useEffect(() => {
    //     const action = actionFetchQuizz(); // action => { type: 'FETCH_RECIPE' }
    //     dispatch(action);
    // }, []);

    // const location = useLocation();
    // useEffect(() => {
    //     // on scroll en haut de page
    //     window.scrollTo({
    //         top: 0,
    //     });
    // }, [location]);


    return (
        <div className="app">
           
            
                
                    <Header isLogged={isLogged}  />


                
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mentions-legales" element={<LegalsMention />} />
                <Route path="/cgv" element={<TermsOfUse />} />
                <Route path="/classement" element={<Classement />} />

                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/favoris" element={<Favoris isLogged={isLogged} />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/politque-de-confidentitalite' element={<PoliConfi />} />
                <Route path='/categories/Geographie' element={<CurrentCategories
                />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path='/signUp' element={<SignUp
                 />} />
                <Route path='/Login' element={<Login isLogged={isLogged} />} />
                <Route path="/profile" element={<ProfilePage
                    pseudo={pseudo}
                    profileImg="https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?s=612x612&w=0&k=20&c=BVOfS7mmvy2lnfBPghkN__k8OMsg7Nlykpgjn0YOHj0="
                
                    
                    highScore={8}
                    recentActivities={[
                        { quizName: "Quiz 1", date: "01/01/2022", score: 7 },
                        { quizName: "Quiz 2", date: "01/02/2022", score: 8 },
                        { quizName: "Quiz 3", date: "01/03/2022", score: 6 }
                    ]}
                />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                
                 <Route path="*" element={<Page404 />} />



            </Routes>



            <Footer />
        </div>
    );
}

export default App;


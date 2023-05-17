// @ts-nocheck
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.scss';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { fetchCategory } from 'actions/category';
import { fetchQuizz } from 'actions/quizz';


import Footer from 'components/Footer';
import Header from '../Header';
import Home from '../Home';

import Contact from '../../pages/Contact.js';
import About from '../../pages/About';
import Categories from '../../pages/Categories';
import Favoris from '../../pages/Favoris';
import Faq from '../../pages/Faq';
import SignUp from '../../pages/SignUpForm';
import PoliConfi from '../../pages/Poli_confi';
import CurrentCategories from '../../pages/CurrentCategories';
import ForgotPassword from '../../pages/ForgotPassword';
import Login from 'pages/Login';
import Quiz from 'pages/Quiz';
import ProfilePage from 'pages/ProfilPage';
import LegalsMention from 'pages/LegalsMention';
import ConditionsUser from 'pages/TermsOfUse';
import TermsOfUse from 'pages/TermsOfUse';
import Classement from 'pages/Classement';
import CreateQuiz from 'pages/CreateQuiz';
import Page404 from '../../pages/Page404';
import ResetPassword from 'pages/ResetPassword';
import SearchResults from 'components/SearchResults';
import AdminPage from 'pages/AdminPage';






function App() {

    const dispatch = useDispatch();

    const email = useSelector((state) => state.user.email);
    const password = useSelector((state) => state.user.password);
    const isLogged = useSelector((state) => state.user.logged);
    const pseudo = useSelector((state) => state.user.pseudo);
    const quizz = useSelector((state) => state.quizz.list);

    const loading = useSelector((state) => state.category);
    useEffect(() => {
        dispatch(fetchCategory());
        console.log('fetchCategory')
      }, []);

      useEffect(() => {
        dispatch(fetchQuizz());
        console.log('fetchQuizz')
      }, []);

    //   if (loading) {
    //     return <Loading />;
    //   }
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
                <Route path="/admin" element={<AdminPage />} />

                <Route path="/mentions-legales" element={<LegalsMention />} />
                <Route path="/cgv" element={<TermsOfUse />} />
                <Route path="/classement" element={<Classement />} />
                <Route path="/create" element={<CreateQuiz />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/search-results" element={<SearchResults />} />

                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/favoris" element={<Favoris isLogged={isLogged} />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/politque-de-confidentitalite' element={<PoliConfi />} />
                <Route path='/categories/:id' element={<CurrentCategories 
                slug={quizz.slug}
                quizz={quizz}
                />} />
                <Route path='/quiz/:category/:id' element={<Quiz />} />
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


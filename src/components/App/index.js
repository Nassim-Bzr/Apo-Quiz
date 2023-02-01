import React, { useState } from 'react'

import axios from "axios";

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


import './style.scss';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import './style.scss'
import Footer from 'components/Footer'
import Login from 'pages/Login'
import Quiz from 'pages/Quiz'
import ProfilePage from 'pages/ProfilPage'
import AddTutorial from "../tutorial/add-tutorial.component";
// @ts-ignore
import Tutorial from "../tutorial/tutorial.component";
import TutorialsList from "../tutorial/tutorials-list.component";


function App() {    


    const [isLog,setIslog] = useState(true)

    return (
        <div className="app">

            <Header isLog={isLog} setIsLog={setIslog}/>
         

            <Routes>
                <Route path="/" element={<Home />} />

            
                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/t" element={<TutorialsList />} />
                <Route path="/tutorials" element={<TutorialsList />} />
                <Route path="/add" element={<AddTutorial />} />
                <Route path="/tutorials/:id" element={<Tutorial />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/favoris" element={<Favoris isLog={isLog}/>} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/politque-de-confidentitalite' element={<PoliConfi />} />
                <Route path='/categories/Geographie' element={<CurrentCategories
                    />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path='/Login' element={<Login isLog={isLog} />} />


                <Route path="/profile" element={<ProfilePage
                    name="John Doe"
                    profileImg="https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?s=612x612&w=0&k=20&c=BVOfS7mmvy2lnfBPghkN__k8OMsg7Nlykpgjn0YOHj0="
                    quizzesTaken={10}
                    quizzesCreated={5}
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


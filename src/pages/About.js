import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black dark:text-black pb-4">À propos de GoQuiz</h1>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-black">
            GoQuiz a pour mission de rendre l'apprentissage amusant et accessible à tous. Nous croyons que le quiz est un excellent moyen d'apprendre et de tester ses connaissances de manière ludique et interactive. Notre plateforme offre une large gamme de sujets pour tous les âges et tous les niveaux, permettant à chacun de s'instruire tout en s'amusant.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Équipe GoQuiz" />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black dark:text-black pb-4">Notre Histoire</h1>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-black">
            GoQuiz est né de la passion d'une équipe d'éducateurs, de développeurs et de créateurs de contenu. Nous avons réalisé que l'apprentissage traditionnel pouvait parfois être ennuyeux et peu engageant. C'est pourquoi nous avons décidé de créer une plateforme qui rend l'apprentissage amusant et interactif. Depuis notre lancement, nous n'avons cessé d'innover et d'améliorer notre plateforme pour offrir la meilleure expérience possible à nos utilisateurs.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Emma" />
              <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Emma" />
              <p className="font-medium text-xl leading-5 text-black dark:text-black mt-4">Emma</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Oliver" />
              <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Oliver" />
              <p className="font-medium text-xl leading-5 text-black dark:text-black mt-4">Oliver</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Lucas" />
              <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Lucas" />
              <p className="font-medium text-xl leading-5 text-black mt-4">Lucas</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Léa" />
              <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Léa" />
              <p className="font-medium text-xl leading-5 text-black dark:text-black mt-4">Léa</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

export default About;

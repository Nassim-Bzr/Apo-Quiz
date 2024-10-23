// @ts-nocheck
import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaGlobe, FaBook, FaFlask, FaGlobeAmericas, FaFilm, FaMusic, FaFootballBall, FaPencilAlt, FaPalette, FaMicrochip } from 'react-icons/fa';

const categories = [
    { id: 1, name: "Culture Générale", slug: "culture-generale", icon: FaGlobe, color: "from-blue-500 to-blue-600", image: "https://source.unsplash.com/random/800x600?knowledge" },
    { id: 2, name: "Histoire", slug: "histoire", icon: FaBook, color: "from-yellow-500 to-yellow-600", image: "https://source.unsplash.com/random/800x600?history" },
    { id: 3, name: "Sciences", slug: "sciences", icon: FaFlask, color: "from-green-500 to-green-600", image: "https://source.unsplash.com/random/800x600?science" },
    { id: 4, name: "Géographie", slug: "geographie", icon: FaGlobeAmericas, color: "from-indigo-500 to-indigo-600", image: "https://source.unsplash.com/random/800x600?geography" },
    { id: 5, name: "Cinéma", slug: "cinema", icon: FaFilm, color: "from-red-500 to-red-600", image: "https://source.unsplash.com/random/800x600?cinema" },
    { id: 6, name: "Musique", slug: "musique", icon: FaMusic, color: "from-purple-500 to-purple-600", image: "https://source.unsplash.com/random/800x600?music" },
    { id: 7, name: "Sport", slug: "sport", icon: FaFootballBall, color: "from-orange-500 to-orange-600", image: "https://source.unsplash.com/random/800x600?sport" },
    { id: 8, name: "Littérature", slug: "litterature", icon: FaPencilAlt, color: "from-pink-500 to-pink-600", image: "https://source.unsplash.com/random/800x600?literature" },
    { id: 9, name: "Art", slug: "art", icon: FaPalette, color: "from-teal-500 to-teal-600", image: "https://source.unsplash.com/random/800x600?art" },
    { id: 10, name: "Technologie", slug: "technologie", icon: FaMicrochip, color: "from-gray-500 to-gray-600", image: "https://source.unsplash.com/random/800x600?technology" },
];

export default function Categories() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Explorez nos catégories de quiz</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Link key={category.id} to={`/categories/${category.slug}`} className="block">
                            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${category.image})` }}></div>
                                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} mix-blend-multiply`}></div>
                                <div className="relative p-6 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <category.icon className="h-8 w-8 text-white mr-3" />
                                        <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                                    </div>
                                    <span className="bg-white bg-opacity-25 h-8 w-8 rounded-full flex items-center justify-center">
                                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

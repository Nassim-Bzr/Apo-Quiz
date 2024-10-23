// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaBook, FaFlask, FaGlobeAmericas, FaFilm, FaMusic, FaFootballBall, FaPencilAlt, FaPalette, FaMicrochip } from 'react-icons/fa';

// Données factices pour les catégories
const fakeCategories = [
    { id: 1, name: "Culture Générale", slug: "culture-generale", icon: FaGlobe, color: "bg-blue-500" },
    { id: 2, name: "Histoire", slug: "histoire", icon: FaBook, color: "bg-yellow-500" },
    { id: 3, name: "Sciences", slug: "sciences", icon: FaFlask, color: "bg-green-500" },
    { id: 4, name: "Géographie", slug: "geographie", icon: FaGlobeAmericas, color: "bg-indigo-500" },
    { id: 5, name: "Cinéma", slug: "cinema", icon: FaFilm, color: "bg-red-500" },
    { id: 6, name: "Musique", slug: "musique", icon: FaMusic, color: "bg-purple-500" },
    { id: 7, name: "Sport", slug: "sport", icon: FaFootballBall, color: "bg-orange-500" },
    { id: 8, name: "Littérature", slug: "litterature", icon: FaPencilAlt, color: "bg-pink-500" },
    { id: 9, name: "Art", slug: "art", icon: FaPalette, color: "bg-teal-500" },
    { id: 10, name: "Technologie", slug: "technologie", icon: FaMicrochip, color: "bg-gray-500" },
];

export default function ListCategory() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Catégories</h2>
            <ul className="space-y-2">
                {fakeCategories.map(category => (
                    <li key={category.id} className="transition duration-300 ease-in-out transform hover:translate-x-2">
                        <Link 
                            to={`/categories/${category.slug}`}
                            className={`flex items-center no-underline p-2 rounded-md ${category.color} text-white hover:opacity-80`}
                        >
                            <category.icon className="mr-2" />
                            <span>{category.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

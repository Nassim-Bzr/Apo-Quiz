import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-white-800 text-black py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between items-start">
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h3 className="text-2xl font-semibold mb-4">GoQuiz</h3>
                        <p className="text-base">Testez vos connaissances et apprenez en vous amusant.</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h4 className="text-xl font-semibold mb-4">Liens rapides</h4>
                        <ul className="text-base space-y-2">
                            <li><Link to="/" className="hover:text-gray-300 no-underline">Accueil</Link></li>
                            <li><Link to="/categories" className="hover:text-gray-300 no-underline">Catégories</Link></li>
                            <li><Link to="/about" className="hover:text-gray-300 no-underline">À propos</Link></li>
                            <li><Link to="/contact" className="hover:text-gray-300 no-underline">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h4 className="text-xl font-semibold mb-4">Suivez-nous</h4>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-black text-2xl no-underline"><FaFacebookF /></a>
                            <a href="#" className="text-gray-400 hover:text-black text-2xl no-underline"><FaTwitter /></a>
                            <a href="#" className="text-gray-400 hover:text-black text-2xl no-underline"><FaInstagram /></a>
                            <a href="#" className="text-gray-400 hover:text-black text-2xl no-underline"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-700 text-center">
                    <p className="text-base">&copy; 2023 GoQuiz. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

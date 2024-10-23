import React from 'react'
import { Link } from 'react-router-dom'

function FAQ() {
    const faqItems = [
        {
            question: "Comment puis-je créer un compte ?",
            answer: "Vous pouvez créer un compte en cliquant sur le bouton 'Créer un compte' sur la page d'accueil, puis en remplissant le formulaire d'inscription avec vos informations personnelles."
        },
        {
            question: "J'ai oublié mon mot de passe. Que dois-je faire ?",
            answer: "Si vous avez oublié votre mot de passe, cliquez sur le lien 'Mot de passe oublié ?' sur la page de connexion. Vous recevrez un email avec les instructions pour réinitialiser votre mot de passe."
        },
        {
            question: "Comment puis-je modifier mon profil ?",
            answer: "Une fois connecté, vous pouvez accéder à votre profil en cliquant sur votre nom d'utilisateur dans le menu. Là, vous trouverez des options pour modifier vos informations personnelles."
        },
        {
            question: "Est-ce que mes informations personnelles sont sécurisées ?",
            answer: "Oui, nous prenons très au sérieux la sécurité de vos données. Toutes les informations personnelles sont cryptées et stockées de manière sécurisée conformément aux normes de l'industrie."
        },
        {
            question: "Comment puis-je contacter le support client ?",
            answer: "Vous pouvez contacter notre équipe de support en envoyant un email à support@votresite.com ou en utilisant le formulaire de contact disponible sur notre site."
        }
    ];

    return (
        <div className="min-h-screen bg-[#34495E] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Foire Aux Questions</h1>
                    <div className="space-y-6">
                        {faqItems.map((item, index) => (
                            <div key={index} className="border-b border-gray-200 pb-4">
                                <h2 className="text-xl font-semibold text-gray-700 mb-2">{item.question}</h2>
                                <p className="text-gray-600">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link to="/" className="text-blue-600 hover:underline">
                            Retour à l'accueil
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;

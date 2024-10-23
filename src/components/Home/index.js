import React from 'react'
import ListCategory from '../ListCategory'
import HomeListCategory from '../HomeListCategory'

export default function Home() {
    return (
        <main className="bg-gray-100 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Bienvenue sur GoQuiz</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/4">
                        <ListCategory />
                    </div>
                    <div className="lg:w-3/4">
                        <HomeListCategory />
                    </div>
                </div>
            </div>
        </main>
    )
}

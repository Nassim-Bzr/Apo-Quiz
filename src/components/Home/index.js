import React from 'react'
import ListCategory from '../ListCategory'
import HomeListCategory from '../HomeListCategory'

export default function Home() {
    return (
        <main className="bg-[#34495E] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-white mb-12">Bienvenue sur GoQuiz</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                        <ListCategory />
                    </div>
                    <div className="lg:w-2/3">
                        <HomeListCategory />
                    </div>
                </div>
            </div>
        </main>
    )
}

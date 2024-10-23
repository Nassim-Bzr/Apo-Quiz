import React, { useState } from 'react';
import { FaMedal, FaTrophy, FaAward } from 'react-icons/fa';

// Données factices pour le classement
const fakeRankings = [
  { id: 1, username: "QuizMaster", score: 9850, quizzesTaken: 120, winStreak: 15 },
  { id: 2, username: "Brainiac", score: 9720, quizzesTaken: 115, winStreak: 12 },
  { id: 3, username: "Trivia_Queen", score: 9680, quizzesTaken: 118, winStreak: 10 },
  { id: 4, username: "KnowledgeKing", score: 9550, quizzesTaken: 110, winStreak: 8 },
  { id: 5, username: "QuizWhiz", score: 9400, quizzesTaken: 105, winStreak: 7 },
  { id: 6, username: "FactFinder", score: 9300, quizzesTaken: 100, winStreak: 6 },
  { id: 7, username: "InfoJunkie", score: 9150, quizzesTaken: 98, winStreak: 5 },
  { id: 8, username: "CuriousMind", score: 9000, quizzesTaken: 95, winStreak: 4 },
  { id: 9, username: "QuizNinja", score: 8900, quizzesTaken: 92, winStreak: 3 },
  { id: 10, username: "WisdomSeeker", score: 8800, quizzesTaken: 90, winStreak: 2 },
];

export default function Classement() {
  const [timeFrame, setTimeFrame] = useState('all');
  const [category, setCategory] = useState('all');

  const getIcon = (position) => {
    switch(position) {
      case 1: return <FaTrophy className="text-yellow-400 text-2xl" />;
      case 2: return <FaMedal className="text-gray-400 text-2xl" />;
      case 3: return <FaMedal className="text-yellow-600 text-2xl" />;
      default: return <FaAward className="text-blue-500 text-xl" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Classement des joueurs</h1>
        
        <div className="mb-8 flex justify-center space-x-4">
          <select 
            value={timeFrame} 
            onChange={(e) => setTimeFrame(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Tout le temps</option>
            <option value="month">Ce mois</option>
            <option value="week">Cette semaine</option>
          </select>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Toutes les catégories</option>
            <option value="history">Histoire</option>
            <option value="science">Science</option>
            <option value="geography">Géographie</option>
          </select>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joueur</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quiz joués</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Série de victoires</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {fakeRankings.map((player, index) => (
                <tr key={player.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900 mr-2">{index + 1}</span>
                      {getIcon(index + 1)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{player.username}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{player.score}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{player.quizzesTaken}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{player.winStreak}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">Continuez à jouer pour améliorer votre classement !</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Jouer maintenant
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateQuiz() {
  const navigate = useNavigate();
  const [quizTitle, setQuizTitle] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [category, setCategory] = useState('');
  const [questions, setQuestions] = useState([{ question: '', answers: ['', '', '', ''], correctAnswer: 0 }]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', answers: ['', '', '', ''], correctAnswer: 0 }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (questionIndex, answerIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers[answerIndex] = value;
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (questionIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].correctAnswer = parseInt(value);
    setQuestions(newQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer le quiz au backend
    console.log({ quizTitle, quizDescription, category, questions });
    // Rediriger vers la page d'accueil ou la page du quiz créé
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Créer un nouveau Quiz</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="quizTitle" className="block text-sm font-medium text-gray-700">Titre du Quiz</label>
              <input
                type="text"
                id="quizTitle"
                value={quizTitle}
                onChange={(e) => setQuizTitle(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="quizDescription" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="quizDescription"
                value={quizDescription}
                onChange={(e) => setQuizDescription(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                rows="3"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Catégorie</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Sélectionnez une catégorie</option>
                <option value="histoire">Histoire</option>
                <option value="science">Science</option>
                <option value="geographie">Géographie</option>
                <option value="culture">Culture générale</option>
              </select>
            </div>
            {questions.map((question, questionIndex) => (
              <div key={questionIndex} className="border-t pt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Question {questionIndex + 1}</h3>
                <input
                  type="text"
                  value={question.question}
                  onChange={(e) => handleQuestionChange(questionIndex, 'question', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Entrez la question"
                  required
                />
                {question.answers.map((answer, answerIndex) => (
                  <div key={answerIndex} className="mt-2 flex items-center">
                    <input
                      type="text"
                      value={answer}
                      onChange={(e) => handleAnswerChange(questionIndex, answerIndex, e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder={`Réponse ${answerIndex + 1}`}
                      required
                    />
                    <input
                      type="radio"
                      name={`correctAnswer-${questionIndex}`}
                      value={answerIndex}
                      checked={question.correctAnswer === answerIndex}
                      onChange={(e) => handleCorrectAnswerChange(questionIndex, e.target.value)}
                      className="ml-2"
                      required
                    />
                  </div>
                ))}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddQuestion}
              className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Ajouter une question
            </button>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Créer le Quiz
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

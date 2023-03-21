import './CreateQuiz.css'
import React, { useState } from 'react';

const CreateQuiz = () => {
  const [questions, setQuestions] = useState([{ question: '', answer: '' }]);
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [difficulty, setDifficulty] = useState('');
  const [language, setLanguage] = useState('');

  const handleQuestionChange = (event, index) => {
    const { name, value } = event.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index][name] = value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', answer: '' }]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle quiz submission
  };

  return (
  <>
      <h1>Créer votre propre quizz !</h1>
    <div className='containor-create'>
    <form className="create-quiz" onSubmit={handleSubmit}>
      <label htmlFor="category">Category</label>
      <select id="category" name="category" value={category} onChange={handleCategoryChange}>
        <option value="">Choose a category</option>
        <option value="Cinema">Cinema</option>
        <option value="Technology">Technology</option>
        <option value="Gastronomy">Gastronomy</option>
        <option value="Literature">Literature</option>
        <option value="History">History</option>
        <option value="Animals">Animals</option>
        <option value="Nature">Nature</option>
        <option value="Astronomy">Astronomy</option>
        <option value="Geography">Geography</option>
      </select>

      <label htmlFor="image">Image</label>
      <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />

      <label htmlFor="difficulty">Difficulty</label>
      <select id="difficulty" name="difficulty" value={difficulty} onChange={handleDifficultyChange}>
        <option value="">Choose a difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <label htmlFor="language">Language</label>
      <select id="language" name="language" value={language} onChange={handleLanguageChange}>
        <option value="">Choose a language</option>
        <option value="english">English</option>
        <option value="french">French</option>
        <option value="spanish">Spanish</option>
        <option value="german">German</option>
      </select>
      {questions.map((question, index) => (
        <div key={index}>
          <label htmlFor={`question-${index}`}>Question {index + 1}</label>
          <input
            type="text"
            id={`question-${index}`}
            name="question"
            value={question.question}
            onChange={(event) => handleQuestionChange(event, index)}
          />
          <label htmlFor={`answer-${index}`}>Answer {index + 1}</label>
          <input
            type="text"
            id={`answer-${index}`}
            name="answer"
            value={question.answer}
            onChange={(event) => handleQuestionChange(event, index)}
          />
          <button type="button" onClick={() => removeQuestion(index)}>
            Remove question
          </button>
        </div>
      ))}
      <button type="button" onClick={addQuestion}>
        Add question
      </button>
      <button type="submit">Submit quiz</button>
    </form>
    </div>
    </>
  );
};

export default CreateQuiz;
import './CreateQuiz.css'
import React, { useState } from 'react';

const CreateQuiz = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ question: '', answers: ['', '', '', ''], correct: 0 }]);
  const [category, setCategory] = useState('');
  // const [image, setImage] = useState(null);
  const [difficulty, setDifficulty] = useState('');
  const [language, setLanguage] = useState('');

  const handleQuizNameChange = (event) => {
    setTitle(event.target.value);
  };

  const handleQuestionChange = (event, index) => {
    const value = event.target.value;
    const updatedQuestions = [...questions];
    updatedQuestions[index]['question'] = value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (event, questionIndex, answerIndex) => {
    const value = event.target.value;
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex]['answers'][answerIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectChange = (event, questionIndex) => {
    const value = event.target.value;
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex]['correct'] = parseInt(value);
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', answers: ['', '', '', ''], correct: 0 }]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // const handleImageChange = (event) => {
  //   setImage(event.target.files[0]);
  // };

  // const handleDifficultyChange = (event) => {
  //   setDifficulty(event.target.value);
  // };

  // const handleLanguageChange = (event) => {
  //   setLanguage(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Create a JSON object
    const data = {
      title: title,
      category: category,
      questions: questions,
    };
  
    // Send a POST request
    fetch('http://localhost:8082/api/quizz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Handle the response
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle the error
    });
  };
  


  return (
  <>
      <h1>Créer votre propre quizz !</h1>
    <div className='containor-create'>
    <form className="create-quiz" onSubmit={handleSubmit}>
    <label htmlFor="title">Titre du quiz</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleQuizNameChange}
        />

      <label htmlFor="category">Category</label>
      <select id="category" name="category" value={category} onChange={handleCategoryChange}>
        <option value="">Choose a category</option>
        <option value="Cinema">Cinema</option>
        <option value="Technologie">Technology</option>
        <option value="Gastronomie">Gastronomy</option>
        <option value="Littérature">Literature</option>
        <option value="Histoire">History</option>
        <option value="Animaux">Animals</option>
        <option value="Nature">Nature</option>
        <option value="Astronomie">Astronomy</option>
        <option value="Geographie">Geography</option>
      </select>

      {/* <label htmlFor="image">Image</label>
      <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} /> */}

      {/* <label htmlFor="difficulty">Difficulty</label>
      <select id="difficulty" name="difficulty" value={difficulty} onChange={handleDifficultyChange}>
        <option value="">Choose a difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select> */}

      {/* <label htmlFor="language">Language</label>
      <select id="language" name="language" value={language} onChange={handleLanguageChange}>
        <option value="">Choose a language</option>
        <option value="english">English</option>
        <option value="french">French</option>
        <option value="spanish">Spanish</option>
        <option value="german">German</option>
      </select>
      */}
{questions.map((question, index) => (
  <div key={index}>
    <label htmlFor={`questions-${index}`}>Question {index + 1}</label>
    <input
      type="text"
      id={`questions-${index}`}
      name="questions"
      value={question.question}
      onChange={(event) => handleQuestionChange(event, index)}
    />
    {question.answers.map((answer, answerIndex) => (
      <div key={answerIndex}>
        <label htmlFor={`answer-${index}-${answerIndex}`}>Answer {answerIndex + 1}</label>
        <input
          type="text"
          id={`answer-${index}-${answerIndex}`}
          name="answer"
          value={answer}
          onChange={(event) => handleAnswerChange(event, index, answerIndex)}
        />
      </div>
    ))}
    <label htmlFor={`correct-${index}`}>Correct Answer</label>
    <select id={`correct-${index}`} name="correct" value={question.correct} onChange={(event) => handleCorrectChange(event, index)}>
      <option value="0">Answer 1</option>
      <option value="1">Answer 2</option>
      <option value="2">Answer 3</option>
      <option value="3">Answer 4</option>
    </select>
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
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './AdminPage.css'; // Import du fichier CSS pour la page admin

export default function AdminPage() {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [editedQuestions, setEditedQuestions] = useState([]);
  const isAdmin = true; // Vérifiez si l'utilisateur est un administrateur (utilisez votre logique d'authentification)
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Récupérez les données des quizz depuis votre backend (utilisez des hooks ou des méthodes de classe appropriés)
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/api/quizz`);
        setQuizzes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuizzes();
  }, []);

  const handleEditQuiz = async (quizId) => {
    // Récupérer les questions du quizz sélectionné depuis votre backend
    try {
      const response = await axios.get(`http://localhost:8082/api/question/?quizzId=${quizId}`);
      setSelectedQuiz(quizId);
      setEditedQuestions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditQuestion = (questionId, updatedQuestion) => {
    // Mettre à jour la question dans la liste des questions modifiées
    const updatedQuestions = editedQuestions.map((question) =>
      question.id === questionId ? updatedQuestion : question
    );
    setEditedQuestions(updatedQuestions);
  };

  const handleEditAnswer = (questionId, answerId, updatedAnswer) => {
    // Mettre à jour la réponse dans la question correspondante dans la liste des questions modifiées
    const updatedQuestions = editedQuestions.map((question) => {
      if (question.id === questionId) {
        const updatedAnswers = question.answers.map((answer) =>
          answer.id === answerId ? updatedAnswer : answer
        );
        return { ...question, answers: updatedAnswers };
      }
      return question;
    });
    setEditedQuestions(updatedQuestions);
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://localhost:8082/api/quizz/${selectedQuiz}`, { questions: editedQuestions });
      setIsSaved(true); // Définir l'état isSaved sur true après avoir sauvegardé avec succès
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="admin-page">
      {isAdmin && (
        <div>
          <h1 className="admin-heading">Liste des quizz disponibles</h1>
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="quiz-item">
              <h2>{quiz.title}</h2>
              <button onClick={() => handleEditQuiz(quiz.id)}>Modifier</button>
            </div>
          ))}
          {selectedQuiz && (
            <div>
              <h2>Modification du quizz</h2>
              {editedQuestions.map((question) => (
                <div key={question.id} className="question-item">
                  <h3>Question : {question.question}</h3>
                  <input
                    type="text"
                    className='input-adminquestion'
                    value={question.question}
                    onChange={(e) =>
                      handleEditQuestion(question.id, { ...question, question: e.target.value })
                    }
                  />
                  {question.answers.map((answer) => (
                    <div key={answer.id} className="answer-item">
                      <label>
                        Réponse : 
                        <input
                        className='input-adminanswer'
                          type="text"
                          value={answer.text}
                          onChange={(e) =>
                            handleEditAnswer(
                              question.id,
                              answer.id,
                              { ...answer, text: e.target.value }
                            )
                          }
                        />
                      </label>
                    </div>
                  ))}
                </div>
              ))}
              {isSaved && <p className="success-message">Modifications sauvegardées avec succès !</p>}
              <button onClick={handleSaveChanges}>Sauvegarder les modifications</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
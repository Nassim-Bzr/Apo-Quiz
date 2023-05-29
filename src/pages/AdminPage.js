import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './AdminPage.css'; // Import du fichier CSS pour la page admin
import Swal from 'sweetalert2';

export default function AdminPage() {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [editedQuestions, setEditedQuestions] = useState([]);
  const isAdmin = useSelector((state) => state.user.roles === 'admin');
  const [isSaved, setIsSaved] = useState(false);
  const editRef = useRef(null); // nouvelle référence

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
    
      if (editRef.current) {
        editRef.current.scrollIntoView({ behavior: 'smooth' });
      }

    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveAnswer = async (questionId, answerId) => {
    const updatedQuestion = editedQuestions.find((question) => question.id === questionId);
    if (updatedQuestion) {
      const updatedAnswer = updatedQuestion.answers.find((answer) => answer.id === answerId);
      if (updatedAnswer) {
        try {
          await axios.put(`http://localhost:8082/api/answer/${answerId}`, updatedAnswer);
          setIsSaved(true); 
          Swal.fire(
            'Succès',
            'La réponse a été modifié avec succès',
            'success'
          ); // Définir l'état isSaved sur true après avoir sauvegardé avec succès
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  const handleEditQuestion = (questionId, updatedQuestion) => {
    const updatedQuestions = editedQuestions.map((question) =>
      question.id === questionId ? updatedQuestion : question
    );
    setEditedQuestions(updatedQuestions);
  };
  const handleEditAnswer = (questionId, answerId, updatedAnswer) => {
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

  const handleSaveQuestion = async (questionId) => {
    const updatedQuestion = editedQuestions.find((question) => question.id === questionId);
    if (updatedQuestion) {
      try {
        await axios.put(`http://localhost:8082/api/question/${questionId}`, updatedQuestion);
        setIsSaved(true);
        Swal.fire(
          'Succès',
          'La question a été modifié avec succès',
          'success'
        ); // Définir l'état isSaved sur true après avoir sauvegardé avec succès
      } catch (error) {
        console.error(error);
      }
    }
  };


  // const handleSaveChanges = async () => {
  //   try {
  //     await axios.put(`http://localhost:8082/api/quizz/${selectedQuiz}`, { questions: editedQuestions });
  //     setIsSaved(true); // Définir l'état isSaved sur true après avoir sauvegardé avec succès
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="admin-page">
      {isAdmin ? (
        <div>
          <h1 className="admin-heading">Liste des quizz disponibles</h1>
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="quiz-item">
              <h2>{quiz.title}</h2>
              <button onClick={() => handleEditQuiz(quiz.id)}>Modifier</button>
            </div>
          ))}
          {selectedQuiz && (
            <div ref={editRef}>
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
                  <button className='button-registre' onClick={() => handleSaveQuestion(question.id)}>Enregistrer</button>
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
                      <button className='button-answer' onClick={() => handleSaveAnswer(question.id, answer.id)}>Enregistrer</button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <h1>Accès refusé</h1>
          <p>Vous n'avez pas les autorisations nécessaires pour accéder à cette page.</p>
        </div>
      )}


    </div>
  );
}
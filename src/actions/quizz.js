export const FETCH_QUIZZ = 'FETCH_QUIZZ';

export const fetchQuizz = () => ({
  type: FETCH_QUIZZ,
});

export const SAVE_QUIZZ = 'SAVE_QUIZZ';

export const saveQuizz = (quizz) => ({
  type: SAVE_QUIZZ,
  quizz: quizz,
});

export const FETCH_QUIZZ = 'FETCH_QUIZZ';
export const SAVE_QUIZZ = 'SAVE_QUIZZ';

export const FETCH_FAVORITES = 'FETCH_FAVORITES';
export const SAVE_FAVORITES = 'SAVE_FAVORITES';

export const actionFetchQuizz = () => ({
  type: FETCH_QUIZZ,
});

export const actionSaveQuizz = (data) => ({
  type: SAVE_QUIZZ,
  data,
});

export const actionFetchFavorites = () => ({
  type: FETCH_FAVORITES,
});

export const actionSaveFavorites = (data) => ({
  type: SAVE_FAVORITES,
  data,
});

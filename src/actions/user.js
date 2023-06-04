export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const SAVE_CONNECTED_USER = 'SAVE_CONNECTED_USER';
export const DECONNECT_USER = 'DECONNECT_USER';
export const UPDATE_PSEUDO = 'UPDATE_PSEUDO';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

/**
 * action dispatchée sur le onChange d'un input du form de connexion
 * @param {string} newValue : nouvelle valeur de l'input récupérée dans le e.target.value
 * @param {string} inputName : le nom de l'input et de l'emplacement de la valeur dans le state
 */
export const actionChangeInputValue = (newValue, inputName) => ({
  type: CHANGE_INPUT_VALUE,
  newValue: newValue,
  inputName: inputName,
});

export const updatePassword = (currentPassword, newPassword) => ({
  type: UPDATE_PASSWORD,
  currentPassword,
  newPassword,
});


export const actionUpdateEmail = (email) => ({
  type: UPDATE_EMAIL,
  email,
});

/**
 * action dispatchée sur le submit du LoginForm qui a pour but d'etre intercepté par
 * un middleware pour qu'il lance la requette api vers le endpoint /login
 */
export const actionCheckLogin = () => ({
  type: CHECK_LOGIN,
});

export const actionUpdateScore = (userId, score) => ({
  type: UPDATE_SCORE,
  payload: {
    userId,
    score,
  },
});
export const actionUpdatePseudo = (pseudo) => ({
    type: UPDATE_PSEUDO,
    pseudo,
  });
/**
 * action dispatché quand le authmiddelware reçoit une réponse 200OK du serveur
 * et qu'on doit alors demander au reducer de sauvegarder le pseudo du user dans le state
 * @param {string} pseudo : le pseudo du user tout juste connecté
 */
export const actionSaveConnectedUser = (pseudo, userId, token) => ({
    type: SAVE_CONNECTED_USER,
    pseudo,
    userId,
    token,
  });

export const actionDeconnectUser = () => ({
  type: DECONNECT_USER,
});
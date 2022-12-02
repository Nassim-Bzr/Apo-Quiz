export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const SAVE_CONNECTED_USER = 'SAVE_CONNECTED_USER';
export const DECONNECT_USER = 'DECONNECT_USER';
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
/**
 * action dispatchée sur le submit du LoginForm qui a pour but d'etre intercepté par
 * un middleware pour qu'il lance la requette api vers le endpoint /login
 */
export const actionCheckLogin = () => ({
  type: CHECK_LOGIN,
});

/**
 * action dispatché quand le authmiddelware reçoit une réponse 200OK du serveur
 * et qu'on doit alors demander au reducer de sauvegarder le pseudo du user dans le state
 * @param {string} pseudo : le pseudo du user tout juste connecté
 */
 export const actionSaveConnectedUser = (pseudo, token) => ({
    type: SAVE_CONNECTED_USER,
  pseudo,
  token,
});

export const actionDeconnectUser = () => ({
  type: DECONNECT_USER,
});
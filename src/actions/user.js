export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

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
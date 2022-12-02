import { CHANGE_INPUT_VALUE } from '../actions/user';

export const initialState = {
  logged: false,
  email: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      // changer la valeur d'un input dans le state
      // l'input concerné c'est action.inputName (email)
      // la nouvelle valeur c'est action.newValue (toto)
      return {
        ...state,
        [action.inputName]: action.newValue,
      };

    default:
      return state;
  }
};
export default reducer;
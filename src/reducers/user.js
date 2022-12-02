import { CHANGE_INPUT_VALUE, DECONNECT_USER, SAVE_CONNECTED_USER } from '../actions/user';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  pseudo: '',
  token: null,
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

      case SAVE_CONNECTED_USER:
        // le user vient de se connecter (le authMiddleware a reçu une 200 OK)
        // on sauvegarde son statut loggé et son pseudo dans le state
        return {
          ...state,
          pseudo: action.pseudo,
          logged: true,
          token: action.token,
        // on peut en profiter pour vider les inputs
        email: '',
        password: '',
      };
        case DECONNECT_USER:
          // le user vient de cliquer sur se deconnecter
          // on enleve son statut loggé et son pseudo / token dans le state
          return {
            ...state,
            pseudo: '',
            logged: false,
            token: null,
          };
    
        default:
      return state;
  }
};
export default reducer;
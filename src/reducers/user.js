import { UPDATE_PSEUDO } from '../actions/user';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  pseudo: '',
  roleId: null,
  loading: false,
  score: 0,
  profilImgUrl: '',
  userId: null,
  roles: [] // Ajoutez de champ avec une valeur initiale vide
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loading: true,
      };
      case UPDATE_PSEUDO:
        return {
          ...state,
          pseudo: action.pseudo,
        };
        case 'SAVE_USER':
          return {
            ...state,
            logged: true,
            loading: false,
            email: '',
            password: '',
            pseudo: action.pseudo,
            userId: action.userId,
            favorisId: null,
            roles: 'admin', // Ajoutez cette ligne pour extraire les rôles de l'action
            score: 0,
            profilImgUrl: ''
          };
        
          case 'UPDATE_SCORE':
            return {
              ...state,
              score: action.score,
            };
          // ...
       
      
    case 'QUIZZ_COMPLETED':
      return {
        ...state,
        score: state.score + action.score
      };
    case 'CHANGE_VALUE':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'LOGOUT':
      return {
        ...state,
        logged: false,
        pseudo: '',
        userId: null // Reset du champ userId à la déconnexion

      };
    default:
      return state;
  }
};

export default reducer;

import { UPDATE_PSEUDO, UPDATE_EMAIL, UPDATE_PASSWORD } from '../actions/user';


export const initialState = {
  logged: false,
  email: '',
  scores: {},
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
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password,
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

    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.email,
      };

    case 'UPDATE_SCORE':
      return {
        ...state,
        score: state.score + action.score,
      };
    // ...
    case 'RECEIVE_USER':
      return {
        ...state,
        scores: {
          ...state.scores,
          [action.user.id]: action.user.score, // Utilisez le score récupéré depuis votre base de données
        },
      };

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

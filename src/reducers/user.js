export const initialState = {
  logged: false,
  email: '',
  password: '',
  pseudo: '',
  roleId: null,
  loading: false,
  score: 0,
  profilImgUrl: '',
  userId: null // Ajout du champ userId

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loading: true,
      };
    case 'SAVE_USER':
      return {
        ...state,
        logged: true,
        loading: false,
        email: '',
        password: '',
        pseudo: action.pseudo,
        favorisId: null,
        roleId: null,
        score: 0,
        profilImgUrl: ''
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

export const initialState = {
  logged: true,
  email: '',
  password: '',
  pseudo: '',
  loading: false
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
      };
    default:
      return state;
  }
};

export default reducer;

const initialState = {
    list: [],
  };
  
  function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case 'LOGOUT':
        return {
          ...state,
          list: [],
        };
      case 'SAVE_FAV':
        return {
          ...state,
          list: action.quizz,
        };
      default:
        return state;
    }
  }
  
  export default reducer;
  
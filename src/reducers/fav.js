const initialState = {
  favorites: []
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOGOUT':
      return {
        favorites: []
      };
    case 'ADD_FAVORITE':
      const updatedFavorites = [...state.favorites, action.quiz];
      return {
        ...state,
        favorites: updatedFavorites
      };
      case 'REMOVE_FAVORITE':
        return {
          ...state,
          favorites: state.favorites.filter((quiz) => quiz.id !== action.payload),
        };
    default:
      return state;
  }
}

export default reducer;
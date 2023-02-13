import { SAVE_QUIZZ } from '../actions/quizz';

export const initialState = {
  list: [],
  loading: true,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_QUIZZ:
      return {
        ...state,
        list: action.quizz,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;

import { SAVE_CATEGORY } from '../actions/category';

export const initialState = {
  list: [],
  loading: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_CATEGORY:
      return {
        ...state,
        list: action.category,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;

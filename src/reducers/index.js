import { combineReducers } from 'redux';
import categoryReducer from './category';

import quizzReducer from './quizz';
import userReducer from './user';
import favoritesReducer from './fav';


const rootReducer = combineReducers({
  quizz: quizzReducer,
  category: categoryReducer,

  user: userReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
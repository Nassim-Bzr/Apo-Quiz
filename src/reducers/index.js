import { combineReducers } from 'redux';

import quizzReducer from './quizz';
import userReducer from './user';
import favoritesReducer from './fav';


const rootReducer = combineReducers({
  quizz: quizzReducer,
  user: userReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
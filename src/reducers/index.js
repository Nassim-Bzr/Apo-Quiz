import { combineReducers } from 'redux';

import quizzReducer from './quizz';
import userReducer from './user';

const rootReducer = combineReducers({
  quizz: quizzReducer,
  user: userReducer,
});

export default rootReducer;
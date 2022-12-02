import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import authMiddleware from '../middlewares/authMiddlewares';
/*
On importe le middleware qu'on vient d'écrire
*/
// import recipesMiddleware from '../middlewares/recipesMiddleware';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// avec applyMiddleware on construit un ensemble de tous nos middelware qu'on va donner au store
const middlewareEnhancer = applyMiddleware(
  // les actions passerons dans les middleware dans l'ordre indiqué ici:
  // recipesMiddleware,
  authMiddleware,
);

const enhancers = composeEnhancers(
  middlewareEnhancer,
);
const store = createStore(reducer, enhancers);
export default store;
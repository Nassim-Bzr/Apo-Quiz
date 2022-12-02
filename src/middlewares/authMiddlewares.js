import { CHECK_LOGIN } from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECK_LOGIN:
      console.log("je vais demander à l'API /login si les email password sont bons");
      break;

    default:
  }

  // on oublie pas de faire passer l'action au suivant
  return next(action);
};

export default authMiddleware;
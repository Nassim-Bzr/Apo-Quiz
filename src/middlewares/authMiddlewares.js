import axios from 'axios';
import { CHECK_LOGIN } from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    /*
      si on déclare une variable dans un bloc case on a l'erreur :
      Unexpected lexical declaration in case block.
      il faut alors ajouter des accolades autours du case pour ajouter un scope à notre variable
    */
    case CHECK_LOGIN: {
      /*
      on va faire l'appel API  on va envoyer à /login le email + password
      on va prendre ses valeurs là dans le state global de redux
      si jamais on avait fait nos champs controlés dans un state local avec useState
      il aurait alors fallut donner les valeurs à l'action en payload
      */
      // on récupère le tiroir user du state (celui qui est géré par le reduce user.js)
      const { user } = store.getState();
      // on récupère les variables du state user qui nous interesent
      const { email, password } = user;

      axios.post('http://localhost:3001/login', {
        email: email,
        password: password,
      }).then((reponse) => {
        console.log('reponse', reponse);
      }).catch((error) => {
        console.log('erreur', error);
      });

      break;
    }

    default:
  }
  // on oublie pas de faire passer l'action au suivant
  return next(action);
};
export default authMiddleware;
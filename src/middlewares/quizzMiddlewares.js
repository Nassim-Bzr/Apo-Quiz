import axios from 'axios';
import { actionSaveFavorites, actionSaveQuizz, FETCH_FAVORITES, FETCH_QUIZZ } from '../actions/quizz';

const quizzMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_QUIZZ:
      // on va faire l'appel API
      axios.get('http://localhost:3001/quizz')
        .then((response) => {
          console.log('requette API ok', response);
          /*
          Le middleware a récupéré les data , il dispatche SAVE_RECIPE avec les data en payload
          pour le reducer qui ira les placer dans le state
          */
          store.dispatch(actionSaveQuizz(response.data));
        })
        .catch((error) => {
          console.log('requette API ERREUR', error);
        })
        .finally(() => {
          // le chargement est terminé : signaler que on peut afficher le composant Recipe
          // on passe le loader à false : on demande au reducer
          store.dispatch({
            type: 'END_LOADING',
          });
        });
      break;

    case FETCH_FAVORITES: {
      // on va faire l'appel API
      const { token } = store.getState().user;
      axios.get(
        'http://localhost:3001/favorites',
        // on ajoute dans les entetes de la requete le token pour
        // que le serveur uisse nous reconnaitre
        {
          headers: {
            // eslint-disable-next-line quote-props
            'Authorization': `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          console.log('requette API ok', response);
          // enregistrons les fav, demandons au reducer de le faire
          // dispatchons une action pour lui !
          // SAVE_FAVORITES
          store.dispatch(actionSaveFavorites(response.data.favorites));
        })
        .catch((error) => {
          console.log('requette API ERREUR', error);
        });
      break;
      }

    default:
  }
  next(action);
};

export default quizzMiddleware;

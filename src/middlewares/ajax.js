import axios from 'axios';
import { FETCH_QUIZZ, saveQuizz } from '../actions/quizz';

const instance = axios.create({
  baseURL: 'http://localhost:8082/api',
});

const ajax = (store) => (next) => (action) => {
  if (action.type === FETCH_QUIZZ) {
    instance.get('/category')
      .then((response) => {
        // en cas de réussite de la requête
        store.dispatch(saveQuizz(response.data));
      })
      .catch((error) => {
        // en cas d’échec de la requête
        console.log(error);
        alert('Erreur de chargement, veuillez réessayer');
      });
  }
  else if (action.type === 'LOGIN') {
    const state = store.getState();
    /* // il est possible de faire du destructuring sur plusieurs niveaux
      const {
        user: {
          email,
          password,
        },
      } = store.getState();
    */
    instance.post('/users/login', {
      email: state.user.email,
      password: state.user.password,
    })
      .then((response) => {
        // on altère notre config par défaut pour ajouter le token en entete
        // ainsi toutes les requetes qui partiront après le login auront cette entete ...
        instance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        store.dispatch({
          type: 'SAVE_USER',
          pseudo: response.data.pseudo,
        });
      })
      .catch((error) => {
        console.log(error);
        alert('Erreur');
        // todo
        // il faudrait déclencher un state d'erreur
        // pour adapter l'ui dans les composant en cas d'erreur
        // il faudrait afficher un message d'erreur et passer loading à false
      });
  }
  else if (action.type === 'FETCH_FAV') {
    // ... par exemple cette requete si elle a lieu après login aura bien le token en entete
    instance.get('/favorites')
      .then((response) => {
        store.dispatch({
          type: 'SAVE_FAV',
          recipes: response.data.favorites,
        });
      })
      .catch((error) => {
        // en cas d’échec de la requête
        console.log(error);
        alert('Erreur de chargement, veuillez réessayer');
      });
  }
  else if (action.type === 'LOGOUT') {
    // j'oublie mon token au logout
    instance.defaults.headers.common.Authorization = undefined;
  }

  next(action);
};

export default ajax;

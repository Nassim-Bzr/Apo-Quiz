import { UPDATE_EMAIL } from 'actions/user';
import { UPDATE_PASSWORD } from 'actions/user';

import axios from 'axios';
import {
  FETCH_CATEGORY,
  saveCategory
} from '../actions/category';
import {
  FETCH_QUIZZ,
  saveQuizz
} from '../actions/quizz';

const instance = axios.create({
  baseURL: 'http://localhost:8082/api',
});

const ajax = (store) => (next) => (action) => {
  if (action.type === FETCH_CATEGORY) {
    instance
      .get('/category')
      .then((response) => {
        // en cas de réussite de la requête
        store.dispatch(saveCategory(response.data));
      })
      .catch((error) => {
        // en cas d'échec de la requête
        console.log(error);
        alert('Erreur de chargement, veuillez réessayer');
      });


  } 

  
  else if (action.type === UPDATE_PASSWORD) {
    const state = store.getState();
    instance
      .put(`/users/${state.user.userId}`, {
        currentPassword: state.user.currentPassword, 
        password: action.password
      })
      .then((response) => {
        const updatedUser = response.data;
        store.dispatch({
          type: 'SAVE_USER',
          email: updatedUser.email,
          pseudo: updatedUser.username,
          password : updatedUser.password,
          score: updatedUser.score,
          userId: updatedUser.id
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  else if (action.type === UPDATE_EMAIL) {
    const state = store.getState();
    instance
      .put(`/users/${state.user.userId}`, {
        email: action.email
      })
      .then((response) => {
        const updatedUser = response.data;
        store.dispatch({
          type: 'SAVE_USER',
          email: updatedUser.email,
          pseudo: updatedUser.username,
          score: updatedUser.score,
          userId: updatedUser.id
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  
  else if (action.type === FETCH_QUIZZ) {
    const categoryId = action.payload;
    instance
      .get(`/quizz?categoryId=${categoryId}`)
      .then((response) => {
        store.dispatch(saveQuizz(response.data));
      })
      .catch((error) => {
        console.log(error);
        alert('Erreur de chargement, veuillez réessayer');
      });
  } else if (action.type === 'LOGIN') {
    const state = store.getState();
    instance
      .post('/auth/signin', {
        email: state.user.email,
        password: state.user.password,
      })
      .then((response) => {
        // on altère notre config par défaut pour ajouter le token en entête
        // ainsi toutes les requêtes qui partiront après le login auront cette entête ...
        instance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        store.dispatch({
          type: 'SAVE_USER',
          pseudo: response.data.username,
          score: response.data.score,
          userId: response.data.id // Ajoutez cette ligne, en supposant que la réponse contient un champ id.
        });
      })
      .catch((error) => {
        console.log(error);
        alert('Erreur');
      });
  } else if (action.type === 'FETCH_FAV') {
    // ... par exemple cette requête si elle a lieu après le login aura bien le token en entête
    instance
      .get('/favorites')
      .then((response) => {
        store.dispatch({
          type: 'SAVE_FAV',
          recipes: response.data.favorites,
        });
      })
      .catch((error) => {
        // en cas d'échec de la requête
        console.log(error);
        alert('Erreur de chargement, veuillez réessayer');
      });
  }
  
  else if (action.type === 'LOGOUT') {
    // j'oublie mon token au logout
    instance.defaults.headers.common.Authorization = undefined;
  } 

  
  else if (action.type === 'UPDATE_SCORE') {
    const state = store.getState();
    instance
      .put(`/users/${state.user.userId}`, {
        score: state.user.score
      })
      .then((response) => {
        const updatedUser = response.data;
        store.dispatch({
          type: 'SAVE_USER',
          pseudo: updatedUser.username,
          score: updatedUser.score,
          userId: updatedUser.id
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
 

  next(action);


  
};




export default ajax;
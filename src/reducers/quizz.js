
/*
On supprime les données bidons de data.js et on veut aller chercher les données de l'API
On doit faire ça dans middelware quand il verra passer l'action FETCH_RECIPES
- on va dispatcher une action FETCH_RECIPES du premier rendu de l'app dans
un useEffect avec un tableau de dependances vide
- intercepter l'action dans le middelware et lancer l'appel API avec axios
- à la reception des datas du serveur : on va vouloir enregistrer ces datas dans le state :
modif de state ==> role du reducer donc on va dispatcher une action pour lui : SAVE_RECIPES.
*/

import { SAVE_FAVORITES, SAVE_QUIZZ } from '../actions/quizz';

export const initialState = {
  list: [],
  fav: [],
  // valeur initiale à vrai car dès qu'on arrive sur le site on est en attente des recettes
  isLoading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_QUIZZ:
      return {
        ...state, // on recopie l'ancien state
        list: [
          ...state.list,
          ...action.data,
        ],
      };
      /*
      Si on a écrit ça
      return {
        ...state,
        list: action.payload,
      };
      si il y a des recettes déjà présentes dans la liste initiale elles seront perdues
      */

    case SAVE_FAVORITES:
      return {
        ...state,
        fav: [
          ...state.fav,
          ...action.data,
        ],
      };

    case 'END_LOADING':
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;

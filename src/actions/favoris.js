// Action pour ajouter un quiz aux favoris
// Action pour ajouter un quiz aux favoris
export const addFavorite = (quiz) => {
    console.log("Adding quiz to favorites:", quiz);
    return {
      type: 'ADD_FAVORITE',
      quiz,
    };
  };
  // Action pour supprimer un quiz des favoris
// Action pour supprimer un quiz des favoris
export const removeFavorite = (id) => {
    return {
      type: 'REMOVE_FAVORITE',
      payload: id,
    };
  };

//   import axios from 'axios';

// export const addFavorite = (userId, quizzId) => {
//   return dispatch => {
//     axios.post(`/api/favoris/${userId}/favorites`, { quizzId })
//       .then(response => {
//         // Gérer la réussite de l'ajout aux favoris
//         dispatch({
//           type: 'ADD_FAVORITE',
//           quizzId: quizzId
//         });
//       })
//       .catch(error => {
//         // Gérer l'erreur lors de l'ajout aux favoris
//         console.log(error);
//       });
//   };
// };
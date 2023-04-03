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
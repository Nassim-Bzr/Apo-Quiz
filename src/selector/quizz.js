/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} quizz - toutes les recettes
 * @param {string} searchedSlug - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
 export function findQuiz(quizz, searchedSlug) {
    const quiz = quizz.find((testedQuiz) => {
      return testedQuiz.slug === searchedSlug;
    });
    return quiz;
  }
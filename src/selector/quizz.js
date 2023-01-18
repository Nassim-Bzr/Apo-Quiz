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
  /* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} quizz - toutes les recettes
 * @param {string} searchedSlug - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */


/*
Exercice : Ajouter des tests pour le selecteur :
- creer un dossier selectors , un fichier de test recipes.test.js
- rajouter un bloc aevc describe
- rajouter une ou des assertions
  ecrire déjà en français ce qu'on veut tester
  test('Proposition que l'on avance et que l'on soutient comme vraie', () => {
    expect(function(paramètres de test)).toBe(resultat attendu);
  })
*/

/**
 * selecteur qui doit renvoyer le sous-titre contenant le nombre de recettes du tableau
 * reçu en paramètre
 * @param {Array} quizList : liste des recettes
 */
export function getTitle(quizList = []) {
  if (quizList.length > 0) {
    return `Voici nos ${quizList.length} quizz`;
  }
  return 'Voici nos quizz';
}

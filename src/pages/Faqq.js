import React from 'react';

function FAQQ() {
  return (
    <div>
      <h1>Foire aux questions</h1>
      <ul>
        <li>
          <h2>Comment fonctionne ce quiz ?</h2>
          <p>Le quiz consiste en un ensemble de questions à choix multiple. Vous devez sélectionner la réponse que vous pensez être correcte pour chaque question et cliquer sur le bouton "Soumettre" pour voir si vous avez répondu correctement.</p>
        </li>
        <li>
          <h2>Y a-t-il un temps limite pour répondre à chaque question ?</h2>
          <p>Non, il n'y a pas de temps limite pour répondre à chaque question. Vous pouvez prendre le temps de réfléchir à chaque réponse avant de la soumettre.</p>
        </li>
        <li>
          <h2>Comment puis-je savoir si ma réponse est correcte ?</h2>
          <p>Après avoir soumis votre réponse à une question, vous verrez un message indiquant si vous avez répondu correctement ou non. Si vous avez répondu correctement, vous verrez un message de félicitations et si vous avez répondu incorrectement, vous verrez un message vous indiquant la bonne réponse.</p>
        </li>
        <li>
          <h2>Puis-je recommencer le quiz ?</h2>
          <p>Oui, vous pouvez recommencer le quiz autant de fois que vous le souhaitez. Il suffit de cliquer sur le bouton "Recommencer" à la fin du quiz pour recommencer depuis le début.</p>
        </li>
      </ul>
      <button class="learn-more">
  <span class="circle" aria-hidden="true">
  <span class="icon arrow"></span>
  </span>
  <span class="button-text">Learn More</span>
</button>
    </div>
  );
}

export default FAQQ;

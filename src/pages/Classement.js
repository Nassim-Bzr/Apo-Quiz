import React from 'react';
import './classement.css';

export default function Classement() {
  const classement = [
    {
      rang: '#1',
      nom: 'John Doe',
      image: 'https://img.freepik.com/vecteurs-libre/homme-mafieux-mysterieux-fumant-cigarette_52683-34828.jpg?size=626&ext=jpg',
      points: 100
    },
    {
      rang: '#2',
      nom: 'Jane Smith',
      image: 'https://img.freepik.com/vecteurs-libre/homme-mafieux-mysterieux-fumant-cigarette_52683-34828.jpg?size=626&ext=jpg',
      points: 80
    },
    {
      rang: '#3',
      nom: 'Bob Johnson',
      image: 'https://img.freepik.com/vecteurs-libre/homme-mafieux-mysterieux-fumant-cigarette_52683-34828.jpg?size=626&ext=jpg',
      points: 60
    }
  ];

  return (
    <div className='container-classement'>
      <h1>Classement</h1>
      <div className='div-classement'>
        <table>
          <thead>
            <tr>
              <th>Rang</th>
              <th>Nom</th>
              <th>Image de profil</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {classement.map((joueur) => (
              <tr key={joueur.rang}>
                <td>{joueur.rang}</td>
                <td>{joueur.nom}</td>
                <td>
                  <img className='img-classement' src={joueur.image} alt={joueur.nom} />
                </td>
                <td>{joueur.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

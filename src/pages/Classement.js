import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './classement.css';
import { useSelector } from 'react-redux';

export default function Classement() {
  const [classement, setClassement] = useState([]);
  const ProfilImg = useSelector((state) => state.user.profilImgUrl)
  const score = useSelector((state) => state.user.score)
  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get('http://localhost:8082/api/users');
      const sortedUsers = response.data.sort((a, b) => b.score - a.score);
      setClassement(sortedUsers);
    }
    fetchUsers();
  }, []);

  return (
    <div className='container-classement'>
      <h1>Classement</h1>
      <div className='div-classement'>
        <table>
          <thead>
            <tr>
              <th>Rang</th>
              <th>Nom</th>
              {/* <th>Image de profil</th> */}
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {classement.map((joueur, index) => (
              <tr key={joueur.id}>
                <td>#{index + 1}</td>
                <td>{joueur.username}</td>
                {/* <td>
                  <img className='img-classement' src={joueur.profilImgUrl} alt={joueur.username} />
                </td> */}
                <td>{joueur.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
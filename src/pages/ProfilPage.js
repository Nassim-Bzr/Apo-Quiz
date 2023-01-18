import React from 'react';
import './ProfilePage.css';

class ProfilePage extends React.Component {
  render() {
    const { name, profileImg, quizzesTaken, quizzesCreated, highScore, recentActivities } = this.props;
    // rest of the code
    return (
      <div className="quiz-profile-container">
        <div className="quiz-profile-header">
          <img src={profileImg} alt="Profile" className="quiz-profile-img" />
          <h1 className="quiz-profile-name">{name}</h1>
        </div>
        <div className="quiz-profile-stats">
          <div className="stat">
            <p className="stat-value">{quizzesTaken}</p>
            <p className="stat-label">Quizz Effectuées</p>
          </div>
          <div className="stat">
            <p className="stat-value">{quizzesCreated}</p>
            <p className="stat-label">Quizz Crée</p>
          </div>
          <div className="stat">
            <p className="stat-value">{highScore}</p>
            <p className="stat-label">Meilleurs Score</p>
          </div>
        </div>
        <div className="quiz-profile-recent-activity">
            <h2 className="quiz-profile-recent-activity-title">Recente Activité </h2>
            <ul className="quiz-profile-recent-activity-list">
                {recentActivities.map((activity, index) => (
                    <li key={index} className="quiz-profile-recent-activity-item">
                      <p>{activity.quizName}</p>
                      <p>{activity.date}</p>
                      <p>{activity.score}</p>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    );
  
                }
              }
    

export default ProfilePage;

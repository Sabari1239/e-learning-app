import React, { useState, useEffect } from 'react';
import { FaTrophy, FaMedal, FaCrown } from 'react-icons/fa';
import { BsCalendarDate } from 'react-icons/bs';
import { MdScoreboard } from 'react-icons/md';
import './Leaderboard.css';

const Leaderboard = () => {
    const [scores, setScores] = useState([]);
    
    useEffect(() => {
        const fetchScores = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/scores');
                const data = await response.json();
                setScores(data);
            } catch (error) {
                console.error('Error fetching scores:', error);
            }
        };
        
        fetchScores();
    }, []);

    const getRankIcon = (rank) => {
        switch(rank) {
            case 1:
                return <FaCrown className="rank-icon gold" />;
            case 2:
                return <FaMedal className="rank-icon silver" />;
            case 3:
                return <FaMedal className="rank-icon bronze" />;
            default:
                return <FaTrophy className="rank-icon" />;
        }
    };

    return (
        <div className="leaderboard-container">
            <div className="leaderboard-header">
                <FaTrophy className="trophy-icon" />
                <h2>Leaderboard</h2>
            </div>
            <table className="leaderboard-table">
            <thead>
                <tr>
                    <th><div className="header-content">Rank</div></th>
                    <th><div className="header-content">Name</div></th>
                    <th><div className="header-content"><MdScoreboard /> Score</div></th>
                    <th><div className="header-content"><BsCalendarDate /> Date</div></th>
                </tr>
            </thead>

                <tbody>
                    {scores.map((score, index) => (
                        <tr key={index} className={`leaderboard-row ${index < 3 ? 'top-three' : ''}`}>
                            <td>
                                {getRankIcon(index + 1)}
                                <span>{index + 1}</span>
                            </td>
                            <td>{score.name}</td>
                            <td>{score.score}%</td>
                            <td>{new Date(score.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;

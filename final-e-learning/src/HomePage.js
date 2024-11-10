// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="homepage-wrapper">
            <div className="homepage-content">
                <h1>Welcome to Code Haven</h1>
                <p>Your journey to mastering programming languages starts here.</p>
                <button onClick={goToLogin}>Get Started</button>
            </div>
            <div className="homepage-image">
                <img src="https://img.freepik.com/free-vector/online-programming-concept-illustration_114360-3901.jpg" alt="Code Learning Illustration" />
            </div>
        </div>
    );
};

export default HomePage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const goToUserLogin = () => {
        navigate('/login');
    };

    const goToAdmin = () => {
        navigate('/admin');  // This will route to AdminPanel
    };

    return (
        <div className="homepage-wrapper">
            <div className="homepage-content">
                <h1>Welcome User !</h1>
                <p>"Unlock your coding potential make programming accessible and engaging for everyone.".</p>
                <div className="login-options">
                    <button onClick={goToUserLogin} className="user-login-btn">
                        Student Login
                    </button>
                    <button onClick={goToAdmin} className="admin-login-btn">
                        Admin Panel
                    </button>
                </div>
            </div>
            <div className="homepage-image">
                <img src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?t=st=1731254709~exp=1731258309~hmac=77cc026737733e67cd1931cb98cb6e8afeeef618a2374e94130040adb61ad421&w=740" alt="Code Learning Illustration" />
            </div>
        </div>
    );
};

export default HomePage;

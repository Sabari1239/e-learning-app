import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (credentials.username === 'admin' && credentials.password === 'admin') {
            localStorage.setItem('adminLoggedIn', 'true');
            navigate('/admin-dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    // Back button handler
    const handleBack = () => {
        navigate(-1); // This navigates back to the previous page
    };

    return (
        <div className="admin-login-container">
            <button className="back-button" onClick={handleBack}>← Back</button>
            <div className="admin-login-form">
                <h2>Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={credentials.username}
                        onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;

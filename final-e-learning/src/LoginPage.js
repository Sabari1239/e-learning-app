import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();

    // Add role to localStorage after successful login
const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.loginEmail.value;
    const password = event.target.loginPassword.value;

    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('userRole', data.role); // Add this line
            localStorage.setItem('adminToken', data.token); // Add this for admin access
            navigate('/home');
        } else {
            alert(data.error || 'Login failed');
        }
    } catch (error) {
        alert('Error logging in');
    }
};

    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.registerName.value;
        const email = event.target.registerEmail.value;
        const phone = event.target.registerPhone.value;
        const password = event.target.registerPassword.value;

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, password })
            });

            const data = await response.json();
            if (response.ok) {
                alert('Registration successful');
                setIsRegistering(false);
            } else {
                alert(data.error || 'Registration failed');
            }
        } catch (error) {
            alert('Error registering');
        }
    };
    return (
        <div className="main-wrapper">
            {/* Login Container */}
            {!isRegistering && (
                <div id="loginContainer" className="form-container animate">
                    <h2>Login</h2>
                    <form id="loginForm" onSubmit={handleLoginSubmit}>
                        <input type="email" name="loginEmail" placeholder="Email" required />
                        <input type="password" name="loginPassword" placeholder="Password" required />
                        <button type="submit">Login</button>
                        <p>
                            Don't have an account? 
                            <a href="#" onClick={() => setIsRegistering(true)}>Create One</a>
                        </p>
                    </form>
                </div>
            )}

            {/* Registration Container */}
            {isRegistering && (
                <div id="registerContainer" className="form-container animate">
                    <h2>Create Account</h2>
                    <form id="registerForm" onSubmit={handleRegisterSubmit}>
                        <input type="text" name="registerName" placeholder="Name" required />
                        <input type="email" name="registerEmail" placeholder="Email" required />
                        <input type="tel" name="registerPhone" placeholder="Phone Number" required />
                        <input type="password" name="registerPassword" placeholder="Password" required />
                        <button type="submit">Submit</button>
                        <p>
                            Already have an account? 
                            <a href="#" onClick={() => setIsRegistering(false)}>Back to Login</a>
                        </p>
                    </form>
                </div>
            )}

            {/* Image Section */}
            <div className="image-container">
                <img src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-4296.jpg?ga=GA1.1.1808475635.1729663191&semt=ais_hybrid" alt="Welcome Image" />
            </div>
        </div>
    );
};

export default LoginPage;
// src/App.js
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './LoginPage';
import FinalELearning from './FinalELearning';
import Course from './Course';
import ProfileDashboard from './ProfileDashboard';
import Quiz from './Quiz';
import Leaderboard from './Leaderboard';
import PracticeContent from './PracticeContent';
import OnlineCompiler from './OnlineCompiler';
import './Navbar.css'; 

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens or user data
    localStorage.removeItem('authToken');
    // Redirect to login page
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">E Learning Platform</div>
      <ul className="navbar-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/course">My Course</a></li>
        <li><a href="/Leaderboard">Leaderboard</a></li>
        <li><a href="/quiz">Quiz</a></li>
        <li><a href="/ProfileDashboard">Dashboard</a></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<><Navbar /><FinalELearning /></>} />
        <Route path="/course" element={<><Navbar /><Course /></>} />
        <Route path="/ProfileDashboard" element={<><Navbar /><ProfileDashboard /></>} />
        <Route path="/Quiz" element={<><Navbar /><Quiz /></>} />
        <Route path="/Leaderboard" element={<><Navbar /><Leaderboard /></>} />
        <Route path="/practice/:topic" element={<><Navbar /><PracticeContent /></>} />
        <Route path="/online-compiler" element={<><Navbar /><OnlineCompiler /></>} />
      </Routes>
    </div>
  );
}

export default App;
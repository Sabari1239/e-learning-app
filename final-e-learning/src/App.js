import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './LoginPage';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import UserManagement from './UserManagement';
import ContentManagement from './ContentManagement';
import FinalELearning from './FinalELearning';
import Course from './Course';
import ProfileDashboard from './ProfileDashboard';
import Quiz from './Quiz';
import Leaderboard from './Leaderboard';
import PracticeContent from './PracticeContent';
import OnlineCompiler from './OnlineCompiler';
import VideoTutorials from './VideoTutorials';

import './Navbar.css';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    window.location.href = '/';
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
        <li><a href="/online-compiler">Compiler</a></li>
        <li><a href="/tutorials">Video Tutorials</a></li>
        


        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

const AdminNavbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    window.location.href = '/admin';
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Admin Dashboard</div>
      <ul className="navbar-links">
        <li><a href="/admin-dashboard">Dashboard</a></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

// Protected Route Component
const ProtectedAdminRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
  return isAdminLoggedIn ? children : <Navigate to="/admin" />;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        
        {/* Protected Admin Routes */}
        <Route path="/admin-dashboard" element={
          <ProtectedAdminRoute>
            <AdminNavbar />
            <AdminDashboard />
          </ProtectedAdminRoute>
        } />
        <Route path="/user-management" element={
          <ProtectedAdminRoute>
            <AdminNavbar />
            <UserManagement />
          </ProtectedAdminRoute>
        } />
        <Route path="/content-management" element={
          <ProtectedAdminRoute>
            <AdminNavbar />
            <ContentManagement />
          </ProtectedAdminRoute>
        } />

        {/* User Routes */}
        <Route path="/home" element={<><Navbar /><FinalELearning /></>} />
        <Route path="/course" element={<><Navbar /><Course /></>} />
        <Route path="/ProfileDashboard" element={<><Navbar /><ProfileDashboard /></>} />
        <Route path="/Quiz" element={<><Navbar /><Quiz /></>} />
        <Route path="/Leaderboard" element={<><Navbar /><Leaderboard /></>} />
        <Route path="/practice/:topic" element={<><Navbar /><PracticeContent /></>} />
        <Route path="/online-compiler" element={<><Navbar /><OnlineCompiler /></>} />
        <Route path="/tutorials" element={<><Navbar /><VideoTutorials /></>} />
        </Routes>
    </div>
  );
}

export default App;

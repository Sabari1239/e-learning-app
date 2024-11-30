import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <div className="admin-buttons">
                <button onClick={() => navigate('/user-management')}>
                    User Management
                </button>
                <button onClick={() => navigate('/content-management')}>
                    Content Management
                </button>
            </div>
        </div>
    );
};

export default AdminDashboard;


import React, { useState, useEffect } from 'react';
import './AdminLogin.css';
const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [userStats, setUserStats] = useState({
        totalUsers: 0,
        activeUsers: 0,
        averageProgress: 0
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/admin/users');
            const data = await response.json();
            const formattedUsers = data.map(user => ({
                _id: user._id,
                name: user.name || 'N/A',
                email: user.email || 'N/A',
                progress: user.progress || 0,
                lastActive: user.lastActive ? new Date(user.lastActive).toLocaleDateString() : 'Never',
                score: user.score || 0
            }));
            setUsers(formattedUsers);
            calculateUserStats(formattedUsers);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const calculateUserStats = (users) => {
        const activeUsers = users.filter(user => user.lastActive !== 'Never').length;
        const avgProgress = users.reduce((acc, user) => acc + user.progress, 0) / users.length;
        
        setUserStats({
            totalUsers: users.length,
            activeUsers,
            averageProgress: Math.round(avgProgress)
        });
    };

    return (
        <div className="admin-section">
            <h2>User Management</h2>
            <div className="user-stats">
                <div className="stat-card">
                    <h3>Total Users</h3>
                    <p>{userStats.totalUsers}</p>
                </div>
                <div className="stat-card">
                    <h3>Active Users</h3>
                    <p>{userStats.activeUsers}</p>
                </div>
                <div className="stat-card">
                    <h3>Average Progress</h3>
                    <p>{userStats.averageProgress}%</p>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Progress</th>
                        <th>Score</th>
                        <th>Last Active</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.progress}%</td>
                            <td>{user.score}</td>
                            <td>{user.lastActive}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;



import React, { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import html2canvas from 'html2canvas';
import 'chart.js/auto';

const ProfileDashboard = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [userData, setUserData] = useState(null);
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        phone: '',
        description: 'This is a short description about the user.',
        profilePic: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg?semt=ais_hybrid'
    });
    const [newProfilePic, setNewProfilePic] = useState(null);
    const [showCertificate, setShowCertificate] = useState(false);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/user/${userId}`);
            const data = await response.json();
            setUserData(data);
            setProfileData(prev => ({
                ...prev,
                name: data.user.name,
                email: data.user.email,
                phone: data.user.phone || ''
            }));
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleEditClick = () => setIsEditMode(true);
    const handleCancelClick = () => setIsEditMode(false);

    const handleSaveClick = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/user/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: document.getElementById('editName').value,
                    email: document.getElementById('editEmail').value,
                    phone: document.getElementById('editPhone').value,
                    description: document.getElementById('editDescription').value
                })
            });

            if (response.ok) {
                await fetchUserData();
                setIsEditMode(false);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewProfilePic(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileData(prev => ({
                    ...prev,
                    profilePic: e.target.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const downloadCertificate = () => {
        const certificateElement = document.getElementById('certificate');
        html2canvas(certificateElement).then((canvas) => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `Certificate_${profileData.name}.png`;
            link.click();
        });
    };

    const pieData = {
        labels: ['Completed', 'In Progress'],
        datasets: [{
            data: [
                userData?.completedCourses?.length || 0,
                (userData?.progress?.length || 0) - (userData?.completedCourses?.length || 0)
            ],
            backgroundColor: ['#4CAF50', 'rgb(0, 128, 0)']
        }]
    };

    const barData = {
        labels: ['Python', 'Java', 'JavaScript', 'C++', 'C'],
        datasets: [{
            label: 'Topics Completed',
            data: userData?.progress?.map(p => p.completedTopics.length) || [0, 0, 0, 0, 0],
            backgroundColor: 'rgb(124,196,124)',
            borderColor: 'rgb(0, 128, 0)',
            borderWidth: 2
        }]
    };

    return (
        <div style={styles.dashboard}>
            <div style={styles.profile}>
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleProfilePicChange}
                    id="editProfilePicInput"
                />
                <img
                    src={profileData.profilePic}
                    alt="Profile Picture"
                    style={styles.profilePic}
                    onClick={() => document.getElementById('editProfilePicInput').click()}
                />
                <h2 style={styles.name}>{profileData.name}</h2>
                <p style={styles.email}>{profileData.email}</p>
                <p style={styles.phone}>{profileData.phone}</p>
                <button style={styles.editButton} onClick={handleEditClick}>Edit Profile</button>
                <div style={styles.descriptionContainer}>
                    <h4>Description</h4>
                    <p>{profileData.description}</p>
                </div>
                {userData?.completedCourses?.length > 0 && (
                    <button style={styles.downloadButton} onClick={() => setShowCertificate(true)}>
                        Get Certificate
                    </button>
                )}
            </div>
            <div style={styles.charts}>
                <div style={styles.chartContainer}>
                    <h3>Course Progress Overview</h3>
                    <div style={styles.pieChartContainer}>
                        <Pie data={pieData} />
                    </div>
                </div>
                <div style={styles.chartContainer}>
                    <h3>Language-wise Progress</h3>
                    <Bar data={barData} />
                </div>
            </div>
            {isEditMode && (
                <div style={styles.editContainer}>
                    <h3>Edit Profile</h3>
                    <input type="text" defaultValue={profileData.name} id="editName" placeholder="Name" style={styles.input} />
                    <input type="email" defaultValue={profileData.email} id="editEmail" placeholder="Email" style={styles.input} />
                    <input type="tel" defaultValue={profileData.phone} id="editPhone" placeholder="Phone Number" style={styles.input} />
                    <textarea defaultValue={profileData.description} id="editDescription" placeholder="Add your description here..." rows="4" style={styles.input} />
                    <button style={styles.saveButton} onClick={handleSaveClick}>Save Changes</button>
                    <button style={styles.cancelButton} onClick={handleCancelClick}>Cancel</button>
                </div>
            )}
            {showCertificate && (
                <div style={styles.certificateContainer}>
                    <div id="certificate" style={styles.certificate}>
                        <h1 style={styles.certificateTitle}>Certificate of Achievement</h1>
                        <p style={styles.certificateText}>This certificate is awarded to</p>
                        <h2 style={styles.recipientName}>{profileData.name}</h2>
                        <p style={styles.certificateText}>for successfully completing the Online Programming Learning Course.</p>
                        <p style={styles.certificateText}>Congratulations!</p>
                    </div>
                    <div style={styles.certificateButtons}>
                        <button onClick={downloadCertificate} style={styles.downloadButton}>Download Certificate</button>
                        <button onClick={() => setShowCertificate(false)} style={styles.cancelButton}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    dashboard: { display: 'flex', maxWidth: '900px', margin: 'auto', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', padding: '20px' },
    profile: { textAlign: 'center', flex: 1, padding: '20px' },
    profilePic: { width: '150px', height: '150px', borderRadius: '50%', border: '4px solid #4CAF50', cursor: 'pointer', transition: 'transform 0.4s' },
    name: { fontSize: '24px', margin: '10px 0 5px' },
    email: { color: 'gray', fontSize: '16px' },
    phone: { color: 'gray', fontSize: '16px' },
    editButton: { marginTop: '10px', padding: '5px 10px', border: 'none', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer', transition: 'background-color 0.3s, transform 0.2s' },
    downloadButton: { marginTop: '10px', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer', transition: 'background-color 0.3s' },
    charts: { flex: 2, display: 'flex', flexDirection: 'column', gap: '20px', paddingLeft: '20px' },
    chartContainer: { background: '#f9f9f9', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' },
    pieChartContainer: { width: '200px', height: '200px', margin: 'auto' },
    editContainer: { display: 'flex', flexDirection: 'column', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', zIndex: 1000 },
    input: { margin: '10px 0', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' },
    saveButton: { backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' },
    cancelButton: { backgroundColor: '#f44336', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' },
    certificateContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        zIndex: 1000
    },
    certificate: {
        padding: '15px',
        border: '5px solid #4CAF50',
        borderRadius: '10px',
        textAlign: 'center',
        width: '450px',
        backgroundColor: '#f0f8ff',
        backgroundImage: 'linear-gradient(to right, #f0f8ff, #e6ffe6)',
        position: 'relative'
    },
    badge: {
        width: '50px',
        height: '50px',
        position: 'absolute',
        top: '20px',
        right: '20px'
    },
    certificateTitle: {
        color: '#4CAF50',
        fontSize: '25px',
        margin: '10px 0'
    },
    certificateText: {
        fontSize: '15px',
        margin: '5px 0'
    },
    recipientName: {
        fontSize: '22px',
        fontWeight: 'bold',
        margin: '10px 0'
    },
    congratulationsText: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#ff6347'
    },
    certificateButtons: {
        marginTop: '20px'
    }
};

export default ProfileDashboard;
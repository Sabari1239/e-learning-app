import React, { useState, useEffect } from 'react';
import './AdminLogin.css';

const ContentManagement = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [existingContent, setExistingContent] = useState([]);
    const [newContent, setNewContent] = useState({
        title: '',
        content: '',
        code: '',
        exercises: [{ question: '', answer: '' }]
    });

    const languages = ['JavaScript', 'Python', 'Java', 'C++', 'C'];

    useEffect(() => {
        fetchExistingContent();
    }, []);

    const fetchExistingContent = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/topics/all');
            const data = await response.json();
            setExistingContent(Object.entries(data));
        } catch (error) {
            console.error('Error fetching content:', error);
        }
    };

    const handleAddExercise = () => {
        setNewContent({
            ...newContent,
            exercises: [...newContent.exercises, { question: '', answer: '' }]
        });
    };

    const handleExerciseChange = (index, field, value) => {
        const updatedExercises = [...newContent.exercises];
        updatedExercises[index][field] = value;
        setNewContent({
            ...newContent,
            exercises: updatedExercises
        });
    };

    const handleContentSubmit = async (e) => {
        e.preventDefault();
        try {
            const topicKey = `${selectedLanguage} ${newContent.title}`;
            const response = await fetch('http://localhost:5000/api/admin/content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    language: selectedLanguage,
                    title: topicKey,
                    content: newContent.content,
                    code: newContent.code,
                    exercises: newContent.exercises
                })
            });

            if (response.ok) {
                setNewContent({
                    title: '',
                    content: '',
                    code: '',
                    exercises: [{ question: '', answer: '' }]
                });
                setSelectedLanguage('');
                fetchExistingContent();
                alert('Content added successfully!');
            }
        } catch (error) {
            console.error('Error adding content:', error);
        }
    };

    return (
        <div className="admin-section">
            <h2>Course Content Management</h2>
            
            <div className="existing-content">
                <h3>Existing Content</h3>
                <div className="content-list">
                    {existingContent.map(([key, content]) => (
                        <div key={key} className="content-item">
                            <h4>{key}</h4>
                            <p>Questions: {content.questions?.length || 0}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="add-content-form">
                <h3>Add New Content</h3>
                <form onSubmit={handleContentSubmit}>
                    <select 
                        value={selectedLanguage} 
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        required
                    >
                        <option value="">Select Language</option>
                        {languages.map(lang => (
                            <option key={lang} value={lang}>{lang}</option>
                        ))}
                    </select>

                    <input
                        type="text"
                        placeholder="Title"
                        value={newContent.title}
                        onChange={(e) => setNewContent({...newContent, title: e.target.value})}
                        required
                    />

                    <textarea
                        placeholder="Content"
                        value={newContent.content}
                        onChange={(e) => setNewContent({...newContent, content: e.target.value})}
                        required
                    />

                    <textarea
                        placeholder="Example Code"
                        value={newContent.code}
                        onChange={(e) => setNewContent({...newContent, code: e.target.value})}
                        required
                    />

                    <div className="exercises-section">
                        <h3>Exercises</h3>
                        {newContent.exercises.map((exercise, index) => (
                            <div key={index} className="exercise-inputs">
                                <input
                                    type="text"
                                    placeholder="Question"
                                    value={exercise.question}
                                    onChange={(e) => handleExerciseChange(index, 'question', e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Answer"
                                    value={exercise.answer}
                                    onChange={(e) => handleExerciseChange(index, 'answer', e.target.value)}
                                    required
                                />
                            </div>
                        ))}
                        <button type="button" onClick={handleAddExercise} className="add-exercise-btn">
                            Add Exercise
                        </button>
                    </div>

                    <button type="submit" className="submit-btn">Add Content</button>
                </form>
            </div>
        </div>
    );
};

export default ContentManagement;

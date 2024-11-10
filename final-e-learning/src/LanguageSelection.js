import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LanguageSelection.css';

const LanguageSelection = () => {
    const navigate = useNavigate();
    
    const languages = [
        {
            name: 'Python',
            description: 'A versatile language perfect for beginners',
            firstTopic: 'Introduction to Python'
        },
        {
            name: 'C++',
            description: 'Powerful language for system programming',
            firstTopic: 'Introduction to C++'
        },
        {
            name: 'Java',
            description: 'Popular language for enterprise applications',
            firstTopic: 'Introduction to Java'
        },
        {
            name: 'JavaScript',
            description: 'Essential language for web development',
            firstTopic: 'Introduction to JavaScript'
        },
        {
            name: 'C',
            description: 'Foundational language for programming',
            firstTopic: 'Introduction to C'
        }
    ];

    const handleLanguageSelect = (firstTopic) => {
        navigate(`/practice/${encodeURIComponent(firstTopic)}`);
    };

    return (
        <div className="language-selection-container">
            <h1>Choose Your Programming Language</h1>
            <div className="language-grid">
                {languages.map(lang => (
                    <div 
                        key={lang.name} 
                        className="language-card"
                        onClick={() => handleLanguageSelect(lang.firstTopic)}
                    >
                        <h2>{lang.name}</h2>
                        <p>{lang.description}</p>
                        <button className="start-button">Start Learning</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LanguageSelection;
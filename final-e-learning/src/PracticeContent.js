import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PracticeContent.css';
import allTopics from './topics';

const PracticeContent = () => {
    const { topic } = useParams();
    const navigate = useNavigate();
    const decodedTopic = decodeURIComponent(topic);
    const [currentProgress, setCurrentProgress] = useState(null);
    const [showPractice, setShowPractice] = useState(false);
    const [practiceAnswer, setPracticeAnswer] = useState('');
    const [practiceResult, setPracticeResult] = useState(null);
    const [currentLanguage, setCurrentLanguage] = useState('');
    const [completedTopics, setCompletedTopics] = useState([]);
    const [dynamicTopics, setDynamicTopics] = useState({});
    const userId = localStorage.getItem('userId');

    const allAvailableTopics = { ...allTopics, ...dynamicTopics };
    const topicKeys = Object.keys(allAvailableTopics);
    const currentIndex = topicKeys.indexOf(decodedTopic);
    const topicContent = allAvailableTopics[decodedTopic];

    useEffect(() => {
        const fetchAllContent = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/topics/all');
                const dynamicContent = await response.json();
                console.log('Dynamic Content:', dynamicContent);
                console.log('All Topics:', allTopics);
                console.log('Merged Topics:', { ...allTopics, ...dynamicContent });
                setDynamicTopics(dynamicContent);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchAllContent();
    }, [decodedTopic]);
    

    const fetchProgress = async (language) => {
        try {
            const response = await fetch(`http://localhost:5000/api/progress/${userId}/${language}`);
            const data = await response.json();
            setCurrentProgress(data);
            setCompletedTopics(data.completedTopics || []);
        } catch (error) {
            console.error('Error fetching progress:', error);
        }
    };

    const updateProgress = async (exerciseResult = null) => {
        try {
            await fetch('http://localhost:5000/api/progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId,
                    language: currentLanguage,
                    topic: decodedTopic,
                    exerciseResult
                })
            });
            await fetchProgress(currentLanguage);
        } catch (error) {
            console.error('Error updating progress:', error);
        }
    };

    const handlePractice = () => setShowPractice(true);

    const handlePracticeSubmit = async () => {
        const currentExercise = dynamicTopics[decodedTopic]?.exercises?.[0] || topicContent?.exercises?.[0];
        const correctAnswer = currentExercise?.answer || topicContent?.practiceAnswer;
        const isCorrect = practiceAnswer.toLowerCase() === correctAnswer?.toLowerCase();
        
        const exerciseResult = {
            completed: true,
            score: isCorrect ? 100 : 0
        };

        setPracticeResult({
            correct: isCorrect,
            message: isCorrect ? 'Correct! Well done!' : 'Try again!'
        });

        await updateProgress(exerciseResult);

        setTimeout(() => {
            setPracticeResult(null);
            setShowPractice(false);
            setPracticeAnswer('');
        }, 2000);
    };

    const handleNext = async () => {
        if (currentIndex < topicKeys.length - 1) {
            await updateProgress();
            navigate(`/practice/${encodeURIComponent(topicKeys[currentIndex + 1])}`);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            navigate(`/practice/${encodeURIComponent(topicKeys[currentIndex - 1])}`);
        }
    };

    const calculateProgress = () => {
        const languageTopics = topicKeys.filter(t => t.startsWith(currentLanguage));
        return Math.round((completedTopics.length / languageTopics.length) * 100);
    };

    return (
        <div className="practice-content-container">
            <div className="progress-section">
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${calculateProgress()}%` }}>
                        {calculateProgress()}%
                    </div>
                </div>
                <div className="content-header">
                    <h2>{decodedTopic}</h2>
                    <span className="topic-status">
                        {completedTopics.includes(decodedTopic) ? '✅ Completed' : '🔄 In Progress'}
                    </span>
                </div>
            </div>

            <div className="main-content">
                <div className="theory-section">
                    <h3>Theory</h3>
                    <div className="section-content">
                        {topicContent?.content || dynamicTopics[decodedTopic]?.content}
                    </div>
                </div>

                <div className="syntax-section">
                    <h3>Syntax</h3>
                    <div className="section-content">
                        {topicContent?.syntax || dynamicTopics[decodedTopic]?.code}
                    </div>
                </div>

                <div className="practice-section">
                    <h3>Practice Exercise</h3>
                    {!showPractice ? (
                        <div className="section-content">
                            {(topicContent?.questions || dynamicTopics[decodedTopic]?.exercises)?.map((question, index) => (
                                <div key={index} className="question-item">
                                    {question.question || question}
                                </div>
                            ))}
                            <button className="practice-button" onClick={handlePractice}>
                                Start Practice
                            </button>
                        </div>
                    ) : (
                        <div className="practice-exercise">
                            <textarea
                                value={practiceAnswer}
                                onChange={(e) => setPracticeAnswer(e.target.value)}
                                placeholder="Write your answer here..."
                                className="practice-input"
                            />
                            <div className="practice-controls">
                                <button onClick={handlePracticeSubmit} className="submit-button">
                                    Submit Answer
                                </button>
                                {practiceResult && (
                                    <div className={`practice-result ${practiceResult.correct ? 'correct' : 'incorrect'}`}>
                                        {practiceResult.message}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="navigation-buttons">
                <button onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
                <button onClick={handleNext} disabled={currentIndex === topicKeys.length - 1}>Next</button>
            </div>
        </div>
    );
};

export default PracticeContent;
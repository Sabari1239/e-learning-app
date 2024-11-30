import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from './questions';
import './quiz.css';

const Quiz = () => {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [totalCorrect, setTotalCorrect] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [timer, setTimer] = useState(30);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [quizEnded, setQuizEnded] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);
    const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleQuizEnd = async () => {
        const questionsAttempted = currentQuestionIndex + 1;
        const userScore = Math.round((score / questionsAttempted) * 100);
        const userId = localStorage.getItem('userId');
        
        if (!userId) {
            console.error('No user ID found');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/api/scores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId,
                    score: userScore,
                    totalQuestions: questionsAttempted,
                    category: 'programming'
                })
            });
            
            if (response.ok) {
                localStorage.setItem('userScore', userScore);
                setQuizEnded(true);
                setShowScore(true);
                navigate('/leaderboard');
            }
        } catch (error) {
            console.error('Error submitting quiz score:', error);
        }
    };
    const handleQuitQuiz = async () => {
        const questionsAttempted = currentQuestionIndex + 1;
        const userScore = Math.round((score / questionsAttempted) * 100);
        const userId = localStorage.getItem('userId');
        
        if (userId) {
            try {
                await fetch('http://localhost:5000/api/scores', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userId,
                        score: userScore,
                        totalQuestions: questionsAttempted,
                        category: 'programming'
                    })
                });
            } catch (error) {
                console.error('Error submitting quiz score:', error);
            }
        }
        
        setShowScore(true); // Show the score summary first
        localStorage.setItem('userScore', userScore);
    };
    



    const handleAnswerClick = useCallback((index) => {
        if (index !== null) {
            const selectedOption = questions[currentQuestionIndex].options[index];
            const isCorrect = selectedOption === questions[currentQuestionIndex].correctAnswer;
            setSelectedAnswer(index);

            const newAnswers = [...answers];
            newAnswers[currentQuestionIndex] = selectedOption;
            setAnswers(newAnswers);

            if (isCorrect) {
                setScore((prevScore) => prevScore + 1);
                setTotalCorrect((prevCorrect) => prevCorrect + 1);
                setFeedback("Correct!");
            } else {
                setFeedback(`Wrong! Correct Answer: ${questions[currentQuestionIndex].correctAnswer}`);
            }
        }

        setShowCorrectAnswer(true);

        setTimeout(() => {
            setShowCorrectAnswer(false);
            setFeedback("");
            setSelectedAnswer(null);
            
            if (currentQuestionIndex >= questions.length - 1) {
                handleQuizEnd();
            } else {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                setTimer(30);
            }
        }, 2000);
    }, [currentQuestionIndex, questions, answers]);

    useEffect(() => {
        if (timer > 0 && !showScore && !quizEnded && quizStarted) {
            const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
            return () => clearInterval(interval);
        } else if (timer === 0 && quizStarted) {
            handleAnswerClick(null);
        }
    }, [timer, showScore, quizEnded, quizStarted, handleAnswerClick]);

    const handleStartQuiz = () => {
        setQuizStarted(true);
        setTimer(30);
    };

    const currentQuestion = questions[currentQuestionIndex];
    
    if (!currentQuestion) {
        return null;
    }

    if (!quizStarted) {
        return (
            <div className="quiz-container">
                <h2>Welcome {userName}!</h2>
                <p>Test your programming knowledge with this quiz.</p>
                <p>You'll have 30 seconds for each question.</p>
                <button onClick={handleStartQuiz} className="start-button">Start Quiz</button>
            </div>
        );
    }

    if (showScore) {
        const questionsAttempted = currentQuestionIndex + 1;
        const finalScore = Math.round((score / questionsAttempted) * 100);
        return (
            <div className="quiz-container">
                <div className="score-section">
                    <h2>Quiz Completed!</h2>
                    <p>Questions Attempted: {questionsAttempted} out of {questions.length}</p>
                    <p>Correct Answers: {score}</p>
                    <p>Your Score: {finalScore}%</p>
                    <button onClick={() => navigate('/leaderboard')} className="view-leaderboard-button">
                        View Leaderboard
                    </button>
                    <button onClick={() => navigate('/home')} className="return-home-button">
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <div className="question-section">
                <h2>Question {currentQuestionIndex + 1}/{questions.length}</h2>
                <div className="timer">Time Remaining: {timer}s</div>
                <div className="question-text">{currentQuestion.question}</div>
            </div>
            <div className="options">
                {currentQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                        className={`option-btn ${
                            showCorrectAnswer
                                ? option === currentQuestion.correctAnswer
                                    ? 'correct'
                                    : index === selectedAnswer
                                        ? 'incorrect'
                                        : ''
                                : ''
                        }`}
                        disabled={showCorrectAnswer}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {feedback && <div className="feedback">{feedback}</div>}
            <button className="skip-btn" onClick={() => handleAnswerClick(null)}>
                Skip Question
            </button>
            <button className="quit-btn" onClick={handleQuitQuiz}>
                Quit Quiz
            </button>
        </div>
    );
};

export default Quiz;

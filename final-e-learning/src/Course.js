import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Course.css'; 

const Course = () => {
  const navigate = useNavigate();
  const [lastProgress, setLastProgress] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    fetchLastProgress();
  }, []);

  const fetchLastProgress = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
        console.log('No userId found, redirecting to login');
        navigate('/');
        return;
    }
    
    try {
        const response = await fetch(`http://localhost:5000/api/progress/latest/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        const data = await response.json();
        if (data) {
            setLastProgress(data);
        }
    } catch (error) {
        console.log('Progress fetch failed, continuing without last progress');
    }
};



  const showContent = (language) => {
    const firstTopics = {
      python: 'Python Introduction',
      c: 'C Introduction',
      cpp: 'C++ Introduction',
      java: 'Java Introduction',
      javascript: 'JavaScript Introduction'
    };
    navigate(`/practice/${encodeURIComponent(firstTopics[language])}`);
  };

  const continueProgress = () => {
    if (lastProgress?.currentTopic) {
      navigate(`/practice/${encodeURIComponent(lastProgress.currentTopic)}`);
    }
  };

  return (
    <div className="container">
      <h1>Choose Your Programming Language</h1>
      {lastProgress && (
        <div className="continue-section">
          <h2>Continue where you left off</h2>
          <p>Last topic: {lastProgress.currentTopic}</p>
          <p>Progress: {lastProgress.completionPercentage}%</p>
          <button className="continue-button" onClick={continueProgress}>
            Continue Learning
          </button>
        </div>
      )}
      <div className="language-selector">
        <button className="language-btn" onClick={() => showContent('python')}>Python</button>
        <button className="language-btn" onClick={() => showContent('c')}>C</button>
        <button className="language-btn" onClick={() => showContent('cpp')}>C++</button>
        <button className="language-btn" onClick={() => showContent('java')}>Java</button>
        <button className="language-btn" onClick={() => showContent('javascript')}>JavaScript</button>
      </div>
      <div id="content" className="content"></div>
    </div>
  );
};

export default Course;

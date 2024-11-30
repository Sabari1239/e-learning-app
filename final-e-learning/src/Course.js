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
  <button className="language-btn" onClick={() => showContent('python')}>
    <img src="https://cdn-icons-png.flaticon.com/128/3098/3098090.png" alt="   Python" className="language-icon" />
    Python
  </button>
  <button className="language-btn" onClick={() => showContent('c')}>
    <img src="https://cdn-icons-png.flaticon.com/128/3097/3097008.png" alt="   C" className="language-icon" />
    C
  </button>
  <button className="language-btn" onClick={() => showContent('cpp')}>
    <img src="https://cdn-icons-png.flaticon.com/128/7743/7743681.png" alt="C++" className="language-icon" />
    C++
  </button>
  <button className="language-btn" onClick={() => showContent('java')}>
    <img src="https://cdn-icons-png.flaticon.com/128/3291/3291669.png" alt="Java" className="language-icon" />
    Java
  </button>
  <button className="language-btn" onClick={() => showContent('javascript')}>
    <img src="https://cdn-icons-png.flaticon.com/128/1199/1199124.png" alt="JavaScript" className="language-icon" />
    JavaScript
  </button>
</div>

      <div id="content" className="content"></div>
    </div>
  );
};

export default Course;

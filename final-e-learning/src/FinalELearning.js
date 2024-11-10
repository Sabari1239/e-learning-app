// src/HomePage.js
import React from 'react';
import './FinalELearning.css'; 
import './ProfileDashboard';
import './PracticeContent';

const FinalELearning = () => {
  
  const handleScroll = (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(e.target.getAttribute('href'));
    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: 'smooth',
    });
  };

  return (
    <div>

      {/* Main Content Area */}
      <main className="main-content">
        <section className="intro">
          <h1>Welcome to Final E Learning</h1>
          <p>Explore our programming courses and track your progress.</p>
        </section>

        {/* Additional Sections (Placeholder) */}
        <section id="my-course" className="section">
          <h2>My Course</h2>
          <p>Details about your courses will be shown here.</p>
        </section>
        <section id="leaderboard" className="section">
          <h2>Leaderboard</h2>
          <p>Top performers will be displayed here.</p>
        </section>
        <section id="quiz" className="section">
          <h2>Quiz</h2>
          <p>Take quizzes to test your knowledge.</p>
        </section>
        <section id="dashboard" className="section">
          <h2>Dashboard</h2>
          <p>Your progress and statistics will be shown here.</p>
        </section>
        
      </main>
    </div>
  );
};

export default FinalELearning;

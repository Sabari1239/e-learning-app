// src/HomePage.js
import React from 'react';
import './FinalELearning.css'; 

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
    <div className="final-elearning-container">
      {/* Main Content Area */}
      <main className="main-content">
        <section className="intro">
          <h1 className="intro-title">Welcome to Our E-Learning Platform</h1>
          <p className="intro-text">Explore our programming courses and track your progress in a fun and engaging way.</p>
        </section>

        {/* Course, Leaderboard, Quiz, Dashboard */}
        <section id="my-course" className="section">
          <h2 className="section-title">My Course</h2>
          <p className="section-text">Find detailed information about your courses here.</p>
        </section>
        <section id="leaderboard" className="section">
          <h2 className="section-title">Leaderboard</h2>
          <p className="section-text">Check the top performers and track your ranking.</p>
        </section>
        <section id="quiz" className="section">
          <h2 className="section-title">Quiz</h2>
          <p className="section-text">Test your knowledge with interactive quizzes.</p>
        </section>
        <section id="dashboard" className="section">
          <h2 className="section-title">Dashboard</h2>
          <p className="section-text">Your progress and stats are tracked here.</p>
        </section>
      </main>

     
    </div>
  );
};

export default FinalELearning;

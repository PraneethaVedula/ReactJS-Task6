// src/components/About/About.js
import React from 'react';
import './About.css'; 
const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>Hi,My name is Praneetha</h2>
          <p>
            Welcome to my portfolio! I am a passionate and dedicated individual with expertise in
            front-end and back-end technologies. With a strong foundation in computer science and hands-on
            experience in various programming languages, I am always eager to learn and adapt to new
            challenges.
          </p>
        </div>
        <div className="buttons">
          <a href="https://www.linkedin.com/in/praneetha-vedula-4a946a243/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

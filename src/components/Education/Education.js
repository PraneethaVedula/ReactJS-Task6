import React from 'react';
import './Education.css';  
const Education = () => {
  return (
    <div>
        <section id = "education">
        <h2 className="education-heading">Education</h2>
  
    <div className="education-box">
      
      <div className="education-content">
       <p className='school-name'>Vellore Institue of Technology,Amaravati</p>
        <p className='branch'>Bachelor of Technology - BTech, Computer Science and Engineering specilization in Artificial Intelligence and Machine Learning</p>
        <p className='grade'>Grade: 8.66 CGPA</p>
        <p className='year'>Aug 2021- May 2025</p>
      </div>
    </div>
    <div className="education-box2">  
      <div className="education-content">
      <p className='school-name'>Narayana Junior college</p>
        <p className='branch'>Class XII MPC,(maths,physics,chemistry)</p>
        <p className='grade'>Grade:96.8%</p>
        <p className='year'>Apr 2019-Apr 2021</p>
      </div>
    </div>
    <div className="education-box3">  
      <div className="education-content">
      <p className='school-name'>Narayana EM School</p>
        <p className='branch'>Class X,SSC</p>
        <p className='grade'>Grade:10GPA</p>
        <p className='year'>Mar 2019</p>
      </div>
    </div>
    </section>
    </div>
  );
};

export default Education;

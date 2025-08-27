import React from 'react';
import '../styles/LeftPanel.css';

const LeftPanel = ({ data }) => {
  return (
    <div className="left-panel">
      <div className="profile-section">
        <h1>{data.personalInfo.name}</h1>
        <h2>{data.personalInfo.title}</h2>
        <div className="contact-info">
          <p><i className="icon">📍</i> {data.personalInfo.location}</p>
          <p><i className="icon">📧</i> {data.personalInfo.email}</p>
          <p><i className="icon">📱</i> {data.personalInfo.phone}</p>
        </div>
        <div className="social-links">
          <a href={`https://${data.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
            <i className="icon">💼</i> LinkedIn
          </a>
          <a href={`https://${data.personalInfo.github}`} target="_blank" rel="noopener noreferrer">
            <i className="icon">🐙</i> GitHub
          </a>
        </div>
      </div>

      <div className="objective-section">
        <h3>Career Objective</h3>
        <p>{data.personalInfo.objective}</p>
      </div>

      <div className="skills-section">
        <h3>Tech Stack</h3>
        <div className="skills-category">
          <h4>Languages</h4>
          <div className="skill-tags">
            {data.skills.languages.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skills-category">
          <h4>Frameworks & Libraries</h4>
          <div className="skill-tags">
            {data.skills.frameworks.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skills-category">
          <h4>Technologies</h4>
          <div className="skill-tags">
            {data.skills.technologies.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skills-category">
          <h4>Databases</h4>
          <div className="skill-tags">
            {data.skills.databases.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skills-category">
          <h4>Cloud & AI</h4>
          <div className="skill-tags">
            {data.skills.cloud.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
            {data.skills.ai.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="certifications-section">
        <h3>Certifications</h3>
        <ul>
          {data.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>

      <div className="language-section">
        <h3>Language Proficiency</h3>
        <p>English (IELTS B2, Duolingo 115)</p>
      </div>
    </div>
  );
};

export default LeftPanel;
import React, { useState, useEffect, useRef } from 'react';
import LeftPanel from './components/LeftPanel';
import Terminal from './components/Terminal';
import { portfolioData } from './data/portfolioData';
import './styles/App.css';

function App() {
  const [commandHistory, setCommandHistory] = useState([
    { type: 'output', content: 'Welcome to Ankush Naik\'s portfolio!', fullyTyped: true },
    { type: 'output', content: 'Type "help" to see available commands.', fullyTyped: true }
  ]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isFocused, setIsFocused] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const endRef = useRef(null);
  const typingIntervalRef = useRef(null);

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [commandHistory, isTyping]);

  useEffect(() => {
    // Clean up interval on unmount
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  const focusInput = () => {
    inputRef.current?.focus();
    setIsFocused(true);
  };

  const addOutputWithAnimation = (output, speed = 30) => {
    setIsTyping(true);
    
    // Store the current length of commandHistory to know where to add new items
    const startIndex = commandHistory.length;
    
    // Add all output items at once with empty content
    const initialOutput = output.map(item => ({
      ...item,
      content: '',
      fullyTyped: false
    }));
    
    setCommandHistory(prev => [...prev, ...initialOutput]);
    
    // Start typing animation for each output item
    let outputIndex = 0;
    let charIndex = 0;
    
    const typeNextChar = () => {
      if (outputIndex < output.length) {
        const currentText = output[outputIndex].content;
        
        if (charIndex < currentText.length) {
          setCommandHistory(prev => {
            const newHistory = [...prev];
            const itemIndex = startIndex + outputIndex;
            
            if (itemIndex < newHistory.length) {
              newHistory[itemIndex] = {
                ...newHistory[itemIndex],
                content: currentText.substring(0, charIndex + 1)
              };
            }
            
            return newHistory;
          });
          
          charIndex++;
        } else {
          // Mark this output as fully typed
          setCommandHistory(prev => {
            const newHistory = [...prev];
            const itemIndex = startIndex + outputIndex;
            
            if (itemIndex < newHistory.length) {
              newHistory[itemIndex] = {
                ...newHistory[itemIndex],
                fullyTyped: true
              };
            }
            
            return newHistory;
          });
          
          // Move to next output item
          outputIndex++;
          charIndex = 0;
          
          if (outputIndex >= output.length) {
            // All output items are done
            setIsTyping(false);
            if (typingIntervalRef.current) {
              clearInterval(typingIntervalRef.current);
              typingIntervalRef.current = null;
            }
          }
        }
      }
    };
    
    // Clear any existing interval
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
    
    // Start typing with interval
    typingIntervalRef.current = setInterval(typeNextChar, speed);
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter' && !isTyping) {
      const command = currentCommand.trim().toLowerCase();
      let output = [];

      // Clear command
      setCurrentCommand('');

      // Add command to history
      setCommandHistory(prev => [...prev, { 
        type: 'command', 
        content: command,
        fullyTyped: true 
      }]);

      // Process command
      switch(command) {
        case '':
          output = [{ type: 'output', content: '' }];
          setCommandHistory(prev => [...prev, ...output]);
          break;
        case 'help':
          output = [
            { type: 'output', content: 'Available commands:' },
            { type: 'output', content: '  about      - Display information about Ankush' },
            { type: 'output', content: '  skills     - Show technical skills' },
            { type: 'output', content: '  experience - Display work experience' },
            { type: 'output', content: '  projects   - Show projects portfolio' },
            { type: 'output', content: '  education  - Display education background' },
            { type: 'output', content: '  contact    - Show contact information' },
            { type: 'output', content: '  clear      - Clear the terminal' },
            { type: 'output', content: '  help       - Show this help message' },
          ];
          addOutputWithAnimation(output, 20);
          break;
        case 'about':
          output = [
            { type: 'output', content: 'Ankush Naik' },
            { type: 'output', content: 'AI and Full-Stack Developer with 4 years of experience' },
            { type: 'output', content: `Location: ${portfolioData.personalInfo.location}` },
            { type: 'output', content: `Email: ${portfolioData.personalInfo.email}` },
            { type: 'output', content: `Phone: ${portfolioData.personalInfo.phone}` },
            { type: 'output', content: '' },
            { type: 'output', content: 'Career Objective:' },
            { type: 'output', content: portfolioData.personalInfo.objective },
          ];
          addOutputWithAnimation(output, 5);
          break;
        case 'skills':
          output = [
            { type: 'output', content: 'Technical Skills:' },
            { type: 'output', content: `  Programming Languages: ${portfolioData.skills.languages.join(', ')}` },
            { type: 'output', content: `  Frameworks & Libraries: ${portfolioData.skills.frameworks.join(', ')}` },
            { type: 'output', content: `  Technologies: ${portfolioData.skills.technologies.join(', ')}` },
            { type: 'output', content: `  Databases: ${portfolioData.skills.databases.join(', ')}` },
            { type: 'output', content: `  Cloud Platforms: ${portfolioData.skills.cloud.join(', ')}` },
            { type: 'output', content: `  Generative AI & LLMs: ${portfolioData.skills.ai.join(', ')}` },
            { type: 'output', content: `  Certifications: ${portfolioData.certifications.join(', ')}` },
          ];
          addOutputWithAnimation(output, 5);
          break;
        case 'experience':
          output = [
            { type: 'output', content: 'Work Experience:' },
            ...portfolioData.experience.flatMap(exp => [
              { type: 'output', content: '' },
              { type: 'output', content: `${exp.position} at ${exp.company} (${exp.period})` },
              ...(exp.details ? 
                exp.details.map(detail => ({ type: 'output', content: `  - ${detail}` })) :
                exp.projects.flatMap(project => [
                  { type: 'output', content: `  Project: ${project.name}${project.period ? ` (${project.period})` : ''}` },
                  ...project.details.map(detail => ({ type: 'output', content: `    - ${detail}` })),
                  { type: 'output', content: `    Technologies: ${project.technologies.join(', ')}` }
                ])
              )
            ])
          ];
          addOutputWithAnimation(output, 2);
          break;
        case 'projects':
          output = [
            { type: 'output', content: 'Projects:' },
            ...portfolioData.projects.flatMap(project => [
              { type: 'output', content: '' },
              { type: 'output', content: `Project: ${project.name}` },
              { type: 'output', content: `Description: ${project.description}` },
              { type: 'output', content: `Technologies: ${project.technologies.join(', ')}` },
            ])
          ];
          addOutputWithAnimation(output, 3);
          break;
        case 'education':
          output = [
            { type: 'output', content: 'Education:' },
            { type: 'output', content: portfolioData.education.degree },
            { type: 'output', content: portfolioData.education.institution },
            { type: 'output', content: `Graduated: ${portfolioData.education.graduationYear} | CGPA: ${portfolioData.education.cgpa}` },
          ];
          addOutputWithAnimation(output, 10);
          break;
        case 'contact':
          output = [
            { type: 'output', content: 'Contact Information:' },
            { type: 'output', content: `Email: ${portfolioData.personalInfo.email}` },
            { type: 'output', content: `Phone: ${portfolioData.personalInfo.phone}` },
            { type: 'output', content: `LinkedIn: ${portfolioData.personalInfo.linkedin}` },
            { type: 'output', content: `GitHub: ${portfolioData.personalInfo.github}` },
          ];
          addOutputWithAnimation(output, 15);
          break;
        case 'clear':
          if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
            typingIntervalRef.current = null;
          }
          setIsTyping(false);
          setCommandHistory([
            { type: 'output', content: 'Welcome to Ankush Naik\'s portfolio!', fullyTyped: true },
            { type: 'output', content: 'Type "help" to see available commands.', fullyTyped: true }
          ]);
          return;
        default:
          output = [{ type: 'output', content: `Command not found: ${command}. Type "help" for available commands.` }];
          addOutputWithAnimation(output, 20);
      }
    }
  };

  return (
    <div className="app" onClick={focusInput}>
      <div className="portfolio-container">
        <LeftPanel data={portfolioData} />
        <div className="right-panel">
          <Terminal 
            data={portfolioData}
            commandHistory={commandHistory}
            currentCommand={currentCommand}
            handleCommand={handleCommand}
            setCurrentCommand={setCurrentCommand}
            isFocused={isFocused}
            inputRef={inputRef}
            isTyping={isTyping}
          />
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
}

export default App;
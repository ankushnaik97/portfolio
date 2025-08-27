import React, { useState, useEffect } from 'react';
import CommandLine from './CommandLine';
import '../styles/Terminal.css';

const Terminal = ({ data, commandHistory, currentCommand, handleCommand, setCurrentCommand, isFocused, inputRef, isTyping }) => {
  const [typingLineIndex, setTypingLineIndex] = useState(-1);

  // Find which line is currently being typed (if any)
  useEffect(() => {
    if (isTyping) {
      // Find the first line that's not fully typed
      const index = commandHistory.findIndex(item => 
        item.type === 'output' && !item.fullyTyped
      );
      setTypingLineIndex(index);
    } else {
      setTypingLineIndex(-1);
    }
  }, [commandHistory, isTyping]);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="terminal-button close"></div>
          <div className="terminal-button minimize"></div>
          <div className="terminal-button maximize"></div>
        </div>
        <div className="terminal-title">ankush-portfolio -- bash</div>
      </div>
      <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
        {commandHistory.map((item, index) => (
          <div key={index} className={item.type}>
            {item.type === 'command' && <span className="prompt">$ </span>}
            {item.content}
            {index === typingLineIndex && <span className="typing-cursor">|</span>}
          </div>
        ))}
        
        {isTyping && typingLineIndex === -1 && (
          <div className="output">
            <span className="typing-cursor">|</span>
          </div>
        )}
        
        <CommandLine 
          currentCommand={currentCommand}
          setCurrentCommand={setCurrentCommand}
          handleCommand={handleCommand}
          isFocused={isFocused}
          inputRef={inputRef}
          isTyping={isTyping}
        />
      </div>
    </div>
  );
};

export default Terminal;
import React from 'react';

const CommandLine = ({ currentCommand, setCurrentCommand, handleCommand, isFocused, inputRef, isTyping }) => {
  if (isTyping) {
    return null; // Don't show command line when typing animation is in progress
  }

  return (
    <div className="input-line">
      <span className="prompt">$ </span>
      <input
        type="text"
        value={currentCommand}
        onChange={(e) => setCurrentCommand(e.target.value)}
        onKeyDown={handleCommand}
        ref={inputRef}
        autoFocus
      />
      <span className={`cursor ${isFocused ? 'blink' : ''}`}>|</span>
    </div>
  );
};

export default CommandLine;
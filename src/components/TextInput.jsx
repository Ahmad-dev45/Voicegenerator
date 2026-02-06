import { useState, useEffect } from 'react';
import './TextInput.css';

function TextInput({ text, onTextChange }) {
  const maxLength = 5000;
  const [charCount, setCharCount] = useState(text.length);

  useEffect(() => {
    setCharCount(text.length);
  }, [text]);

  const handleChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= maxLength) {
      onTextChange(newText);
    }
  };

  return (
    <div className="text-input-container glass">
      <label htmlFor="text-input" className="text-input-label">
        Enter Text to Convert
      </label>
      <textarea
        id="text-input"
        className="text-input"
        value={text}
        onChange={handleChange}
        placeholder="Type or paste your text here... Try something like: Hello! Welcome to Voice Generator, your modern text-to-speech application."
        rows={8}
      />
      <div className="text-input-footer">
        <span className="char-count">
          {charCount} / {maxLength}
        </span>
      </div>
    </div>
  );
}

export default TextInput;

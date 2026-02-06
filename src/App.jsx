import { useState, useEffect } from 'react';
import TextInput from './components/TextInput';
import VoiceSelector from './components/VoiceSelector';
import ControlPanel from './components/ControlPanel';
import PlaybackControls from './components/PlaybackControls';
import DownloadButton from './components/DownloadButton';
import LanguageFilter from './components/LanguageFilter';
import AdPlaceholder from './components/AdPlaceholder';
import './App.css';

function App() {
  const [text, setText] = useState('Hello! Welcome to Voice Generator, your modern text-to-speech application. Try adjusting the voice, speed, pitch, and volume controls to customize your experience.');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [speed, setSpeed] = useState(1.0);
  const [pitch, setPitch] = useState(1.0);
  const [volume, setVolume] = useState(1.0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
        // Set default voice (prefer English)
        const defaultVoice = availableVoices.find(v => v.lang.startsWith('en')) || availableVoices[0];
        setSelectedVoice(defaultVoice);
      }
    };

    loadVoices();

    // Chrome loads voices asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const handlePlay = () => {
    if (!text.trim()) {
      alert('Please enter some text to convert to speech.');
      return;
    }

    // Resume if paused
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsSpeaking(true);
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.rate = speed;
    utterance.pitch = pitch;
    utterance.volume = volume;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      setIsSpeaking(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsSpeaking(false);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  return (
    <div className="app">
      <div className="app-container">
        {/* Header Ad */}
        <AdPlaceholder position="header" width="728px" height="90px" />

        <header className="app-header">
          <h1 className="app-title">🎙️ Voice Generator</h1>
          <p className="app-subtitle">Transform text into speech with customizable controls</p>
        </header>

        <main className="app-main">
          <div className="app-grid">
            <div className="grid-left">
              <TextInput text={text} onTextChange={setText} />
              <PlaybackControls
                isSpeaking={isSpeaking}
                isPaused={isPaused}
                onPlay={handlePlay}
                onPause={handlePause}
                onStop={handleStop}
                disabled={!text.trim()}
              />
              <DownloadButton
                text={text}
                voice={selectedVoice}
                speed={speed}
                pitch={pitch}
                volume={volume}
                disabled={!text.trim()}
              />
            </div>

            <div className="grid-right">
              {/* Sidebar Ad */}
              <AdPlaceholder position="sidebar" width="300px" height="250px" />

              <LanguageFilter
                voices={voices}
                selectedLanguage={selectedLanguage}
                onLanguageChange={setSelectedLanguage}
              />
              <VoiceSelector
                voices={voices}
                selectedVoice={selectedVoice}
                onVoiceChange={setSelectedVoice}
                languageFilter={selectedLanguage}
              />
              <ControlPanel
                speed={speed}
                pitch={pitch}
                volume={volume}
                onSpeedChange={setSpeed}
                onPitchChange={setPitch}
                onVolumeChange={setVolume}
              />
            </div>
          </div>
        </main>

        {/* Footer Ad */}
        <AdPlaceholder position="footer" width="728px" height="90px" />

        <footer className="app-footer">
          <p>Built with React & Web Speech API</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

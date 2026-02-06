import './VoiceSelector.css';

function VoiceSelector({ voices, selectedVoice, onVoiceChange }) {
    // Group voices by language
    const groupedVoices = voices.reduce((acc, voice) => {
        const lang = voice.lang || 'Unknown';
        if (!acc[lang]) {
            acc[lang] = [];
        }
        acc[lang].push(voice);
        return acc;
    }, {});

    const sortedLanguages = Object.keys(groupedVoices).sort();

    return (
        <div className="voice-selector-container glass">
            <label htmlFor="voice-select" className="voice-selector-label">
                Select Voice
            </label>
            <select
                id="voice-select"
                className="voice-select"
                value={selectedVoice?.name || ''}
                onChange={(e) => {
                    const voice = voices.find(v => v.name === e.target.value);
                    onVoiceChange(voice);
                }}
            >
                {sortedLanguages.map(lang => (
                    <optgroup key={lang} label={lang}>
                        {groupedVoices[lang].map(voice => (
                            <option key={voice.name} value={voice.name}>
                                {voice.name}
                            </option>
                        ))}
                    </optgroup>
                ))}
            </select>
            <div className="voice-info">
                {selectedVoice && (
                    <>
                        <span className="voice-detail">
                            <strong>Language:</strong> {selectedVoice.lang}
                        </span>
                        <span className="voice-detail">
                            <strong>Local:</strong> {selectedVoice.localService ? 'Yes' : 'No'}
                        </span>
                    </>
                )}
            </div>
        </div>
    );
}

export default VoiceSelector;

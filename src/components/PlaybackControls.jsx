import './PlaybackControls.css';

function PlaybackControls({ isSpeaking, isPaused, onPlay, onPause, onStop, disabled }) {
    return (
        <div className="playback-controls glass-strong">
            <div className="controls-wrapper">
                {!isSpeaking || isPaused ? (
                    <button
                        className="control-btn play-btn"
                        onClick={onPlay}
                        disabled={disabled}
                        aria-label="Play"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        <span>Play</span>
                    </button>
                ) : (
                    <button
                        className="control-btn pause-btn"
                        onClick={onPause}
                        aria-label="Pause"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                        <span>Pause</span>
                    </button>
                )}

                <button
                    className="control-btn stop-btn"
                    onClick={onStop}
                    disabled={!isSpeaking}
                    aria-label="Stop"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M6 6h12v12H6z" />
                    </svg>
                    <span>Stop</span>
                </button>
            </div>

            {isSpeaking && !isPaused && (
                <div className="status-indicator">
                    <div className="pulse-dot"></div>
                    <span>Speaking...</span>
                </div>
            )}
        </div>
    );
}

export default PlaybackControls;

import './ControlPanel.css';

function ControlPanel({ speed, pitch, volume, onSpeedChange, onPitchChange, onVolumeChange }) {
    return (
        <div className="control-panel glass">
            <h3 className="control-panel-title">Voice Controls</h3>

            <div className="control-group">
                <label htmlFor="speed-control" className="control-label">
                    <span>Speed</span>
                    <span className="control-value">{speed.toFixed(1)}x</span>
                </label>
                <input
                    id="speed-control"
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={speed}
                    onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
                    className="control-slider"
                />
                <div className="control-markers">
                    <span>0.5x</span>
                    <span>1.0x</span>
                    <span>2.0x</span>
                </div>
            </div>

            <div className="control-group">
                <label htmlFor="pitch-control" className="control-label">
                    <span>Pitch</span>
                    <span className="control-value">{pitch.toFixed(1)}</span>
                </label>
                <input
                    id="pitch-control"
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={pitch}
                    onChange={(e) => onPitchChange(parseFloat(e.target.value))}
                    className="control-slider"
                />
                <div className="control-markers">
                    <span>Low</span>
                    <span>Normal</span>
                    <span>High</span>
                </div>
            </div>

            <div className="control-group">
                <label htmlFor="volume-control" className="control-label">
                    <span>Volume</span>
                    <span className="control-value">{Math.round(volume * 100)}%</span>
                </label>
                <input
                    id="volume-control"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                    className="control-slider"
                />
                <div className="control-markers">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                </div>
            </div>
        </div>
    );
}

export default ControlPanel;

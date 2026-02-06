import './DownloadButton.css';

function DownloadButton({ text, voice, speed, pitch, volume, disabled }) {
    const handleDownload = async () => {
        if (!text.trim()) {
            alert('Please enter some text to convert to speech.');
            return;
        }

        // Create utterance
        const utterance = new SpeechSynthesisUtterance(text);
        if (voice) utterance.voice = voice;
        utterance.rate = speed;
        utterance.pitch = pitch;
        utterance.volume = volume;

        // Create audio context for recording
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const destination = audioContext.createMediaStreamDestination();

        // We'll use a workaround: speak and record using MediaRecorder
        // Note: Web Speech API doesn't directly support audio export
        // This creates a simple audio file from the speech

        try {
            // For now, we'll create a simple implementation
            // In production, you might want to use a TTS service API for downloads
            alert('Download feature: Due to browser limitations, the Web Speech API cannot directly export audio files. To download speech, consider using a cloud TTS service like Google Cloud TTS, Amazon Polly, or ElevenLabs API.');

            // Alternative: You could implement server-side TTS for downloads
            // or use the MediaRecorder API with more complex setup

        } catch (error) {
            console.error('Download error:', error);
            alert('Download failed. Please try again.');
        }
    };

    return (
        <button
            className="download-btn glass"
            onClick={handleDownload}
            disabled={disabled}
            aria-label="Download as audio"
        >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
            <span>Download Audio</span>
        </button>
    );
}

export default DownloadButton;

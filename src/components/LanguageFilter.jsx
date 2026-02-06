import './LanguageFilter.css';

function LanguageFilter({ voices, selectedLanguage, onLanguageChange }) {
    // Extract unique languages from voices
    const languages = [...new Set(voices.map(v => {
        // Get language code (e.g., "en-US" -> "en")
        const langCode = v.lang.split('-')[0];
        return langCode;
    }))].sort();

    // Create language display names
    const languageNames = {
        'en': 'English',
        'es': 'Spanish',
        'fr': 'French',
        'de': 'German',
        'it': 'Italian',
        'pt': 'Portuguese',
        'ru': 'Russian',
        'ja': 'Japanese',
        'ko': 'Korean',
        'zh': 'Chinese',
        'ar': 'Arabic',
        'hi': 'Hindi',
        'nl': 'Dutch',
        'pl': 'Polish',
        'tr': 'Turkish',
        'sv': 'Swedish',
        'da': 'Danish',
        'fi': 'Finnish',
        'no': 'Norwegian',
        'cs': 'Czech',
        'el': 'Greek',
        'he': 'Hebrew',
        'th': 'Thai',
        'id': 'Indonesian',
        'vi': 'Vietnamese',
    };

    return (
        <div className="language-filter glass">
            <label htmlFor="language-filter" className="filter-label">
                Filter by Language
            </label>
            <select
                id="language-filter"
                className="filter-select"
                value={selectedLanguage}
                onChange={(e) => onLanguageChange(e.target.value)}
            >
                <option value="all">All Languages</option>
                {languages.map(lang => (
                    <option key={lang} value={lang}>
                        {languageNames[lang] || lang.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default LanguageFilter;

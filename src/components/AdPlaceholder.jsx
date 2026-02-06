import './AdPlaceholder.css';

function AdPlaceholder({ position, width, height }) {
    // MonetAg ad integration placeholder
    // Replace the div content with actual MonetAg ad code when ready

    const adId = `monetag-ad-${position}`;

    return (
        <div
            className={`ad-placeholder ad-${position}`}
            style={{
                minWidth: width || 'auto',
                minHeight: height || '90px'
            }}
        >
            <div className="ad-content">
                <div className="ad-label">Advertisement</div>
                <div className="ad-info">
                    {/* Replace this comment with MonetAg ad code */}
                    {/* Example MonetAg integration:
          <div id={adId}></div>
          <script>
            // MonetAg ad script here
          </script>
          */}
                    <p className="ad-placeholder-text">
                        MonetAg Ad Space<br />
                        <span className="ad-size">{width} × {height}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AdPlaceholder;

import React, { useState, useRef } from 'react';
import './SoundButton.css';

const SoundButton = ({ label, soundSrc, color }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        const audio = new Audio(soundSrc);
        audio.currentTime = 0;
        audio.play().catch(error => {
            console.error("Audio playback failed:", error);
        });

        setIsPlaying(true);

        // Reset playing state after animation/sound
        setTimeout(() => setIsPlaying(false), 200);
    };

    return (
        <button
            className={`sound-button ${isPlaying ? 'active' : ''}`}
            onClick={handleClick}
            style={{ '--btn-color': color || '#00ffcc' }}
        >
            <span className="button-label">{label}</span>
            <div className="ripple"></div>
        </button>
    );
};

export default SoundButton;

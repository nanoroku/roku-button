import React from 'react';
import SoundButton from './SoundButton';

const getSoundPath = (file) =>
    import.meta.env.DEV
        ? `/sounds/${file}` // http://localhost:5174/sounds/nu01.mp3
        : import.meta.env.BASE_URL + 'sounds/' + file // https://nanoroku.github.io/boco-button/sounds/nu01.mp3

const sounds = [
    { id: 1, label: 'てっぷ', src: getSoundPath('teppu.mp3'), color: '#4ed5ab' },
    { id: 2, label: 'ﾅｷｭﾅｷｭﾅｷｭ', src: getSoundPath('nakyunakyunakyu.mp3'), color: '#4ed5ab' },
    { id: 3, label: 'ｳｴｳｴｳｴｳｴ', src: getSoundPath('ueueueue.mp3'), color: '#4ed5ab' },
    { id: 4, label: 'よっしゃぁ！', src: getSoundPath('yossya.mp3'), color: '#4ed5ab' },
    // { id: 5, label: 'あ ん や… あ゙あ゙っ! あ゙ はああああ っすぅー', src: getSoundPath('suu01.mp3'), color: '#ff9900' },
    // { id: 6, label: 'ま゙っ゙で', src: getSoundPath('matte.mp3'), color: '#cc00ff' },
    // { id: 7, label: 'や゙だ', src: getSoundPath('yada.mp3'), color: '#00ff00' },
    // { id: 8, label: 'ね゙っ゙ あ゙ーーー', src: getSoundPath('aa.mp3'), color: '#ff0000' },
    // { id: 9, label: '神ゲー', src: getSoundPath('kamige.mp3'), color: '#0000ff' },
    // { id: 10, label: 'あまあま寝かしつけボイス', src: getSoundPath('nekashitsuke.mp3'), color: '#ff00ff' },
];

const SoundBoard = () => {
    return (
        <div className="sound-board">
            <div className="sound-grid">
                {sounds.map((sound) => (
                    <SoundButton
                        key={sound.id}
                        label={sound.label}
                        soundSrc={sound.src}
                        color={sound.color}
                    />
                ))}
            </div>
        </div>
    );
};

export default SoundBoard;

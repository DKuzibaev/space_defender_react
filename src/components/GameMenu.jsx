import React from 'react';
import '../styles/GameMenu.scss';

export default function GameMenu({ onStartGame, onSettings, onExit }) {
  return (
    <div className="game-menu">
      <h1>🚀 Space Defender</h1>
      <button onClick={onStartGame}>Начать игру</button>
      <button onClick={onSettings}>Настройки</button>
      <button onClick={onExit}>Выход</button>
    </div>
  );
}

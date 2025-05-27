import React, { useState } from 'react';
import GameMenu from './GameMenu';
import '../styles/GameCanvas.scss';
import StarfieldBackground from './StarfieldBackground';

export default function GameCanvas() {
  const [screen, setScreen] = useState('menu');

  const handleStartGame = () => setScreen('game');
  const handleSettings = () => alert('Открыть настройки (пока заглушка)');
  const handleExit = () => alert('Выход из игры (пока заглушка)');

  return (
    <div className="game-canvas">
      {screen === 'menu' && (
        <GameMenu
          onStartGame={handleStartGame}
          onSettings={handleSettings}
          onExit={handleExit}
        />
      )}
      {screen === 'game' && (
        <>
          <h2>🛸 Игра идет... Защити галактику!</h2>
          <button onClick={() => setScreen('menu')}>Вернуться в меню</button>
        </>
      )}
    </div>
  );
}

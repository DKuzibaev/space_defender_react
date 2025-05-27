import React, { useState } from 'react';
import GameMenu from './components/GameMenu';
import GameCanvas from './components/GameCanvas';
import StarfieldBackground from './components/StarfieldBackground';
import './index.scss';

function App() {
  const [screen, setScreen] = useState('menu');

  return (
    <div>
      {screen === 'menu' && (
        <GameMenu
          onStartGame={() => setScreen('game')}
          onSettings={() => alert('Настройки')}
          onExit={() => alert('Выход')}
        />
      )}
      {screen === 'game' && <GameCanvas />}
    </div>
  );
}

export default App;

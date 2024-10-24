import React, { useState, useRef } from 'react';
import BoardView from './components/BoardView';
import Navbar from './components/Navbar';
import BoardState from './context/BoardState';

function App() {
  const [isPlaying, setIsPlaying] = useState(false); // 초기에는 재생되지 않음
  const audioRef = useRef(null);

  const handleUserInteraction = () => {
    if (!isPlaying && audioRef.current) {
      audioRef.current.play(); // 첫 상호작용 후 재생
      setIsPlaying(true);
    }
  };

  return (
    <div onClick={handleUserInteraction}>
      <Navbar />
      <div className='App'>
        <BoardState>
          <BoardView />
        </BoardState>
        {/* 배경음악 자동 재생 및 반복 (첫 클릭 후) */}
        <audio ref={audioRef} loop>
          <source src="/assets/background-music.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

export default App;

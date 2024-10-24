import React from 'react';
import BoardView from './components/BoardView';
import Navbar from './components/Navbar';
import BoardState from './context/BoardState';

function App() {
  return (
    <>
      <Navbar />
      <div className='App'>
        <BoardState>
          <BoardView />
        </BoardState>
        {/* 배경음악 자동 재생 및 반복 */}
        <audio autoPlay loop>
          <source src={`${process.env.PUBLIC_URL}/assets/background-music.mp3`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </>
  );
}

export default App;

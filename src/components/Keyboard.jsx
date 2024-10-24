import React, { useContext } from 'react';
import { BoardContext } from '../context/boardContext';
import { BsFillEraserFill } from 'react-icons/bs';

// 숫자에 맞는 이미지 경로를 반환하는 함수
const getImageForValue = (value) => {
  if (!value || typeof value !== 'number') return null;
  return `${process.env.PUBLIC_URL}/assets/${value}.png`; // public 폴더 내 assets 폴더에서 이미지 불러오기
};

const Keyboard = () => {
  const { state, setCellValue, setCustomBoard } = useContext(BoardContext);
  const { actualBoard, currentBoard, gameWon, selectedCell, isCustomBoard } = state;

  const handleKeyClick = (value) => {
    let { row, col } = selectedCell || {};
    if (currentBoard[row][col] === value) value = '-'; // Remove the value if it's already same
    if (row !== undefined && isCustomBoard) setCustomBoard(value);
    else if (actualBoard[row][col] === 0) setCellValue(row, col, value); // prevent from modifying the actual board
  };

  return (
    <div className={`keyboard ${gameWon ? 'gameWon' : ''}`}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => {
        const imageSrc = getImageForValue(value); // 이미지 경로 가져오기
        return (
          <div key={value} className="keys flex-box" onClick={() => handleKeyClick(value)}>
            {imageSrc ? (
              <img 
                src={imageSrc} 
                alt={`key-${value}`} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain', // 이미지 비율 유지
                  borderRadius: '5px'   // 모서리를 살짝 둥글게 (선택 사항)
                }} 
              />
            ) : (
              value // 이미지가 없으면 숫자 값 그대로 표시
            )}
          </div>
        );
      })}
      <div className="keys flex-box" onClick={() => handleKeyClick('-')}>
        <BsFillEraserFill />
      </div>
    </div>
  );
};

export default Keyboard;

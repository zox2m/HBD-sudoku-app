import React, { forwardRef } from 'react';

// 숫자에 맞는 이미지 경로를 반환하는 함수
const getImageForValue = (value) => {
  if (!value) return null; // 값이 없을 경우 null 반환
  return `${process.env.PUBLIC_URL}/assets/${value}.png`; // public 폴더 내의 assets 폴더에서 이미지 불러오기
};

const Cell = forwardRef((props, ref) => {
  const { row, col, value, className, onClick } = props;
  const imageSrc = getImageForValue(value); // value에 맞는 이미지 소스 가져오기

  return (
    <span key={row + '' + col} className={className} ref={ref} onClick={onClick}>
      {imageSrc ? (
        <img src={imageSrc} alt={`value-${value}`} style={{ width: '100%', height: '100%' }} />
      ) : (
        null
      )}
    </span>
  );
});

export default Cell;

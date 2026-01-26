import { useEffect, useRef, useState, Children } from "react";
import * as S from "./CardSlider.style";

const CardSlider = ({ children }: { children: React.ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const childrenCount = Children.count(children);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < childrenCount - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const endX = e.clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < childrenCount - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    // 가로 스크롤 감지 (deltaX가 세로 스크롤보다 크면 가로 스크롤로 판단)
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 30) {
      if (e.deltaX > 0 && currentIndex < childrenCount - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (e.deltaX < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  return (
    <div>
      <S.CardSliderWrapper
        ref={containerRef}
        $currentIndex={currentIndex}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)}
        onWheel={handleWheel}>
        {children}
      </S.CardSliderWrapper>
      <S.PaginationWrapper>
        {Array.from({ length: childrenCount }).map((_, index) => (
          <S.PaginationDot key={index} $isActive={index === currentIndex} />
        ))}
      </S.PaginationWrapper>
    </div>
  )
}

export default CardSlider;
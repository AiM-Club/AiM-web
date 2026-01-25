import styled from "styled-components";

export const CardSliderWrapper = styled.div<{ $currentIndex?: number }>`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
  // cursor: grab;
  // &:active {
  //   cursor: grabbing;
  // }
  
  & > * {
    flex-shrink: 0;
    width: 100%;
    transform: ${({ $currentIndex }) => `translateX(calc(${-($currentIndex || 0) * 100}% - ${($currentIndex || 0) * 1.5}rem))`};
    transition: transform 0.3s ease-in-out;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

export const PaginationDot = styled.div<{ $isActive?: boolean }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--green-400)" : "var(--gray-600)"};
  transition: background-color 0.3s ease;
`;
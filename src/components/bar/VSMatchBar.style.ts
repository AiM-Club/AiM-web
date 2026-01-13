import styled from "styled-components";

export const VSMatchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const TextWrapper = styled.div<{ $percent: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
  font: var(--title-s-m);
  padding-left: ${(props) => `calc(${props.$percent}% - 6.125rem)`};
  padding-right: ${(props) => `calc(100% - ${props.$percent}% - 6.125rem)`};
`;

export const ProgressTextGreen = styled.div`
  color: var(--green-200);
`;

export const ProgressTextPink = styled.div`
  color: var(--pink-200);
`;

export const ProgressIcon = styled.img`
  height: 1.5rem;
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
`;

export const ProgressBarGreen = styled.div<{ $percent: number }>`
  height: 2.5rem;
  background: linear-gradient(to left, var(--green-400) 0%, var(--green-200) 100%);
  background-color: var(--green-200);
  border-radius: 0.5rem 0 0 0.5rem;
  width: ${(props) => props.$percent}%;
  clip-path: polygon(0 0, 100% 0, calc(100% - 1rem) 100%, 0 100%);
  position: ${(props) => (props.$percent === 100 ? "relative" : "static")};
`;

export const ProgressBarPink = styled.div<{ $percent: number }>`
  height: 2.5rem;
  background: linear-gradient(to right, var(--pink-400) 0%, var(--pink-200) 100%);
  border-radius: 0 0.5rem 0.5rem 0;
  width: ${(props) => props.$percent}%;
  clip-path: polygon(1rem 0, 0 100%, 100% 100%, 100% 0);
  position: ${(props) => (props.$percent === 100 ? "relative" : "static")};
`;

export const ProgressBarPinkFill = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 1rem;
  height: 2.5rem;
  border-radius: 0 0.175rem 0.175rem 0;
  background-color: var(--pink-400);
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%);
`;

export const ProgressBarGreenFill = styled.div`
  position: absolute;
  right: calc(100% - 1rem);
  bottom: 0;
  width: 1rem;
  height: 2.5rem;
  border-radius: 0.175rem 0 0 0.175rem;
  background-color: var(--green-400);
  clip-path: polygon(0 0, 100% 0, 0 100%, 0 100%);
`;

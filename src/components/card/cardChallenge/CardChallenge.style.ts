import styled from "styled-components";

export const CardChallengeWrapper = styled.div<{ $cardNum: number; $minWidth: number; $height: number | null }>`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: ${(props) => props.$minWidth}rem;
  flex-basis: ${(props) => 90 / props.$cardNum}%;
  flex-grow: 1;
  height: ${(props) => (props.$height ? `calc(${props.$height}px + 4rem)` : "20rem")};
`;

export const CardBackgroundWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 20rem;
`;

export const CardBackgroundTop = styled.img`
  display: flex;
  position: relative;
  height: 20rem;
  width: 100%;
`;

export const CardBackground = styled.img<{ $height: number | null }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 4rem;
  height: ${(props) => (props.$height ? `${props.$height}px` : "25rem")};
`;

export const CardTopic = styled.div<{ $color: "green" | "pink" }>`
  display: flex;
  justify-content: ${(props) => (props.$color == "pink" ? "flex-end" : "flex-start")};
  align-items: center;
  position: absolute;
  height: 4.5rem;
  padding: 0 1.5rem;
  font: var(--headline-h-s);
  color: var(--text-tertiary);
  width: 100%;
`;

export const OpenBtnWrapper = styled.div<{ $color: "green" | "pink" }>`
  display: flex;
  align-items: center;
  height: 4.5rem;
  justify-content: ${(props) => (props.$color == "green" ? "flex-end" : "flex-start")};
  position: absolute;
  width: 100%;
  padding: 0 1.5rem;
`;

export const OpenBtn = styled.div<{ $color: "green" | "pink" }>`
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;
  gap: 0.5rem;
  margin-right: ${(props) => (props.$color === "green" ? "3%" : "0%")};
  margin-left: ${(props) => (props.$color === "pink" ? "3%" : "0%")};
  background-color: ${(props) => (props.$color === "pink" ? "var(--pink-400)" : "var(--green-200)")};
  width: fit-content;
  border-radius: 0.25rem;
  font: var(--body-r-m);
  color: var(--text-tertiary);
  cursor: pointer;
`;

export const OpenBtnIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 4rem;
  min-height: 21rem;
  padding: 0 2rem;
`;

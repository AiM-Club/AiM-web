import styled from "styled-components";

export const CardChallengeWrapper = styled.div<{ $cardNum: number; $minWidth: number; $height: number | null; $ismobile: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${(props) => (props.$minWidth > 0 ? `${props.$minWidth}rem` : "auto")};
  flex-grow: 1;
  height: ${(props) => (props.$ismobile ? props.$height ? `${props.$height}px` : "20rem" : props.$height ? `calc(${props.$height}px + 4rem)` : "20rem")};
`;

export const CardBackgroundWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  // height: 20rem;
`;

export const CardBackgroundTop = styled.img<{ $image: string; $ismobile: boolean }>`
  display: flex;
  position: relative;
  height: ${(props) =>
    props.$image === "CardPinkStraightTop.png" || props.$image === "CardPinkStraightHoverTop.png" ? "30rem" : props.$ismobile?"0.625rem":"20rem"};
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

export const CardTopic = styled.div<{ $color: "green" | "pink"; $direction: "right" | "left" | null; $ismobile: boolean }>`
  display: flex;
  justify-content: ${(props) =>
    props.$direction == "right"
      ? "flex-end"
      : props.$direction == "left"
        ? "flex-start"
        : props.$color === "green"
          ? "flex-start"
          : "flex-end"};
  align-items: center;
  position: ${(props)=>props.$ismobile?"relative":"absolute"};
  height: 4.5rem;
  padding: ${(props)=>props.$ismobile?"1.5rem 0 0 0":"0 1.5rem"};
  font: var(--headline-h-s);
  color: ${(props)=>props.$ismobile?"var(--text-primary-default)": "var(--text-tertiary)"};
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

export const CardContentWrapper = styled.div<{ $ismobile: boolean; $color: "green" | "pink"; $mobileTopic: "none" | "top" | "normal"; }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  top: ${(props)=>props.$ismobile && props.$mobileTopic !== "top"?"0":"4rem"};
  min-height: 21rem;
  padding: 0 2rem;
  border-bottom: ${({$ismobile, $color})=>($ismobile ? `4px solid ${$color === "green" ? "var(--border-secondary-default)" : "var(--pink-400)"}`:"none")};
`;

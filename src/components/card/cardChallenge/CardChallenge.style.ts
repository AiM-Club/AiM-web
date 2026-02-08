import styled from "styled-components";

export const CardChallengeWrapper = styled.div<{
  $cardNum: number;
  $minWidth: number;
  $height: number | null;
  $ismobile: boolean;
}>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${(props) => (props.$minWidth > 0 ? `${props.$minWidth}rem` : "auto")};
  flex-grow: 1;
  height: ${(props) =>
    props.$ismobile
      ? props.$height
        ? `${props.$height}px`
        : "20rem"
      : props.$height
        ? `calc(${props.$height}px + 4rem)`
        : "20rem"};
`;

export const CardBackgroundWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const CardBackgroundTop = styled.img<{ $image: string; $ismobile: boolean }>`
  display: flex;
  position: relative;
  height: ${(props) =>
    props.$image === "CardPinkStraightTop.png" || props.$image === "CardPinkStraightHoverTop.png"
      ? "30rem"
      : props.$ismobile
        ? "0.625rem"
        : "20rem"};
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

export const CardTopic = styled.div<{
  $color: "green" | "pink";
  $direction: "right" | "left" | null;
  $ismobile: boolean;
  $mobileTopic?: "none" | "top" | "normal";
}>`
  display: flex;
  justify-content: ${(props) =>
    props.$direction == "right" && !props.$ismobile
      ? "flex-end"
      : props.$direction == "left" || props.$ismobile
        ? "flex-start"
        : props.$color === "green"
          ? "flex-start"
          : "flex-end"};
  align-items: center;
  position: ${(props) => (props.$ismobile ? "relative" : "absolute")};
  height: ${(props) => (props.$ismobile ? "" : "4.5rem")};
  padding: ${(props) =>
    props.$ismobile && props.$mobileTopic !== "top" ? "1.5rem 0 0 0" : props.$ismobile ? 0 : "0 1.5rem"};
  font: ${({ $ismobile }) => ($ismobile ? "var(--title-h-s)" : "var(--title-h-l)")};
  color: ${(props) => (props.$ismobile ? "var(--text-primary-default)" : "var(--text-tertiary)")};
  width: 100%;
`;

export const Topic = styled.div<{ $color: "green" | "pink"; $direction: "right" | "left" | null; $openBtn: boolean }>`
  word-break: break-all;
  display: flex;
  justify-content: ${(props) =>
    props.$direction == "right"
      ? "flex-end"
      : props.$direction == "left"
        ? "flex-start"
        : props.$color === "green"
          ? "flex-start"
          : "flex-end"};
  width: ${(props) => (props.$openBtn ? "calc(100% - 7rem)" : "100%")};
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

export const OpenBtn = styled.div<{ $color: "green" | "pink"; $loser: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;
  gap: 0.5rem;
  margin-right: ${(props) => (props.$color === "green" ? "3%" : "0%")};
  margin-left: ${(props) => (props.$color === "pink" ? "3%" : "0%")};
  background-color: ${(props) =>
    props.$loser ? "var(--gray-500)" : props.$color === "pink" ? "var(--pink-400)" : "var(--green-200)"};
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

export const CardContentWrapper = styled.div<{
  $variant?: string;
  $ismobile: boolean;
  $color: "green" | "pink";
  $mobileTopic: "none" | "top" | "normal";
  $loser: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  top: ${(props) => (props.$ismobile ? "0" : "4rem")};
  min-height: ${(props) => (props.$variant === "home" ? "30rem" : "21rem")};
  padding: ${(props) =>
    props.$variant === "home" && props.$ismobile
      ? "2rem 0 0 0"
      : props.$variant === "home"
        ? "0.05rem 0.2rem 0.1rem 0.2rem"
        : props.$ismobile && props.$mobileTopic === "top"
          ? "1rem 1rem 0 1rem"
          : props.$ismobile
            ? "0 1rem"
            : "0 2rem"};
  border-bottom: ${({ $ismobile, $color, $loser }) =>
    $ismobile
      ? `4px solid ${$loser ? "var(--gray-600)" : $color === "green" ? "var(--border-secondary-default)" : "var(--border-primary-default)"}`
      : "none"};
  @media (max-width: 560px) {
    min-height: ${(props) => (props.$variant === "home" ? "19rem" : "21rem")};
  }
`;

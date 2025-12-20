import styled from "styled-components";

export const CardChallengeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 48.5%;
`;

export const CardTopic = styled.div<{ $color: "green" | "pink" }>`
  display: flex;
  justify-content: ${(props) => (props.$color == "pink" ? "flex-end" : "flex-start")};
  position: absolute;
  top: 5%;
  padding: 0 1.5rem;
  font: var(--headline-h-s);
  color: var(--text-tertiary);
  width: 100%;
`;

export const CardBackground = styled.img`
  width: 100%;
  min-height: 25rem;
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 81%;
  top: 14%;
  min-height: 21rem;
  gap: 15%;
  padding: 2.5rem 1.5rem;
`;

export const TryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.875rem;
`;

export const TryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: var(--text-primary-default);
  font: var(--subtitle-m-m);
`;

export const TryIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TryIcon = styled.img`
  width: 100%;
  height: auto;
  min-height: 8rem;
`;

export const TryTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const TryNum = styled.p`
  font: var(--title-b-l);
`;

export const TryText = styled.p``;

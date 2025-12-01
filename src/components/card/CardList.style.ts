import styled from "styled-components";
import CardBg from "@/assets/CardGreen.png";
import CardBgHover from "@/assets/CardGreenHover.png";
import CardPink from "@/assets/CardPink.png";
import CardPinkHover from "@/assets/CardPinkHover.png";

export const CardWrapper = styled.div<{ $color: string;}>`
  min-width: 23.563rem;
  height: 35.5rem;
  aspect-ratio: 377/568;
  background-image: ${(props)=>(props.$color === "pink" ? `url(${CardPink})` : `url(${CardBg})`)};
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;

  &:hover {
     background-image: ${(props)=>(props.$color === "pink" ? `url(${CardPinkHover})` : `url(${CardBgHover})`)};
  }
`;

export const Title = styled.div`
  font: var(--title-h-l);
  color: var(--text-tertiary);
  box-sizing: border-box;
  margin-top: 0.375rem;
  height: 3.875rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

export const ListBox = styled.div`
  box-sizing: border-box;
  border-radius: 0.25rem;
  margin: 1.5rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListItem = styled.div`
  background: var(--surpace-secondary);
  font: var(--body-r-l);
  width: 100%;
  padding: 0.7rem 1rem;
  border-radius: 6px;
  height: 2.625rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .tag {
    font: var(--body-r-m);
    color: var(--text-secondary)
  }
`;

import styled from "styled-components";
import CardBg from "@/assets/CardGreen.png";

export const CardWrapper = styled.div`
  width: 350px;
  height: 520px;
  background-image: url(${CardBg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1.2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font: var(--title-h-l);
  color: var(--text-tertiary);
  margin-bottom: 1rem;
`;

export const ListBox = styled.div`
  
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  overflow-y: hidden;
`;

export const ListItem = styled.div`
  background: #272727;
  color: #fff;
  font-size: 0.95rem;
  padding: 0.7rem 1rem;
  border-radius: 6px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .tag {
    color: #bfbfbf;
    font-size: 0.85rem;
  }
`;

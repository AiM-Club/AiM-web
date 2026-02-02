import styled from "styled-components";
export const CardWrapper = styled.div<{ $color: string }>`
  flex: 1;
  background-color: var(--text-tertiary);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ListBox = styled.div`
  box-sizing: border-box;
  border-radius: 0.25rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30rem;
  font: var(--title-h-s);
  color: var(--text-secondary);

  @media (max-width: 560px) {
    height: 16rem;
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
    color: var(--text-secondary);
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

export const HeartImg = styled.img`
  width: 1rem;
  height: 1rem;
`;

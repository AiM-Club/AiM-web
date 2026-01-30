import styled from "styled-components";

export const MoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const MoreBtnWrapper = styled.button`
  height: 3rem;
  width: 5.688rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--surpace-primary);
  color: var(--text-primary-default);
  font: var(--body-r-m);

  @media (max-width: 560px) {
    background-color: transparent;
    width: fit-content;
  }
`;

export const MoreIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

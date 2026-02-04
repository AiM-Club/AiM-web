import styled from "styled-components";

export const WinnerModalContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    flex-shrink: 0;
    justify-content: center;
    gap: 2rem;
    padding: 1.5rem 0 0 0;
`;

export const WinnerProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    margin: 0 auto;
    flex-shrink: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid var(--gray-600);
  background-color: var(--gray-800);
`;

export const Title = styled.div`
  font: var(--title-b-l);
  color: var(--color-white);
  text-align: center;
`;

export const ButtonDiv = styled.div<{ $hasDivider?: boolean }>`
  flex: 1;
  ${(props) => props.$hasDivider && "border-right: 1px solid var(--gray-600);"}
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  font: var(--body-r-xl);
  color: var(--color-white);
  text-align: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const ButtonCancel = styled.button`
  width: 100%;
  padding: 1rem;
  font: var(--body-r-xl);
  color: var(--state-error);
  text-align: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;
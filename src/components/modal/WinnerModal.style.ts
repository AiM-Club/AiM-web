import styled from "styled-components";

export const WinnerModalContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 40rem;
    margin: 0 auto;
    flex-shrink: 0;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 768px) {
        width: 21.375rem;
    }
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
    align-items: center;
    gap: 1rem;
`;

export const Title = styled.div`
    font: var(--headline-b-l);
    color: var(--color-white);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-transform: uppercase;

    @media (max-width: 768px) {
        font: var(--title-b-l);
    }
`

export const CrownImage = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    
    @media (max-width: 768px) {
        width: 1.5rem;
        height: 1.5rem;
    }
`

export const TitleText = styled.div`
    font: var(--subtitle-m-l);
    color: var(--color-white);
    text-align: center;
    line-height: 1.6;

    @media (max-width: 768px) {
        font: var(--body-r-l);
    }
`

export const Button = styled.button`
    font: var(--title-s-l);
    color: var(--color-white);
    text-align: center;
    flex: 1;
    padding: 1rem;
    background-color: var(--gray-800);
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    @media (max-width: 768px) {
        font: var(--body-s-l);
    }
`

export const ButtonCancel = styled.button`
    font: var(--title-s-l);
    color: var(--state-error);
    text-align: center;
    flex: 1;
    padding: 1rem;
    background-color: var(--gray-800);
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    
    @media (max-width: 768px) {
        font: var(--body-s-l);
    }
`
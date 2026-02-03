import styled from "styled-components";

export const WinnerModalContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 25rem;
    margin: 0 auto;
    flex-shrink: 0;
`;

export const WinnerProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 30vh;
    margin: 0 auto;
    flex-shrink: 0;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Title = styled.div`
    font: var(--headline-b-l);
    color: var(--text-primary-default);
    display: flex;
`

export const CrownImage = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`

export const TitleText = styled.div`
    font: var(--subtitle-m-l);
    color: var(--text-primary-default);
    text-align: center;
`

export const Button = styled.button`
    font: var(--body-m-l);
    color: var(--text-primary-default);
    text-align: center;
`
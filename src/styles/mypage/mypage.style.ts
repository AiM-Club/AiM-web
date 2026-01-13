import styled from "styled-components";

export const mypageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.25rem;
    width: 100%;
`;

export const MyLevelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
`;

export const MyLevelContent = styled.div`
    display: flex;
    gap: 1.5rem;
    width: 100%;
    height: 16.563rem;

    @media (max-width: 700px) {
        flex-direction: column;
        height: auto;
    }

    @media (min-width: 1024px) and (max-width: 1242px) {
        flex-direction: column;
        height: auto;
    }
`;

export const MyLevelImageWrapper = styled.div`
    width: 13.938rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    margin: 0 auto;

    
`;

export const MyLevelImage = styled.img`
    height: 100%;
    aspect-ratio: 1;

    @media (max-width: 390px) {
        width: 10rem;
    }
`;

export const MyLevelText = styled.p`
    font: var(--title-b-l);
`;

export const MyLevelInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex: 1;
    justify-content: flex-end;
    padding: 1.5rem 0;
`;

export const MyLevelInfo = styled.div`
    border-radius: 4rem;
    background-color: var(--pink-500);
    font: var(--title-s-l);
    padding: 0.625rem 1.5rem;
    width: fit-content;
    height: fit-content;
`;

export const LevelInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font: var(--subtitle-m-m);
`;

export const NextLevel = styled.p`
    font: var(--subtitle-m-m);
    color: var(--text-secondary);
`;

export const LevelInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
`;

export const LevelInfoContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 1rem;
    width: 100%;

    @media (max-width: 470px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 470px) and (max-width: 700px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 700px) and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1024px) and (max-width: 1230px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1230px) and (max-width: 1550px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const LevelInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
`;

export const LevelInfoImage = styled.img`
    width: 11.25rem;
    height: 100%;
    aspect-ratio: 1;

    @media (max-width: 470px) {
        width: 8rem;
    }
`;

export const LevelInfoItemTitle = styled.p`
    font: var(--title-s-l);
`;

export const LevelInfoItemDescription = styled.p`
    font: var(--subtitle-m-m);
    color: var(--text-secondary);
`;

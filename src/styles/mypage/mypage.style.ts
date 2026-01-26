import styled from "styled-components";
import EmptySpace from "@/assets/EmptySpace.svg";

export const mypageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.25rem;
    width: 100%;

    @media (max-width: 700px) {
      gap: 2.5rem;
    }
`;

export const MyLevelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;

    @media (max-width: 700px) {
      gap: 2.5rem;
    }
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

    @media (max-width: 700px) {
        width: 10rem;
    }
`;

export const MyLevelText = styled.p`
    font: var(--title-b-l);

    @media (max-width: 700px) {
      font: var(--body-s-xl);
    }
`;

export const MyLevelInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex: 1;
    justify-content: flex-end;
    padding: 1.5rem 0;

    @media (max-width: 700px) {
      gap: 1rem;
    }
`;

export const MyLevelInfo = styled.div`
    border-radius: 4rem;
    background-color: var(--pink-500);
    font: var(--title-s-l);
    padding: 0.625rem 1.5rem;
    width: fit-content;
    height: fit-content;

    @media (max-width: 700px) {
      padding: 0.5rem 1rem;
      font: var(--body-m-m);
    }
`;

export const LevelInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font: var(--subtitle-m-m);

    @media (max-width: 700px) {
      font: var(--body-r-l);
    }
`;

export const NextLevel = styled.p`
    font: var(--subtitle-m-m);
    color: var(--text-secondary);

    @media (max-width: 700px) {
      font: var(--body-r-l);
    }
`;

export const LevelInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;

    @media (max-width: 700px) {
      gap: 1.5rem;
    }
`;

export const LevelInfoContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 1rem;
    width: 100%;
    gap: 2rem 0;

    @media (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
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

    @media (max-width: 700px) {
      gap: 0.5rem;
    }
`;

export const LevelInfoImage = styled.img`
    width: 11.25rem;
    height: 100%;
    aspect-ratio: 1;

    @media (max-width: 700px) {
        width: 5rem;
    }
`;

export const LevelInfoItemTitle = styled.p`
    font: var(--title-s-l);

    @media (max-width: 700px) {
      font: var(--body-s-l);
    }
`;

export const LevelInfoItemDescription = styled.p`
    font: var(--subtitle-m-m);
    color: var(--text-secondary);

    @media (max-width: 700px) {
      font: var(--body-r-m);
    }
`;

export const EmptyState = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30vh;
    margin: 0 auto;
    flex-shrink: 0;
    background-image: url(${EmptySpace});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
`;

export const LockImage = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`;
import styled from "styled-components";

export const profileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.25rem;
    width: 100%;
`;

export const profileContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    width: 100%;
`;

export const profileHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
`;

export const profileInfoWrapper = styled.div`
    display: flex;
    gap: 2.5rem;
    width: 100%;
`;

export const profileInfo = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    flex: 1;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.5rem 0;
`;

export const profileName = styled.p`
    fong: var(--title-h-l);
`;

export const profileNickName = styled.p`
    font: var(--subtitle-m-l);
`;

export const RankInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const RankImg = styled.img`
    width: 8.75rem;
    aspect-ratio: 1;
`;

export const RankName = styled.div`
    background-color: var(--pink-500);
    padding: 0.625rem 1.5rem;
    border-radius: 4rem;
    font: var(--title-h-m);
    align-self: center;
    justify-self: center;
`;

export const profileContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
`;
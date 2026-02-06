import styled from "styled-components";
import EmptySpace from "@/assets/EmptySpace.svg";

export const profileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.25rem;
    width: 100%;
  
    @media (max-width: 700px){
      gap: 2.5rem;
    }
`;

export const profileContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    width: 100%;
  
    @media (max-width: 700px){
      gap: 2.5rem;
    }
`;

export const profileHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
  
    @media (max-width: 700px){
      gap: 1.5rem;
    }
`;

export const profileInfoWrapper = styled.div`
    display: flex;
    gap: 2.5rem;
    width: 100%;
  
    @media (max-width: 700px){
      gap: 1.5rem;
    }
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
  
    @media (max-width: 700px){
      padding: 0;
      justify-content: flex-start;
    }
`;

export const profileName = styled.p`
    font: var(--headline-h-l);
  
    @media (max-width: 700px){
      font: var(--title-h-s);
    }
`;

export const profileNickName = styled.p`
    font: var(--subtitle-m-l);
  
    @media (max-width: 500px){
      font: var(--body-r-xs);
    }

    @media (max-width: 700px) and (min-width: 500px) {
      font: var(--body-m-m);
    }
`;

export const RankInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  
    @media (max-width: 700px){
      font: var(--body-m-m);
    }
`;

export const RankImg = styled.img`
    width: 8.75rem;
    aspect-ratio: 1;

    @media (max-width: 500px) {
        width: 2.5rem;
    }

    @media (max-width: 700px) and (min-width: 500px) {
        width: 3.5rem;
    }
`;

export const RankName = styled.div`
    background-color: var(--pink-500);
    padding: 0.625rem 1.5rem;
    border-radius: 4rem;
    font: var(--subtitle-m-l);
    align-self: center;
    justify-self: center;

    @media (max-width: 700px) {
      font: var(--body-m-m);
      padding: 0.5rem 1rem;
    }
`;

export const profileContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  
  @media (max-width: 700px){
    gap: 2.5rem;
  }
`;

export const ChallengeWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    gap: 2rem 3%;
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
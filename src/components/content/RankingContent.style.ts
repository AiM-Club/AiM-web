import styled from "styled-components";
import TryBack from "@/assets/Try.png";

export const RankingContentWrapper = styled.div<{ $contentType: "main" | "sub" }>`
  display: flex;
  flex-direction: ${({ $contentType }) => $contentType === "main" ? "column" : "row"};
  width: 100%;
  gap: 3rem;
  padding: 1.5rem 0;
  height: 100%;
  
  @media (max-width: 560px) {
    padding: 2.5rem 0 1.5rem 0;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 1800px) and (min-width: 1600px) {
    flex-direction: column;
  }

  @media (max-width: 1250px) and (min-width: 1024px) {
    flex-direction: column;
  }
`;

export const UserInfoWrapper = styled.div<{ $contentType: "main" | "sub" }>`
  display: flex;
  flex-direction: ${({ $contentType }) => $contentType === "main" ? "row" : "column"};
  align-items: ${({ $contentType }) => $contentType === "main" ? "flex-end" : "center"};
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  
  @media (max-width: 560px) {
    justify-content: flex-start;
    flex-direction: row;
    gap: 1.5rem;
  }

  @media (max-width: 1800px) and (min-width: 1600px) {
    flex-direction: row;
  }

  @media (max-width: 1250px) and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const RankInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  
    @media (max-width: 560px) {
      flex-direction: row;
    }
`;

export const RankImg = styled.img`
    width: 5rem;
    aspect-ratio: 1;
  
    @media (max-width: 560px) {
      width: 2.5rem;
    }
`;

export const RankName = styled.div`
    background-color: var(--pink-500);
    padding: 0.375rem 1rem;
    border-radius: 4rem;
    font: var(--body-m-m);
    align-self: center;
    justify-self: center;
`;

export const AllChallengeInfoWrapper = styled.div`
  display: flex;    
  flex-direction: column;
  gap: 1rem;
  
  @media (max-width: 560px) {
    gap: 1.5rem;
  }
`;

export const ChallengeTitle = styled.p`
  font: var(--subtitle-m-m);
  color: var(--text-primary-default);
  
  @media (max-width: 560px) {
    font: var(--body-s-xl);
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 560px) {
    gap: 1.5rem;
  }
`;

export const TryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.938rem;
  
  @media (max-width: 560px) {
    gap: 0.5rem;
  }
`;

export const TryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-primary-default);
  font: var(--subtitle-m-m);
  
  @media (max-width: 560px) {
    gap: 0.5rem;
    font: var(--body-s-l);
  }
`;

export const TryTitle = styled.p`
  font: var(--body-m-l);
  color: var(--text-secondary);
  
  @media (max-width: 560px) {
    font: var(--body-m-m);
  }
`;

export const TryIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TryIcon = styled.img`
  width: 100%;
  height: auto;
`;

export const TryTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const TryNum = styled.p`
  font: var(--title-b-l);
  
  @media (max-width: 560px) {
    font: var(--title-b-s);
  }
`;

export const TryText = styled.p``;

export const ChallengeInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.875rem;
  
  @media (max-width: 560px) {
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const ChallengeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;

  @media (max-width: 560px) {
    gap: 1.25rem;
  }
`;

export const TryContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  aspect-ratio: 213/182;
  background-image: url(${TryBack});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  padding: 1.375rem 1rem;
  gap: 2rem;
  
  @media (max-width: 560px) {
    background-image: none;
    padding: 0;
    gap: 1.25rem;
  }
`;

export const TryTitleWrapper = styled.div`  
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  position: absolute;
`;

export const TrySubContentWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 560px) {
    gap: 0.25rem;
  }
`;

export const TrySubContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex: 1;
`;

export const TrySubTitle = styled.p`
  font: var(--body-m-s);
  color: var(--text-secondary);

  @media (max-width: 560px) {
    font: var(--body-m-m);
  }
`; 

export const TrySubWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 2rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-image: url(${TryBack});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 560px) {
    height: 4rem;
  }
`;

export const TrySubNum = styled.p`
  font: var(--body-s-xl);
  color: var(--text-primary-default);

  @media (max-width: 560px) {
    font: var(--body-s-m);
  }
`;

export const TrySubText = styled.p`
  font: var(--body-r-m);
  color: var(--text-primary-default);

  @media (max-width: 560px) {
    font: var(--body-s-s);
  }
`;
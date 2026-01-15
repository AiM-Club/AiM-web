import styled from "styled-components";
import TryBack from "@/assets/Try.png";

export const RankingContentWrapper = styled.div<{ $contentType: "main" | "sub" }>`
  display: flex;
  flex-direction: ${({ $contentType }) => $contentType === "main" ? "column" : "row"};
  width: 100%;
  height: fit-content;
  gap: 3rem;
  padding: 1.5rem 0;
`;

export const UserInfoWrapper = styled.div<{ $contentType: "main" | "sub" }>`
  display: flex;
  flex-direction: ${({ $contentType }) => $contentType === "main" ? "row" : "column"};
  align-items: ${({ $contentType }) => $contentType === "main" ? "flex-end" : "center"};
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`;

export const RankInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const RankImg = styled.img`
    width: 5rem;
    aspect-ratio: 1;
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
`;

export const ChallengeTitle = styled.p`
  font: var(--subtitle-m-m);
  color: var(--text-primary-default);
`;

export const TryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.938rem;
`;

export const TryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-primary-default);
  font: var(--subtitle-m-m);
`;

export const TryTitle = styled.p`
  font: var(--body-m-l);
  color: var(--text-secondary);
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
  // min-height: 8rem;
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
`;

export const TryText = styled.p``;

export const ChallengeInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.875rem;
`;

export const ChallengeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
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
`; 

export const TrySubNum = styled.p`
  font: var(--body-r-m);
  color: var(--text-primary-default);
`;
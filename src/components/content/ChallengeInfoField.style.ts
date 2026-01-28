import styled from "styled-components";

export const ChallengeInfoFieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem 3rem;
  font: var(--subtitle-m-l);
  color: var(--text-secondary);
  
  @media (max-width: 560px){
    font: var(--body-m-m);
    gap: 0.5rem 0;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  width: 4rem;
`;

export const EachContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 19rem;
  
  @media (max-width: 560px){
    width: 15.5rem;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  width: 15rem;
  gap: 0.5rem;
  
  @media (max-width: 560px){
    font: var(--body-r-m);

    img{
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export const Data = styled.div`
  color: var(--text-primary-default);
`;

export const LinkData = styled.div`
  color: var(--text-primary-default);
  text-decoration: underline;
  cursor: pointer;
`;

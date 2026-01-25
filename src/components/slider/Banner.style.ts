import styled from "styled-components";

export const BannerWrapper = styled.div`
  width: 100%;
  height: 22.5rem;
  position: relative;

  @media (max-width: 560px){
    height: 13.75rem;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent, var(--background-primary));
`;

export const BannerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: absolute;
  bottom: 4rem;
  left: 10%;
  width: calc(100% - 20%);
  
  @media (max-width: 560px){
    bottom: 1.5rem;
    width: calc(100% - 3rem);
    gap: 0.75rem;
    left: 1.5rem;
  }
`;

export const BannerContent = styled.p`
  color: var(--text-primary-default);
  font: var(--headline-h-l);
  
  @media (max-width: 560px){
    font: var(--headline-h-s);
  }
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font: var(--subtitle-m-l);
  width: 100%;
  
  @media (max-width: 560px){
    font: var(--body-r-m);
  }
`;

export const HeartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;

  img {
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  
    @media (max-width: 560px){
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

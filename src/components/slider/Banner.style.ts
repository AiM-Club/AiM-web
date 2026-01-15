import styled from "styled-components";

export const BannerWrapper = styled.div`
  width: 100%;
  height: 22.5rem;
  position: relative;
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
  left: 7.625rem;
`;

export const BannerContent = styled.p`
  color: var(--text-primary-default);
  font: var(--headline-h-l);
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font: var(--subtitle-m-l);
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
  }
`;

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

export const BannerContent = styled.p`
  color: var(--text-primary-default);
  font: var(--headline-h-l);
  position: absolute;
  bottom: 4rem;
  left: 7.625rem;
`;

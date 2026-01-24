import styled from "styled-components";
import BannerBackground from "@/assets/AddBackground.png";

export const BannerWrapper = styled.div`
  width: 100%;
  height: 22.5rem;
  position: relative;
  background-color: var(--gray-600);
  @media(max-width: 500px){
    height: 12.5rem;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerOverlay = styled.div<{ $hasImage?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ $hasImage }) => 
    $hasImage 
      ? 'transparent' 
      : `url(${BannerBackground}) no-repeat center center`};
  background-size: cover;
  cursor: pointer;
`;

export const BannerContent = styled.input`
  color: var(--text-primary-default);
  font: var(--headline-h-l);
  position: absolute;
  bottom: 4rem;
  left: 10%;
  background: transparent;
  border: none;
  outline: none;
  width: 80%;

  &::placeholder {
    color: var(--text-secondary);
  }

  @media(max-width: 500px){
    left: 5%;
    bottom: 2rem;
    font: var(--headline-h-s);
  }
`;

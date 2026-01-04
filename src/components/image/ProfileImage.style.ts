import styled from "styled-components";

export const ProfileImgWrapper = styled.div<{ $width: number; $color?: "green" | "pink" }>`
  display: flex;
  width: ${(props) => props.$width}rem;
  height: ${(props) => props.$width}rem;
  border: 1.5px solid
    ${(props) => (props.$color === "green" ? "var(--border-secondary-default)" : "var(--border-primary-default)")};
  background-color: ${(props) =>
    props.$color === "green" ? "var(--border-secondary-default)" : "var(--border-primary-default)"};
  aspect-ratio: 1;
  clip-path: polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%);
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%);
`;

import styled from "styled-components";

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 15rem;
  background-color: var(--gray-600);

  @media (max-width: 1024px) {
    width: 85%;
    margin-left: 7.5%;
  }

  @media (max-width: 390px) {
    width: 90%;
    margin-left: 5%;
  }
`;

export const Banner = styled.div`
  width: 100%;
  // height: 22.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-600);
`;

export const BannerImg = styled.img`
  display: block;
  width: 100%;
  // height: 100%;
  object-fit: cover;
  object-position: center center;
  align-self: center;
`;

export const ArrowWrapper = styled.div<{ $position: "left" | "right" }>`
  position: absolute;
  top: 7.5rem;
  ${(props) => (props.$position === "left" ? "left: 2rem;" : "right: 2rem;")};
  z-index: 9999;
  cursor: pointer;
  transform: translateY(-50%);
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const DotContainer = styled.ul`
  position: absolute;
  top: 12rem;
  display: flex !important;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    &.slick-active div {
      width: 2.5rem;
      height: 0.5rem;
      border-radius: 0.3rem;
      background-color: var(--green-400);
    }
  }
`;

export const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--gray-400);
  cursor: pointer;
  transition: all 0.3s ease;
`;

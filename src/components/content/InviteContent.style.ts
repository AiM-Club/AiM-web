import styled from "styled-components";

export const InviteContentWrapper = styled.div<{ $wrap: boolean }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 0 0.25rem 0.25rem 0.25rem;
  clip-path: ${({ $wrap }) =>
    $wrap ? "polygon(0.6rem 0, 100% 0, 100% 100%, -7rem 100%)" : "polygon(0.6rem 0, 100% 0, 100% 100%, -3.5rem 100%)"};
  background-color: var(--surpace-primary);
  @media(max-width: 580px){
   clip-path: polygon(0.4rem 0, 100% 0, 100% 100%, -6.5rem 100%);
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font: var(--body-r-l);
  color: var(--text-primary-default);
  align-items: center;
  gap: 8%;
  height: 4rem;
  white-space: nowrap;
  margin-right: 9rem;
  @media(max-width: 580px){
    font: var(--body-r-s);
    height: 3rem;
  }
`;

export const RightWrapper = styled.div<{ $wrap: boolean }>`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  gap: 1rem;
  height: 4rem;
  width: ${({ $wrap }) => ($wrap ? "100%" : "auto")};
  margin-left: 1rem;
  @media(max-width: 580px){
    height: 3rem;
    gap: 0;
  }
`;

export const LevelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  @media(max-width: 580px){
    font: var(--body-r-s);
  }
`;

export const Title = styled.span`
  font: var(--body-s-l);
  @media(max-width: 580px){
  width: 11rem;
    font: var(--body-s-m) !important;
  }
  @media(max-width: 360px){
    width: 9rem;
  }
`;

export const LevelImage = styled.img`
  width: 2rem;
  height: 2rem;
  @media(max-width: 580px){
    width: 1.75rem;
    height: 1.75rem;
  }
`;

export const CategoryBtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
  background-color: var(--surpace-primary);
`;

export const CategoryWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Category = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font: var(--body-r-l);
  color: var(--text-secondary);
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ApproveBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--body-s-l);
  width: 7.25rem;
  color: var(--surpace-secondary);
  background-color: var(--button-secondary-enabled);
  clip-path: polygon(2.25rem 0, 100% 0, calc(100% - 2.25rem) 100%, 0 100%);
  cursor: pointer;

  &:hover {
    background-color: var(--button-primary-default);
  }

  @media(max-width: 580px){
    width: 5rem;
    clip-path: polygon(1.5rem 0, 100% 0, calc(100% - 1.5rem) 100%, 0 100%);
    background-color: var(--pink-300);
    font: var(--body-s-m);

    &:hover {
      background-color: var(--pink-300);
    }
  }
`;

export const RejectBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  font: var(--body-s-l);
  width: 7.25rem;
  margin-left: -1.75rem;
  color: var(--surpace-secondary);
  background-color: var(--button-secondary-enabled);
  clip-path: polygon(2.25rem 0, 100% 0, calc(100% - 2.25rem) 100%, 0 100%);
  cursor: pointer;

  &:hover {
    background-color: var(--button-secondary-default);
  }
  
  @media(max-width: 580px){
    width: 5rem;
    clip-path: polygon(1.5rem 0, 100% 0, calc(100% - 1.5rem) 100%, 0 100%);
    background-color: var(--green-300);
    margin-left: -1.1rem;
    font: var(--body-s-m);

    &:hover {
      background-color: var(--green-300);
    }
  }
`;

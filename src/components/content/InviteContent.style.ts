import styled from "styled-components";

export const InviteContentWrapper = styled.div<{ $wrap: boolean }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 30rem;
  border-radius: 0 0.25rem 0.25rem 0.25rem;
  clip-path: ${({ $wrap }) =>
    $wrap ? "polygon(0.6rem 0, 100% 0, 100% 100%, -7rem 100%)" : "polygon(0.6rem 0, 100% 0, 100% 100%, -3.5rem 100%)"};
  background-color: var(--surpace-primary);
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
`;

export const RightWrapper = styled.div<{ $wrap: boolean }>`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  gap: 1rem;
  height: 4rem;
  width: ${({ $wrap }) => ($wrap ? "100%" : "auto")};
  margin-left: 1rem;
`;

export const LevelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`;

export const Title = styled.span`
  font: var(--body-s-l);
`;

export const LevelImage = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const CategoryBtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
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
`;

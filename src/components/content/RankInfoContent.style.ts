import styled from "styled-components";
import RankBG from "@/assets/RankBG.png";

export const RankInfoContentWrapper = styled.div<{ $type: "header" | "list" }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 0.25rem;
  background-color: var(--surpace-primary);
  background-image: ${(props) => props.$type === "header" ? `url(${RankBG})`: "none"};
  height: ${(props) => props.$type === "header" ? "4rem" : "4.5rem"};

  @media (max-width: 1680px) {
  flex-direction: column;
  height: ${(props) => props.$type === "header" ? "8rem" : "9rem"};
  align-items: flex-start;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font: var(--body-r-l);
  color: var(--text-primary-default);
  align-items: center;
  white-space: nowrap;
  flex: 1;

  @media (max-width: 1680px) {
    width: 100%;
    height: 50%;
    align-items: flex-start;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  white-space: nowrap;
  flex: 1;

  @media (max-width: 1680px) {
    width: 100%;
    height: 50%;
  }
`;

export const RankWrapper = styled.div<{ $type: "header" | "list" }>`
  background-color: ${(props) => props.$type === "header" ? "none" : "var(--pink-700)"};
  height: ${(props) => props.$type === "header" ? "4rem" : "4.5rem"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
`;

export const ProfileWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
`;


export const LevelWrapper = styled.div`
  gap: 0.75rem;
  height: 100%;
  width: 9.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.375rem;
`;

export const LevelImage = styled.img`
  width: 2.5rem;
  aspect-ratio: 1;
`;

export const NicknameWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 1;
  min-width: 0;
`;

export const NicknameText = styled.span`
  color: var(--text-primary-default);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
`;

export const TryNumWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.5rem;
`;

export const SuccessNumWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.5rem;
`;

export const SuccessPercentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.5rem;
`;
// export const Title = styled.span`
//   font: var(--body-s-l);
// `;

// export const CategoryBtnWrapper = styled.div`
//   display: flex;
//   gap: 1rem;
// `;

// export const CategoryWrapper = styled.div`
//   display: flex;
//   gap: 1rem;
// `;

// export const Category = styled.div`
//   display: flex;
//   gap: 1rem;
//   align-items: center;
//   font: var(--body-r-l);
//   color: var(--text-secondary);
// `;

// export const BtnWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// export const ApproveBtn = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font: var(--body-s-l);
//   width: 7.25rem;
//   color: var(--surpace-secondary);
//   background-color: var(--button-secondary-enabled);
//   clip-path: polygon(2.25rem 0, 100% 0, calc(100% - 2.25rem) 100%, 0 100%);
//   cursor: pointer;

//   &:hover {
//     background-color: var(--button-primary-default);
//   }
// `;

// export const RejectBtn = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   top: 0;
//   font: var(--body-s-l);
//   width: 7.25rem;
//   margin-left: -1.75rem;
//   color: var(--surpace-secondary);
//   background-color: var(--button-secondary-enabled);
//   clip-path: polygon(2.25rem 0, 100% 0, calc(100% - 2.25rem) 100%, 0 100%);
//   cursor: pointer;

//   &:hover {
//     background-color: var(--button-secondary-default);
//   }
// `;

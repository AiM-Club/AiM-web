import styled from "styled-components";
import CardVSHover from "@/assets/CardVSHover.png";
import VSTitle from "@/assets/VSTitle.png";
import VSTitleHover from "@/assets/VSTitleHover.png";

export const CardContent = styled.div`
  border: 3px solid var(--border-primary-default);
  height: 26.313rem;
  display: flex;
  flex-direction: column;
  background-color: var(--surpace-secondary);
`;

export const UserName = styled.div`
  background-image: url(${VSTitle});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex: 1;
  display: flex;
  align-items: center;
  font:var(--body-r-s);
  padding: 0 0.5rem 0 1rem;
  justify-content: space-between;
`;

export const RankImg = styled.img`
  height: 2.5rem;
`;

export const CardWrapper = styled.div`
  // min-width: 17.375rem;
  height: 27.063rem;
  box-sizing: border-box;
  padding: 0.375rem;
  display: flex;
  flex-direction: column;

  &:hover {
    // min-width: 17.375rem;
    height: 27.063rem;
    background-image: url(${CardVSHover});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  &:hover ${CardContent} {
    border: 3px solid var(--border-primary-hover);
    background-color: var(--surpace-primary);
  }

  &:hover ${UserName} {
    background-image: url(${VSTitleHover});
  }
`;


export const UserInfo = styled.div`
  height: 3.5rem;
  background-color: black;
  display: flex;
`;

export const UserImg = styled.img`
  height: 100%;
  aspect-ratio:1;
`;

export const VSImg = styled.img`
  height: 10rem;
  width: 100%;
`;

export const VSInfoWrapper = styled.div`
  flex: 1;
  padding: 1rem 0 1.25rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`;

export const VSInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
  box-sizing: border-box;
  padding: 0 1.25rem;
`;

export const InfoDate = styled.div`
  font: var(--body-r-s);
  color: var(--text-secondary);
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font: var(--body-m-l);
`;

export const FieldTagWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  align-items: center;
`;

export const InfoName = styled.div`
  color: var(--text-secondary);
  font: var(--body-r-s);
  margin-right: 1.25rem;
`;

export const Field = styled.div`
  background-color: var(--pink-900);
  font: var(--body-r-xs);
  border-radius: 4rem;
  padding: 0 0.625rem;
`;

export const Tag = styled.div`
  font: var(--body-r-s);
`;

export const Job = styled.div`
  font: var(--body-r-s);
`;

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--text-primary-default);
`;
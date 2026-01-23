import styled from "styled-components";

export const VSMatchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const VSMatchContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 10%;
`;

export const VSMatchProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ProfileWrapper = styled.div<{ $direction: "left" | "right" | "both" }>`
  display: flex;
  justify-content: ${(props) => (props.$direction === "left" ? "flex-end" : "flex-start")};
`;

export const VSMatchCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem 3%;
  flex-wrap: wrap;
`;

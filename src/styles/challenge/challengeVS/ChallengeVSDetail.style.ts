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

  @media (max-width: 770px) {
    padding: 0 5%;
    gap: 1rem;
  }
`;

export const VSMatchProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 770px) {
    margin-top: 1.5rem;
  }
`;

export const ProfileWrapper = styled.div<{ $direction: "left" | "right" | "both" }>`
  display: flex;
  justify-content: ${(props) => (props.$direction === "left" ? "flex-end" : "flex-start")};

  @media (max-width: 770px) {
    justify-content: space-between;
  }
`;

export const VSMatchCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem 3%;
  flex-wrap: wrap;
`;

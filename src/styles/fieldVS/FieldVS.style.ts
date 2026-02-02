import styled from "styled-components";

export const FieldVSWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.25rem;
    width: 100%;

    @media (max-width: 560px) {
      gap: 2.5rem;
    }
`;

export const FieldTopic = styled.div`
    display: flex;
    gap: 1rem;
    font: var(--headline-h-l);
    align-items: center;
    width: 100%;

    @media (max-width: 560px) {
      font: var(--title-h-s);

      img{
        width: 1.5rem;
      }
    }
`;

export const FieldVSContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
`;
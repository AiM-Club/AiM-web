import styled from "styled-components";

export const PageTopicWrapper = styled.div<{ $size: "headline-h-m" | "headline-h-l" | "title-h-s" }>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.$size === "headline-h-m" ? "center" : "flex-start")};
  font: var(--${(props) => props.$size});
  @media(max-width: 560px){
    font: var(--title-h-s);
  }
`;

export const FirstText = styled.p`
  color: var(--green-400);
`;

export const ElseText = styled.p`
  color: var(--text-primary-default);
`;

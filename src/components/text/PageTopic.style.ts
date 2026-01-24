import styled from "styled-components";

export const PageTopicWrapper = styled.div<{ $size: "headline-h-m" | "headline-h-l" | "headline-h-s" }>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.$size === "headline-h-m" ? "center" : "flex-start")};
  font: var(--${(props) => props.$size});
  @media(max-width: 500px){
    font: var(--headline-h-s);
  }
`;

export const FirstText = styled.p`
  color: var(--green-400);
`;

export const ElseText = styled.p`
  color: var(--text-primary-default);
`;

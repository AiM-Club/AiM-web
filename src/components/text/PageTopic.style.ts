import styled from "styled-components";

export const PageTopicWrapper = styled.div<{ $size: "headline-h-m" | "headline-h-l" }>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.$size === "headline-h-m" ? "center" : "flex-start")};
  font: var(--${(props) => props.$size});
`;

export const FirstText = styled.p`
  color: var(--green-400);
`;

export const ElseText = styled.p`
  color: var(--text-primary-default);
`;

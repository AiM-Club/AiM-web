import styled from "styled-components";

export const ProgressBarWrapper = styled.div<{ $height: number }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$height <= 32 ? 1 : 1.5)}rem;
  width: 100%;
`;

export const ProgressBarTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProgressBarText = styled.div<{ $height: number }>`
  font: ${(props) => (props.$height <= 20 ? "var(--body-m-m)" : props.$height <= 32 ? "var(--subtitle-m-m)" : "var(--subtitle-m-l)")};
  color: var(--text-primary-default);
`;

export const ProgressBar = styled.div<{ $barText: "main" | "sub"; $height: number }>`
  position: relative;
  width: 100%;
  background-color: ${(props) => props.$barText === "main" ? "var(--surpace-primary)" : "var(--surpace-secondary)"};
  height: ${(props) => props.$height}px;
  border-radius: ${(props) => (props.$height > 32 ? 0.5 : props.$height > 20 ? 0.25 : 0.125)}rem;
  overflow: hidden; /* 넘치는 부분 가리기 */
`;

export const ProgressBarIcon = styled.img<{ $height: number; $progress: number }>`
  position: absolute;
  left: 0;
  top: 0;
  height: ${(props) => props.$height}px;
  width: ${(props) => props.$progress}%; /* 부모 너비의 progress%만큼만 보이게 */
  object-fit: cover; /* 이미지 비율 유지하면서 영역 채우기 */
  object-position: left center; /* 이미지가 왼쪽에서부터 시작 */
  border-radius: ${(props) => (props.$height > 32 ? 0.5 : props.$height > 20 ? 0.25 : 0.125)}rem;
`;

export const ProgressBarFill = styled.div<{ $progress: number; $color: string }>`
  width: ${(props) => props.$progress}%;
  // background-color: ${(props) => props.$color};
  height: 100%;
  border-radius: 0.5rem;
`;

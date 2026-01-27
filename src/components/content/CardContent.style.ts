import styled from "styled-components";

export const ChallengeMainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  gap: 3.5rem;
  padding: 1.5rem 0;

  @media (max-width: 800px) {
    gap: 1.5rem;
  }
`;

export const TryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.875rem;

  @media (max-width: 800px) {
    gap: 0.5rem;
  }
`;

export const TryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: var(--text-primary-default);
  font: var(--subtitle-m-m);

  @media (max-width: 800px) {
    gap: 0.5rem;
    font: var(--body-m-l);
  }
`;

export const TryIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TryIcon = styled.img`
  width: 100%;
  height: auto;
`;

export const TryTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const TryNum = styled.p`
  font: var(--title-b-l);

  @media (max-width: 800px) {
  font: var(--title-b-s);
  }
`;

export const TryText = styled.p`
  @media (max-width: 800px) {
    font: var(--body-s-l);
  }`;

// ChallengeVSMatchContent
export const ChallengeVSMatchContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1.5rem 0;
  width: 100%;

  @media (max-width: 770px) {
    gap: 1.5rem;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 3%;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

export const ProfileTopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  width: 100%;
`;

export const ProfileName = styled.div`
  display: flex;
  font: var(--title-h-s);
  color: var(--text-primary-default);
  padding-bottom: 0.75rem;
  align-items: flex-end;
`;

export const RowProgressWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 3%;
  flex-direction: row;
  padding: 0 0 1% 0;
`;

export const ProgressWrapper = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  flex: 1;
  padding: 0 0 1% 0;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 770px) {
    gap: 1rem;
  }
`;
export const WeekWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 770px) {
    gap: 0.5rem;
  }
`;

export const WeekItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 7rem;
  max-width: 10rem;
  flex: 1;

  @media (max-width: 770px) {
    min-width: 6rem;
    max-width: 8rem;
  }
`;

export const CurrentWeekItem = styled.div<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 0;
  background-color: var(--surpace-primary);
  border-radius: ${(props) => (props.$selected ? "0.25rem 0.25rem 0 0" : "0.25rem")};
  color: ${(props) => (props.$selected ? "var(--text-primary-hover)" : "var(--text-primary-default)")};
  padding-bottom: ${(props) => (props.$selected ? "2.5rem" : "1.5rem")};
  font: var(--body-r-xl);
  cursor: pointer;

  @media (max-width: 770px) {
    font: var(--body-s-m);
    padding: 1.2rem 0.5rem;
    padding-bottom: ${(props) => (props.$selected ? "1.5rem" : "1rem")};
  }
`;

export const TotalWeekItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  border: 1.5px solid var(--surpace-primary);
  border-radius: 0.25rem;
  color: var(--text-secondary);
  font: var(--body-r-xl);

  @media (max-width: 770px) {
    font: var(--body-s-m);
    padding: 1.2rem 0.5rem;
  }
`;

export const WeekContentWrapper = styled.div<{ $direction: number; $rowcount: number; $width: number }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$width ? `${props.$width}px` : "322.5%")};
  gap: 1rem;
  transform: translateX(
    ${(props) => {
      if (props.$direction === 0)
        return `calc(-100% + ${(props.$width - (props.$rowcount - 1) * 16) / props.$rowcount}px)`;
      return `calc(-${((props.$width - (props.$rowcount - 1) * 16) / props.$rowcount) * (props.$direction - 1) + 16 * (props.$direction - 1)}px)`;
    }}
  );

  @media (max-width: 770px) {
  transform: translateX(
    ${(props) => {
      if (props.$direction === 0)
        return `calc(-100% + ${(props.$width - (props.$rowcount - 1) * 8) / props.$rowcount}px)`;
      return `calc(-${((props.$width - (props.$rowcount - 1) * 8) / props.$rowcount) * (props.$direction - 1) + 8 * (props.$direction - 1)}px)`;
    }}
  );
  }
`;

export const WeekTopicWrapper = styled.div<{ $direction: number }>`
  display: flex;
  flex-direction: column;
  background-color: var(--surpace-primary);
  border-radius: ${(props) =>
    props.$direction === 0
      ? "0.25rem 0 0.25rem 0.25rem"
      : props.$direction === 2 || props.$direction === 3
        ? "0.25rem"
        : "0 0.25rem 0.25rem 0.25rem"};
  padding: 1.25rem 2.5rem;

  @media (max-width: 770px) {
    padding: 1.25rem 1.5rem;
  }
`;

export const WeekTopicTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
  font: var(--body-m-xl);
  color: var(--text-primary-default);

  @media (max-width: 770px) {
    font: var(--body-m-l);
  }
`;

export const WeekTopicDate = styled.div`
    display: flex
    justify-content: flex-start;
    font: var(--body-r-m);
    color: var(--text-secondary);
    margin-bottom: 1.5rem;

  @media (max-width: 770px) {
    font: var(--body-r-s);
  }
`;

export const WeekTopicContent = styled.div`
  display: flex;
  justify-content: flex-start;
  font: var(--body-r-m);
  color: var(--text-primary-default);
  margin-bottom: 0.5rem;
`;

export const FileUpload = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 0.25rem;
  padding: 0.5rem 0.625rem;
  gap: 0.375rem;
  background-color: var(--surpace-tertiary);
  font: var(--body-r-s);
  color: var(--text-secondary);
  width: fit-content;
  cursor: pointer;
  margin-bottom: 1.5rem;

  @media (max-width: 770px) {
    margin-bottom: 1rem;
  }
`;

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20%;
  justify-content: space-between;
`;

export const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--pink-200);
  padding: 0.625rem;
  font: var(--body-s-m);
  color: var(--text-tertiary);
  border-radius: 0.25rem;
  flex: 1;
`;

export const TimerBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: var(--pink-200);
  padding: 0.625rem;
  font: var(--body-s-m);
  color: var(--text-tertiary);
  border-radius: 0.25rem;
  width: 5rem;
  cursor: pointer;
`;

export const WeekCommentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 1.5rem;
  gap: 1rem;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const ReplyWrapper = styled.div`
  display: flex;
  margin-left: 3.75rem;
`;

export const WeekCommentInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.5rem;
`;

export const FileIconLabel = styled.label`
  display: flex;
  cursor: pointer;
`;

export const FileIconInput = styled.input`
  display: none;
`;

export const FileIconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.25rem;
  height: 3.25rem;
  background-color: var(--surpace-primary);
  border-radius: 0.25rem;
  cursor: pointer;

  img {
    width: 1rem;
    height: 1rem;
  }
`;

export const WeekCommentInput = styled.input`
  background-color: var(--surpace-tertiary);
  font: var(--body-r-m);
  border-radius: 0.25rem;
  padding: 1rem 1.25rem;
  color: var(--text-primary-default);
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  ::placeholder {
    color: var(--text-secondary);
  }
`;

export const FinishBtn = styled.div`
  display: flex;
  flex-shrink: 0;
  padding: 1rem 1.25rem;
  background-color: var(--surpace-primary);
  width: fit-content;
  border-radius: 0.25rem;
  font: var(--body-r-m);
  color: var(--text-primary-default);
  cursor: pointer;
`;

// ChallengeVSMatchContentInvite
export const PlusIconWrapper = styled.div<{ $height: number | null }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  height: ${(props) => (props.$height ? `${props.$height}px` : "")};
  font: var(--body-m-xl);
  color: var(--text-primary-default);
  cursor: pointer;
`;

export const PlusIcon = styled.img`
  width: 3rem;
`;

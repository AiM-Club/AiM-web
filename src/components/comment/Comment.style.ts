import styled from "styled-components";
export const CommentItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  width: 100%;
`;

export const CommentProfileWrapper = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const CommentContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`;

export const CommentHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.375rem;
`;

export const CommentUserName = styled.div`
  display: flex;
  font: var(--body-s-l);
  color: var(--text-primary-default);
`;

export const CommentUserGrade = styled.img`
  width: 1.75rem;
  height: 1.75rem;
`;

export const CommentText = styled.div`
  display: flex;
  font: var(--body-r-l);
  color: var(--text-primary-default);
  word-break: break-word;
`;

export const CommentBottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font: var(--caption-m);
  gap: 0.75rem;
  color: var(--text-secondary);
`;

export const CommentTime = styled.div`
  display: flex;
`;

export const CommentReplyBtn = styled.div`
  display: flex;
  cursor: pointer;
`;

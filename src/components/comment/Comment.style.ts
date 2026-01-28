import styled from "styled-components";
export const CommentItem = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  width: 100%;
  border: ${props => props.$isSelected ? '1px solid var(--pink-800)' : 'none'};
  border-radius: 0.5rem;
  padding: ${props => props.$isSelected ? '0.5rem' : '0'};
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
  
  @media (max-width: 560px){
    gap: 0.25rem;
  }
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
  
  @media (max-width: 560px){
    font: var(--body-r-m);
  }
`;

export const CommentFile = styled.div`
  display: flex;
  font: var(--body-r-xs);
  color: var(--text-secondary);
  word-break: break-word;
  padding: 0.5rem 0.625rem;
  border-radius: 6.25rem;
  background-color: var(--surpace-tertiary);
  width: fit-content;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const CommentBottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font: var(--body-r-m);
  gap: 0.75rem;
  color: var(--text-secondary);
  
  @media (max-width: 560px){
    font: var(--body-r-s);
  }
`;

export const CommentTime = styled.div`
  display: flex;
`;

export const CommentReplyBtn = styled.div`
  display: flex;
  cursor: pointer;
`;

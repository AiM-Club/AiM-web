import styled from "styled-components";

export const RecruitDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 10%;
  margin-top: 3rem;
  
  @media (max-width: 560px){
    padding: 0 1.5rem;
    gap: 1.5rem;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
`;

export const BtnWrapper = styled.div`
  @media (max-width: 540px){
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (max-width: 560px){
    gap: 0.5rem;
  }
`;

export const FileNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const FileName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--surpace-tertiary);
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
`;

export const CommentWholeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 3.25rem;
  margin-bottom: 3.25rem;
  
  @media (max-width: 560px){
    margin: 1.5rem 0;
    gap: 1.5rem;
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--surpace-primary);
  padding: 1rem 3.75rem;
  border-radius: 0.5rem;
  gap: 1rem;
  
  @media (max-width: 560px){
    border-radius: 0.25rem;
    padding: 1rem 2rem;
  }
`;

export const CommentFilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const InputWrapperContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  border-radius: 0.25rem;
`;

export const FileAddBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 6rem;
  gap: 0.5rem;
  background-color: var(--surpace-primary);
  border-radius: 0.25rem;
  cursor: pointer;
  font: var(--body-r-xl);
  
  @media (max-width: 560px){
    width: 3.75rem;
  }
`;

export const FileImg = styled.img`
  width: 1rem;
  height: 1rem;
  
  @media (max-width: 560px){
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 1rem 1.25rem;
  border-radius: 0.25rem;
  min-width: 2rem;
  border: none;
  outline: none;
  font: var(--body-r-xl);
  background-color: var(--surpace-tertiary);
  color: var(--text-primary-default);
  &::placeholder {
    color: var(--text-secondary);
  }
`;
export const SubmitBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  border-radius: 0.25rem;
  width: 6rem;
  font: var(--body-r-xl);
  background-color: var(--surpace-primary);
  color: var(--text-primary-default);
  
  @media (max-width: 560px){
    width: 3.75rem;
  }
`;

export const SendImg = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

export const InputOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: color-mix(in oklch, var(--surpace-secondary), transparent 20%);
  border-radius: 0.25rem;
  border: 1.5px solid var(--gray-600);
  font: var(--body-r-xl);
  color: var(--text-primary-default);
  z-index: 10;
`;

export const LockImg = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const FileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

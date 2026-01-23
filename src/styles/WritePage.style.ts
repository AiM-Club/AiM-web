import styled from "styled-components";

export const RecruitWriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
`;

export const TopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 6.25rem 0 1rem 10%;
`;

export const WriteContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
  padding: 0 10%;
`;

export const Text = styled.p`
  font: var(--subtitle-m-l);
  color: var(--text-secondary);
`;

export const TextArea = styled.textarea`
  height: 6.375rem;
  background-color: var(--surpace-primary);
  outline: none;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  font: var(--body-m-l);
  color: var(--text-primary-default);

  &::-webkit-scrollbar {
    display: none;
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

export const WriteFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2.5rem;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const Radio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

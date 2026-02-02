import styled from "styled-components";

export const RecruitWriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
  @media(max-width: 500px){
    gap: 1.5rem;
  }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  margin: 4rem 0 3rem 0;
  @media(max-width: 500px){
    margin: 1.5rem 0;
  }
`;

export const TopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 6.25rem 0 1rem 10%;
  @media(max-width: 1024px){
    padding: 1.5rem 0 0 10%;
  }
  @media(max-width: 500px){
    padding: 1.5rem 0 0 5%;
  }
`;

export const WriteContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
  padding: 0 10%;
  @media(max-width: 500px){
    gap: 1.5rem;
    padding: 0 5%;
  }
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
  @media(max-width: 500px){
    gap: 0.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 1.5rem;
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

export const SubmitBtnWrapper = styled.div`
  margin-left: 1rem;
`;
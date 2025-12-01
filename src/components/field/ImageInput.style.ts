import styled from "styled-components";

export const ImageInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const LabelText = styled.label`
  color: var(--text-primary-default);
  font: var(--body-m-xl);
`;

export const ImageInputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--surpace-primary);
  font: var(--body-r-l);
  color: var(--text-secondary);
  border-radius: 0.25rem;
  cursor: pointer;
  width: 11.25rem;
  height: 11.25rem;
  position: relative;
  overflow: hidden;
`;

export const ImageIcon = styled.img`
  width: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const PreviewImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.25rem;
`;

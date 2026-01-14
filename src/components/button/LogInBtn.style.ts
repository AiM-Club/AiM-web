import styled from "styled-components";

export const FieldBtnWrapper = styled.div`
  position: relative;
  width: 11.125rem;
  height: 3.5rem;
  display: flex;
  overflow: hidden;
  cursor: pointer;
`;

export const NicknameSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
  background: linear-gradient(to right, var(--background-primary), var(--surpace-primary));
  color: var(--text-primary-default);
  font: var(--body-m-xl);
  padding: 0 1rem;
`;

export const ProfileImageSection = styled.div`
  height: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-200);
  padding: 0.5rem;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.25rem;
`;

export const AccentLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, transparent 0%, var(--pink-500) 30%, var(--pink-500) 100%);
`;

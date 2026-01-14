import styled from "styled-components";
import XIcon from "@/assets/X.png";

export const FilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const File = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  height: 3.25rem;
  border-radius: 0.25rem;
  background-color: var(--surpace-primary);
  font: var(--body-r-m);
  color: var(--text-primary-default);
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const FileIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const FileDeleteBtn = styled.button`
  background: url(${XIcon}) no-repeat center center;
  background-size: 1rem 1rem;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

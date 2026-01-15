import styled from "styled-components";
import XIcon from "@/assets/X.png";

export const FileAddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const FileAddBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1.5rem;
  height: 3.25rem;
  position: relative;
  border-radius: 0.25rem;
  background-color: var(--surpace-primary);
  font: var(--body-r-m);
  color: var(--text-secondary);
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileAddBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
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

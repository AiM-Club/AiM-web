import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const DialogOverlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
  z-index: 1000;
`;

export const DialogContent = styled(Dialog.Content)`
  background-color: var(--surpace-primary);
  border-radius:0.25rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 20rem;
  max-width: 90vw;
  max-height: 85vh;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1001;

  &:focus {
    outline: none;
  }
`;

export const ContentBody = styled.div`
  padding: 1rem 1.2rem 1rem 1.3rem;
  overflow-y: auto;
  max-height: calc(85vh - 4.5rem);
`;

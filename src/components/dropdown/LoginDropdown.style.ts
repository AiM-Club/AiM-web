import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Content = styled(DropdownMenu.Content)`
  position: relative;
  min-width: 14rem;
  padding: 1rem 2rem;
  background-color: var(--surpace-primary, #2a2a2a);
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  overflow: visible;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &::before {
    content: "";
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid var(--surpace-primary, #2a2a2a);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 0;
`;

export const ProfileImageWrapper = styled.div`
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserText = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const DisplayName = styled.span`
  color: var(--text-primary-default);
  font: var(--title-h-s);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const LoginId = styled.span`
  color: var(--text-secondary);
  font: var(--body-r-l);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: var(--gray-600);
  margin: 0;
`;

export const LogoutItem = styled(DropdownMenu.Item)`
  padding: 0.75rem 1rem;
  color: var(--text-primary-default);
  font: var(--subtitle-m-m);
  cursor: pointer;
  outline: none;
  border: none;
  width: 100%;
  text-align: center;
  background: none;

  &:hover,
  &:focus {
    background-color: var(--surpace-tertiary);
  }
`;

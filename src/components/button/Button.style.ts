// Button.style.ts
import styled, { css } from "styled-components";


export type ButtonVariant =
  | "primary"

export interface StyledButtonProps {
  variant?: ButtonVariant;
  isClicked?: boolean;
}

export const variantStyles = {
    primary: css`
    width: 9.125rem;
    height: 3.563rem;
    color: var(--color-white);
    `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  outline: none;
  border: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${({ variant = "primary" }) => variantStyles[variant]}

`;

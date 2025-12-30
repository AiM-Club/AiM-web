import MainBtn from "@/assets/LoginBtn.png";

// Button.style.ts
import styled, { css } from "styled-components";


export type ButtonVariant =
  | "primary"
  | "fixed"
  | "secondary";

export interface StyledButtonProps {
  variant?: ButtonVariant;
  $isClicked?: boolean;
  bgImg?: string;
}

export const variantStyles = {
  primary: css`
  
  `,
  fixed: css`
    position: fixed;
    z-index: 999;
    bottom: 8%;
    right: 10%;
  `,
  secondary: css`
    height: 3rem;
    width: 5.688rem;
    border-radius: 0.25rem;
    background-image: none;
    background-color: var(--surpace-primary);
    color: var(--text-primary-default);
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  outline: none;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 9.125rem;
  height: 3.563rem;
  background-image: url(${MainBtn});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: var(--color-white);
  font: var(--body-m-xl);

  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${({ variant = "primary" }) => variantStyles[variant]}

`;

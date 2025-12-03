import MainBtn from "@/assets/LoginBtn.png";

// Button.style.ts
import styled, { css } from "styled-components";


export type ButtonVariant =
  | "primary"

export interface StyledButtonProps {
  variant?: ButtonVariant;
  $isClicked?: boolean;
  bgImg?: string;
}

export const variantStyles = {
    primary: css`
    width: 9.125rem;
    height: 3.563rem;
    color: var(--color-white);
    font: var(--body-m-xl);
    position: relative;

    background-image: url(${MainBtn});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  outline: none;
  border: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${({ variant = "primary" }) => variantStyles[variant]}

`;

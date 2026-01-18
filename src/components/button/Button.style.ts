import MainBtn from "@/assets/LoginBtn.png";
import GreenBtn from "@/assets/GreenBtn.png";
import GrayBtn from "@/assets/GrayBtn.png";
// Button.style.ts
import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "fixed" | "secondary";

export type ButtonSize = "medium" | "large";

export type ButtonColor = "pink" | "green" | "gray";

export interface StyledButtonProps {
  $variant?: ButtonVariant;
  $size?: ButtonSize;
  $color?: ButtonColor;
  $size?: "medium" | "large" | "req";
  $isClicked?: boolean;
  $bgImg?: string;
}

export const variantStyles = {
  primary: css``,
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

export const sizeStyles = {
  medium: css`
    width: 9.125rem;
    height: 3.563rem;
    font: var(--body-m-xl);
  `,
  large: css`
    width: 14.5rem;
    height: 3.375rem;
    font: var(--body-m-l);
  `,
  req: css`
    width: 10.5rem;
    height: 3.563rem;
    font: var(--body-m-xl);
  `,
};

export const colorStyles = {
  pink: css`
    background-image: url(${MainBtn});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `,
  green: css`
    background-image: url(${GreenBtn});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: var(--text-tertiary);
  `,
  gray: css`
    background-image: url(${GrayBtn});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  outline: none;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);

  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${({ $variant = "primary" }) => variantStyles[$variant]}
  ${({ $size = "medium" }) => sizeStyles[$size]}
  ${({ $color = "pink" }) => colorStyles[$color]}
`;

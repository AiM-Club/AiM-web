import React from "react";
import { StyledButton } from "./Button.style";
import type {
  StyledButtonProps,
} from "./Button.style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  StyledButtonProps { }

const Button = ({
  $variant = "primary",
  $size = "medium",
  $color = "pink",
  $isClicked = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      $variant={$variant}
      $size={$size}
      $color={$color}
      $isClicked={$isClicked}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
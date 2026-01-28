import * as S from "./Select.style";
import * as SelectMenu from "@radix-ui/react-select";
import ArrowDown from "@/assets/ArrowDown.svg";
import ArrowUp from "@/assets/ArrowUp.svg";
import { useState } from "react";


interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  placeholder: string;
  options?: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  width?: number | string;
}


const Select = ({ placeholder, options, value, onValueChange, width = 0 }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = () => {
    setIsOpen(!isOpen);
  }

  return (
    <SelectMenu.Root value={value} onValueChange={onValueChange}>
      <S.Trigger onClick={() => handleOpenChange()} $width={width}>
        <SelectMenu.Value placeholder={placeholder} />
        <SelectMenu.Icon asChild>
          <S.IconWrapper>
            {isOpen ? (
              <S.ArrowBtn src={ArrowUp} />
            ) : (
              <S.ArrowBtn src={ArrowDown} />
            )}
          </S.IconWrapper>
        </SelectMenu.Icon>
      </S.Trigger>
      <SelectMenu.Portal>
        <S.Content position="popper" align="start" sideOffset={4} $width={width}>
          <S.Viewport>
            {options?.map((option, index) => (
              <S.Item key={index} value={option.value} onClick={() => handleOpenChange()} $width={width}>
                <SelectMenu.ItemText>{option.label}</SelectMenu.ItemText>
              </S.Item>
            ))}
          </S.Viewport>
        </S.Content>
      </SelectMenu.Portal>
    </SelectMenu.Root>
  )
}

export default Select;
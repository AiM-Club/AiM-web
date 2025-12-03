import * as S from "./Select.style";
import * as SelectMenu from "@radix-ui/react-select";
import { IoIosArrowDown } from "react-icons/io";

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    placeholder: string;
    options?: SelectOption[];
    value?: string;
    onValueChange?: (value: string) => void;
}

const defaultOptions: SelectOption[] = [
    { value: "newest", label: "최신순" },
    { value: "oldest", label: "오래된순" },
    { value: "likes", label: "좋아요순" },
    { value: "alphabetical", label: "가나다순" },
];

const Select = ({ placeholder, options = defaultOptions, value, onValueChange }: SelectProps) => {
    return (
        <SelectMenu.Root value={value} onValueChange={onValueChange}>
            <S.Trigger>
                <SelectMenu.Value placeholder={placeholder} />
                <SelectMenu.Icon asChild>
                    <S.IconWrapper>
                        <IoIosArrowDown />
                    </S.IconWrapper>
                </SelectMenu.Icon>
            </S.Trigger>
            <SelectMenu.Portal>
                <S.Content position="popper" align="start" sideOffset={4}>
                    <S.Viewport>
                        {options.map((option) => (
                            <S.Item key={option.value} value={option.value}>
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
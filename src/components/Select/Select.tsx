import * as S from "./Select.style";
import * as SelectMenu from "@radix-ui/react-select";

interface SelectProps{
    placeholder: string;
}

const Select = ({placeholder}:SelectProps) => {
    return(
        <SelectMenu.Root>
            <SelectMenu.Trigger>
                <SelectMenu.Value placeholder={placeholder}/>
                <SelectMenu.Icon></SelectMenu.Icon>
            </SelectMenu.Trigger>
            <SelectMenu.Portal>
                <SelectMenu.Content>

                </SelectMenu.Content>
            </SelectMenu.Portal>
        </SelectMenu.Root>
    )
}

export default Select;
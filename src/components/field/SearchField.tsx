import * as S from "./SearchField.style";
import SearchInput from "./SearchInput";
import Select from "../Select/Select";
    
const SearchField = () => {
    return (
        <S.SearchFieldWrapper>
            <SearchInput />
            <Select placeholder="정렬" />
        </S.SearchFieldWrapper>
    )
}

export default SearchField;


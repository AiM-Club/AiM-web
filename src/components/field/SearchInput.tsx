import * as S from "./SearchInput.style";
import { FiSearch } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const SearchInput = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newParams = new URLSearchParams(searchParams);
        if (keyword.trim()) {
            newParams.set("keyword", keyword.trim());
            newParams.set("page", "1");
        } else {
            newParams.delete("keyword");
        }
        setSearchParams(newParams);
    };

    return (
        <S.SearchInputWrapper onSubmit={handleSubmit}>
            <S.SearchIcon>
                <FiSearch size={24} />
            </S.SearchIcon>
            <S.InputField
                type="text"
                placeholder="검색어를 입력해 주세요"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
        </S.SearchInputWrapper>
    );
};

export default SearchInput;
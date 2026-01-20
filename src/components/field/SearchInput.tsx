import * as S from "./SearchInput.style";
import { FiSearch } from "react-icons/fi";
import { useRef, useEffect } from "react";

interface SearchInputProps {
    onKeywordChange?: (keyword: string) => void;
}

const SearchInput = ({ onKeywordChange }: SearchInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleChange = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            const keyword = inputRef.current?.value.trim() || "";
            onKeywordChange?.(keyword);
        }, 1000);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        const keyword = inputRef.current?.value.trim() || "";
        onKeywordChange?.(keyword);
    };

    return (
        <S.SearchInputWrapper onSubmit={handleSubmit}>
            <S.SearchIcon>
                <FiSearch size={24} />
            </S.SearchIcon>
            <S.InputField
                ref={inputRef}
                type="text"
                placeholder="검색어를 입력해 주세요"
                onChange={handleChange}
            />
        </S.SearchInputWrapper>
    );
};

export default SearchInput;
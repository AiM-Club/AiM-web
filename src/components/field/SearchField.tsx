import * as S from "./SearchField.style";
import SearchInput from "./SearchInput";
import Select from "../Select/Select";
import CategoryBtn from "../button/CategoryBtn";
import { useState, useEffect } from "react";

interface CategoryOption {
  value: string;
  label: string;
}

interface SearchFieldProps {
  categories?: CategoryOption[];
  defaultCategory?: string;
  onCategoryChange?: (category: string) => void;
  onKeywordChange?: (keyword: string) => void;
  onSortChange?: (sort: string) => void;
  sorts?: CategoryOption[];
}

const SearchField = ({
  categories,
  defaultCategory,
  onCategoryChange,
  onKeywordChange,
  onSortChange,
  sorts
}: SearchFieldProps) => {
  const firstCategoryValue = categories?.[0]?.value || "";
  const initialCategory = defaultCategory || firstCategoryValue;
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory
  );

  // 초기 마운트 시 기본값을 부모 컴포넌트에 알림
  useEffect(() => {
    if (initialCategory && !defaultCategory) {
      onCategoryChange?.(initialCategory);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCategoryClick = (value: string) => {
    const newCategory = selectedCategory === value ? firstCategoryValue : value;
    setSelectedCategory(newCategory);
    onCategoryChange?.(newCategory);
  };

  return (
    <S.SearchFieldContainer>
      {categories && (
        <S.CategoryButtonWrapper>
          {categories.map((cat) => (
            <CategoryBtn
              key={cat.value}
              label={cat.label}
              isActive={selectedCategory === cat.value}
              onClick={() => handleCategoryClick(cat.value)}
            />
          ))}
        </S.CategoryButtonWrapper>
      )}
      <S.SearchFieldWrapper>
        <SearchInput onKeywordChange={onKeywordChange} />
        <Select placeholder="정렬" options={sorts} onValueChange={onSortChange} />
      </S.SearchFieldWrapper>
    </S.SearchFieldContainer>
  )
}

export default SearchField;


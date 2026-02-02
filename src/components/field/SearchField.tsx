import * as S from "./SearchField.style";
import SearchInput from "./SearchInput";
import Select from "../Select/Select";
import CategoryBtn from "../button/CategoryBtn";
import { useState } from "react";

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
  const [selectedCategory, setSelectedCategory] = useState<string>(
    defaultCategory || ""
  );

  const handleCategoryClick = (value: string) => {
    const newCategory = selectedCategory === value ? "" : value;
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


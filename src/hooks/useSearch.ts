import { useState, useCallback } from "react";

interface UseSearchOptions {
  initialCategory?: string;
  initialKeyword?: string;
  initialSort?: string;
  onSearchChange?: () => void; // 검색 조건 변경 시 호출될 콜백 (페이지 리셋 등)
}

interface UseSearchReturn {
  category: string;
  keyword: string;
  sort: string;
  setCategory: (category: string) => void;
  setKeyword: (keyword: string) => void;
  setSort: (sort: string) => void;
  handleCategoryChange: (category: string) => void;
  handleKeywordChange: (keyword: string) => void;
  handleSortChange: (sort: string) => void;
}

const useSearch = (options: UseSearchOptions = {}): UseSearchReturn => {
  const {
    initialCategory = "--",
    initialKeyword = "",
    initialSort = "--",
    onSearchChange,
  } = options;

  const [category, setCategory] = useState<string>(initialCategory);
  const [keyword, setKeyword] = useState<string>(initialKeyword);
  const [sort, setSort] = useState<string>(initialSort);

  const handleCategoryChange = useCallback(
    (newCategory: string) => {
      setCategory(newCategory || "--");
      onSearchChange?.();
    },
    [onSearchChange]
  );

  const handleKeywordChange = useCallback(
    (newKeyword: string) => {
      setKeyword(newKeyword);
      onSearchChange?.();
    },
    [onSearchChange]
  );

  const handleSortChange = useCallback(
    (newSort: string) => {
      setSort(newSort);
      onSearchChange?.();
    },
    [onSearchChange]
  );

  return {
    category,
    keyword,
    sort,
    setCategory,
    setKeyword,
    setSort,
    handleCategoryChange,
    handleKeywordChange,
    handleSortChange,
  };
};

export default useSearch;


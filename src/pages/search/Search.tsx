import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/search/Search.style";
import { useSearchParams } from "react-router-dom";
import titleUnion from "@/assets/TitleUnion.svg";
import CardBoard from "@/components/board/CardBoard";
import SearchField from "@/components/field/SearchField";
import { useGetAllSearch } from "@/api/posts";
import usePagination from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { useEffect } from "react";

const Search = () => {
  const [searchParams] = useSearchParams();
  const urlKeyword = searchParams.get("keyword") || "";
  const { currentPage, totalPage, setTotalPage, handlePageChange } = usePagination();
  const { keyword, sort, setKeyword, handleKeywordChange, handleSortChange } = useSearch({
    initialKeyword: urlKeyword,
    onSearchChange: () => handlePageChange(1),
  });
  const { data: searchData, isLoading } = useGetAllSearch({ keyword, sort, page: currentPage - 1, size: 16 });

  // URL keyword가 바뀌면(뒤로가기 등) 검색 상태 최신화
  useEffect(() => {
    setKeyword(urlKeyword);
  }, [urlKeyword, setKeyword]);

  useEffect(() => {
    setTotalPage(searchData?.data.page.totalPages ?? 0);
  }, [searchData, setTotalPage]);

  return (
    <DefaultLayout>
      <S.SearchWrapper>
        <S.SearchTopic>
          <img src={titleUnion} />
          {keyword ? `'${keyword}' 검색 결과` : "전체 검색 결과"}
        </S.SearchTopic>
        <S.ResultWrapper>
          <SearchField 
            sorts={[
              { value: "LATEST", label: "최신순" },
              { value: "OLDEST", label: "오래된순" },
              { value: "LIKED", label: "좋아요순" },
              { value: "TITLE", label: "가나다순" },
            ]}
            onKeywordChange={handleKeywordChange}
            onSortChange={handleSortChange}
          />
          <CardBoard data={searchData?.data.content ?? []} currentPage={currentPage} totalPage={totalPage} handlePageChange={handlePageChange} isLoading={isLoading} type="all" />
        </S.ResultWrapper>
      </S.SearchWrapper>
    </DefaultLayout>
  )
}

export default Search;

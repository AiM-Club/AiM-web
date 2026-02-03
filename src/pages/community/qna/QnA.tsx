import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/community/qna/QnA.style";
import CardBoard from "@/components/board/CardBoard";
import SearchField from "@/components/field/SearchField";
import Button from "@/components/button/Button";
import { PageEndPoints } from "@/constants/endpoints";
import { useNavigate } from "react-router-dom";
import usePagination from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { useEffect } from "react";
import { useGetQna } from "@/api/posts";

const QnA = () => {
  const navigate = useNavigate();
  const { currentPage, totalPage, setTotalPage, handlePageChange } = usePagination();
  const { category, keyword, sort, handleCategoryChange, handleKeywordChange, handleSortChange } = useSearch({
    onSearchChange: () => handlePageChange(1),
  });
  const { data: qnaList, isLoading } = useGetQna({ category: category, sort: sort, page: currentPage - 1, size: 8, keyword });

  useEffect(() => {
    setTotalPage(qnaList?.data.page.totalPages || 1);
  }, [qnaList?.data.page.totalPages, setTotalPage]);

  return (
    <DefaultLayout>
      <S.QnAWrapper>
        <PageTopic text="Q&A" size="l" />
        <S.ContentWrapper>
          <SearchField
            categories={[
              { value: "ALL", label: "ALL" },
              { value: "SOLO", label: "SOLO" },
              { value: "VS", label: "VS 대결" }
            ]}
            sorts={[
              { value: "LATEST", label: "최신순" },
              { value: "OLDEST", label: "오래된순" },
              { value: "LIKED", label: "좋아요순" },
              { value: "TITLE", label: "가나다순" },
            ]}
            onCategoryChange={handleCategoryChange}
            onKeywordChange={handleKeywordChange}
            onSortChange={handleSortChange}
          />
          <CardBoard data={qnaList?.data.content || []} currentPage={currentPage} totalPage={totalPage} handlePageChange={handlePageChange} isLoading={isLoading} type="qna" />
        </S.ContentWrapper>
      </S.QnAWrapper>
      <Button $variant="fixed" $color="green" onClick={() => navigate(PageEndPoints.QNA_WRITE)}>작성</Button>
    </DefaultLayout>
  )
}

export default QnA;
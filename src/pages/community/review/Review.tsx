import CardBoard from "@/components/board/CardBoard";
import SearchField from "@/components/field/SearchField";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/community/review/Review.style";
import Button from "@/components/button/Button";
import { PageEndPoints } from "@/constants/endpoints";
import { useNavigate } from "react-router-dom";
import usePagination from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { useGetReview } from "@/api/posts";
import { useEffect } from "react";

const Review = () => {
  const navigate = useNavigate();
  const { currentPage, totalPage, setTotalPage, handlePageChange } = usePagination();
  const { category, keyword, sort, handleCategoryChange, handleKeywordChange, handleSortChange } = useSearch({
    onSearchChange: () => handlePageChange(1),
  });
  const { data: reviewList, isLoading } = useGetReview({ filter: category, sort: sort, page: currentPage - 1, size: 8, keyword });

  useEffect(() => {
    setTotalPage(reviewList?.data.page.totalPages || 1);
  }, [reviewList?.data.page.totalPages, setTotalPage]);

  return (
    <DefaultLayout>
      <S.ReviewWrapper>
        <PageTopic text="후기" size="l" />
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
          <CardBoard data={reviewList?.data.content || []} currentPage={currentPage} totalPage={totalPage} handlePageChange={handlePageChange} isLoading={isLoading} type="review" />
        </S.ContentWrapper>
      </S.ReviewWrapper>
      <Button $variant="fixed" $color="green" onClick={() => navigate(PageEndPoints.REVIEW_WRITE)}>작성</Button>
    </DefaultLayout>
  )
}

export default Review;
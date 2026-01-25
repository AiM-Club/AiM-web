import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeRecruit/ChallengeRecruit.style";
import CardBoard from "@/components/board/CardBoard";
import Button from "@/components/button/Button";
import { PageTopic } from "@/components/text/PageTopic";
import SearchField from "@/components/field/SearchField";
import { PageEndPoints } from "@/constants/endpoints";
import { useNavigate } from "react-router-dom";
import { useGetChallengeRecruit } from "@/api/vsRecruit";
import useSearch from "@/hooks/useSearch";
import usePagination from "@/hooks/usePagination";
import { useEffect } from "react";

const ChallengeRecruit = () => {
  const navigate = useNavigate();
  const { currentPage, totalPage, setTotalPage, handlePageChange } = usePagination();
  const { keyword, sort, handleKeywordChange, handleSortChange } = useSearch({
    onSearchChange: () => handlePageChange(1),
  });
  const { data: challengeRecruitList, isLoading } = useGetChallengeRecruit({ sort: sort, page: currentPage - 1, size: 16, keyword });

  useEffect(() => {
    setTotalPage(challengeRecruitList?.data.page.totalPages || 1);
  }, [challengeRecruitList?.data.page.totalPages, setTotalPage]);

  return (
    <DefaultLayout>
      <S.ChallengeRecruitWrapper>
        <PageTopic text="VS 모집글" size="l" />
        <S.ContentWrapper>
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
          <CardBoard data={challengeRecruitList?.data.content || []} currentPage={currentPage} totalPage={totalPage} handlePageChange={handlePageChange} isLoading={isLoading} type="recruit" />
        </S.ContentWrapper>
      </S.ChallengeRecruitWrapper>
      <Button $variant="fixed" $color="green" onClick={() => navigate(PageEndPoints.CHALLENGE_RECRUIT_WRITE)}>작성</Button>
    </DefaultLayout>
  )
}

export default ChallengeRecruit;
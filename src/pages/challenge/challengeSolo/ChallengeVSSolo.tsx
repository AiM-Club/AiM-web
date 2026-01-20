import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeSolo/ChallengeVSSolo.style";
import CardBoard from "@/components/board/CardBoard";
import { PageTopic } from "@/components/text/PageTopic";
import SearchField from "@/components/field/SearchField";
import Button from "@/components/button/Button";
import { useNavigate } from "react-router-dom";
import { PageEndPoints } from "@/constants/endpoints";
import { useAuthStore } from "@/stores/authStore";
import Lock from "@/assets/Lock.svg";
import { useGetChallengeSolo } from "@/api/challenge";
import usePagination from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { useEffect } from "react";

const ChallengeVSSolo = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { currentPage, totalPage, setTotalPage, handlePageChange } = usePagination();
  const { category, keyword, sort, handleCategoryChange, handleKeywordChange, handleSortChange } = useSearch({
    onSearchChange: () => handlePageChange(1),
  });
  const { data: challengeSoloList, isLoading } = useGetChallengeSolo({ filterType: category, sort: sort, page: currentPage - 1, size: 16, keyword });

  useEffect(() => {
    setTotalPage(challengeSoloList?.data.page.totalPages || 1);
  }, [challengeSoloList?.data.page.totalPages, setTotalPage]);

  return (
    <DefaultLayout>
      <S.ChallengeVSMainWrapper>
        <PageTopic text="SOLO 챌린지" size="l" />
        {user ? (
          <S.ContentWrapper>
            <SearchField
              categories={[
                { value: "IN_PROGRESS", label: "진행 중" },
                { value: "COMPLETE", label: "진행 완료" }
              ]}
              sorts={[
                { value: "LATEST", label: "최신순" },
                { value: "OLDEST", label: "오래된순" },
                { value: "TITLE", label: "가나다순" },
              ]}
              onCategoryChange={handleCategoryChange}
              onKeywordChange={handleKeywordChange}
              onSortChange={handleSortChange}
            />
            <CardBoard data={challengeSoloList?.data.content || []} currentPage={currentPage} totalPage={totalPage} handlePageChange={handlePageChange} isLoading={isLoading} />
          </S.ContentWrapper>
        ) : (
          <S.EmptyState>
            <S.LockImage src={Lock} />
            로그인 후 이용 가능합니다
          </S.EmptyState>
        )}
      </S.ChallengeVSMainWrapper>
      <Button $variant="fixed" $color="green" onClick={() => navigate(PageEndPoints.CHALLENGE_CREATE)}>작성</Button>
    </DefaultLayout>
  )
}

export default ChallengeVSSolo;
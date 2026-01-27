import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeVS/ChallengeVS.style";
import CardBoard from "@/components/board/CardBoard";
import Button from "@/components/button/Button";
import { PageTopic } from "@/components/text/PageTopic";
import SearchField from "@/components/field/SearchField";
import { useNavigate } from "react-router-dom";
import { PageEndPoints } from "@/constants/endpoints";
import { useAuthStore } from "@/stores/authStore";
import Lock from "@/assets/Lock.svg";
import { useEffect } from "react";
import usePagination from "@/hooks/usePagination";
import { useGetChallengeVS } from "@/api/challenge";
import useSearch from "@/hooks/useSearch";
import ChallengeVSInvite from "./ChallengeVSInvite";

const ChallengeVS = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { currentPage, totalPage, setTotalPage, handlePageChange } = usePagination();
  const { category, keyword, sort, handleCategoryChange, handleKeywordChange, handleSortChange } = useSearch({
    onSearchChange: () => handlePageChange(1),
  });
  const { data: challengeVSList, isLoading } = useGetChallengeVS({ filterType: category, sort: sort, page: currentPage - 1, size: 16, keyword });

  useEffect(() => {
    setTotalPage(challengeVSList?.data.page.totalPages || 1);
  }, [challengeVSList?.data.page.totalPages, setTotalPage]);


  return (
    <DefaultLayout>
      <S.ChallengeVSWrapper>
        <PageTopic text="VS 대결" size="l" />
        <S.ContentWrapper>
          <SearchField
            categories={[
              { value: "ALL", label: "ALL" },
              { value: "MY", label: "MY" },
              { value: "INVITATION", label: "VS 초대" }
            ]}
            sorts={[
              { value: "LATEST", label: "최신순" },
              { value: "OLDEST", label: "오래된순" },
              { value: "TITLE", label: "가나다순" },
              { value: "ONGOING", label: "진행중" },
              { value: "FINISHED", label: "진행완료" },

            ]}
            onCategoryChange={handleCategoryChange}
            onKeywordChange={handleKeywordChange}
            onSortChange={handleSortChange}
          />
          {!user && (category == "MY" || category == "INVITATION") ? (
            <S.EmptyState>
              <S.LockImage src={Lock} />
              로그인 후 이용 가능합니다
            </S.EmptyState>
          ) : (
            category == "INVITATION" ? (
              <ChallengeVSInvite />
            ) : (
              <CardBoard data={challengeVSList?.data.content || []} currentPage={currentPage} totalPage={totalPage} handlePageChange={handlePageChange} isLoading={isLoading} type="vs" />
            )
          )}
        </S.ContentWrapper>
      </S.ChallengeVSWrapper>
      {user ? <Button $variant="fixed" $color="green" onClick={() => navigate(PageEndPoints.CHALLENGE_CREATE)}>작성</Button> : null}
    </DefaultLayout>
  )
}

export default ChallengeVS;
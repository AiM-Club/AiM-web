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
import Loading from "@/components/loading/Loading";
import usePagination from "@/hooks/usePagination";
import { useEffect } from "react";

const ChallengeVSSolo = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { currentPage, totalPage, setTotalPage, handlePageChange } = usePagination();
  const { data: challengeSoloList, isLoading } = useGetChallengeSolo({ filterType: "ongoing", sort: "createdAt", page: currentPage - 1, size: 16, keyword: "" });

  useEffect(() => {
    setTotalPage(challengeSoloList?.data.page.totalPages || 1);
  }, [challengeSoloList?.data.page.totalPages]);

  if (isLoading) return <Loading />;
  console.log(challengeSoloList);
  return (
    <DefaultLayout>
      <S.ChallengeVSMainWrapper>
        <PageTopic text="SOLO 챌린지" size="l" />
        {user ? (
          <S.ContentWrapper>
            <SearchField
              categories={[
                { value: "ongoing", label: "진행 중" },
                { value: "completed", label: "진행 완료" }
              ]}
            />
            <CardBoard data={challengeSoloList?.data.content || []} currentPage={currentPage} totalPage={totalPage} handlePageChange={handlePageChange} />
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
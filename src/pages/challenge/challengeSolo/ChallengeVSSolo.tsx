import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeSolo/ChallengeVSSolo.style";
import CardBoard from "@/components/board/CardBoard";
import { searchVsData } from "@/pages/search/Constants";
import { PageTopic } from "@/components/text/PageTopic";
import SearchField from "@/components/field/SearchField";
import Button from "@/components/button/Button";
import { useNavigate } from "react-router-dom";
import { PageEndPoints } from "@/constants/endpoints";
import { useAuthStore } from "@/stores/authStore";
import Lock from "@/assets/Lock.svg";

const ChallengeVSSolo = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

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
            <CardBoard data={searchVsData} />
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
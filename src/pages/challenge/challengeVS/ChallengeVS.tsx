import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeVS/ChallengeVS.style";
import CardBoard from "@/components/board/CardBoard";
import { searchVsData } from "@/pages/search/Constants";
import Button from "@/components/button/Button";
import { PageTopic } from "@/components/text/PageTopic";
import SearchField from "@/components/field/SearchField";
import { useNavigate } from "react-router-dom";
import { PageEndPoints } from "@/constants/endpoints";
import { useAuthStore } from "@/stores/authStore";
import Lock from "@/assets/Lock.svg";
import { useState } from "react";

const ChallengeVS = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <DefaultLayout>
      <S.ChallengeVSWrapper>
        <PageTopic text="VS 대결" size="l" />
        <S.ContentWrapper>
          <SearchField
            categories={[
              { value: "all", label: "ALL" },
              { value: "my", label: "MY" },
              { value: "invitation", label: "VS 초대" }
            ]}
            onCategoryChange={setSelectedCategory}
          />
          {!user && (selectedCategory == "my" || selectedCategory == "invitation") ? (
            <S.EmptyState>
              <S.LockImage src={Lock} />
              로그인 후 이용 가능합니다
            </S.EmptyState>
          ) : (
            <CardBoard data={searchVsData} />
          )}
        </S.ContentWrapper>
      </S.ChallengeVSWrapper>
      {user ? <Button $variant="fixed" $color="green" onClick={() => navigate(PageEndPoints.CHALLENGE_CREATE)}>작성</Button> : null}
    </DefaultLayout>
  )
}

export default ChallengeVS;
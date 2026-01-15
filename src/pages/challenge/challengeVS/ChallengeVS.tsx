import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeVS/ChallengeVS.style";
import CardBoard from "@/components/board/CardBoard";
import { searchVsData } from "@/pages/search/Constants";
import Button from "@/components/button/Button";
import { PageTopic } from "@/components/text/PageTopic";
import SearchField from "@/components/field/SearchField";
import { useNavigate } from "react-router-dom";
import { PageEndPoints } from "@/constants/endpoints";

const ChallengeVS = () => {
  const navigate = useNavigate();
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
          />
          <CardBoard data={searchVsData} />
        </S.ContentWrapper>
      </S.ChallengeVSWrapper>
      <Button $variant="fixed" onClick={() => navigate(PageEndPoints.CHALLENGE_CREATE)}>작성</Button>
    </DefaultLayout>
  )
}

export default ChallengeVS;
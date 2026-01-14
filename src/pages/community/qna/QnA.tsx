import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/community/qna/QnA.style";
import { searchVsData } from "@/pages/search/Constants";
import CardBoard from "@/components/board/CardBoard";
import SearchField from "@/components/field/SearchField";
import Button from "@/components/button/Button";
import { PageEndPoints } from "@/constants/endpoints";
import { useNavigate } from "react-router-dom";

const QnA = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <S.QnAWrapper>
        <PageTopic text="Q&A" size="l" />
        <S.ContentWrapper>
          <SearchField
            categories={[
              { value: "all", label: "ALL" },
              { value: "solo", label: "SOLO" },
              { value: "vsBattle", label: "VS 대결" }
            ]}
          />
          <CardBoard data={searchVsData} />
        </S.ContentWrapper>
      </S.QnAWrapper>
      <Button $variant="fixed" onClick={() => navigate(PageEndPoints.QNA_WRITE)}>작성</Button>
    </DefaultLayout>
  )
}

export default QnA;
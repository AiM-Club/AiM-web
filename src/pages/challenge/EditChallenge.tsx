import Button from "@/components/button/Button";
import BannerTitleField from "@/components/field/BannerTitleField";
import WriteElementsSelect from "@/components/field/WriteElementsSelect";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/WritePage.style";
// import { useParams } from "react-router-dom";

const EditChallenge = () => {
  // const { id } = useParams<{ id: string }>();

  return (
    <DefaultLayout variant="home">
      <S.RecruitWriteWrapper>
        <S.TopicWrapper>
          <PageTopic text="챌린지 수정" size="l" />
        </S.TopicWrapper>
        <BannerTitleField />
        <S.WriteContentWrapper>
          <WriteElementsSelect mode={true} challenge={false} />
          <S.WriteFieldWrapper>
            <S.Text>AI 요청 사항</S.Text>
            <S.TextArea placeholder="요청사항을 작성하세요" />
          </S.WriteFieldWrapper>
          <S.ButtonWrapper>
            <Button>삭제</Button>
            <Button>완료</Button>
          </S.ButtonWrapper>
        </S.WriteContentWrapper>
      </S.RecruitWriteWrapper>
    </DefaultLayout>
  );
}

export default EditChallenge;
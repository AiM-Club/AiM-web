import Button from "@/components/button/Button";
import FileAddBtn from "@/components/button/FileAddBtn";
import BannerTitleField from "@/components/field/BannerTitleField";
import WriteElementsSelect from "@/components/field/WriteElementsSelect";
import WriteField from "@/components/field/WriteField";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/WritePage.style";

const ChallengeRecruitWrite = () => {

  return (
    <DefaultLayout variant="home">
      <S.RecruitWriteWrapper>
        <S.TopicWrapper>
          <PageTopic text="VS 모집글 작성" size="l" />
        </S.TopicWrapper>
        <BannerTitleField />
        <S.WriteContentWrapper>
          <WriteElementsSelect />
          <S.WriteFieldWrapper>
            <WriteField />
            <FileAddBtn />
          </S.WriteFieldWrapper>
          <S.ButtonWrapper>
            <Button>완료</Button>
          </S.ButtonWrapper>
        </S.WriteContentWrapper>
      </S.RecruitWriteWrapper>
    </DefaultLayout>
  );
}

export default ChallengeRecruitWrite;
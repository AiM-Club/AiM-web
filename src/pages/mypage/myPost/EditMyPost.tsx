import Button from "@/components/button/Button";
import FileAddBtn from "@/components/button/FileAddBtn";
import BannerTitleField from "@/components/field/BannerTitleField";
import WriteElementsSelect from "@/components/field/WriteElementsSelect";
import WriteField from "@/components/field/WriteField";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/WritePage.style";
// import { useParams } from "react-router-dom";

const EditMyPost = () => {
  // const { id } = useParams<{ id: string }>();

  return (
    <DefaultLayout variant="home">
      <S.RecruitWriteWrapper>
        <S.TopicWrapper>
          <PageTopic text="수정" size="l" />
        </S.TopicWrapper>
        <BannerTitleField />
        <S.WriteContentWrapper>
          <WriteElementsSelect mode={true} challenge={false} />
          <S.WriteFieldWrapper>
            <WriteField />
            <FileAddBtn />
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

export default EditMyPost;
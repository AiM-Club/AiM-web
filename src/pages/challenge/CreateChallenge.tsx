import Button from "@/components/button/Button";
import BannerTitleField from "@/components/field/BannerTitleField";
import WriteElementsSelect from "@/components/field/WriteElementsSelect";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/WritePage.style";
import Clicked from "@/assets/RadioClick.svg";
import NonClicked from "@/assets/RadioNonClick.svg";
import { useState } from "react";

const CreateChallenge = () => {
  const [isPublic, setIsPublic] = useState<boolean>(true);

  return (
    <DefaultLayout variant="home">
      <S.RecruitWriteWrapper>
        <S.TopicWrapper>
          <PageTopic text="챌린지 개설" size="l" />
        </S.TopicWrapper>
        <BannerTitleField />
        <S.WriteContentWrapper>
          <WriteElementsSelect mode={true} challenge={false} />
          <S.WriteFieldWrapper>
            <S.Text>AI 요청 사항</S.Text>
            <S.TextArea placeholder="요청사항을 작성하세요" />
          </S.WriteFieldWrapper>
          <S.ButtonWrapper>
            <S.RadioWrapper>
              <S.Radio onClick={() => setIsPublic(true)}>
                <img src={isPublic ? Clicked : NonClicked} alt="clicked" />
                <p>공개</p>
              </S.Radio>
              <S.Radio onClick={() => setIsPublic(false)}>
                <img src={isPublic ? NonClicked : Clicked} alt="non-clicked" />
                <p>비공개</p>
              </S.Radio>
            </S.RadioWrapper>
            <Button>완료</Button>
          </S.ButtonWrapper>
        </S.WriteContentWrapper>
      </S.RecruitWriteWrapper>
    </DefaultLayout>
  );
}

export default CreateChallenge;
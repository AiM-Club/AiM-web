import Button from "@/components/button/Button";
import BannerTitleField, { type BannerTitleFieldRef } from "@/components/field/BannerTitleField";
import WriteElementsSelect, { type WriteElementsSelectRef } from "@/components/field/WriteElementsSelect";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/WritePage.style";
import Clicked from "@/assets/RadioClick.svg";
import NonClicked from "@/assets/RadioNonClick.svg";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostChallenge } from "@/api/challenge";
import { PageEndPoints } from "@/constants/endpoints";
import { useNavigate } from "react-router-dom";
import { buildPath } from "@/utils/buildPath";

const createChallengeSchema = z.object({
  aiRequest: z.string().min(1, "요청사항을 입력해 주세요"),
  visibility: z.string().min(1, "공개 여부를 선택해 주세요"),
});

type CreateChallengeForm = z.infer<typeof createChallengeSchema>;

const CreateChallenge = () => {
  const navigate = useNavigate();
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const { mutate: createChallengeMutate } = usePostChallenge();
  const bannerTitleRef = useRef<BannerTitleFieldRef>(null);
  const writeElementsRef = useRef<WriteElementsSelectRef>(null);
  const {
    register,
    setValue,
    formState: { isValid },
  } = useForm<CreateChallengeForm>({
    resolver: zodResolver(createChallengeSchema),
    mode: "onChange",
    defaultValues: {
      aiRequest: "",
      visibility: "--",
    },
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 각 컴포넌트의 유효성 검사 실행
    const [bannerResult, elementsResult] = await Promise.all([
      bannerTitleRef.current?.validate() || Promise.resolve({ isValid: false }),
      writeElementsRef.current?.validate() || Promise.resolve({ isValid: false }),
    ]);

    // 모든 검증 통과 확인
    if (bannerResult.isValid && elementsResult.isValid && isValid) {
      // 모든 데이터 수집
      const bannerData = bannerTitleRef.current?.getData();
      const elementsData = writeElementsRef.current?.getData();
      const formData = {
        aiRequest: (e.target as HTMLFormElement).querySelector<HTMLTextAreaElement>('textarea[name="aiRequest"]')?.value || "",
        isPublic,
      };

      const fromData = new FormData();
      fromData.append("name", bannerData?.title || "");
      fromData.append("startedAt", elementsData?.startDate || "");
      fromData.append("duration", elementsData?.weeks?.toString() || "");
      fromData.append("tags", elementsData?.tags?.join(",") || "");
      fromData.append("fields", elementsData?.field || "");
      fromData.append("job", elementsData?.job || "");
      fromData.append("userRequest", formData.aiRequest);
      fromData.append("mode", elementsData?.mode || "");
      fromData.append("visibility", formData.isPublic ? "PUBLIC" : "PRIVATE");

      // 이미지 파일 추가
      const imageFile = bannerTitleRef.current?.getImageFile();
      if (imageFile) {
        fromData.append("thumbnail", imageFile);
      }
      // TODO: API 연동
      createChallengeMutate(fromData, {
        onSuccess: (data) => {
          console.log("create challenge success:", data);
          if (elementsData?.mode == "VS") {
            navigate(buildPath(PageEndPoints.CHALLENGE_VS_DETAIL, { id: data.data.challengeId }));
          } else {
            navigate(buildPath(PageEndPoints.CHALLENGE_SOLO_DETAIL, { id: data.data.challengeId }));
          }
        },
        onError: (error) => {
          console.log("create challenge error:", error);
        },
      });
    }
  };

  return (
    <DefaultLayout variant="home">
      <S.RecruitWriteWrapper>
        <form onSubmit={handleFormSubmit}>
          <S.TopicWrapper>
            <PageTopic text="챌린지 개설" size="l" />
          </S.TopicWrapper>
          <S.BannerWrapper>
            <BannerTitleField ref={bannerTitleRef} />
          </S.BannerWrapper>
          <S.WriteContentWrapper>
            <WriteElementsSelect ref={writeElementsRef} mode={true} challenge={false} />
            <S.WriteFieldWrapper>
              <S.Text>AI 요청 사항</S.Text>
              <S.TextArea
                placeholder="요청사항을 작성하세요"
                {...register("aiRequest")}
              />
            </S.WriteFieldWrapper>
            <S.ButtonWrapper>
              <S.RadioWrapper>
                <S.Radio
                  onClick={() => {
                    setIsPublic(true);
                    setValue("visibility", "PUBLIC");
                  }}
                >
                  <img src={isPublic ? Clicked : NonClicked} alt="clicked" />
                  <p>공개</p>
                </S.Radio>
                <S.Radio
                  onClick={() => {
                    setIsPublic(false);
                    setValue("visibility", "PRIVATE");
                  }}
                >
                  <img src={isPublic ? NonClicked : Clicked} alt="non-clicked" />
                  <p>비공개</p>
                </S.Radio>
              </S.RadioWrapper>
              <S.SubmitBtnWrapper>
                <Button type="submit" disabled={!isValid}>완료</Button>
              </S.SubmitBtnWrapper>
            </S.ButtonWrapper>
          </S.WriteContentWrapper>
        </form>
      </S.RecruitWriteWrapper>
    </DefaultLayout>
  );
}

export default CreateChallenge;
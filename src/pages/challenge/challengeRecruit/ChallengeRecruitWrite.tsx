import Button from "@/components/button/Button";
import FileAddBtn, { type FileAddBtnRef } from "@/components/button/FileAddBtn";
import BannerTitleField, { type BannerTitleFieldRef } from "@/components/field/BannerTitleField";
import WriteElementsSelect, { type WriteElementsSelectRef } from "@/components/field/WriteElementsSelect";
import WriteField, { type WriteFieldRef } from "@/components/field/WriteField";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/WritePage.style";
import { useRef } from "react";
import { z } from "zod";
import { usePostChallengeRecruit } from "@/api/posts";
import { PageEndPoints } from "@/constants/endpoints";
import { buildPath } from "@/utils/buildPath";
import { useNavigate } from "react-router-dom";

const recruitWriteSchema = z.object({
  challengeId: z.string().min(1, "챌린지를 선택해 주세요"),
  title: z.string().min(1, "제목을 입력해 주세요"),
  tags: z.array(z.string()).min(1, "태그를 1개 이상 입력해 주세요"),
  fields: z.string().min(1, "분야를 선택해 주세요"),
  job: z.string().min(1, "직무를 입력해 주세요"),
  startedAt: z.string().min(1, "시작일을 선택해 주세요"),
  durationWeek: z.number().min(1, "주차를 선택해 주세요"),
  content: z.string().min(1, "내용을 입력해 주세요"),
  files: z.array(z.instanceof(File)).optional(),
  images: z.array(z.instanceof(File)).optional(),
  thumbnail: z.instanceof(File).optional(),
});

type RecruitWriteForm = z.infer<typeof recruitWriteSchema>;

const ChallengeRecruitWrite = () => {
  const navigate = useNavigate();
  const { mutate: createChallengeRecruitMutate } = usePostChallengeRecruit();
  const bannerTitleRef = useRef<BannerTitleFieldRef>(null);
  const writeElementsRef = useRef<WriteElementsSelectRef>(null);
  const writeFieldRef = useRef<WriteFieldRef>(null);
  const fileAddBtnRef = useRef<FileAddBtnRef>(null);

  const handleSubmit = async () => {
    const [bannerResult, elementsResult] = await Promise.all([
      bannerTitleRef.current?.validate() || Promise.resolve({ isValid: false }),
      writeElementsRef.current?.validate() || Promise.resolve({ isValid: false }),
    ]);

    const bannerData = bannerTitleRef.current?.getData();
    const elementsData = writeElementsRef.current?.getData();
    const content = writeFieldRef.current?.getData() || "";
    const allFiles = fileAddBtnRef.current?.getFiles() || [];
    const thumbnail = bannerTitleRef.current?.getImageFile();

    // 파일을 이미지와 일반 파일로 분리
    const images: File[] = [];
    const files: File[] = [];
    allFiles.forEach((file) => {
      if (file.type.startsWith("image/")) {
        images.push(file);
      } else {
        files.push(file);
      }
    });

    // 통합 데이터 검증
    const formData: Partial<RecruitWriteForm> = {
      challengeId: elementsData?.challengeSelect || "",
      title: bannerData?.title || "",
      tags: elementsData?.tags || [],
      fields: elementsData?.field || "",
      job: elementsData?.job || "",
      startedAt: elementsData?.startDate || "",
      durationWeek: elementsData?.weeks || 0,
      content: content.trim(),
      files: files.length > 0 ? files : undefined,
      images: images.length > 0 ? images : undefined,
      thumbnail: thumbnail || undefined,
    };

    const result = recruitWriteSchema.safeParse(formData);

    if (!result.success) {
      const errorMessage = result.error.issues[0]?.message || "유효성 검사 실패";
      alert(errorMessage);
      return;
    }

    // 모든 검증 통과 확인
    if (bannerResult.isValid && elementsResult.isValid) {
      // FormData 생성
      const formData = new FormData();
      formData.append("challengeId", result.data.challengeId);
      formData.append("title", result.data.title);
      formData.append("fields", result.data.fields);
      formData.append("job", result.data.job);
      formData.append("content", result.data.content);
      formData.append("startedAt", result.data.startedAt);
      formData.append("durationWeek", result.data.durationWeek.toString());
      result.data.tags.forEach((tag) => {
        formData.append("tags", tag);
      });
      if (result.data.thumbnail) {
        formData.append("thumbnail", result.data.thumbnail);
      }
      if (result.data.images && result.data.images.length > 0) {
        result.data.images.forEach((image) => {
          formData.append("images", image);
        });
      }
      if (result.data.files && result.data.files.length > 0) {
        result.data.files.forEach((file) => {
          formData.append("files", file);
        });
      }

      createChallengeRecruitMutate(formData, {
        onSuccess: (data) => {
          console.log("챌린지 모집글 생성 성공:", data);
          navigate(buildPath(PageEndPoints.CHALLENGE_RECRUIT_DETAIL, { id: String(data.data.challengeId) }));
        },
        onError: (error) => {
          console.error("챌린지 모집글 생성 실패:", error);
          alert("모집글 작성에 실패했습니다. 다시 시도해주세요.");
        },
      });
    } else {
      const errors: string[] = [];
      if (!bannerResult.isValid) {
        errors.push(`배너/제목: ${"error" in bannerResult ? bannerResult.error : "검증 실패"}`);
      }
      if (!elementsResult.isValid) {
        errors.push(`요소 선택: ${"error" in elementsResult ? elementsResult.error : "검증 실패"}`);
      }
      alert(errors.join("\n"));
    }
  };

  return (
    <DefaultLayout variant="home">
      <S.RecruitWriteWrapper>
        <S.TopicWrapper>
          <PageTopic text="VS 모집글 작성" size="l" />
        </S.TopicWrapper>
        <BannerTitleField ref={bannerTitleRef} />
        <S.WriteContentWrapper>
          <WriteElementsSelect ref={writeElementsRef} inputtable={false} challenge={true} mode={true} />
          <S.WriteFieldWrapper>
            <WriteField ref={writeFieldRef} />
            <FileAddBtn ref={fileAddBtnRef} />
          </S.WriteFieldWrapper>
          <S.ButtonWrapper>
            <Button onClick={handleSubmit}>완료</Button>
          </S.ButtonWrapper>
        </S.WriteContentWrapper>
      </S.RecruitWriteWrapper>
    </DefaultLayout>
  );
}

export default ChallengeRecruitWrite;
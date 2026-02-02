import FileIcon from "@/assets/FileClip.svg";
import Lock from "@/assets/Lock.svg";
import Files from "@/components/button/Files";
import Comment from "@/components/comment/Comment";
import ChallengeInfoField from "@/components/content/ChallengeInfoField";
import Content from "@/components/content/Content";
import Banner from "@/components/slider/Banner";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/DetailPage.style";
import { useState, useRef } from "react";
// import { useParams } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";
import type { CommentType } from "@/types/comment";

const ReviewDetail = () => {
  // const { id } = useParams<{ id: string }>();
  const { user } = useAuthStore();
  const [commentFiles, setCommentFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const files: File[] = [];
  const content = `<h2>제목입니다</h2>
<p>
  이건 <strong>굵은 글씨</strong>와
  <em>기울임</em>,
  <u>밑줄</u>이 포함된 문단입니다.
</p>

<p style="font-size: 22px;">
  폰트 크기가 <strong>18px</strong>로 설정된 문장입니다.
</p>

<ul>
  <li>리스트 아이템 1</li>
  <li><strong>리스트 아이템dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd 2</strong></li>
  <li><em>리스트 아이템 3</em></li>
</ul>

<blockquote>
  인용문입니다. 중요한 문장을 강조할 때 사용합니다.
</blockquote>

<p>
  <a href="https://example.com" target="_blank">
    링크 예시
  </a>
</p>
`;

  const weekCommentData: CommentType[] = [
    {
      commentId: 1,
      depth: 0,
      writerInfo: {
        id: 1,
        loginId: "test",
        email: "test@test.com",
        nickname: "작성자",
        birthday: "2000.01.01",
        gender: "MALE",
        badge: "badge",
        tier: { name: "A" },
        socialLogin: null,
        isNewUser: false,
        profileImage: { uuid: "1234567890", fileName: "profile.jpg", size: 0, filePath: "", handlingType: "" },
        createdAt: "2026.01.01",
        lastModifiedAt: "2026.01.01",
      },
      content: "댓글 ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd용",
      attachedImages: [],
      attachedFiles: [],
      createdAt: "2026.01.01",
      updatedAt: "2026.01.01",
      childrenComments: [
        {
          commentId: 2,
          depth: 1,
          writerInfo: {
            id: 2,
            loginId: "test2",
            email: "test2@test.com",
            nickname: "작성자1",
            birthday: "2000.01.01",
            gender: "MALE",
            badge: "badge",
            tier: { name: "A" },
            socialLogin: null,
            isNewUser: false,
            profileImage: { uuid: "1234567891", fileName: "profile2.jpg", size: 0, filePath: "", handlingType: "" },
            createdAt: "2026.01.01",
            lastModifiedAt: "2026.01.01",
          },
          content: "Ldffffffffffddddddddddddddddddddfffffffffffft volutpat. Vestibulum",
          attachedImages: [],
          attachedFiles: [],
          createdAt: "2026.01.01",
          updatedAt: "2026.01.01",
          childrenComments: [],
        },
        {
          commentId: 3,
          depth: 1,
          writerInfo: {
            id: 3,
            loginId: "test3",
            email: "test3@test.com",
            nickname: "작성자1",
            birthday: "2000.01.01",
            gender: "MALE",
            badge: "badge",
            tier: { name: "A" },
            socialLogin: null,
            isNewUser: false,
            profileImage: { uuid: "1234567892", fileName: "profile3.jpg", size: 0, filePath: "", handlingType: "" },
            createdAt: "2026.01.01",
            lastModifiedAt: "2026.01.01",
          },
          content: "Ldffffffffffdddddddddddddddddddddddddddddddddfffffffffffft volutpat. Vestibulum",
          attachedImages: [],
          attachedFiles: [],
          createdAt: "2026.01.01",
          updatedAt: "2026.01.01",
          childrenComments: [],
        },
      ],
    },
    {
      commentId: 4,
      depth: 0,
      writerInfo: {
        id: 4,
        loginId: "test4",
        email: "test4@test.com",
        nickname: "작성자",
        birthday: "2000.01.01",
        gender: "MALE",
        badge: "badge",
        tier: { name: "A" },
        socialLogin: null,
        isNewUser: false,
        profileImage: { uuid: "1234567893", fileName: "profile4.jpg", size: 0, filePath: "", handlingType: "" },
        createdAt: "2026.01.01",
        lastModifiedAt: "2026.01.01",
      },
      content: "Lo iod bitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Vestibulum",
      attachedImages: [],
      attachedFiles: [],
      createdAt: "2026.01.01",
      updatedAt: "2026.01.01",
      childrenComments: [],
    },
  ];

  const handleFileAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles);
      setCommentFiles([...commentFiles, ...newFiles]);
    }
    // 같은 파일을 다시 선택할 수 있도록 input 값 초기화
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  const handleFileAddClick = () => {
    fileInputRef.current?.click();
  }

  return (
    <DefaultLayout variant="home">
      <Banner />
      <S.RecruitDetailWrapper>
        <S.TopWrapper>
          <ChallengeInfoField mode="SOLO" />
        </S.TopWrapper>
        <S.ContentWrapper>
          <Content content={content} />
          <Files files={files} />
        </S.ContentWrapper>
        <S.CommentWholeWrapper>
          <PageTopic text={`댓글 (${10})`} size="l" />
          <S.CommentWrapper>
            {weekCommentData.map((data, index: number) => (
              <S.CommentWrapper key={index}>
                <Comment data={data} />
                {data.childrenComments.length > 0 && <S.ReplyWrapper>
                  {data.childrenComments.map((replyData) => (
                    <S.ReplyWrapper key={replyData.commentId}>
                      <Comment data={replyData} type="reply" />
                    </S.ReplyWrapper>
                  ))}
                </S.ReplyWrapper>}
              </S.CommentWrapper>
            ))}
          </S.CommentWrapper>
        </S.CommentWholeWrapper>
        <S.CommentFilesWrapper>
          <S.InputWrapperContainer>
            <S.InputWrapper>
              <S.FileInput ref={fileInputRef} type="file" onChange={handleFileAdd} multiple />
              <S.FileAddBtn onClick={handleFileAddClick}>
                <S.FileImg src={FileIcon} />
                <p>파일</p>
              </S.FileAddBtn>
              <S.InputField placeholder={user ? "댓글을 입력하세요" : ""} />
              <S.SubmitBtn>완료</S.SubmitBtn>
            </S.InputWrapper>
            {!user && (
              <S.InputOverlay>
                <S.LockImg src={Lock} />
                <span>로그인 후 이용 가능합니다</span>
              </S.InputOverlay>
            )}
          </S.InputWrapperContainer>
          {user && <Files files={commentFiles} setFiles={setCommentFiles} />}
        </S.CommentFilesWrapper>
      </S.RecruitDetailWrapper>
    </DefaultLayout >
  );
}

export default ReviewDetail;
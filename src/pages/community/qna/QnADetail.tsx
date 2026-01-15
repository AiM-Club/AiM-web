import Button from "@/components/button/Button";
import FileIcon from "@/assets/FileClip.svg";
import Files from "@/components/button/Files";
import Comment from "@/components/comment/Comment";
import ChallengeInfoField from "@/components/content/ChallengeInfoField";
import Content from "@/components/content/Content";
import Banner from "@/components/slider/Banner";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/DetailPage.style";
import { useState, useRef } from "react";

const QnADetail = () => {
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

  const weekCommentData = [
    {
      commentId: 1,
      comment: "댓글 ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd용",
      userName: "작성자",
      userGrade: "A",
      userImg: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGlwMHl4dXFnOHlxcW5hNzNiZ2V0bXczMXdhOXdmY3dsc3M2dDhiNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3Ky1RlGqJN4xadIyRW/giphy.gif",
      time: "2026.01.01",
      reply: [
        {
          commentId: 1,
          comment: "Ldffffffffffddddddddddddddddddddfffffffffffft volutpat. Vestibulum",
          userName: "작성자1",
          userGrade: "A",
          userImg: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGlwMHl4dXFnOHlxcW5hNzNiZ2V0bXczMXdhOXdmY3dsc3M2dDhiNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3Ky1RlGqJN4xadIyRW/giphy.gif",
          time: "2026.01.01",
        },
        {
          commentId: 2,
          comment: "Ldffffffffffdddddddddddddddddddddddddddddddddfffffffffffft volutpat. Vestibulum",
          userName: "작성자1",
          userGrade: "A",
          userImg: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGlwMHl4dXFnOHlxcW5hNzNiZ2V0bXczMXdhOXdmY3dsc3M2dDhiNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3Ky1RlGqJN4xadIyRW/giphy.gif",
          time: "2026.01.01",
        }
      ]
    },
    {
      commentId: 2,
      comment: "Lo iod bitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Vestibulum",
      userName: "작성자",
      userGrade: "A",
      userImg: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGlwMHl4dXFnOHlxcW5hNzNiZ2V0bXczMXdhOXdmY3dsc3M2dDhiNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3Ky1RlGqJN4xadIyRW/giphy.gif",
      time: "2026.01.01",
      reply: [],
    }
  ]

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
      <Banner writer="작성자 이름" image="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWE5bjl4cWtvcXA5cHF0NTA0MjlzNWZmZmRmZml0NXZ3YXZ2dGwyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZqlvCTNHpqrio/giphy.gif" topic="제목 작성은 15글자 이하" />
      <S.RecruitDetailWrapper>
        <S.TopWrapper>
          <ChallengeInfoField mode="SOLO" />
          <Button $size="req">VS 요청</Button>
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
                {data.reply.length > 0 && <S.ReplyWrapper>
                  {data.reply.map((replyData, replyIndex: number) => (
                    <div key={replyIndex}>
                      <Comment data={replyData} />
                    </div>
                  ))}
                </S.ReplyWrapper>}
              </S.CommentWrapper>
            ))}
          </S.CommentWrapper>
        </S.CommentWholeWrapper>
        <S.CommentFilesWrapper>
          <S.InputWrapper>
            <S.FileInput ref={fileInputRef} type="file" onChange={handleFileAdd} multiple />
            <S.FileAddBtn onClick={handleFileAddClick}>
              <S.FileImg src={FileIcon} />
              <p>파일</p>
            </S.FileAddBtn>
            <S.InputField placeholder="댓글을 입력하세요" />
            <S.SubmitBtn>완료</S.SubmitBtn>
          </S.InputWrapper>
          <Files files={commentFiles} setFiles={setCommentFiles} />
        </S.CommentFilesWrapper>
      </S.RecruitDetailWrapper>
    </DefaultLayout >
  );
}

export default QnADetail;
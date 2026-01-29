import Button from "@/components/button/Button";
import FileIcon from "@/assets/FileClip.svg";
import Send from "@/assets/Send.svg";
import Files from "@/components/button/Files";
import Comment from "@/components/comment/Comment";
import ChallengeInfoField from "@/components/content/ChallengeInfoField";
import Content from "@/components/content/Content";
import Banner from "@/components/slider/Banner";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/DetailPage.style";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import useMedia from "@/hooks/useMedia";
import { useAuthStore } from "@/stores/authStore";
import { useGetChallengeRecruitDetail, useGetPostComments } from "@/api/posts";
import { useGetPhoto } from "@/api/photo";
import { useRecruitDetailStore } from "@/stores/RecruitDetailStore";
import Loading from "@/components/loading/Loading";

const ChallengeRecruitDetail = () => {
  const { user } = useAuthStore();
  const { id } = useParams<{ id: string }>();
  const { data: challengeRecruitDetail, isLoading } = useGetChallengeRecruitDetail(id || "");
  const { setThumbnail, setRecruitInfo, setPostComments } = useRecruitDetailStore();
  const { mutate: getThumbnail } = useGetPhoto();
  const [isMine, setIsMine] = useState(false);
  const isMobile = useMedia(560);
  const { data: postComments, isLoading: isLoadingPostComments } = useGetPostComments(id || "");
  console.log(challengeRecruitDetail);

  useEffect(() => {
    if (challengeRecruitDetail && postComments) {
      setRecruitInfo(challengeRecruitDetail.data);
      setIsMine(challengeRecruitDetail.data.writerId === user?.id);
      setPostComments(postComments.data);
      if (challengeRecruitDetail.data.thumbnail?.uuid) {
        getThumbnail(
          { file_uuid: challengeRecruitDetail.data.thumbnail.uuid },
          {
            onSuccess: (photo) => {
              setThumbnail(photo);
            },
            onError: (error) => {
              console.log(error);
              setThumbnail(null);
            },
          }
        );
      }
    }
  }, [challengeRecruitDetail, getThumbnail, setThumbnail, setRecruitInfo, setPostComments]);

  if (isLoading || isLoadingPostComments) return <Loading />;

  return (
    <DefaultLayout >
      <Banner type="recruit" isMine={isMine} />
      <S.RecruitDetailWrapper>
        <S.TopWrapper>
          <ChallengeInfoField />
          <S.BtnWrapper>
            <Button $size="req">VS 요청</Button>
          </S.BtnWrapper>
        </S.TopWrapper>
        <S.ContentWrapper>
          <Content content={challengeRecruitDetail?.data.content || ""} />
          <S.FileNameWrapper>
            {challengeRecruitDetail?.data.attachedImages && challengeRecruitDetail?.data.attachedImages.length > 0 &&
              challengeRecruitDetail?.data.attachedImages.map((data, index) => (
                <S.FileName key={index}>{data.fileName}</S.FileName>
              ))
            }
            {challengeRecruitDetail?.data.attachedFiles && challengeRecruitDetail?.data.attachedFiles.length > 0 &&
              challengeRecruitDetail?.data.attachedFiles.map((data, index) => (
                <S.FileName key={index}>{data.fileName}</S.FileName>
              ))
            }
          </S.FileNameWrapper>
        </S.ContentWrapper>
        <S.CommentWholeWrapper>
          <PageTopic text={`댓글 (${postComments?.data.pageInfo.totalElements})`} size="l" />
          <S.CommentWrapper>
            {/* {weekCommentData.map((data, index: number) => (
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
            ))} */}
          </S.CommentWrapper>
        </S.CommentWholeWrapper>
        {/* <S.CommentFilesWrapper>
          <S.InputWrapper>
            <S.FileInput ref={fileInputRef} type="file" onChange={handleFileAdd} multiple />
            <S.FileAddBtn onClick={handleFileAddClick}>
              <S.FileImg src={FileIcon} />
              {isMobile ? null : <p>파일</p>}
            </S.FileAddBtn>
            <S.InputField placeholder="댓글을 입력하세요" />
            <S.SubmitBtn>{isMobile ? <S.SendImg src={Send} /> : "완료"}</S.SubmitBtn>
          </S.InputWrapper>
          <Files files={commentFiles} setFiles={setCommentFiles} />
        </S.CommentFilesWrapper> */}
      </S.RecruitDetailWrapper>
    </DefaultLayout>
  );
}

export default ChallengeRecruitDetail;
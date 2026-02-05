import Comment from "@/components/comment/Comment";
import ChallengeInfoField from "@/components/content/ChallengeInfoField";
import Content from "@/components/content/Content";
import Banner from "@/components/slider/Banner";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/DetailPage.style";
import * as CardS from "@/components/content/CardContent.style";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";
import { useGetQnaDetail, useGetPostComments, usePostPostComment } from "@/api/posts";
import { useGetPhoto } from "@/api/photo";
import { usePostDetailStore } from "@/stores/PostDetailStore";
import Loading from "@/components/loading/Loading";
import SubLoading from "@/components/loading/SubLoading";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import XIcon from "@/assets/X.png";
import FileIcon from "@/assets/FileClip.svg";
import { useQueryClient } from "@tanstack/react-query";
import { ApiEndpoints } from "@/constants/endpoints";
import { buildPath } from "@/utils/buildPath";
import SubPagination from "@/components/pagination/SubPagination";
import { useImageOpen } from "@/hooks/useImageOpen";
import { useFileDownload } from "@/hooks/useFileDownload";
import Button from "@/components/button/Button";
import DeleteModal from "@/components/modal/DeleteModal";

const QnADetail = () => {
  const { user } = useAuthStore();
  const { id } = useParams<{ id: string }>();
  const { data: qnaDetail, isLoading } = useGetQnaDetail(id || "");
  const { setThumbnail, setPostInfo, setPostComments, resetPostDetail, setIsMine, isMine: isMineStore } = usePostDetailStore();
  const { mutate: getThumbnail } = useGetPhoto();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);
  const queryClient = useQueryClient();
  const { data: postComments, isLoading: isLoadingPostComments } = useGetPostComments(id || "", currentPage);
  const { mutate: postComment } = usePostPostComment(id || "");
  const { downloadFile } = useFileDownload();
  const { openImage } = useImageOpen();
  // 답글 관련 state
  const [selectedCommentId, setSelectedCommentId] = useState<number | null>(null);
  const [commentFile, setCommentFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 댓글 작성 스키마
  const commentSchema = z.object({
    content: z.string().min(1, "댓글을 입력해주세요"),
  });

  type CommentForm = z.infer<typeof commentSchema>;

  const {
    register,
    handleSubmit,
    reset,
    watch,
  } = useForm<CommentForm>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      content: "",
    },
  });

  const contentValue = watch("content");
  const hasContent = !!(contentValue && contentValue?.trim()?.length > 0);

  useEffect(() => {
    resetPostDetail();
  }, [id, resetPostDetail]);

  // qnaDetail이 로드되면 즉시 store에 저장
  useEffect(() => {
    if (qnaDetail?.data) {
      // QnaDetailResponse를 ChallengeRecruitDetailResponse로 타입 단언하여 store에 저장
      setPostInfo(qnaDetail.data as any);
      setIsMine(qnaDetail.data.writerId === user?.id);
      if (qnaDetail.data.thumbnail?.uuid) {
        getThumbnail(
          { file_uuid: qnaDetail.data.thumbnail.uuid },
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
  }, [qnaDetail, user?.id, getThumbnail, setThumbnail, setPostInfo]);

  // postComments가 로드되면 store에 저장
  useEffect(() => {
    if (postComments?.data) {
      setPostComments(postComments.data);
      setTotalPage(postComments.data.page.totalPages);
    }
  }, [postComments, setPostComments]);

  // 댓글 작성 핸들러
  const onSubmit = (data: CommentForm) => {
    if (!id) return;

    const formData = new FormData();
    formData.append("content", data.content);
    if (selectedCommentId) {
      formData.append("parentCommentId", String(selectedCommentId));
    }
    if (commentFile) {
      // 이미지인지 파일인지 구분
      if (commentFile.type.startsWith("image/")) {
        formData.append("attachedImages", commentFile);
      } else {
        formData.append("attachedFiles", commentFile);
      }
    }

    postComment(formData, {
      onSuccess: () => {
        reset();
        setCommentFile(null);
        setSelectedCommentId(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        // 댓글 리스트 새로고침
        queryClient.invalidateQueries({
          queryKey: [buildPath(ApiEndpoints.POST_COMMENTS, { postId: id })],
        });
      },
      onError: (error: unknown) => {
        console.error("댓글 작성 실패:", error);
        alert("댓글 작성에 실패했습니다.");
      },
    });
  };

  // 답글 클릭 핸들러
  const handleReplyClick = (commentId: number) => {
    setSelectedCommentId(commentId);
  };

  // 파일 변경 핸들러
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCommentFile(file);
    }
  };

  // 파일 삭제 핸들러
  const handleFileDelete = () => {
    setCommentFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // 댓글 페이지 변경 핸들러
  const handleCommentPageChange = (page: number) => {
    if (!id) return;
    setCurrentPage(page);
    // 페이지 변경 시 댓글 리스트 다시 가져오기
    queryClient.invalidateQueries({
      queryKey: [buildPath(ApiEndpoints.POST_COMMENTS, { postId: id })],
    });
  };

  if (isLoading) return <Loading />;

  return (
    <DefaultLayout>
      <Banner type="recruit" />
      <S.RecruitDetailWrapper>
        <S.TopWrapper>
          <ChallengeInfoField />
        </S.TopWrapper>
        <S.ContentWrapper>
          <Content content={qnaDetail?.data.content || ""} />
          <S.FileNameWrapper>
            {qnaDetail?.data.attachedImages && qnaDetail?.data.attachedImages.length > 0 &&
              qnaDetail?.data.attachedImages.map((data, index) => (
                <S.FileName key={index} onClick={() => openImage(data)}>{data.fileName}</S.FileName>
              ))
            }
            {qnaDetail?.data.attachedFiles && qnaDetail?.data.attachedFiles.length > 0 &&
              qnaDetail?.data.attachedFiles.map((data, index) => (
                <S.FileName key={index} onClick={() => downloadFile(data)}>{data.fileName}</S.FileName>
              ))
            }
          </S.FileNameWrapper>
        </S.ContentWrapper>
        <S.CommentWholeWrapper>
          <PageTopic text={`댓글 (${postComments?.data?.page?.totalElements || 0})`} size="l" />
          <S.CommentWrapper>
            {isLoadingPostComments ? (
              <SubLoading />
            ) : (
              <>
                {postComments?.data.content.map((data) => (
                  <S.CommentWrapper key={data.commentId}>
                    <Comment
                      data={data}
                      onReplyClick={handleReplyClick}
                      isSelected={selectedCommentId === data.commentId}
                    />
                    {data.childrenComments?.map((replyData) => (
                      <S.ReplyWrapper key={replyData.commentId}>
                        <Comment data={replyData} type="reply" />
                      </S.ReplyWrapper>
                    ))}
                  </S.CommentWrapper>
                ))}
                {totalPage > 1 && (
                  <CardS.CommentPageNav>
                    <SubPagination
                      currentPage={currentPage + 1}
                      totalPage={totalPage}
                      callback={(page) => handleCommentPageChange(page - 1)}
                    />
                  </CardS.CommentPageNav>
                )}
              </>
            )}
          </S.CommentWrapper>
        </S.CommentWholeWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          {selectedCommentId && (
            <CardS.ReplyIndicator>
              답글 작성 중...
              <CardS.ReplyCancelBtn onClick={() => setSelectedCommentId(null)}>취소</CardS.ReplyCancelBtn>
            </CardS.ReplyIndicator>
          )}
          <CardS.WeekCommentInputWrapper>
            <CardS.WeekCommentInput
              {...register("content")}
              placeholder={selectedCommentId ? "답글을 입력하세요" : "댓글을 입력하세요"}
            />
            <CardS.FileIconWrapper>
              <CardS.FileIconContentWrapper>
                <CardS.FileIconLabel>
                  <CardS.FileIconInput
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileChange}
                  />
                  <CardS.FileIconButton>
                    <img src={FileIcon} alt="파일 업로드" />
                  </CardS.FileIconButton>
                </CardS.FileIconLabel>
                {commentFile && (
                  <CardS.FileNameWrapper>
                    <CardS.FileName>{commentFile.name}</CardS.FileName>
                    <CardS.FileNameDeleteBtn onClick={handleFileDelete}>
                      <img src={XIcon} alt="파일 삭제" />
                    </CardS.FileNameDeleteBtn>
                  </CardS.FileNameWrapper>
                )}
              </CardS.FileIconContentWrapper>
              <CardS.FinishBtn type="submit" $active={hasContent}>완료</CardS.FinishBtn>
            </CardS.FileIconWrapper>
          </CardS.WeekCommentInputWrapper>
        </form>
        {isMineStore && (
          <S.EditBtnWrapper>
            <DeleteModal trigger={<Button $color="gray">삭제</Button>} postId={id || ""} type="qna" />
            <Button $color="gray">수정</Button>
          </S.EditBtnWrapper>
        )}
      </S.RecruitDetailWrapper>
    </DefaultLayout>
  );
}

export default QnADetail;

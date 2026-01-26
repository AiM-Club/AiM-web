import * as S from "./CardContent.style";
import { ProgressBar } from "@/components/bar/ProgressBar";
import TryIcon from "@/assets/Try.png";
import Plus from "@/assets/Plus.svg";
import FileIcon from "@/assets/FileClip.svg";
import { useEffect, useState, useRef } from "react";
import ProfileImage from "../image/ProfileImage";
import type { CommentProps, CommentType } from "@/types/comment";
import { useChallengeDetailStore } from "@/stores/challengeDetailStore";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";
import NoPhoto from "@/assets/NoPhoto.svg";
import { formatDateKR, formatStopwatchTime } from "@/utils/useTime";
import { useGetWeeklyComments, usePostWeeklyComment, usePostWeeklyProof, useGetChallengeDetailWeeks } from "@/api/challengeDetail";
import SubLoading from "../loading/SubLoading";
import Comment from "@/components/comment/Comment.tsx";
import { useFileDownload } from "@/hooks/useFileDownload";
import { useImageOpen } from "@/hooks/useImageOpen";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import XIcon from "@/assets/X.png";
import SubPagination from "../pagination/SubPagination";

interface ChallengeMainProps {
  color: "green" | "pink";
  progress: number;
  tryCount: number;
  successCount: number;
  failCount: number;
}

interface ChallengeVSMatchProps {
  color: "green" | "pink";
  kind: "opponent" | "my";
  value: "VS" | "SOLO";
  weekData?: WeekProps[];
  viewCard?: "left" | "right" | "both";
  commentView?: boolean;
}

interface WeekProps {
  weekId: number;
  title: string;
  startDate: string;
  endDate: string;
  content: string;
  timer: string;
  comments: CommentProps[];
}

const ChallengeMainContent = ({ color, progress, tryCount, successCount, failCount }: ChallengeMainProps) => {
  return (
    <S.ChallengeMainContentWrapper>
      <ProgressBar text="성공률" progress={progress} height={32} color={color} />
      <S.TryWrapper>
        <S.TryContent>
          <p>시도 횟수</p>
          <S.TryIconWrapper>
            <S.TryIcon src={TryIcon} />
            <S.TryTextWrapper>
              <S.TryNum>{tryCount}</S.TryNum>
              <S.TryText>회</S.TryText>
            </S.TryTextWrapper>
          </S.TryIconWrapper>
        </S.TryContent>
        <S.TryContent>
          <p>성공 횟수</p>
          <S.TryIconWrapper>
            <S.TryIcon src={TryIcon} />
            <S.TryTextWrapper>
              <S.TryNum>{successCount}</S.TryNum>
              <S.TryText>회</S.TryText>
            </S.TryTextWrapper>
          </S.TryIconWrapper>
        </S.TryContent>
        <S.TryContent>
          <p>실패 횟수</p>
          <S.TryIconWrapper>
            <S.TryIcon src={TryIcon} />
            <S.TryTextWrapper>
              <S.TryNum>{failCount}</S.TryNum>
              <S.TryText>회</S.TryText>
            </S.TryTextWrapper>
          </S.TryIconWrapper>
        </S.TryContent>
      </S.TryWrapper>
    </S.ChallengeMainContentWrapper>
  )
}

const ChallengeVSMatchContent = ({ color, kind, value, viewCard, commentView = true }: ChallengeVSMatchProps) => {
  const { myPhoto, opponentPhoto, dominance, challengeId, challengeInfo, challengeDetailWeeks, progressListMap, setChallengeDetailWeeks } = useChallengeDetailStore();
  const photo = kind === "opponent" ? opponentPhoto : myPhoto;
  const photoSrc = useUserPhotoUrl(photo);
  const { downloadFile } = useFileDownload();
  const { openImage } = useImageOpen();
  const progress = kind === "opponent" ? (dominance?.opponentPercent ?? 0) : (dominance?.myPercent ?? 0);
  const success = kind === "opponent" ? (dominance?.opponentSuccessRate ?? 0) : (dominance?.mySuccessRate ?? 0);
  const currentWeek = challengeDetailWeeks?.currentWeek;
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [firstRowCount, setFirstRowCount] = useState<number>(0);
  const [weekWrapperRef, setWeekWrapperRef] = useState<HTMLDivElement | null>(null);
  const [wholeWidth, setWholeWidth] = useState<number>(0);
  const [contentElement, setContentElement] = useState<HTMLDivElement | null>(null);
  const { mutate: getWeeklyComments } = useGetWeeklyComments();
  const { mutate: postWeeklyProof } = usePostWeeklyProof(String(challengeId ?? "0"));
  const { refetch: refetchChallengeDetailWeeks } = useGetChallengeDetailWeeks(String(challengeId ?? "0"));
  const [weekCommentData, setWeekCommentData] = useState<CommentType[]>([]);
  const [commentFile, setCommentFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const proofFileInputRef = useRef<HTMLInputElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);

  // Hook 규칙을 준수하기 위해 항상 호출 (selectedWeek가 없을 때는 더미 값 사용)
  const currentWeeklyProgressId = selectedWeek && progressListMap[selectedWeek]?.weeklyProgressId
    ? String(progressListMap[selectedWeek].weeklyProgressId)
    : "0";
  const { mutate: postComment } = usePostWeeklyComment(
    challengeId ? String(challengeId) : "0",
    currentWeeklyProgressId
  );

  const commentSchema = z.object({
    content: z.string().min(1, "댓글을 입력해주세요"),
  });

  type CommentForm = z.infer<typeof commentSchema>;

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<CommentForm>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      content: "",
    },
  });

  useEffect(() => {
    if (!contentElement) return;

    const updateWidth = () => {
      const contentWidth = contentElement.offsetWidth;
      setWholeWidth(contentWidth);
    }

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(contentElement);

    return () => {
      resizeObserver.disconnect();
    }
  }, [contentElement])
  // 첫 줄의 아이템 개수 측정
  // 주차 content의 위치 식별에도 사용
  useEffect(() => {
    if (!weekWrapperRef) return;

    const calculateFirstRowCount = () => {
      const children = Array.from(weekWrapperRef.children) as HTMLElement[];
      if (children.length === 0) return;

      const firstChildTop = children[0].offsetTop;
      let count = 0;

      for (let i = 0; i < children.length; i++) {
        if (children[i].offsetTop === firstChildTop) {
          count++;
        } else {
          break;
        }
      }

      if (count > 0) {
        setFirstRowCount(count);
      }
    };

    calculateFirstRowCount();

    const resizeObserver = new ResizeObserver(calculateFirstRowCount);
    resizeObserver.observe(weekWrapperRef);

    return () => {
      resizeObserver.disconnect();
    };
  }, [weekWrapperRef, challengeInfo?.totalWeeks]);

  const handleWeekClick = (week: number, weeklyProgressId: number) => {
    if (selectedWeek === week) {
      setSelectedWeek(null);
      return;
    }
    setSelectedWeek(week);
    setCurrentPage(0); // 주차 변경 시 첫 페이지로 리셋
    if (value === "VS") {
      getWeeklyCommentsData(weeklyProgressId, 0);
    }
  }

  const getWeeklyCommentsData = (weeklyProgressId: number, page: number = currentPage) => {
    if (weeklyProgressId && challengeId) {
      getWeeklyComments(
        {
          challengeId: challengeId,
          weeksId: String(weeklyProgressId),
          page: page,
          size: 10,
        },
        {
          onSuccess: (data) => {
            setWeekCommentData(data.comments);
            setTotalPage(data.pageInfo.totalPages);
          },
        }
      );
    }
  }

  const handleCommentPageChange = (page: number) => {
    if (!selectedWeek || !challengeId || !progressListMap[selectedWeek]?.weeklyProgressId) return;
    setCurrentPage(page);
    const weeklyProgressId = progressListMap[selectedWeek].weeklyProgressId;
    getWeeklyCommentsData(weeklyProgressId, page);
  }

  const onSubmit = (data: CommentForm) => {
    console.log("댓글달기");
    if (!selectedWeek || !challengeId || !progressListMap[selectedWeek]?.weeklyProgressId) return;

    const weeklyProgressId = progressListMap[selectedWeek].weeklyProgressId;

    console.log(data);
    console.log(commentFile);
    const formData = new FormData();
    formData.append("content", data.content);
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
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        // 댓글 리스트 새로고침 (첫 페이지로)
        setCurrentPage(0);
        getWeeklyCommentsData(weeklyProgressId, 0);
      },
      onError: (error: unknown) => {
        console.error("댓글 작성 실패:", error);
        alert("댓글 작성에 실패했습니다.");
      },
    });
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCommentFile(file);
    }
  }

  const handleFileDelete = () => {
    setCommentFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  const handleProofFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selectedWeek || !challengeId || !progressListMap[selectedWeek]?.weeklyProgressId) return;

    const weeklyProgressId = progressListMap[selectedWeek].weeklyProgressId;
    const formData = new FormData();
    formData.append("weeklyProgressId", String(weeklyProgressId));

    if (file.type.startsWith("image/")) {
      formData.append("attachedImages", file);
    } else {
      formData.append("attachedFiles", file);
    }

    postWeeklyProof(formData, {
      onSuccess: async () => {
        if (proofFileInputRef.current) {
          proofFileInputRef.current.value = "";
        }
        // 주 정보 다시 가져오기
        const { data } = await refetchChallengeDetailWeeks();
        if (data?.data) {
          setChallengeDetailWeeks(data.data);
        }
      },
      onError: (error: unknown) => {
        console.error("인증샷 업로드 실패:", error);
        if (proofFileInputRef.current) {
          proofFileInputRef.current.value = "";
        }
      },
    });
  }

  if (!challengeInfo || !challengeId) return <SubLoading />;

  return (
    <S.ChallengeVSMatchContentWrapper ref={setContentElement}>
      {viewCard === "left" || viewCard === "right" ?
        <S.ProfileWrapper>
          <ProfileImage image={photoSrc || NoPhoto} width={wholeWidth * 0.018} />
          <S.RowProgressWrapper>
            <ProgressBar text="진도율" progress={progress} height={32} color={color} />
            <ProgressBar text="성공률" progress={success} height={32} color={color} />
          </S.RowProgressWrapper>
        </S.ProfileWrapper> :
        color === "pink" ?
          <S.ProfileWrapper>
            <S.ProgressWrapper>
              <ProgressBar text="성공률" progress={success} height={20} color={color} />
              <ProgressBar text="진도율" progress={progress} height={20} color={color} />
            </S.ProgressWrapper>
            <ProfileImage image={photoSrc || NoPhoto} width={9} />
          </S.ProfileWrapper> :
          <S.ProfileWrapper>
            <ProfileImage image={photoSrc || NoPhoto} width={9} />
            <S.ProgressWrapper>
              <ProgressBar text="진도율" progress={progress} height={20} color={color} />
              <ProgressBar text="성공률" progress={success} height={20} color={color} />
            </S.ProgressWrapper>
          </S.ProfileWrapper>}
      <S.WeekWrapper ref={setWeekWrapperRef}>
        {Array.from({ length: firstRowCount > 0 ? Math.ceil(challengeInfo.totalWeeks / firstRowCount) * firstRowCount : challengeInfo?.totalWeeks ?? 0 }).map((_, index) => {
          const weekNumber = index + 1;
          const weekKey = progressListMap[weekNumber]?.weeklyProgressId ?? index;
          if (weekNumber > challengeInfo.totalWeeks) {
            // 공간 유지를 위해서 첫 줄의 아이템 개수만큼 반복하되 display: none으로 없는 주차 숨김
            return <S.WeekItemWrapper key={index} style={{ visibility: 'hidden' }} />;
          }

          return weekNumber <= challengeInfo.totalWeeks ? (
            <S.WeekItemWrapper key={progressListMap[weekNumber]?.weeklyProgressId}>
              <S.CurrentWeekItem onClick={() => handleWeekClick(weekNumber, progressListMap[weekNumber]?.weeklyProgressId)} $selected={selectedWeek === weekNumber}>
                {weekNumber}주차
              </S.CurrentWeekItem>
              {selectedWeek === weekNumber ?
                <S.WeekContentWrapper $direction={weekNumber % firstRowCount} $rowcount={firstRowCount} $width={wholeWidth}>
                  <S.WeekTopicWrapper $direction={weekNumber % firstRowCount}>
                    <S.WeekTopicTitle>{progressListMap[selectedWeek]?.title}</S.WeekTopicTitle>
                    <S.WeekTopicDate>{formatDateKR(progressListMap[selectedWeek]?.weekStartDate)} ~ {formatDateKR(progressListMap[selectedWeek]?.weekEndDate)}</S.WeekTopicDate>
                    <S.WeekTopicContent>{progressListMap[selectedWeek]?.content}</S.WeekTopicContent>
                    <S.ProofWrapper>
                      {progressListMap[selectedWeek]?.proofImages.length > 0 &&
                        <S.FileIconContentWrapper>
                          <S.ProofFileNameWrapper>
                            {progressListMap[selectedWeek]?.proofImages.map((image) => (
                              <S.ProofFileName key={image.uuid} onClick={() => openImage(image)}>{image.fileName}</S.ProofFileName>
                            ))}
                          </S.ProofFileNameWrapper>
                        </S.FileIconContentWrapper>
                      }
                      {progressListMap[selectedWeek]?.proofFiles.length > 0 &&
                        <S.FileIconContentWrapper>
                          <S.ProofFileNameWrapper>
                            {progressListMap[selectedWeek]?.proofFiles.map((file) => (
                              <S.ProofFileName key={file.uuid} onClick={() => downloadFile(file)}>{file.fileName}</S.ProofFileName>
                            ))}
                          </S.ProofFileNameWrapper>
                        </S.FileIconContentWrapper>
                      }
                      {kind === "my" &&
                        <S.ProofFileIconLabel>
                          <S.FileIconInput
                            ref={proofFileInputRef}
                            type="file"
                            onChange={handleProofFileChange}
                          />
                          <S.FileUpload>
                            <img src={FileIcon} />
                            인증샷 파일 업로드
                          </S.FileUpload>
                        </S.ProofFileIconLabel>
                      }
                    </S.ProofWrapper>
                    {selectedWeek === currentWeek ? (
                      <S.TimerWrapper>
                        <S.Timer>{formatStopwatchTime(progressListMap[selectedWeek]?.stopwatchTimeSeconds ?? 0)}</S.Timer>
                        <S.TimerBtn>Start</S.TimerBtn>
                      </S.TimerWrapper>
                    ) : (
                      <S.TimerWrapper>
                        <S.Timer>{formatStopwatchTime(progressListMap[selectedWeek]?.stopwatchTimeSeconds ?? 0)}</S.Timer>
                      </S.TimerWrapper>
                    )}
                  </S.WeekTopicWrapper>
                  {commentView && <S.WeekCommentWrapper>
                    {weekCommentData.map((data) => (
                      <S.CommentWrapper key={data.commentId}>
                        <Comment data={data} />
                        {/* {data.reply?.map((replyData) => (
                          <S.ReplyWrapper key={replyData.commentId}>
                            <Comment data={replyData} />
                          </S.ReplyWrapper>
                        ))} */}
                      </S.CommentWrapper>
                    ))}
                    {totalPage > 1 && (
                      <S.CommentPageNav>
                        <SubPagination
                          currentPage={currentPage + 1}
                          totalPage={totalPage}
                          callback={(page) => handleCommentPageChange(page - 1)}
                        />
                      </S.CommentPageNav>
                    )}
                  </S.WeekCommentWrapper>}
                  {commentView && (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <S.WeekCommentInputWrapper>
                        <S.WeekCommentInput
                          {...register("content")}
                          placeholder="댓글을 입력하세요"
                        />
                        <S.FileIconWrapper>
                          <S.FileIconContentWrapper>
                            <S.FileIconLabel>
                              <S.FileIconInput
                                ref={fileInputRef}
                                type="file"
                                onChange={handleFileChange}
                              />
                              <S.FileIconButton>
                                <img src={FileIcon} alt="파일 업로드" />
                              </S.FileIconButton>
                            </S.FileIconLabel>
                            {commentFile && (
                              <S.FileNameWrapper>
                                <S.FileName>{commentFile.name}</S.FileName>
                                <S.FileNameDeleteBtn onClick={handleFileDelete}>
                                  <img src={XIcon} alt="파일 삭제" />
                                </S.FileNameDeleteBtn>
                              </S.FileNameWrapper>
                            )}
                          </S.FileIconContentWrapper>
                          <S.FinishBtn type="submit">완료</S.FinishBtn>
                        </S.FileIconWrapper>
                      </S.WeekCommentInputWrapper>
                    </form>
                  )}
                </S.WeekContentWrapper>
                : <></>}
            </S.WeekItemWrapper>
          ) : (
            <S.WeekItemWrapper key={weekKey}>
              <S.TotalWeekItem onClick={() => handleWeekClick(weekNumber, progressListMap[weekNumber]?.weeklyProgressId)}>
                {weekNumber}주차
              </S.TotalWeekItem>
            </S.WeekItemWrapper>
          );
        })}
      </S.WeekWrapper>
    </S.ChallengeVSMatchContentWrapper >
  )
}

const ChallengeVSMatchContentInvite = ({ height }: { height: number | null }) => {
  return (
    <S.PlusIconWrapper $height={height}>
      <S.PlusIcon src={Plus} />
      초대
    </S.PlusIconWrapper>
  )
}

export { ChallengeMainContent, ChallengeVSMatchContent, ChallengeVSMatchContentInvite };
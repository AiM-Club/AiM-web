import * as S from "./CardContent.style";
import { ProgressBar } from "@/components/bar/ProgressBar";
import TryIcon from "@/assets/Try.png";
import Plus from "@/assets/Plus.svg";
import FileIcon from "@/assets/FileClip.svg";
import { useEffect, useState } from "react";
import ProfileImage from "../image/ProfileImage";
import type { CommentProps } from "@/types/comment";
import Comment from "@/components/comment/Comment";
import { useChallengeDetailStore } from "@/stores/challengeDetailStore";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";
import NoPhoto from "@/assets/NoPhoto.svg";

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

const weekCommentData = [
  {
    commentId: 1,
    comment: "댓글 용",
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

const ChallengeVSMatchContent = ({ color, kind, viewCard, commentView = true }: ChallengeVSMatchProps) => {
  const { myInfo, opponentInfo, myPhoto, opponentPhoto, dominance, challengeInfo } = useChallengeDetailStore();
  const data = kind === "opponent" ? opponentInfo : myInfo;
  const photo = kind === "opponent" ? opponentPhoto : myPhoto;
  const photoSrc = useUserPhotoUrl(photo);
  const progress = kind === "opponent" ? (dominance?.opponentPercent ?? 0) : (dominance?.myPercent ?? 0);
  const success = kind === "opponent" ? (dominance?.opponentSuccessRate ?? 0) : (dominance?.mySuccessRate ?? 0);
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [firstRowCount, setFirstRowCount] = useState<number>(0);
  const [weekWrapperRef, setWeekWrapperRef] = useState<HTMLDivElement | null>(null);
  const [wholeWidth, setWholeWidth] = useState<number>(0);
  const [contentElement, setContentElement] = useState<HTMLDivElement | null>(null);

  if(!challengeInfo) return null;

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
  }, [weekWrapperRef, challengeInfo.totalWeeks]);

  const handleWeekClick = (week: number) => {
    if (selectedWeek === week) {
      setSelectedWeek(null);
      return;
    }
    setSelectedWeek(week);
  }

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
          if (weekNumber > challengeInfo.totalWeeks) {
            // 공간 유지를 위해서 첫 줄의 아이템 개수만큼 반복하되 display: none으로 없는 주차 숨김
            return <S.WeekItemWrapper key={index} style={{ visibility: 'hidden' }} />;
          }

          return weekNumber <= challengeInfo.totalWeeks ? (
            <S.WeekItemWrapper key={index}>
              <S.CurrentWeekItem onClick={() => handleWeekClick(weekNumber)} $selected={selectedWeek === weekNumber}>
                {weekNumber}주차
              </S.CurrentWeekItem>
              {selectedWeek === weekNumber ?
                <S.WeekContentWrapper $direction={weekNumber % firstRowCount} $rowcount={firstRowCount} $width={wholeWidth}>
                  <S.WeekTopicWrapper $direction={weekNumber % firstRowCount}>
                    <S.WeekTopicTitle>제목 (AI 생성)</S.WeekTopicTitle>
                    <S.WeekTopicDate>2026년 01월 01일 ~ 2026년 01월 07일</S.WeekTopicDate>
                    <S.WeekTopicContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id pulvinar velit. Etiam mollis euismod interdum. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Vestibulum</S.WeekTopicContent>
                    <S.FileUpload>
                      <img src={FileIcon} />
                      인증샷 파일 업로드
                    </S.FileUpload>
                    <S.TimerWrapper>
                      <S.Timer>00 : 00</S.Timer>
                      <S.TimerBtn>Start</S.TimerBtn>
                    </S.TimerWrapper>
                  </S.WeekTopicWrapper>
                  {commentView && <S.WeekCommentWrapper>
                    {weekCommentData.map((data, index: number) => (
                      <S.CommentWrapper key={index}>
                        <Comment data={data} />
                        {data.reply?.map((replyData, replyIndex: number) => (
                          <S.ReplyWrapper key={replyIndex}>
                            <Comment data={replyData} />
                          </S.ReplyWrapper>
                        ))}
                      </S.CommentWrapper>
                    ))}
                  </S.WeekCommentWrapper>}
                  <S.WeekCommentInputWrapper>
                    <S.FileIconLabel>
                      <S.FileIconInput type="file" />
                      <S.FileIconButton>
                        <img src={FileIcon} alt="파일 업로드" />
                      </S.FileIconButton>
                    </S.FileIconLabel>
                    <S.WeekCommentInput placeholder="댓글을 입력하세요" />
                    <S.FinishBtn>완료</S.FinishBtn>
                  </S.WeekCommentInputWrapper>
                </S.WeekContentWrapper>
                : <></>}
            </S.WeekItemWrapper>
          ) : (
            <S.WeekItemWrapper key={index}>
              <S.TotalWeekItem onClick={() => handleWeekClick(weekNumber)}>
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
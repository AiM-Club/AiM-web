import type { ChallengeRecruitHotResponse, ChallengeReviewHotResponse } from "@/types/vsRecruit";
import * as S from "./CardList.style";
import Heart from "@/assets/GrayHeart.svg";
import { useNavigate } from "react-router-dom";
import { CardChallenge } from "../cardChallenge/CardChallenge";
import useMedia from "@/hooks/useMedia";
import type { TopUser } from "@/types/user";
import { buildPath } from "@/utils/buildPath";
import { PageEndPoints } from "@/constants/endpoints";
import { useFieldName } from "@/utils/useField";

interface CardListProps {
  title: string;
  color: "green" | "pink";
  data: ChallengeRecruitHotResponse[] | ChallengeReviewHotResponse[] | TopUser[];
  type: "recruit" | "user" | "review";
}

const CardList = ({ title, color = "green", data, type }: CardListProps) => {
  const isMobile = useMedia(560);
  const navigate = useNavigate();

  const navigateToDetail = (postId: number) => {
    if (type === "user") {
      navigate(PageEndPoints.CHALLENGE_RANKING);
    } else if (type === "recruit") {
      navigate(buildPath(PageEndPoints.CHALLENGE_RECRUIT_DETAIL, { id: postId }));
    } else if (type === "review") {
      navigate(buildPath(PageEndPoints.REVIEW_DETAIL, { id: postId }));
    }
  };

  return (
    <CardChallenge mobileTopic="top" isMobile={isMobile} variant="home" color={color} topicDirection="left" openBtn={false} topic={title}>
      <S.CardWrapper $color={color}>
        {data.length === 0 ?
          <S.EmptyState>
            {type === "user" ? <span>현재 TOP 10 유저가 없어요!</span> : <span>현재 HOT한 글이 없어요!</span>}
          </S.EmptyState> :
          isMobile ? <S.ListBox>
            {data?.slice(0, 5).map((item) => (
              <S.ListItem
                key={type === "user" ? (item as TopUser).userId : (item as ChallengeRecruitHotResponse | ChallengeReviewHotResponse).postId}
                onClick={() => type === "user" ? navigateToDetail(0) : navigateToDetail((item as ChallengeRecruitHotResponse | ChallengeReviewHotResponse).postId)}
              >
                <span>{type === "user" ? (item as TopUser).nickname : (item as ChallengeRecruitHotResponse | ChallengeReviewHotResponse).title}</span>
                <S.TagWrapper>
                  {type === "user" ? (
                    <span className="tag">Lv.{(item as TopUser).level}</span>
                  ) : (
                    (item as ChallengeRecruitHotResponse).fields?.map((field) => (
                      <span className="tag" key={field}>#{useFieldName(field) || field}</span>
                    ))
                  )}
                </S.TagWrapper>
                {type === "review"
                  &&
                  <>
                    <S.HeartImg src={Heart} />
                    <span className="tag">{`${(item as ChallengeReviewHotResponse).likeCount}`}</span>
                  </>}
              </S.ListItem>
            ))}
          </S.ListBox> : <S.ListBox>
            {data?.map((item) => (
              <S.ListItem
                key={type === "user" ? (item as TopUser).userId : (item as ChallengeRecruitHotResponse | ChallengeReviewHotResponse).postId}
                onClick={() => type === "user" ? navigateToDetail(0) : navigateToDetail((item as ChallengeRecruitHotResponse | ChallengeReviewHotResponse).postId)}
              >
                <span>{type === "user" ? (item as TopUser).nickname : (item as ChallengeRecruitHotResponse | ChallengeReviewHotResponse).title}</span>
                <S.TagWrapper>
                  {type === "user" ? (
                    <span className="tag">Lv.{(item as TopUser).level}</span>
                  ) : (
                    (item as ChallengeRecruitHotResponse).fields?.map((field) => (
                      <span className="tag" key={field}>#{useFieldName(field) || field}</span>
                    ))
                  )}
                </S.TagWrapper>
                {type === "review"
                  &&
                  <>
                    <S.HeartImg src={Heart} />
                    <span className="tag">{`${(item as ChallengeReviewHotResponse).likeCount}`}</span>
                  </>}
              </S.ListItem>
            ))}
          </S.ListBox>}
      </S.CardWrapper>
    </CardChallenge>
  );
};

export default CardList;

import type { ChallengeRecruitHotResponse, ChallengeReviewHotResponse } from "@/types/vsRecruit";
import * as S from "./CardList.style";
import Heart from "@/assets/GrayHeart.svg";
import { useNavigate } from "react-router-dom";
import { CardChallenge } from "../cardChallenge/CardChallenge";
import useMedia from "@/hooks/useMedia";

interface CardListProps {
  title: string;
  color: "green" | "pink";
  data: ChallengeRecruitHotResponse[] | ChallengeReviewHotResponse[];
}

const CardList = ({ title, color = "green", data }: CardListProps) => {
  const isMobile = useMedia(560);
  const navigate = useNavigate();

  const navigateToDetail = (postId: number) => {
    if (data as ChallengeRecruitHotResponse[]) {
      navigate(`/challenge/recruit/detail/${postId}`);
    } else if (data as ChallengeReviewHotResponse[]) {
      navigate(`/community/review/detail/${postId}`);
    } else {
      return;
    }
  };

  return (
    <CardChallenge mobileTopic="top" isMobile={isMobile} variant="home" color={color} topicDirection="left" openBtn={false} topic={title}>
      <S.CardWrapper $color={color}>
        {data.length === 0 ?
          <S.EmptyState>
            <span>현재 HOT한 글이 없어요!</span>
          </S.EmptyState> :
          isMobile ? <S.ListBox>
            {data?.slice(0, 5).map((item) => (
              <S.ListItem key={item.postId} onClick={() => navigateToDetail(item.postId)}>
                <span>{item.title}</span>
                <S.TagWrapper>
                  {(item as ChallengeRecruitHotResponse).fields.map((field) => (
                    <span className="tag" key={field}>#{field}</span>
                  ))}
                </S.TagWrapper>
                {(item as ChallengeReviewHotResponse).likeCount
                  &&
                  <>
                    <S.HeartImg src={Heart} />
                    <span className="tag">{`${(item as ChallengeReviewHotResponse).likeCount}`}</span>
                  </>}
              </S.ListItem>
            ))}
          </S.ListBox> : <S.ListBox>
            {data?.map((item) => (
              <S.ListItem key={item.postId} onClick={() => navigateToDetail(item.postId)}>
                <span>{item.title}</span>
                <S.TagWrapper>
                  {(item as ChallengeRecruitHotResponse).fields.map((field) => (
                    <span className="tag" key={field}>#{field}</span>
                  ))}
                </S.TagWrapper>
                {(item as ChallengeReviewHotResponse).likeCount
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

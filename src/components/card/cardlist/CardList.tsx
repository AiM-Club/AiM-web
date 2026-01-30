import type { ChallengeRecruitHotResponse, ChallengeReviewHotResponse } from "@/types/vsRecruit";
import * as S from "./CardList.style";
import Heart from "@/assets/GrayHeart.svg";
import { useNavigate } from "react-router-dom";

interface CardListProps {
  title: string;
  color: "green" | "pink";
  data: ChallengeRecruitHotResponse[] | ChallengeReviewHotResponse[];
}

const CardList = ({ title, color = "green", data }: CardListProps) => {
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
    <S.CardWrapper $color={color}>
      <S.Title>{title}</S.Title>
      <S.ListBox>
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
      </S.ListBox>
    </S.CardWrapper>
  );
};

export default CardList;

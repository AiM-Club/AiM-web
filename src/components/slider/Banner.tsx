import * as S from "./Banner.style";
import Heart from "@/assets/Heart.svg";
import HeartFill from "@/assets/ClickedHeart.svg";
import { useState, useEffect } from "react";
import { useChallengeDetailStore } from "@/stores/challengeDetailStore";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";
import { useChallengeLike } from "@/api/challengeDetail";

interface BannerProps {
  isMine?: boolean;
}

const Banner = ({ isMine }: BannerProps) => {
  const { challengeInfo, thumbnail, myInfo, challengeId, updateChallengeLike } = useChallengeDetailStore();
  const { mutate: challengeLike } = useChallengeLike(String(challengeId ?? "0"));
  const [isHeartClicked, setIsHeartClicked] = useState<boolean>(challengeInfo?.isLiked ?? false);
  const logined = true;
  const image = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWE5bjl4cWtvcXA5cHF0NTA0MjlzNWZmZmRmZml0NXZ3YXZ2dGwyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZqlvCTNHpqrio/giphy.gif"

  useEffect(() => {
    if (challengeInfo?.isLiked !== undefined) {
      setIsHeartClicked(challengeInfo.isLiked);
    }
  }, [challengeInfo?.isLiked]);

  const handleChallengeLike = () => {
    challengeLike(undefined, {
      onSuccess: (response) => {
        console.log(response);
        const isLiked = response.data.likes;
        setIsHeartClicked(isLiked);
        updateChallengeLike(isLiked);
      }
    });
  }

  return (
    <S.BannerWrapper>
      <S.BannerImage src={useUserPhotoUrl(thumbnail) || image} />
      <S.BannerOverlay />
      <S.BannerContentWrapper>
        <S.BannerContent>{challengeInfo?.name}</S.BannerContent>
        {!isMine &&
          <S.WriterWrapper>
            <p>{myInfo?.nickname}</p>
            {logined && <S.HeartWrapper>
              <img src={isHeartClicked ? HeartFill : Heart} onClick={handleChallengeLike} />
              <p>{challengeInfo?.likedCount}</p>
            </S.HeartWrapper>}
          </S.WriterWrapper>
        }
      </S.BannerContentWrapper>
    </S.BannerWrapper>
  )
}

export default Banner;
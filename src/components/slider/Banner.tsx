import * as S from "./Banner.style";
import Heart from "@/assets/Heart.svg";
import HeartFill from "@/assets/ClickedHeart.svg";
import { useState } from "react";
import { useChallengeDetailStore } from "@/stores/challengeDetailStore";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";

interface BannerProps {
  writer?: string;
}

const Banner = ({ writer }: BannerProps) => {
  const { challengeInfo, thumbnail } = useChallengeDetailStore();
  const [isHeartClicked, setIsHeartClicked] = useState<boolean>(false);
  const logined = true;
  const image = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWE5bjl4cWtvcXA5cHF0NTA0MjlzNWZmZmRmZml0NXZ3YXZ2dGwyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZqlvCTNHpqrio/giphy.gif"

  return (
    <S.BannerWrapper>
      <S.BannerImage src={useUserPhotoUrl(thumbnail) || image} />
      <S.BannerOverlay />
      <S.BannerContentWrapper>
        <S.BannerContent>{challengeInfo?.name}</S.BannerContent>
        {writer &&
          <S.WriterWrapper>
            <p>{writer}</p>
            {logined && <S.HeartWrapper>
              <img src={isHeartClicked ? HeartFill : Heart} onClick={() => setIsHeartClicked(!isHeartClicked)} />
              <p>10</p>
            </S.HeartWrapper>}
          </S.WriterWrapper>
        }
      </S.BannerContentWrapper>
    </S.BannerWrapper>
  )
}

export default Banner;
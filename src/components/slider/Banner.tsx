import * as S from "./Banner.style";
import Heart from "@/assets/Heart.svg";
import HeartFill from "@/assets/ClickedHeart.svg";
import { useState } from "react";

interface BannerProps {
  image: string;
  topic: string;
  writer?: string;
}

const Banner = ({ image, topic, writer }: BannerProps) => {
  const [isHeartClicked, setIsHeartClicked] = useState<boolean>(false);
  const logined = true;

  return (
    <S.BannerWrapper>
      <S.BannerImage src={image} />
      <S.BannerOverlay />
      <S.BannerContentWrapper>
        <S.BannerContent>{topic}</S.BannerContent>
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
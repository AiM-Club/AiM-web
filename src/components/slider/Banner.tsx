import * as S from "./Banner.style";

const Banner = ({ image, topic }: { image: string, topic: string }) => {
  return (
    <S.BannerWrapper>
      <S.BannerImage src={image} />
      <S.BannerOverlay />
      <S.BannerContent>{topic}</S.BannerContent>
    </S.BannerWrapper>
  )
}

export default Banner;
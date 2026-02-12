import * as S from "./MainSlider.style.ts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrowImg from "@/assets/NextArrow.png";
import PrevArrowImg from "@/assets/PrevArrow.png";
import Banner1 from "@/assets/Banner1.png";
import Banner2 from "@/assets/Banner2.png";



const NextArrow = ({ onClick }: any) => {
  return (
    <S.ArrowWrapper $position="right" onClick={onClick}>
      <img src={NextArrowImg} />
    </S.ArrowWrapper>
  );
};

const PrevArrow = ({ onClick }: any) => {
  return (
    <S.ArrowWrapper $position="left" onClick={onClick}>
      <img src={PrevArrowImg} />
    </S.ArrowWrapper>
  );
};

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeen: 5000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // customPaging: (i: number) => <S.Dot />,
    appendDots: (dots: React.ReactNode) => <S.DotContainer>{dots}</S.DotContainer>
  };

  return (
    <S.SliderWrapper>
      <Slider {...settings}>
        <S.Banner><S.BannerImg src={Banner1} /></S.Banner>
        <S.Banner><S.BannerImg src={Banner2} /></S.Banner>
      </Slider>
    </S.SliderWrapper>
  )
}

export default MainSlider;
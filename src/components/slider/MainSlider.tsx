import * as S from "./MainSlider.style.ts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NextArrowImg from "@/assets/NextArrow.png";
import PrevArrowImg from "@/assets/PrevArrow.png";



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
    autoplay:true,
    autoplaySpeen: 5000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i: number) => <S.Dot />,
    appendDots: (dots: React.ReactNode) => <S.DotContainer>{dots}</S.DotContainer>
  };

    return (
        <S.SliderWrapper>
            <Slider {...settings}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </Slider>
        </S.SliderWrapper>
    )
}

export default MainSlider;
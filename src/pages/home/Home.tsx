import MainSlider from "@/components/slider/MainSlider";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/home/Home.style.ts";

const Home = () => {
    
    return(
        <DefaultLayout>
            <S.BannerSection>
                <MainSlider />
            </S.BannerSection>
        </DefaultLayout>
    )
}

export default Home;
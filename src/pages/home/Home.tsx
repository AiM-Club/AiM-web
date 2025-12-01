import CardList from "@/components/card/CardList";
import MainSlider from "@/components/slider/MainSlider";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/home/Home.style.ts";

const Home = () => {
    
    return(
        <DefaultLayout>
            <MainSlider />
            <S.HomeWrapper>
                <S.CardWrapper>
                    <CardList title="HOT 모집글" color="green"/>
                    <CardList title="HOT 후기글" color="green"/>
                    <CardList title="TOP 10" color="pink"/>
                </S.CardWrapper>
            </S.HomeWrapper>
        </DefaultLayout>
    )
}

export default Home;
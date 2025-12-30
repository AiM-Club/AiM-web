import CardList from "@/components/card/cardlist/CardList";
    import CardBoard from "@/components/board/CardBoard";
import MainSlider from "@/components/slider/MainSlider";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import Select from "@/components/Select/Select";
import * as S from "@/styles/home/Home.style.ts";
import { cardVSData } from "./Constants";

const Home = () => {
    
    return(
        <DefaultLayout variant="home">
            <MainSlider />
            <S.HomeWrapper>
                <S.CardWrapper>
                    <CardList title="HOT 모집글" color="green"/>
                    <CardList title="HOT 후기글" color="green"/>
                    <CardList title="TOP 10" color="pink"/>
                </S.CardWrapper>
                <Select placeholder="정렬" />
                <S.BattleWrapper>
                <CardBoard data={cardVSData}/>
                </S.BattleWrapper>
            </S.HomeWrapper>
        </DefaultLayout>
    )
}

export default Home;
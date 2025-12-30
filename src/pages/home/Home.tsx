import CardList from "@/components/card/cardlist/CardList";
import CardVS from "@/components/card/cardvs/CardVS";
import MainSlider from "@/components/slider/MainSlider";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import Select from "@/components/Select/Select";
import * as S from "@/styles/home/Home.style.ts";
import { cardVSData } from "./Constants";
import { useExistId } from "@/api/auth";

const Home = () => {
    const { data: promoListData} =
    useExistId("test");
    console.log(promoListData);

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
                    {cardVSData.map((item) => (
                        <CardVS key={item.id} data={item} />
                    ))}
                </S.BattleWrapper>
            </S.HomeWrapper>
        </DefaultLayout>
    )
}

export default Home;
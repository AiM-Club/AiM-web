import CardList from "@/components/card/cardlist/CardList";
    import CardBoard from "@/components/board/CardBoard";
import MainSlider from "@/components/slider/MainSlider";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/home/Home.style.ts";
import { cardVSData, fieldData } from "./Constants";
import { PageTopic } from "@/components/text/PageTopic";
import Button from "@/components/button/Button";
import SearchField from "@/components/field/SearchField";

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
                <S.FieldWrapper>
                    <SearchField />
                    <PageTopic text="VS 분야" size="l" />
                    <S.FieldList>
                        {fieldData.map((item) => (
                            <S.FieldItem key={item.id}>
                                <img src={item.img} />
                                <span>{item.name}</span>
                            </S.FieldItem>
                        ))}
                    </S.FieldList>
                </S.FieldWrapper>
                <S.BattleWrapper>
                    <S.BattleTitle>
                        <PageTopic text="VS 대결" size="l" />
                        <Button variant="secondary">더보기</Button>
                    </S.BattleTitle>
                    <CardBoard data={cardVSData} isPagination={false} />
                </S.BattleWrapper>
                <S.BattleWrapper>
                    <S.BattleTitle>
                        <PageTopic text="VS 모집글" size="l" />
                        <Button variant="secondary">더보기</Button>
                    </S.BattleTitle>
                    <CardBoard data={cardVSData} isPagination={false} />
                </S.BattleWrapper>
            </S.HomeWrapper>
        </DefaultLayout>
    )
}

export default Home;
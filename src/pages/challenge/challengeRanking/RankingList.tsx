import * as S from "@/styles/challenge/challengeRanking/RankingList.style";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import { PageTopic } from "@/components/text/PageTopic";
import RankInfoContent from "@/components/content/RankInfoContent";
import { rankingHeader, rankingListData } from "../Constants";

const RankingList = () => {
    return (
        <DefaultLayout>
            <S.RankingListWrapper>
                <PageTopic text="TOP 20" size="l" />
                <S.RankContentWrapper>
                    <RankInfoContent type="header" content={rankingHeader}/>
                    <S.RankContentContainer>
                        {rankingListData.map((item) => (
                            <RankInfoContent key={item.id} content={item}/>
                        ))}
                    </S.RankContentContainer>
                </S.RankContentWrapper>
            </S.RankingListWrapper>
        </DefaultLayout>
    )
}

export default RankingList;
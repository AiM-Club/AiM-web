import { CardChallenge } from "@/components/card/cardChallenge/CardChallenge";
import RankingContent from "@/components/content/RankingContent";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout"
import * as S from "@/styles/challenge/challengeRanking/Ranking.style";

const Ranking = () => {
    return (
        <DefaultLayout>
            <S.RankingWrapper>
                <PageTopic text="랭킹" size="l" />
                <S.RankingContentWrapper>
                    <S.SubTitle>TOP 3</S.SubTitle>
                    <S.RankingList>
                        <S.TopRankingWrapper>
                            <CardChallenge color="pink" topic="1. 유저_닉네임" openBtn={false} topicDirection="left">
                            <RankingContent progress={90} tryCount={10} successCount={9} failCount={1} contentType="main"/>
                            </CardChallenge>
                        </S.TopRankingWrapper>
                        <S.NextRankingWrapper>
                            <CardChallenge color="pink" topic="2. 유저_닉네임" openBtn={false} topicDirection="left">
                                <RankingContent progress={90} tryCount={10} successCount={9} failCount={1} contentType="sub"/>
                            </CardChallenge>
                            <CardChallenge color="green" topic="3. 유저_닉네임" openBtn={false} topicDirection="left">
                                <RankingContent progress={90} tryCount={10} successCount={9} failCount={1} contentType="sub"/>
                            </CardChallenge>
                        </S.NextRankingWrapper>
                    </S.RankingList>
                </S.RankingContentWrapper>
            </S.RankingWrapper>
        </DefaultLayout>
    )
}

export default Ranking;
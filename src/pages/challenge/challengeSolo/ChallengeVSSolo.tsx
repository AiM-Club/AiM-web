import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeSolo/ChallengeVSSolo.style";
import CardBoard from "@/components/board/CardBoard";
import { searchVsData } from "@/pages/search/Constants";
import { PageTopic } from "@/components/text/PageTopic";

const ChallengeVSSolo = () => {
    return (
        <DefaultLayout>
            <S.ChallengeVSMainWrapper>
                <PageTopic text="SOLO 챌린지" size="l" />
                <CardBoard data={searchVsData} writePath="/challenge/challengeVS/write"/>
            </S.ChallengeVSMainWrapper>
        </DefaultLayout>
    )
}

export default ChallengeVSSolo;
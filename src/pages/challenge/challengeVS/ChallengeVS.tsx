import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeVS/ChallengeVS.style";
import CardBoard from "@/components/board/CardBoard";
import { searchVsData } from "@/pages/search/Constants";
import Button from "@/components/button/Button";
import { PageTopic } from "@/components/text/PageTopic";

const ChallengeVS = () => {
    return (
        <DefaultLayout>
            <S.ChallengeVSWrapper>
                <PageTopic text="VS 대결" size="l" />
                <CardBoard data={searchVsData}/>
            </S.ChallengeVSWrapper>
            <Button variant="fixed">작성</Button>
        </DefaultLayout>
    )
}

export default ChallengeVS;
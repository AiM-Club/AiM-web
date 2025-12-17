import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeVS/ChallengeVSMain.style";
import CardBoard from "@/components/board/CardBoard";
import { searchVsData } from "@/pages/search/Constants";
import titleUnion from "@/assets/TitleUnion.svg";

const ChallengeVSMain = () => {
    return (
        <DefaultLayout>
            <S.ChallengeVSMainWrapper>
                <S.SearchTopic>
                    <img src={titleUnion} />
                    IT분야 _ VS 모집글
                </S.SearchTopic>
                <CardBoard data={searchVsData} writePath="/challenge/challengeVS/write"/>
            </S.ChallengeVSMainWrapper>
        </DefaultLayout>
    )
}

export default ChallengeVSMain;
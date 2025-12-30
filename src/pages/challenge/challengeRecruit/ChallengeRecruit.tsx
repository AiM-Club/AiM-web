import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeRecruit/ChallengeRecruit.style";
import CardBoard from "@/components/board/CardBoard";
import { searchVsData } from "@/pages/search/Constants";
import Button from "@/components/button/Button";
import { PageTopic } from "@/components/text/PageTopic";
import SearchField from "@/components/field/SearchField";

const ChallengeRecruit = () => {
    return (
        <DefaultLayout>
            <S.ChallengeRecruitWrapper>
                <PageTopic text="VS 모집글" size="l" />
                <S.ContentWrapper>
                    <SearchField />
                    <CardBoard data={searchVsData}/>
                </S.ContentWrapper>
            </S.ChallengeRecruitWrapper>
            <Button variant="fixed">작성</Button>
        </DefaultLayout>
    )
}

export default ChallengeRecruit;
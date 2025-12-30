import CardBoard from "@/components/board/CardBoard";
import SearchField from "@/components/field/SearchField";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import { searchVsData } from "@/pages/search/Constants";
import * as S from "@/styles/community/review/Review.style";
import Button from "@/components/button/Button";

const Review = () => {
    return (
        <DefaultLayout>
            <S.ReviewWrapper>
                <PageTopic text="후기" size="l" />
                <S.ContentWrapper>
                    <SearchField 
                        categories={[
                            { value: "all", label: "ALL" },
                            { value: "solo", label: "SOLO" },
                            { value: "vsBattle", label: "VS 대결" }
                        ]}
                    />
                    <CardBoard data={searchVsData}/>
                </S.ContentWrapper>
            </S.ReviewWrapper>
            <Button variant="fixed">작성</Button>
        </DefaultLayout>
    )
}

export default Review;
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/community/qna/QnA.style";
import { searchVsData } from "@/pages/search/Constants";
import CardBoard from "@/components/board/CardBoard";
import SearchField from "@/components/field/SearchField";

const QnA = () => {
    return (
        <DefaultLayout>
            <S.QnAWrapper>
                <PageTopic text="Q&A" size="l" />
                <S.ContentWrapper>
                    <SearchField 
                        categories={[
                            { value: "all", label: "ALL" },
                            { value: "solo", label: "SOLO" },
                            { value: "vsBattle", label: "VS 대결" }
                        ]}
                    />
                    <CardBoard data={searchVsData} writePath="/community/qna/write"/>
                </S.ContentWrapper>
            </S.QnAWrapper>
        </DefaultLayout>
    )
}

export default QnA;
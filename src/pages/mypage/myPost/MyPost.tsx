import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import { searchVsData } from "@/pages/search/Constants";
import CardBoard from "@/components/board/CardBoard";
import SearchField from "@/components/field/SearchField";
import * as S from "@/styles/mypage/myPost/myPost.style";

const QnA = () => {
    return (
        <DefaultLayout>
            <S.myPostWrapper>
                <PageTopic text="내 게시글" size="l" />
                <S.ContentWrapper>
                    <SearchField 
                        categories={[
                            { value: "all", label: "ALL" },
                            { value: "vsRecruitment", label: "VS 모집글" },
                            { value: "community", label: "커뮤니티" }
                        ]}
                    />
                    <CardBoard data={searchVsData}/>
                </S.ContentWrapper>
            </S.myPostWrapper>
        </DefaultLayout>
    )
}

export default QnA;
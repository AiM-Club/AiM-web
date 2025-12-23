import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/community/Community.style";
import { PageTopic } from "@/components/text/PageTopic";
import SearchField from "@/components/field/SearchField";
import {searchVsData} from "@/pages/search/Constants";
import CardBoard from "@/components/board/CardBoard";

const Community = () => {
    
    return(
        <DefaultLayout>
            <S.CommunityWrapper>
                <S.ContentWrapper>
                    <PageTopic text="HOT 게시물" size="l" />
                    <SearchField />
                </S.ContentWrapper>
                <S.ContentWrapper>
                    <PageTopic text="SOLO" size="l" />
                    <CardBoard data={searchVsData} isPagination={false}/>
                </S.ContentWrapper>
                <S.ContentWrapper>
                    <PageTopic text="VS 대결" size="l" />
                    <CardBoard data={searchVsData} isPagination={false}/>
                </S.ContentWrapper>
            </S.CommunityWrapper>
        </DefaultLayout>
    )
}

export default Community;